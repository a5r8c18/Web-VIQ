// utils/phoneUtils.ts

// Información de países (los 10 más populares)
export interface CountryInfo {
    code: string;
    dialCode: string;
    name: string;
    pattern: RegExp;
    placeholder: string;
    format: (value: string) => string;
  }
  
  export const countryPhoneInfo: Record<string, CountryInfo> = {
    US: {
      code: 'US',
      dialCode: '+1',
      name: 'United States',
      pattern: /^\+1\d{10}$/,
      placeholder: '(123) 456-7890',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
      }
    },
    CA: {
      code: 'CA',
      dialCode: '+1',
      name: 'Canada',
      pattern: /^\+1\d{10}$/,
      placeholder: '(123) 456-7890',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
      }
    },
    GB: {
      code: 'GB',
      dialCode: '+44',
      name: 'United Kingdom',
      pattern: /^\+44\d{10}$/,
      placeholder: '1234 567890',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 4) return numbers;
        if (numbers.length <= 7) return `${numbers.slice(0, 4)} ${numbers.slice(4)}`;
        return `${numbers.slice(0, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7, 10)}`;
      }
    },
    AU: {
      code: 'AU',
      dialCode: '+61',
      name: 'Australia',
      pattern: /^\+61\d{9}$/,
      placeholder: '412 345 678',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
      }
    },
    DE: {
      code: 'DE',
      dialCode: '+49',
      name: 'Germany',
      pattern: /^\+49\d{11}$/,
      placeholder: '171 1234567',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 11)}`;
      }
    },
    FR: {
      code: 'FR',
      dialCode: '+33',
      name: 'France',
      pattern: /^\+33\d{9}$/,
      placeholder: '6 12 34 56 78',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 1) return numbers;
        if (numbers.length <= 3) return `${numbers.slice(0, 1)} ${numbers.slice(1)}`;
        if (numbers.length <= 5) return `${numbers.slice(0, 1)} ${numbers.slice(1, 3)} ${numbers.slice(3)}`;
        if (numbers.length <= 7) return `${numbers.slice(0, 1)} ${numbers.slice(1, 3)} ${numbers.slice(3, 5)} ${numbers.slice(5)}`;
        return `${numbers.slice(0, 1)} ${numbers.slice(1, 3)} ${numbers.slice(3, 5)} ${numbers.slice(5, 7)} ${numbers.slice(7, 9)}`;
      }
    },
    BR: {
      code: 'BR',
      dialCode: '+55',
      name: 'Brazil',
      pattern: /^\+55\d{11}$/,
      placeholder: '11 91234-5678',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 2) return numbers;
        if (numbers.length <= 7) return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
        return `${numbers.slice(0, 2)} ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
    },
    IN: {
      code: 'IN',
      dialCode: '+91',
      name: 'India',
      pattern: /^\+91\d{10}$/,
      placeholder: '98765 43210',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 5) return numbers;
        return `${numbers.slice(0, 5)} ${numbers.slice(5, 10)}`;
      }
    },
    CN: {
      code: 'CN',
      dialCode: '+86',
      name: 'China',
      pattern: /^\+86\d{11}$/,
      placeholder: '131 2345 6789',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 8) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 8)} ${numbers.slice(8, 12)}`;
      }
    },
    JP: {
      code: 'JP',
      dialCode: '+81',
      name: 'Japan',
      pattern: /^\+81\d{9,10}$/,
      placeholder: '90 1234 5678',
      format: (value) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 2) return numbers;
        if (numbers.length <= 6) return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
        return `${numbers.slice(0, 2)} ${numbers.slice(2, 6)} ${numbers.slice(6, 10)}`;
      }
    }
  };
  
  // País por defecto
  export const defaultCountry = 'US';
  
  // Detectar país desde el número
  export const detectCountry = (phoneNumber: string): string => {
    if (!phoneNumber.startsWith('+')) return defaultCountry;
    
    // Probar con códigos de 1 a 3 dígitos
    for (let i = 3; i >= 1; i--) {
      const possibleCode = phoneNumber.substring(1, 1 + i);
      const country = Object.values(countryPhoneInfo).find(
        info => info.dialCode === `+${possibleCode}`
      );
      if (country) return country.code;
    }
    
    return defaultCountry;
  };
  
  // Validar número de teléfono
  export const validatePhoneNumber = (value: string): string => {
    if (!value) return 'Phone number is required';
    
    // Limpiar el número
    const cleanValue = value.replace(/\D/g, '');
    
    // Validar longitud
    if (cleanValue.length < 10) return 'Phone number is too short';
    if (cleanValue.length > 15) return 'Phone number is too long';
    
    // Detectar país y validar formato
    const countryCode = detectCountry(value);
    const country = countryPhoneInfo[countryCode];
    
    if (country && !country.pattern.test(value)) {
      return `Please enter a valid ${country.name} phone number`;
    }
    
    return '';
  };
  
  // Filtrar entrada de teléfono
  export const filterPhone = (value: string): string => {
    return value.replace(/[^\d+]/g, '');
  };