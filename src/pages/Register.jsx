import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  User, Mail, Phone, Building, Globe, MessageSquare, 
  CheckCircle, ArrowRight, Shield, Clock, Users 
} from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'

// Mapeo de códigos de país a códigos ISO y longitud de teléfono
const countryPhoneInfo = {
  '52': { iso: 'MX', length: 10 },  // México: 10 dígitos (2+10=12 con código)
  '53': { iso: 'CU', length: 8 },   // Cuba: 8 dígitos (2+8=10 con código)
  '34': { iso: 'ES', length: 9 },   // España: 9 dígitos (2+9=11 con código)
  '54': { iso: 'AR', length: 10 },  // Argentina: 10 dígitos (2+10=12 con código)
  '51': { iso: 'PE', length: 9 },   // Perú: 9 dígitos (2+9=11 con código)
  '56': { iso: 'CL', length: 9 },   // Chile: 9 dígitos (2+9=11 con código)
  '57': { iso: 'CO', length: 10 },  // Colombia: 10 dígitos (2+10=12 con código)
  '58': { iso: 'VE', length: 10 },  // Venezuela: 10 dígitos (2+10=12 con código)
  '503': { iso: 'SV', length: 8 },  // El Salvador: 8 dígitos (3+8=11 con código)
  '504': { iso: 'HN', length: 8 },  // Honduras: 8 dígitos (3+8=11 con código)
  '505': { iso: 'NI', length: 8 },  // Nicaragua: 8 dígitos (3+8=11 con código)
  '506': { iso: 'CR', length: 8 },  // Costa Rica: 8 dígitos (3+8=11 con código)
  '507': { iso: 'PA', length: 8 },  // Panamá: 8 dígitos (3+8=11 con código)
  '595': { iso: 'PY', length: 9 },  // Paraguay: 9 dígitos (3+9=12 con código)
  '598': { iso: 'UY', length: 8 },  // Uruguay: 8 dígitos (3+8=11 con código)
  '591': { iso: 'BO', length: 8 },  // Bolivia: 8 dígitos (3+8=11 con código)
  '593': { iso: 'EC', length: 9 }   // Ecuador: 9 dígitos (3+9=12 con código)
};

// Mapeo de códigos de país a códigos ISO (para compatibilidad)
const countryFlagMap = Object.entries(countryPhoneInfo).reduce((acc, [code, {iso}]) => {
  acc[code] = iso;
  return acc;
}, {});

