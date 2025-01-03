import { useState, useEffect } from 'react'
import './App.css'
import { Themeprovider } from './contexts/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
const [themeMode, setThemeMode] = useState("light")

const LightTheme = () => {
  setThemeMode("light");
}
const DarkTheme = () => {
  setThemeMode("dark");
}

// actual change in theme

useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode]);

  return (
    <Themeprovider value={{LightTheme, DarkTheme, themeMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
           
        </div>
    </div>
</div>
</Themeprovider>
  )
}

export default App
