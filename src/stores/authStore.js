import { create } from 'zustand'

// Store para manejar autenticación
export const useAuthStore = create((set, get) => ({
  // Estado inicial
  user: null,
  isLoggedIn: false,
  isLoading: false,
  
  // Acciones
  login: (userData) => set({ 
    user: userData, 
    isLoggedIn: true,
    isLoading: false 
  }),
  
  logout: () => set({ 
    user: null, 
    isLoggedIn: false,
    isLoading: false 
  }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  // Getter para obtener el nombre del usuario
  getUserName: () => {
    const { user } = get()
    return user?.name || 'Usuario'
  }
}))