const getCountryName = (isoCode) => {
  const countryNames = {
    'US': 'United States', 'CA': 'Canada', 'RU': 'Russia', 'KZ': 'Kazakhstan',
    'EG': 'Egypt', 'ZA': 'South Africa', 'GR': 'Greece', 'NL': 'Netherlands',
    'BE': 'Belgium', 'FR': 'France', 'ES': 'Spain', 'IT': 'Italy',
    'RO': 'Romania', 'CH': 'Switzerland', 'AT': 'Austria', 'GB': 'United Kingdom',
    'DK': 'Denmark', 'SE': 'Sweden', 'NO': 'Norway', 'PL': 'Poland',
    'DE': 'Germany', 'PE': 'Peru', 'MX': 'Mexico', 'CU': 'Cuba',
    'AR': 'Argentina', 'BR': 'Brazil', 'CL': 'Chile', 'CO': 'Colombia',
    'VE': 'Venezuela', 'MY': 'Malaysia', 'AU': 'Australia', 'ID': 'Indonesia',
    'PH': 'Philippines', 'NZ': 'New Zealand', 'SG': 'Singapore', 'TH': 'Thailand',
    'JP': 'Japan', 'KR': 'South Korea', 'VN': 'Vietnam', 'CN': 'China',
    'TR': 'Turkey', 'IN': 'India', 'PK': 'Pakistan', 'AF': 'Afghanistan',
    'LK': 'Sri Lanka', 'MM': 'Myanmar', 'IR': 'Iran', 'MA': 'Morocco',
    'DZ': 'Algeria', 'TN': 'Tunisia', 'LY': 'Libya', 'GM': 'Gambia',
    'SN': 'Senegal', 'MR': 'Mauritania', 'ML': 'Mali', 'GN': 'Guinea',
    'CI': 'Ivory Coast', 'BF': 'Burkina Faso', 'NE': 'Niger',
    'TG': 'Togo', 'BJ': 'Benin', 'MU': 'Mauritius', 'LR': 'Liberia',
    'SL': 'Sierra Leone', 'GH': 'Ghana', 'NG': 'Nigeria', 'TD': 'Chad',
    'CF': 'Central African Republic', 'CM': 'Cameroon', 'CV': 'Cape Verde',
    'ST': 'Sao Tome and Principe', 'GQ': 'Equatorial Guinea', 'GA': 'Gabon',
    'CG': 'Republic of the Congo', 'CD': 'Democratic Republic of the Congo',
    'AO': 'Angola', 'GW': 'Guinea-Bissau', 'SC': 'Seychelles', 'SD': 'Sudan',
    'RW': 'Rwanda', 'ET': 'Ethiopia', 'SO': 'Somalia', 'DJ': 'Djibouti',
    'KE': 'Kenya', 'TZ': 'Tanzania', 'UG': 'Uganda', 'BI': 'Burundi',
    'MZ': 'Mozambique', 'ZM': 'Zambia', 'MG': 'Madagascar', 'RE': 'Reunion',
    'ZW': 'Zimbabwe', 'NA': 'Namibia', 'MW': 'Malawi', 'LS': 'Lesotho',
    'BW': 'Botswana', 'SZ': 'Swaziland', 'KM': 'Comoros', 'SH': 'Saint Helena',
    'ER': 'Eritrea', 'AW': 'Aruba', 'FO': 'Faroe Islands', 'GL': 'Greenland',
    'GI': 'Gibraltar', 'PT': 'Portugal', 'LU': 'Luxembourg', 'IE': 'Ireland',
    'IS': 'Iceland', 'AL': 'Albania', 'MT': 'Malta', 'CY': 'Cyprus',
    'FI': 'Finland', 'BG': 'Bulgaria', 'LT': 'Lithuania', 'LV': 'Latvia',
    'EE': 'Estonia', 'MD': 'Moldova', 'AM': 'Armenia', 'BY': 'Belarus',
    'AD': 'Andorra', 'MC': 'Monaco', 'SM': 'San Marino', 'VA': 'Vatican City',
    'UA': 'Ukraine', 'RS': 'Serbia', 'ME': 'Montenegro', 'XK': 'Kosovo',
    'HR': 'Croatia', 'SI': 'Slovenia', 'BA': 'Bosnia and Herzegovina', 'MK': 'North Macedonia',
    'CZ': 'Czech Republic', 'SK': 'Slovakia', 'LI': 'Liechtenstein', 'FK': 'Falkland Islands',
    'BZ': 'Belize', 'GT': 'Guatemala', 'SV': 'El Salvador', 'HN': 'Honduras',
    'NI': 'Nicaragua', 'CR': 'Costa Rica', 'PA': 'Panama', 'PM': 'Saint Pierre and Miquelon',
    'HT': 'Haiti', 'GP': 'Guadeloupe', 'BO': 'Bolivia', 'GY': 'Guyana',
    'EC': 'Ecuador', 'GF': 'French Guiana', 'PY': 'Paraguay', 'MQ': 'Martinique',
    'SR': 'Suriname', 'UY': 'Uruguay', 'TL': 'Timor-Leste', 'NF': 'Norfolk Island',
    'BN': 'Brunei', 'NR': 'Nauru', 'PG': 'Papua New Guinea', 'TO': 'Tonga',
    'SB': 'Solomon Islands', 'VU': 'Vanuatu', 'FJ': 'Fiji', 'PW': 'Palau',
    'WF': 'Wallis and Futuna', 'CK': 'Cook Islands', 'NU': 'Niue', 'WS': 'Samoa',
    'KI': 'Kiribati', 'NC': 'New Caledonia', 'TV': 'Tuvalu', 'PF': 'French Polynesia',
    'TK': 'Tokelau', 'FM': 'Micronesia', 'MH': 'Marshall Islands', 'KP': 'North Korea',
    'HK': 'Hong Kong', 'MO': 'Macao', 'KH': 'Cambodia', 'LA': 'Laos',
    'BD': 'Bangladesh', 'TW': 'Taiwan', 'MV': 'Maldives', 'LB': 'Lebanon',
    'JO': 'Jordan', 'SY': 'Syria', 'IQ': 'Iraq', 'KW': 'Kuwait',
    'SA': 'Saudi Arabia', 'YE': 'Yemen', 'OM': 'Oman', 'PS': 'Palestine',
    'AE': 'United Arab Emirates', 'IL': 'Israel', 'BH': 'Bahrain', 'QA': 'Qatar',
    'BT': 'Bhutan', 'MN': 'Mongolia', 'NP': 'Nepal', 'TJ': 'Tajikistan',
    'TM': 'Turkmenistan', 'AZ': 'Azerbaijan', 'GE': 'Georgia', 'KG': 'Kyrgyzstan',
    'UZ': 'Uzbekistan'
  };
  return countryNames[isoCode] || '';
};

