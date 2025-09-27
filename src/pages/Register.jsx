// Register.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  User, Mail, Phone, Building, Globe, MessageSquare, 
  CheckCircle, ArrowRight, Shield, Clock, Users 
} from 'lucide-react'
import { useForm } from '../hooks/useForm'
import ValidatedInput from '../components/ValidatedInput'
import PhoneInput from '../components/PhoneInput'
import '../styles/floatingLogos.css'

const Register = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCountry: '',
    phoneCountryCode: '',
    company: '',
    website: '',
    service: '',
    message: '',
    newsletter: false,
    terms: false
  }

  const {
    formData,
    errors,
    touched,
    handleChange,
    setFieldTouched,
    validateForm,
    setFieldValue
  } = useForm(initialFormData)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const services = [
    'Other (specify in message)',
    'Web Frontend Development',
    'Backend & API Development',
    'Mobile Applications',
    'Cloud Migration',
    'DevOps & Security',
    'Technology Consulting',
    'Full-Stack Development',
    'Big Data & Analytics',
    'Digital Marketing',
    'Business Analysis'
  ]

  const handlePhoneChange = (phone, countryCode, countryName) => {
    handleChange('phone', phone)
    setFieldValue('phoneCountryCode', countryCode)
    setFieldValue('phoneCountry', countryName)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleChange(name, checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(formErrors).forEach(key => setFieldTouched(key))
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Simular llamada a la API con un retraso de 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-800 dark:bg-black flex items-center justify-center py-20">
        <div className="max-w-md w-full text-yellow-400 dark:text-yellow-400 rounded-3xl border-2 border-gray-700 dark:border-yellow-600/50 bg-gray-700/80 dark:bg-black shadow-2xl duration-700 z-10 relative p-8 text-center backdrop-blur-sm">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform -skew-x-12"></div>
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <CheckCircle className="h-10 w-10 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-400 dark:text-yellow-400 mb-4">
              Successful Registration!
            </h2>
            <p className="text-yellow-600 dark:text-yellow-300/80 mb-6">
              Thank you for your interest in our services. Our team will contact you within the next 24 hours.
            </p>
            <div className="space-y-3 text-sm text-yellow-600 dark:text-yellow-400/80 mb-6">
              <p>You will receive a confirmation email</p>
              <p>We will call you for an initial consultation</p>
              <p>We will prepare a personalized proposal</p>
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
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Fondo con textura de vidrio esmerilado */}
      <div className="absolute inset-0">
        {/* Capa base con textura sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 75% 75%, #fff 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
          }}></div>
        </div>
        
        {/* Capa de color con gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Efectos de iluminación */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.1),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,119,6,0.1),transparent_40%)]"></div>
          
          {/* Logos flotantes */}
          <div className="floating-logos">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="logo">
                <img src="/logo.svg" alt="VIQ Systems" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elementos de vidrio flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[80%] h-[80%] opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-gray-400/30 dark:from-amber-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[80%] h-[80%] opacity-20">
          <div className="w-full h-full bg-gradient-to-tr from-gray-500/30 dark:from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                Start Your Project
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 
                animate-text-shimmer bg-[length:200%_100%] bg-left 
                drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                Tell us about your project and we will help you turn your ideas into reality. 
                Get a free consultation and personalized proposal.
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  emoji: "🚀",
                  text: "Fast Delivery",
                  gradient: "from-blue-500 to-cyan-400"
                },
                {
                  emoji: "⏱️",
                  text: "24/7 Support",
                  gradient: "from-purple-500 to-pink-400"
                },
                {
                  emoji: "👥",
                  text: "Friendly Team",
                  gradient: "from-amber-500 to-yellow-400"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative flex flex-col items-center transition-all duration-300"
                >
                  <div className={`
                    text-4xl mb-2 transition-transform duration-300 
                    group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]
                  `}>
                    {item.emoji}
                  </div>
                  <span className={`
                    text-sm font-medium mb-1 text-yellow-400
                    bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent
                    transition-all duration-300
                  `}>
                    {item.text}
                  </span>
                  <div className={`
                    h-0.5 w-0 bg-gradient-to-r ${item.gradient} 
                    transition-all duration-300 group-hover:w-full
                  `}></div>
                </div>
              ))}
            </div>

            <style jsx global>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                }
                33% {
                  transform: translateY(-3px) rotate(0.5deg);
                }
                66% {
                  transform: translateY(2px) rotate(-0.5deg);
                }
              }
              
              .group:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </section>

        {/* Sin espacio adicional */}
        

        <section className="relative pt-0 pb-2 md:pt-0 md:pb-2"></section>
        {/* Form Section */}
        <section className="relative pt-0 pb-8 md:pt-2 md:pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  
            <div className="max-w-3xl mx-auto">
              <div className="rounded-3xl border border-amber-400/30 bg-gradient-to-br from-black/30 to-black/20 shadow-lg backdrop-blur-sm overflow-hidden relative">
                {/* Golden border glow effect */}
                <div className="absolute inset-0 rounded-3xl border border-amber-400/20 pointer-events-none"></div>
                
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-10"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-amber-500/3 to-transparent blur-3xl opacity-5"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/3 to-transparent transform -skew-x-12"></div>
                </div>

                <div className="relative z-10 p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          First Name *
                        </label>
                        <ValidatedInput
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="Your first name"
                          icon={<User className="h-5 w-5 text-gray-400" />}
                          maxLength={20}
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        {touched.firstName && errors.firstName && (
                          <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Last Name *
                        </label>
                        <ValidatedInput
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="Your last name"
                          icon={<User className="h-5 w-5 text-gray-400" />}
                          maxLength={20}
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        {touched.lastName && errors.lastName && (
                          <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Email *
                        </label>
                        <ValidatedInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="your@gmail.com"
                          icon={<Mail className="h-5 w-5 text-gray-400" />}
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Phone Number *
                        </label>
                        <PhoneInput
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onBlur={() => setFieldTouched('phone')}
                        />
                        {formData.phoneCountry && (
                          <p className="text-xs text-yellow-600 mt-1">{formData.phoneCountry}</p>
                        )}
                        {touched.phone && errors.phone && (
                          <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Company *
                        </label>
                        <ValidatedInput
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="Company name"
                          icon={<Building className="h-5 w-5 text-gray-400" />}
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        {touched.company && errors.company && (
                          <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Website
                        </label>
                        <ValidatedInput
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="https://yourcompany.com"
                          icon={<Globe className="h-5 w-5 text-gray-400" />}
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        {touched.website && errors.website && (
                          <p className="text-red-400 text-sm mt-1">{errors.website}</p>
                        )}
                      </div>
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400 mb-6 mt-10 pt-6 border-t border-gray-200 dark:border-yellow-900/30">
                        Service of Interest
                      </h3>
                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Select a service *
                        </label>
                        <ValidatedInput
                          type="select"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="Select a service"
                          options={services}
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        {touched.service && errors.service && (
                          <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-400 mb-6 mt-10 pt-6 border-t border-gray-200 dark:border-yellow-900/30">
                        Project Details
                      </h3>
                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-900 dark:text-yellow-400 mb-2">
                          Describe your project
                        </label>
                        <ValidatedInput
                          type="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={setFieldTouched}
                          placeholder="Tell us more about your project, objectives, and any specific requirements..."
                          className="bg-gray-600/50 border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 text-gray-900 dark:text-white placeholder-gray-800 dark:placeholder-gray-400"
                        />
                        <p className="text-xs text-yellow-600 mt-1">
                          {formData.message.length} / 200 characters
                        </p>
                        {touched.message && errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleCheckboxChange}
                          className="mt-1 h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700 dark:bg-black"
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
                          onChange={handleCheckboxChange}
                          onBlur={() => setFieldTouched('terms')}
                          className="mt-1 h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700 dark:bg-black"
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
                      {touched.terms && errors.terms && (
                        <p className="text-red-400 text-sm">{errors.terms}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Processing...'
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>

                    {submitError && (
                      <p className="text-red-400 text-sm text-center">{submitError}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Register;