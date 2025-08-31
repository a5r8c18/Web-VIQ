import React from 'react'
import { useAuthStore } from '../stores/authStore'
import { useUIStore } from '../stores/uiStore'

// Componente de ejemplo para mostrar cómo usar Zustand
const ZustandExample = () => {
  // Usar el store de autenticación
  const { user, isLoggedIn, login, logout, getUserName } = useAuthStore()
  
  // Usar el store de UI
  const { 
    isMobileMenuOpen, 
    toggleMobileMenu, 
    addNotification,
    notifications 
  } = useUIStore()

  const handleLogin = () => {
    const userData = {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@empresa.com',
      role: 'admin'
    }
    login(userData)
    addNotification({
      type: 'success',
      message: 'Sesión iniciada correctamente'
    })
  }

  const handleLogout = () => {
    logout()
    addNotification({
      type: 'info',
      message: 'Sesión cerrada'
    })
  }

  return (
    <div className="p-6 bg-secondary-800 rounded-lg">
      <h2 className="text-2xl font-bold text-gold-500 mb-4">
        Ejemplo de Zustand
      </h2>
      
      {/* update state */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-secondary-200 mb-2">
          Estado de Autenticación
        </h3>
        {isLoggedIn ? (
          <div className="space-y-2">
            <p className="text-secondary-300">
              Bienvenido, <span className="text-gold-400">{getUserName()}</span>
            </p>
            <p className="text-sm text-secondary-400">
              Email: {user?.email}
            </p>
            <button 
              onClick={handleLogout}
              className="btn-secondary"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div>
            <p className="text-secondary-300 mb-2">No has iniciado sesión</p>
            <button 
              onClick={handleLogin}
              className="btn-primary"
            >
              Iniciar Sesión
            </button>
          </div>
        )}
      </div>

      {/* Estado de UI */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-secondary-200 mb-2">
          Estado de UI
        </h3>
        <div className="space-y-2">
          <p className="text-secondary-300">
            Menú móvil: {isMobileMenuOpen ? 'Abierto' : 'Cerrado'}
          </p>
          <button 
            onClick={toggleMobileMenu}
            className="btn-secondary"
          >
            Toggle Menú Móvil
          </button>
        </div>
      </div>

      {/* Notificaciones */}
      {notifications.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-secondary-200 mb-2">
            Notificaciones
          </h3>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-3 rounded ${
                  notification.type === 'success' 
                    ? 'bg-green-600' 
                    : 'bg-blue-600'
                } text-white`}
              >
                {notification.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ZustandExample
