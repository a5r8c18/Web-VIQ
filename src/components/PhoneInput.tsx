// components/PhoneInput.tsx
import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { countryPhoneInfo, defaultCountry, detectCountry } from '../utils/phoneUtils';
import { validateSpaces } from '../utils/validators';

interface PhoneInputProps {
  value: string;
  onChange: (value: string, countryCode: string, countryName: string) => void;
  onBlur?: () => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, onBlur }) => {
  const [inputValue, setInputValue] = useState('');
  const [countryCode, setCountryCode] = useState(defaultCountry);
  
  useEffect(() => {
    if (value) {
      const detectedCountry = detectCountry(value);
      setCountryCode(detectedCountry);
      
      // Extraer solo los números (sin el código del país)
      const numbers = value.replace(/\D/g, '');
      const country = countryPhoneInfo[detectedCountry];
      const numbersWithoutCode = numbers.replace(country.dialCode.slice(1), '');
      
      // Formatear el número
      const formatted = country.format(numbersWithoutCode);
      setInputValue(formatted);
    }
  }, [value]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Permitir solo números y el signo +
    const cleanedValue = newValue.replace(/[^\d+]/g, '');
    
    // Detectar país si empieza con +
    let newCountryCode = countryCode;
    if (cleanedValue.startsWith('+')) {
      const detectedCountry = detectCountry(cleanedValue);
      newCountryCode = detectedCountry;
      setCountryCode(detectedCountry);
    }
    
    // Extraer solo los números (sin el código del país)
    const numbers = cleanedValue.replace(/\D/g, '');
    const country = countryPhoneInfo[newCountryCode];
    const numbersWithoutCode = numbers.replace(country.dialCode.slice(1), '');
    
    // Formatear el número para mostrar
    const formatted = country.format(numbersWithoutCode);
    setInputValue(formatted);
    
    // Enviar valor completo al padre
    onChange(`${country.dialCode}${numbersWithoutCode}`, newCountryCode, country.name);
  };
  
  const handleBlur = () => {
    // Aplicar validación de espacios al perder el foco
    const correctedValue = validateSpaces(inputValue);
    if (correctedValue !== inputValue) {
      setInputValue(correctedValue);
    }
    
    if (onBlur) onBlur();
  };
  
  const country = countryPhoneInfo[countryCode];
  
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <div className="flex items-center space-x-1 bg-white dark:bg-black px-2 h-full rounded-l-lg border-r border-gray-200 dark:border-yellow-600/50">
          <ReactCountryFlag 
            countryCode={countryCode}
            svg
            style={{
              width: '1em',
              height: '1em',
              borderRadius: '2px',
              marginRight: '4px'
            }}
            title={country.name}
          />
          <span className="text-xs text-yellow-400">
            {country.dialCode}
          </span>
        </div>
      </div>
      <input
        type="tel"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-full pl-24 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-yellow-600/50 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400"
        placeholder={country.placeholder}
      />
    </div>
  );
};

export default PhoneInput;