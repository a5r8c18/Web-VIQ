import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  User, Mail, Phone, Building, Globe, MessageSquare, 
  CheckCircle, ArrowRight, Shield, Clock, Users 
} from 'lucide-react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

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
    } else if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s]*$/.test(formData.lastName)) {
      newErrors.lastName = 'El apellido debe empezar con mayúscula y solo contener letras'
    }

    // Validación para email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (formData.email !== formData.email.trim()) {
      newErrors.email = 'El email no debe tener espacios al inicio o final'
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = 'Solo se aceptan direcciones de Gmail (@gmail.com)'
    } else if (formData.email.length > 100) {
      newErrors.email = 'El email no puede exceder 100 caracteres'
    }

    // Validación para teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else {
      // Remover espacios, guiones y paréntesis para validar solo números
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '')
      if (!/^\d{10,15}$/.test(cleanPhone)) {
        newErrors.phone = 'El teléfono debe tener entre 10 y 15 dígitos'
      }
    }

    // Validación para empresa
    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida'
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'El nombre de la empresa debe tener al menos 2 caracteres'
    } else if (formData.company.length > 100) {
      newErrors.company = 'El nombre de la empresa no puede exceder 100 caracteres'
    }

    // Validación para sitio web (opcional)
    if (formData.website.trim() && !/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = 'El sitio web debe tener un formato válido (http:// o https://)'
    }

    // Validación para mensaje (opcional)
    if (formData.message.trim() && formData.message.length > 1000) {
      newErrors.message = 'El mensaje no puede exceder 1000 caracteres'
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
      <div className="min-h-screen bg-secondary-900 flex items-center justify-center section-padding">
        <div className="max-w-md w-full bg-secondary-800 rounded-2xl shadow-xl p-8 text-center border border-gold-600/20">
          <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-secondary-900" />
          </div>
          <h2 className="text-2xl font-bold text-gold-400 mb-4">
            ¡Registro Exitoso!
          </h2>
          <p className="text-secondary-300 mb-6">
            Gracias por tu interés en TechCorp. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas.
          </p>
          <div className="space-y-3 text-sm text-secondary-400 mb-6">
            <p>📧 Recibirás un email de confirmación</p>
            <p>📞 Te llamaremos para una consulta inicial</p>
            <p>📋 Prepararemos una propuesta personalizada</p>
          </div>
          <Link to="/" className="btn-primary w-full">
            Volver al Inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-gold-400 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comienza tu Proyecto
          </h1>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto mb-8">
            Cuéntanos sobre tu proyecto y te ayudaremos a convertir tus ideas en realidad. 
            Obtén una consulta gratuita y propuesta personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-secondary-800 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-gold-400" />
              <span className="text-secondary-200">Consulta gratuita</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary-800 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-gold-400" />
              <span className="text-secondary-200">Respuesta en 24h</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary-800 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-gold-400" />
              <span className="text-secondary-200">Equipo experto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary-800 rounded-2xl shadow-xl overflow-hidden border border-gold-600/20">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Form */}
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-2xl font-bold text-gold-400 mb-6">
                    Información del Proyecto
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Nombre *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                              errors.firstName ? 'border-red-500' : 'border-secondary-600'
                            }`}
                            placeholder="Tu nombre"
                          />
                        </div>
                        {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Apellido *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                              errors.lastName ? 'border-red-500' : 'border-secondary-600'
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
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                              errors.email ? 'border-red-500' : 'border-secondary-600'
                            }`}
                            placeholder="tu@gmail.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Teléfono *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                              errors.phone ? 'border-red-500' : 'border-secondary-600'
                            }`}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Empresa *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                              errors.company ? 'border-red-500' : 'border-secondary-600'
                            }`}
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                        {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Sitio Web
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                              errors.website ? 'border-red-500' : 'border-secondary-600'
                            }`}
                            placeholder="https://tuempresa.com"
                          />
                        </div>
                        {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-sm font-medium text-gold-400 mb-2">
                        Servicio de Interés *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 ${
                          errors.service ? 'border-red-500' : 'border-secondary-600'
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
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Presupuesto *
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 ${
                            errors.budget ? 'border-red-500' : 'border-secondary-600'
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
                        <label className="block text-sm font-medium text-gold-400 mb-2">
                          Timeline *
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 ${
                            errors.timeline ? 'border-red-500' : 'border-secondary-600'
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
                      <label className="block text-sm font-medium text-gold-400 mb-2">
                        Describe tu proyecto
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className={`w-full pl-10 pr-4 py-3 bg-secondary-700 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-secondary-100 placeholder-secondary-400 ${
                            errors.message ? 'border-red-500' : 'border-secondary-600'
                          }`}
                          placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y cualquier requerimiento específico..."
                        />
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
                          className="mt-1 h-4 w-4 text-gold-600 focus:ring-gold-500 border-secondary-600 rounded bg-secondary-700"
                        />
                        <span className="text-sm text-secondary-300">
                          Quiero recibir noticias y actualizaciones sobre tecnología
                        </span>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-gold-600 focus:ring-gold-500 border-secondary-600 rounded bg-secondary-700"
                        />
                        <span className="text-sm text-secondary-300">
                          Acepto los{' '}
                          <a href="#" className="text-gold-400 hover:text-gold-300">
                            términos y condiciones
                          </a>{' '}
                          y{' '}
                          <a href="#" className="text-gold-400 hover:text-gold-300">
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
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

                {/* Sidebar */}
                <div className="bg-secondary-900 text-gold-400 p-8 border-l border-gold-600/20">
                  <h3 className="text-xl font-bold mb-6 text-gold-400">¿Por qué elegirnos?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-gold-400">Consulta Gratuita</h4>
                        <p className="text-sm text-secondary-300">
                          Analizamos tu proyecto sin costo y te damos recomendaciones.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-gold-400">Respuesta Rápida</h4>
                        <p className="text-sm text-secondary-300">
                          Te contactamos en menos de 24 horas con una propuesta inicial.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-gold-400">Equipo Experto</h4>
                        <p className="text-sm text-secondary-300">
                          Desarrolladores senior con más de 10 años de experiencia.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-gold-400">Soporte Continuo</h4>
                        <p className="text-sm text-secondary-300">
                          Acompañamiento durante todo el proyecto y post-lanzamiento.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gold-600 rounded-lg">
                    <h4 className="font-semibold mb-2 text-secondary-900">¿Tienes preguntas?</h4>
                    <p className="text-sm text-secondary-800 mb-3">
                      Nuestro equipo está listo para ayudarte.
                    </p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-sm font-medium text-secondary-900 hover:text-secondary-800"
                    >
                      📞 +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
