// components/ValidatedInput.tsx
import React from 'react';
import { 
  filterName, filterCompany, filterEmail, filterMessage, filterWebsite,
  validateSpaces
} from '../utils/validators';
import { filterPhone } from '../utils/phoneUtils';

interface ValidatedInputProps {
  type: string;
  name: string;
  value: any;
  onChange: (name: string, value: any) => void;
  onBlur?: (name: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  options?: string[];
  rows?: number;
  className?: string;
  maxLength?: number;
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  icon,
  options,
  rows,
  className = '',
  maxLength
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let newValue = e.target.value;
    
    // Aplicar filtros según el tipo de campo
    switch (name) {
      case 'firstName':
      case 'lastName':
        newValue = filterName(newValue);
        break;
      case 'company':
        newValue = filterCompany(newValue);
        break;
      case 'email':
        newValue = filterEmail(newValue);
        break;
      case 'website':
        newValue = filterWebsite(newValue);
        break;
      case 'message':
        newValue = filterMessage(newValue);
        break;
      case 'phone':
        newValue = filterPhone(newValue);
        break;
    }
    
    // Aplicar límite de caracteres
    if (maxLength && newValue.length > maxLength) {
      newValue = newValue.slice(0, maxLength);
    }
    
    onChange(name, newValue);
  };
  
  const handleBlur = () => {
    // Aplicar validación de espacios al perder el foco
    if (name !== 'phone' && name !== 'email' && name !== 'website') {
      const correctedValue = validateSpaces(value);
      if (correctedValue !== value) {
        onChange(name, correctedValue);
      }
    }
    
    if (onBlur) onBlur(name);
  };
  
  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={rows || 4}
            className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${className}`}
            placeholder={placeholder}
          />
        );
      
      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white ${className}`}
          >
            <option value="">{placeholder}</option>
            {options?.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${className}`}
            placeholder={placeholder}
          />
        );
    }
  };
  
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-3 h-5 w-5 text-yellow-500">
          {icon}
        </div>
      )}
      {renderInput()}
    </div>
  );
};

export default ValidatedInput;