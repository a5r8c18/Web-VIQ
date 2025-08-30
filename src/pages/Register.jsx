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
    'US': 'Estados Unidos', 'CA': 'Canadá', 'RU': 'Rusia', 'KZ': 'Kazajistán',
    'EG': 'Egipto', 'ZA': 'Sudáfrica', 'GR': 'Grecia', 'NL': 'Países Bajos',
    'BE': 'Bélgica', 'FR': 'Francia', 'ES': 'España', 'IT': 'Italia',
    'RO': 'Rumania', 'CH': 'Suiza', 'AT': 'Austria', 'GB': 'Reino Unido',
    'DK': 'Dinamarca', 'SE': 'Suecia', 'NO': 'Noruega', 'PL': 'Polonia',
    'DE': 'Alemania', 'PE': 'Perú', 'MX': 'México', 'CU': 'Cuba',
    'AR': 'Argentina', 'BR': 'Brasil', 'CL': 'Chile', 'CO': 'Colombia',
    'VE': 'Venezuela', 'MY': 'Malasia', 'AU': 'Australia', 'ID': 'Indonesia',
    'PH': 'Filipinas', 'NZ': 'Nueva Zelanda', 'SG': 'Singapur', 'TH': 'Tailandia',
    'JP': 'Japón', 'KR': 'Corea del Sur', 'VN': 'Vietnam', 'CN': 'China',
    'TR': 'Turquía', 'IN': 'India', 'PK': 'Pakistán', 'AF': 'Afganistán',
    'LK': 'Sri Lanka', 'MM': 'Myanmar', 'IR': 'Irán', 'MA': 'Marruecos',
    'DZ': 'Argelia', 'TN': 'Túnez', 'LY': 'Libia', 'GM': 'Gambia',
    'SN': 'Senegal', 'MR': 'Mauritania', 'ML': 'Malí', 'GN': 'Guinea',
    'CI': 'Costa de Marfil', 'BF': 'Burkina Faso', 'NE': 'Níger',
    'TG': 'Togo', 'BJ': 'Benín', 'MU': 'Mauricio', 'LR': 'Liberia',
    'SL': 'Sierra Leona', 'GH': 'Ghana', 'NG': 'Nigeria', 'TD': 'Chad',
    'CF': 'República Centroafricana', 'CM': 'Camerún', 'CV': 'Cabo Verde',
    'ST': 'Santo Tomé y Príncipe', 'GQ': 'Guinea Ecuatorial', 'GA': 'Gabón',
    'CG': 'República del Congo', 'CD': 'República Democrática del Congo',
    'AO': 'Angola', 'GW': 'Guinea-Bisáu', 'SC': 'Seychelles', 'SD': 'Sudán',
    'RW': 'Ruanda', 'ET': 'Etiopía', 'SO': 'Somalia', 'DJ': 'Yibuti',
    'KE': 'Kenia', 'TZ': 'Tanzania', 'UG': 'Uganda', 'BI': 'Burundi',
    'MZ': 'Mozambique', 'ZM': 'Zambia', 'MG': 'Madagascar', 'RE': 'Reunión',
    'ZW': 'Zimbabue', 'NA': 'Namibia', 'MW': 'Malaui', 'LS': 'Lesoto',
    'BW': 'Botsuana', 'SZ': 'Suazilandia', 'KM': 'Comoras', 'SH': 'Santa Elena',
    'ER': 'Eritrea', 'AW': 'Aruba', 'FO': 'Islas Feroe', 'GL': 'Groenlandia',
    'GI': 'Gibraltar', 'PT': 'Portugal', 'LU': 'Luxemburgo', 'IE': 'Irlanda',
    'IS': 'Islandia', 'AL': 'Albania', 'MT': 'Malta', 'CY': 'Chipre',
    'FI': 'Finlandia', 'BG': 'Bulgaria', 'LT': 'Lituania', 'LV': 'Letonia',
    'EE': 'Estonia', 'MD': 'Moldavia', 'AM': 'Armenia', 'BY': 'Bielorrusia',
    'AD': 'Andorra', 'MC': 'Mónaco', 'SM': 'San Marino', 'VA': 'Ciudad del Vaticano',
    'UA': 'Ucrania', 'RS': 'Serbia', 'ME': 'Montenegro', 'XK': 'Kosovo',
    'HR': 'Croacia', 'SI': 'Eslovenia', 'BA': 'Bosnia y Herzegovina', 'MK': 'Macedonia del Norte',
    'CZ': 'República Checa', 'SK': 'Eslovaquia', 'LI': 'Liechtenstein', 'FK': 'Islas Malvinas',
    'BZ': 'Belice', 'GT': 'Guatemala', 'SV': 'El Salvador', 'HN': 'Honduras',
    'NI': 'Nicaragua', 'CR': 'Costa Rica', 'PA': 'Panamá', 'PM': 'San Pedro y Miquelón',
    'HT': 'Haití', 'GP': 'Guadalupe', 'BO': 'Bolivia', 'GY': 'Guyana',
    'EC': 'Ecuador', 'GF': 'Guayana Francesa', 'PY': 'Paraguay', 'MQ': 'Martinica',
    'SR': 'Surinam', 'UY': 'Uruguay', 'TL': 'Timor Oriental', 'NF': 'Isla Norfolk',
    'BN': 'Brunéi', 'NR': 'Nauru', 'PG': 'Papúa Nueva Guinea', 'TO': 'Tonga',
    'SB': 'Islas Salomón', 'VU': 'Vanuatu', 'FJ': 'Fiyi', 'PW': 'Palaos',
    'WF': 'Wallis y Futuna', 'CK': 'Islas Cook', 'NU': 'Niue', 'WS': 'Samoa',
    'KI': 'Kiribati', 'NC': 'Nueva Caledonia', 'TV': 'Tuvalu', 'PF': 'Polinesia Francesa',
    'TK': 'Tokelau', 'FM': 'Micronesia', 'MH': 'Islas Marshall', 'KP': 'Corea del Norte',
    'HK': 'Hong Kong', 'MO': 'Macao', 'KH': 'Camboya', 'LA': 'Laos',
    'BD': 'Bangladés', 'TW': 'Taiwán', 'MV': 'Maldivas', 'LB': 'Líbano',
    'JO': 'Jordania', 'SY': 'Siria', 'IQ': 'Irak', 'KW': 'Kuwait',
    'SA': 'Arabia Saudita', 'YE': 'Yemen', 'OM': 'Omán', 'PS': 'Palestina',
    'AE': 'Emiratos Árabes Unidos', 'IL': 'Israel', 'BH': 'Baréin', 'QA': 'Catar',
    'BT': 'Bután', 'MN': 'Mongolia', 'NP': 'Nepal', 'TJ': 'Tayikistán',
    'TM': 'Turkmenistán', 'AZ': 'Azerbaiyán', 'GE': 'Georgia', 'KG': 'Kirguistán',
    'UZ': 'Uzbekistán'
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
    'Desarrollo Web Frontend',
    'Desarrollo Backend & APIs',
    'Aplicaciones Móviles',
    'Migración a la Nube',
    'DevOps & Seguridad',
    'Consultoría Tecnológica',
    'Desarrollo Full-Stack',
    'Big Data & Analytics',
    'Otro (especificar en mensaje)'
  ]

  const budgetRanges = [
    'Menos de $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Más de $100,000',
    'Por definir'
  ]

  const timelineOptions = [
    'Menos de 1 mes',
    '1-3 meses',
    '3-6 meses',
    '6-12 meses',
    'Más de 1 año',
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
      newErrors.firstName = 'El nombre es requerido'
    } else if (formData.firstName !== formData.firstName.trim()) {
      newErrors.firstName = 'El nombre no debe tener espacios al inicio o final'
    } else if (formData.firstName.length > 20) {
      newErrors.firstName = 'El nombre no puede exceder 20 caracteres'
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s]*$/.test(formData.firstName)) {
      newErrors.firstName = 'El nombre debe empezar con mayúscula y solo contener letras'
    }

    // Validación para apellido
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido'
    } else if (formData.lastName !== formData.lastName.trim()) {
      newErrors.lastName = 'El apellido no debe tener espacios al inicio o final'
    } else if (formData.lastName.length > 20) {
      newErrors.lastName = 'El apellido no puede exceder 20 caracteres'
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s'-]*$/.test(formData.lastName)) {
      newErrors.lastName = 'El apellido debe empezar con mayúscula y solo puede contener letras, espacios, apóstrofes y guiones'
    }

    // Validación para email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (formData.email !== formData.email.trim()) {
      newErrors.email = 'El email no debe tener espacios al inicio o final'
    } else if (formData.email.length > 20) {
      newErrors.email = 'El email no puede exceder 20 caracteres'
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = 'Solo se aceptan direcciones de Gmail (@gmail.com)'
    }

    // Validación para teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else {
      // Remover espacios, guiones y paréntesis para validar solo números
      const cleanPhone = formData.phone.replace(/[^\d+]/g, '');
      
      if (cleanPhone.startsWith('+')) {
        // Validar formato internacional (ej: +52 55 1234 5678)
        const phoneWithoutPlus = cleanPhone.substring(1);
        const countryCode = phoneWithoutPlus.substring(0, 3); // Tomar hasta 3 dígitos para el código de país
        
        if (!/^\d{10,15}$/.test(phoneWithoutPlus)) {
          newErrors.phone = 'El teléfono debe tener entre 10 y 15 dígitos (incluyendo código de país)';
        } else if (!countryPhoneInfo[countryCode] && !countryPhoneInfo[countryCode.substring(0, 2)] && !countryPhoneInfo[countryCode.substring(0, 1)]) {
          newErrors.phone = 'Código de país no válido';
        } else if (phoneWithoutPlus.length !== countryPhoneInfo[countryCode].length + countryCode.length) {
          newErrors.phone = `El número de teléfono debe tener ${countryPhoneInfo[countryCode].length} dígitos`;
        }
      } else {
        // Validar formato local (sin código de país)
        if (!/^\d{10}$/.test(cleanPhone)) {
          newErrors.phone = 'Ingresa un número de 10 dígitos o un número internacional con código de país (ej: +52 55 1234 5678)';
        }
      }
    }

    // Validación para empresa
    if (!formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa es requerido'
    } else if (formData.company !== formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa no debe tener espacios al inicio o final'
    } else if (formData.company.length > 20) {
      newErrors.company = 'El nombre de la empresa no puede exceder 20 caracteres'
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ0-9\s&.,-]*$/.test(formData.company)) {
      newErrors.company = 'El nombre de la empresa debe empezar con mayúscula y solo puede contener letras, números, espacios, &, ., -, y comas'
    }

    // Validación para sitio web (opcional)
    if (formData.website.trim() && !/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = 'El sitio web debe tener un formato válido (http:// o https://)'
    }

    // Validación para mensaje (opcional)
    if (formData.message.trim()) {
      const wordCount = formData.message.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (wordCount > 50) {
        newErrors.message = 'El mensaje no puede exceder 50 palabras';
      }
    }

    // Validaciones requeridas
    if (!formData.service) newErrors.service = 'Selecciona un servicio'
    if (!formData.budget) newErrors.budget = 'Selecciona un presupuesto'
    if (!formData.timeline) newErrors.timeline = 'Selecciona un timeline'
    if (!formData.terms) newErrors.terms = 'Debes aceptar los términos y condiciones'

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
              ¡Registro Exitoso!
            </h2>
            <p className="text-gray-800 dark:text-yellow-300/80 mb-6">
              Gracias por tu interés en nuestros servicios. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas.
            </p>
            <div className="space-y-3 text-sm text-gray-700 dark:text-yellow-400/80 mb-6">
              <p>📧 Recibirás un email de confirmación</p>
              <p>📞 Te llamaremos para una consulta inicial</p>
              <p>📋 Prepararemos una propuesta personalizada</p>
            </div>
            <Link to="/" className="inline-block w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              Volver al Inicio
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
            Contáctanos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
            Comienza tu Proyecto
          </h1>
          <p className="text-xl text-gray-600 dark:text-yellow-300/80 max-w-3xl mx-auto mb-8">
            Cuéntanos sobre tu proyecto y te ayudaremos a convertir tus ideas en realidad. 
            Obtén una consulta gratuita y propuesta personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Consulta gratuita</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Respuesta en 24h</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span className="text-sm">Equipo experto</span>
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
                  Información del Proyecto
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Nombre *
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
                          placeholder="Tu nombre"
                        />
                      </div>
                      {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Apellido *
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
                          placeholder="Tu apellido"
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
                          placeholder="tu@gmail.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Teléfono *
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
                        Empresa *
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
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                      {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Sitio Web
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
                          placeholder="https://tuempresa.com"
                        />
                      </div>
                      {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400 mb-6 mt-10 pt-6 border-t border-gray-200 dark:border-yellow-900/30">
                      Información del Proyecto
                    </h3>
                    <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                      Servicio de Interés *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white ${
                        errors.service ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                      }`}
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-yellow-400 mb-2">
                        Presupuesto *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 dark:text-white ${
                          errors.budget ? 'border-red-500' : 'border-gray-200 dark:border-yellow-600/50'
                        }`}
                      >
                        <option value="">Selecciona presupuesto</option>
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
                        <option value="">Selecciona timeline</option>
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
                      Describe tu proyecto
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
                        placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y cualquier requerimiento específico..."
                      />
                      <p className="text-xs text-yellow-400 mt-1">{formData.message.trim().split(/\s+/).filter(word => word.length > 0).length} / 50 palabras</p>
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
                        Quiero recibir noticias y actualizaciones sobre tecnología
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
                        Acepto los{' '}
                        <a href="#" className="text-yellow-500 hover:text-yellow-400">
                          términos y condiciones
                        </a>{' '}
                        y{' '}
                        <a href="#" className="text-yellow-500 hover:text-yellow-400">
                          política de privacidad
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
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Solicitud</span>
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