const getCountryFromCode = (code) => {
  return countryFlagMap[code] || '';
};

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCountry: '',
    phoneCountryCode: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    terms: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Web Frontend Development',
    'Backend & API Development',
    'Mobile Applications',
    'Cloud Migration',
    'DevOps & Security',
    'Technology Consulting',
    'Full-Stack Development',
    'Big Data & Analytics',
    'Other (specify in message)'
  ]

  const budgetRanges = [
    'Less than $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'More than $100,000',
    'To be determined'
  ]

  const timelineOptions = [
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year',
    'Flexible'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Limitar a 20 caracteres para campos de texto (excepto email, teléfono, sitio web y mensaje)
    const textFields = ['firstName', 'lastName', 'company'];
    if (textFields.includes(name) && value.length > 20) {
      return; // No actualizar el estado si supera el límite
    }
    
    const newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };

    // Si es el campo de teléfono
    if (name === 'phone') {
      // Eliminar todo lo que no sea número o +
      const cleanPhone = value.replace(/[^\d+]/g, '');
      
      // Buscar código de país solo si empieza con +
      if (cleanPhone.startsWith('+')) {
        // Probar con códigos de 1 a 3 dígitos
        for (let i = 3; i >= 1; i--) {
          const possibleCode = cleanPhone.substring(1, 1 + i);
          if (countryPhoneInfo[possibleCode]) {
            const countryIso = countryPhoneInfo[possibleCode].iso;
            const countryName = getCountryName(countryIso);
            
            newFormData.phoneCountry = countryName;
            newFormData.phoneCountryCode = countryIso;
            break;
          }
        }
      } else {
        // Si no empieza con +, limpiar los campos de país
        newFormData.phoneCountry = '';
        newFormData.phoneCountryCode = '';
      }
    }
    
    setFormData(newFormData);
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    
    if (wordCount <= 50) {
      setFormData({
        ...formData,
        message: text
      });
    }
    
    // Limpiar el error si existe
    if (errors.message) {
      setErrors({
        ...errors,
        message: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {}

    // Validación para nombre
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    } else if (formData.firstName !== formData.firstName.trim()) {
      newErrors.firstName = 'First name should not have spaces at the beginning or end'
    } else if (formData.firstName.length > 20) {
      newErrors.firstName = 'First name cannot exceed 20 characters'
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s]*$/.test(formData.firstName)) {
      newErrors.firstName = 'First name should start with a capital letter and only contain letters'
    }

    // Validación para apellido
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    } else if (formData.lastName !== formData.lastName.trim()) {
      newErrors.lastName = 'Last name should not have spaces at the beginning or end'
    } else if (formData.lastName.length > 20) {
      newErrors.lastName = 'Last name cannot exceed 20 characters'
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s'-]*$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should start with a capital letter and only contain letters, spaces, apostrophes, and hyphens'
    }

    // Validación para email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (formData.email !== formData.email.trim()) {
      newErrors.email = 'Email should not have spaces at the beginning or end'
    } else if (formData.email.length > 20) {
      newErrors.email = 'Email cannot exceed 20 characters'
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = 'Only Gmail addresses (@gmail.com) are accepted'
    }

    // Validación para teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      // Remover espacios, guiones y paréntesis para validar solo números
      const cleanPhone = formData.phone.replace(/[^\d+]/g, '');
      
      if (cleanPhone.startsWith('+')) {
        // Validar formato internacional (ej: +52 55 1234 5678)
        const phoneWithoutPlus = cleanPhone.substring(1);
        const countryCode = phoneWithoutPlus.substring(0, 3); // Tomar hasta 3 dígitos para el código de país
        
        if (!/^\d{10,15}$/.test(phoneWithoutPlus)) {
          newErrors.phone = 'Phone number should have between 10 and 15 digits (including country code)';
        } else if (!countryPhoneInfo[countryCode] && !countryPhoneInfo[countryCode.substring(0, 2)] && !countryPhoneInfo[countryCode.substring(0, 1)]) {
          newErrors.phone = 'Invalid country code';
        } else if (phoneWithoutPlus.length !== countryPhoneInfo[countryCode].length + countryCode.length) {
          newErrors.phone = `Phone number should have ${countryPhoneInfo[countryCode].length} digits`;
        }
      } else {
        // Validar formato local (sin código de país)
        if (!/^\d{10}$/.test(cleanPhone)) {
          newErrors.phone = 'Enter a 10-digit phone number or an international number with country code (e.g. +52 55 1234 5678)';
        }
      }
    }

    // Validación para empresa
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    } else if (formData.company !== formData.company.trim()) {
      newErrors.company = 'Company name should not have spaces at the beginning or end'
    } else if (formData.company.length > 20) {
      newErrors.company = 'Company name cannot exceed 20 characters'
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ0-9\s&.,-]*$/.test(formData.company)) {
      newErrors.company = 'Company name should start with a capital letter and only contain letters, numbers, spaces, &, ., -, and commas'
    }

    // Validación para sitio web (opcional)
    if (formData.website.trim() && !/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = 'Website should have a valid format (http:// or https://)'
    }

    // Validación para mensaje (opcional)
    if (formData.message.trim()) {
      const wordCount = formData.message.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (wordCount > 50) {
        newErrors.message = 'Message cannot exceed 50 words';
      }
    }

    // Validaciones requeridas
    if (!formData.service) newErrors.service = 'Select a service'
    if (!formData.budget) newErrors.budget = 'Select a budget'
    if (!formData.timeline) newErrors.timeline = 'Select a timeline'
    if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center py-20">
        <div className="max-w-md w-full text-gray-900 dark:text-white rounded-3xl border-2 border-gray-200 dark:border-yellow-600/50 bg-white dark:bg-black shadow-2xl duration-700 z-10 relative p-8 text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform -skew-x-12"></div>
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <CheckCircle className="h-10 w-10 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-800 dark:text-yellow-300/80 mb-6">
              Thank you for your interest in our services. Our team will contact you within the next 24 hours.
            </p>
            <div className="space-y-3 text-sm text-gray-700 dark:text-yellow-400/80 mb-6">
              <p> You will receive a confirmation email</p>
              <p> We will call you for an initial consultation</p>
              <p> We will prepare a personalized proposal</p>
            </div>
            <Link to="/" className="inline-block w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-yellow-600/20 blur-xl animate-ping dark:block hidden"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-yellow-600 dark:text-yellow-500 bg-yellow-100 dark:bg-yellow-500/10 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
            Start Your Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-yellow-300/80 max-w-3xl mx-auto mb-8">
            Tell us about your project and we will help you turn your ideas into reality. 
            Get a free consultation and personalized proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Response within 24h</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span className="text-sm">Expert Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
          <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-yellow-600/20 blur-lg animate-ping dark:block hidden" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-900 dark:text-white rounded-3xl border-2 border-gray-200 dark:border-yellow-600/50 bg-white dark:bg-black shadow-2xl duration-700 z-10 relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
                  Project Information
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                            errors.firstName ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                          }`}
                          placeholder="Your first name"
                        />
                      </div>
                      {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                            errors.lastName ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                          }`}
                          placeholder="Your last name"
                        />
                      </div>
                      {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                            errors.email ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                          }`}
                          placeholder="your@gmail.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          {formData.phoneCountryCode ? (
                            <div className="flex items-center space-x-1 bg-white dark:bg-black px-2 h-full rounded-l-lg border-r border-gray-200 dark:border-yellow-600/50">
                              <ReactCountryFlag 
                                countryCode={formData.phoneCountryCode}
                                svg
                                style={{
                                  width: '1em',
                                  height: '1em',
                                  borderRadius: '2px',
                                  marginRight: '4px'
                                }}
                                title={formData.phoneCountry}
                              />
                              <span className="text-xs text-yellow-400">
                                +{Object.keys(countryPhoneInfo).find(key => countryPhoneInfo[key].iso === formData.phoneCountryCode) || ''}
                              </span>
                            </div>
                          ) : (
                            <Phone className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full ${formData.phoneCountryCode ? 'pl-24' : 'pl-10'} pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                            errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                          }`}
                          placeholder={formData.phoneCountryCode ? '55 1234 5678' : '+52 55 1234 5678'}
                        />
                      </div>
                      {formData.phoneCountry && (
                        <p className="text-xs text-yellow-400 mt-1">{formData.phoneCountry}</p>
                      )}
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Company *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                            errors.company ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                          }`}
                          placeholder="Company name"
                        />
                      </div>
                      {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Website
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                            errors.website ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                          }`}
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                      {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400 mb-6 mt-10 pt-6 border-t border-gray-200 dark:border-yellow-900/30">
                      Project Details
                    </h3>
                    <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white ${
                        errors.service ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Budget *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white ${
                          errors.budget ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                        }`}
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                      {errors.budget && <p className="text-red-400 text-sm mt-1">{errors.budget}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Timeline *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white ${
                          errors.timeline ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                        }`}
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                      {errors.timeline && <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                      Describe your project
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleMessageChange}
                        rows={4}
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-yellow-400 ${
                          errors.message ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                        }`}
                        placeholder="Tell us more about your project, objectives, and any specific requirements..."
                      />
                      <p className="text-xs text-yellow-400 mt-1">{formData.message.trim().split(/\s+/).filter(word => word.length > 0).length} / 50 words</p>
                    </div>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-yellow-600/50 rounded bg-white dark:bg-black"
                      />
                      <span className="text-sm text-yellow-600 dark:text-yellow-400">
                        I want to receive news and updates about technology
                      </span>
                    </label>

                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-yellow-600/50 rounded bg-white dark:bg-black"
                      />
                      <span className="text-sm text-yellow-600 dark:text-yellow-400">
                        I accept the{' '}
                        <a href="#" className="text-yellow-500 hover:text-yellow-400">
                          terms and conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-yellow-500 hover:text-yellow-400">
                          privacy policy
                        </a>
                        *
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-400 text-sm">{errors.terms}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
