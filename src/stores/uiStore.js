import { create } from 'zustand'

// Store para manejar estado de la UI
export const useUIStore = create((set) => ({
  // Estado del menú móvil
  isMobileMenuOpen: false,
  
  // Estado de modales
  isModalOpen: false,
  modalContent: null,
  
  // Estado de notificaciones
  notifications: [],
  
  // Acciones para el menú móvil
  toggleMobileMenu: () => set((state) => ({ 
    isMobileMenuOpen: !state.isMobileMenuOpen 
  })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  
  // Acciones para modales
  openModal: (content) => set({ 
    isModalOpen: true, 
    modalContent: content 
  }),
  closeModal: () => set({ 
    isModalOpen: false, 
    modalContent: null 
  }),
  
  // Acciones para notificaciones
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, {
      id: Date.now(),
      ...notification
    }]
  })),
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
  
  clearNotifications: () => set({ notifications: [] })
}))
