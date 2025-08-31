// utils/validators.ts

// Validaciones básicas
export const required = (value: string): string => 
    !value.trim() ? 'This field is required' : '';
  
  export const maxLength = (max: number) => (value: string): string =>
    value.length > max ? `Maximum ${max} characters allowed` : '';
  
  export const minLength = (min: number) => (value: string): string =>
    value.length < min ? `Minimum ${min} characters required` : '';
  
  // Validación de espacios (trim)
  export const noSpaces = (value: string): string =>
    value !== value.trim() ? 'Spaces at the beginning or end are not allowed' : '';
  
  export const noMultipleSpaces = (value: string): string =>
    /\s{2,}/.test(value) ? 'Multiple consecutive spaces are not allowed' : '';
  
  // Validación de caracteres permitidos (letras, números y Ñ)
  export const onlyAllowedChars = (value: string, extraChars: string = ''): string =>
    new RegExp(`[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s${extraChars}]`).test(value) ? 'Invalid characters detected' : '';
  
  // Validación de email
  export const validEmail = (value: string): string => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
  };
  
  // Validación de URL
  export const validURL = (value: string): string => {
    if (!value) return '';
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    return !urlRegex.test(value) ? 'Please enter a valid URL' : '';
  };
  
  // Validación de nombre (solo letras y espacios, comienza con mayúscula)
  export const validName = (value: string): string => {
    const nameRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s'-]*$/;
    return !nameRegex.test(value) ? 'Must start with a capital letter and contain only letters' : '';
  };
  
  // Validación de empresa (letras, números, espacios y algunos caracteres especiales)
  export const validCompany = (value: string): string => {
    const companyRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ0-9\s&.,-]*$/;
    return !companyRegex.test(value) ? 'Invalid company name format' : '';
  };
  
  // Función compositora de validaciones
  export const validate = (value: string, validators: Array<(v: string) => string>): string => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return '';
  };
  
  // Filtros de entrada
  export const filterInput = (value: string, regex: RegExp): string => {
    return value.replace(regex, '');
  };

  // Función para prevenir espacios no deseados en tiempo real
export const preventSpaces = (value: string): string => {
  // Eliminar espacios al inicio
  if (value.startsWith(' ')) {
    return value.trimStart();
  }
  
  // Reemplazar múltiples espacios consecutivos por uno solo
  value = value.replace(/\s{2,}/g, ' ');
  
  return value;
};

// Función para validar y corregir espacios en el blur
export const validateSpaces = (value: string): string => {
  return value.trim().replace(/\s{2,}/g, ' ');
};

// Filtros específicos actualizados para incluir prevención de espacios
export const filterName = (value: string): string => {
  let filtered = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]/g, '');
  return preventSpaces(filtered);
};

export const filterCompany = (value: string): string => {
  let filtered = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s&.,-]/g, '');
  return preventSpaces(filtered);
};

export const filterEmail = (value: string): string => {
  let filtered = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
  return preventSpaces(filtered);
};

export const filterMessage = (value: string): string => {
  let filtered = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s@.,!?¿¡-]/g, '');
  return preventSpaces(filtered);
};

export const filterWebsite = (value: string): string => {
  let filtered = value.replace(/[^a-zA-Z0-9:/._%+-]/g, '');
  return preventSpaces(filtered);
};