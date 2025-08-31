// hooks/useForm.ts
import { useState, useCallback } from 'react';
import { 
  required, maxLength, minLength, noSpaces, noMultipleSpaces, 
  onlyAllowedChars, validEmail, validURL, validName, validCompany, validate,
  validateSpaces
} from '../utils/validators';
import { validatePhoneNumber, filterPhone } from '../utils/phoneUtils';

export const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
    // Esquema de validación actualizado para incluir validación de espacios
    const validationSchema = {
      firstName: (value: string) => validate(value, [
        required,
        () => noSpaces(validateSpaces(value)),
        noMultipleSpaces,
        () => onlyAllowedChars(value, "'-"),
        maxLength(20),
        validName
      ]),
      
      lastName: (value: string) => validate(value, [
        required,
        () => noSpaces(validateSpaces(value)),
        noMultipleSpaces,
        () => onlyAllowedChars(value, "'-"),
        maxLength(20),
        validName
      ]),
      
      email: (value: string) => validate(value, [
        required,
        () => noSpaces(validateSpaces(value)),
        validEmail,
        maxLength(50)
      ]),
      
      phone: (value: string) => validatePhoneNumber(value),
      
      company: (value: string) => validate(value, [
        required,
        () => noSpaces(validateSpaces(value)),
        noMultipleSpaces,
        () => onlyAllowedChars(value, "&.,-"),
        maxLength(50),
        validCompany
      ]),
      
      website: (value: string) => validate(value, [
        () => noSpaces(validateSpaces(value)),
        validURL
      ]),
      
      message: (value: string) => validate(value, [
        () => noSpaces(validateSpaces(value)),
        noMultipleSpaces,
        () => onlyAllowedChars(value, "@.,!?¿¡-"),
        maxLength(200)
      ]),
      
      service: (value: string) => required(value),
      budget: (value: string) => required(value),
      timeline: (value: string) => required(value),
      terms: (value: boolean) => !value ? 'You must accept the terms' : ''
    };

  // Validar campo individual
  const validateField = useCallback((name: string, value: any): string => {
    if (!validationSchema[name]) return '';
    return validationSchema[name](value);
  }, []);

  // Validar formulario completo
  const validateForm = useCallback((): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(validationSchema).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return newErrors;
  }, [formData, validateField]);

  // Actualizar campo
  const setFieldValue = useCallback((name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validar inmediatamente después de actualizar
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  // Marcar campo como "touched"
  const setFieldTouched = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  // Manejar cambio de campo - ahora acepta name y value directamente
  const handleChange = useCallback((name: string, value: any) => {
    setFieldValue(name, value);
  }, [setFieldValue]);

  return {
    formData,
    errors,
    touched,
    validateField,
    validateForm,
    setFieldValue,
    setFieldTouched,
    handleChange,
    setErrors
  };
};