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
    timeline: '',
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

  const timelineOptions = [
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year',
    'Flexible'
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
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center py-20">
        <div className="max-w-md w-full text-yellow-500 dark:text-yellow-400 rounded-3xl border-2 border-gray-200 dark:border-yellow-600/50 bg-white dark:bg-black shadow-2xl duration-700 z-10 relative p-8 text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform -skew-x-12"></div>
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <CheckCircle className="h-10 w-10 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400 mb-4">
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
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 dark:text-yellow-400 mb-6">
            Start Your Project
          </h1>
          <p className="text-xl text-yellow-600 dark:text-yellow-300/80 max-w-3xl mx-auto mb-8">
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
            <div className="text-yellow-500 dark:text-yellow-400 rounded-3xl border-2 border-gray-200 dark:border-yellow-600/50 bg-white dark:bg-black shadow-2xl duration-700 z-10 relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/5 via-yellow-400/10 to-yellow-600/5 opacity-60 dark:opacity-60"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-700/10 via-yellow-500/15 to-transparent blur-3xl opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 p-8">
                <h2 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400 mb-6">
                  Project Information
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                        First Name *
                      </label>
                      <ValidatedInput
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={setFieldTouched}
                        placeholder="Your first name"
                        icon={<User className="h-5 w-5" />}
                        maxLength={20}
                      />
                      {touched.firstName && errors.firstName && (
                        <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                        Last Name *
                      </label>
                      <ValidatedInput
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={setFieldTouched}
                        placeholder="Your last name"
                        icon={<User className="h-5 w-5" />}
                        maxLength={20}
                      />
                      {touched.lastName && errors.lastName && (
                        <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                        Email *
                      </label>
                      <ValidatedInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={setFieldTouched}
                        placeholder="your@gmail.com"
                        icon={<Mail className="h-5 w-5" />}
                        maxLength={50}
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
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
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                        Company *
                      </label>
                      <ValidatedInput
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={setFieldTouched}
                        placeholder="Company name"
                        icon={<Building className="h-5 w-5" />}
                        maxLength={50}
                      />
                      {touched.company && errors.company && (
                        <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                        Website
                      </label>
                      <ValidatedInput
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        onBlur={setFieldTouched}
                        placeholder="https://yourcompany.com"
                        icon={<Globe className="h-5 w-5" />}
                      />
                      {touched.website && errors.website && (
                        <p className="text-red-400 text-sm mt-1">{errors.website}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-500 dark:text-yellow-400 mb-6 mt-10 pt-6 border-t border-gray-200 dark:border-yellow-900/30">
                      Project Details
                    </h3>
                    <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                      Service of Interest *
                    </label>
                    <ValidatedInput
                      type="select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={setFieldTouched}
                      placeholder="Select a service"
                      options={services}
                    />
                    {touched.service && errors.service && (
                      <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                        Timeline *
                      </label>
                      <ValidatedInput
                        type="select"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        onBlur={setFieldTouched}
                        placeholder="Select timeline"
                        options={timelineOptions}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                      Describe your project
                    </label>
                    <ValidatedInput
                      type="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={setFieldTouched}
                      placeholder="Tell us more about your project, objectives, and any specific requirements..."
                      icon={<MessageSquare className="h-5 w-5" />}
                      maxLength={200}
                    />
                    <p className="text-xs text-yellow-600 mt-1">
                      {formData.message.length} / 200 characters
                    </p>
                    {touched.message && errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleCheckboxChange}
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
                        onChange={handleCheckboxChange}
                        onBlur={() => setFieldTouched('terms')}
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
                    {touched.terms && errors.terms && (
                      <p className="text-red-400 text-sm">{errors.terms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
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
  )
}

export default Register