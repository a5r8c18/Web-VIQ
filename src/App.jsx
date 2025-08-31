import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Register from './pages/Register'
import About from './pages/About'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState(() => {
    // Verificar si hay una preferencia de tema guardada
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  // Aplicar la clase del tema al elemento raíz
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen flex flex-col ${theme}`}>
        <Header />
        <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
