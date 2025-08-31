import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

export default ThemeToggle
