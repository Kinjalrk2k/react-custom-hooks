import { useState, useEffect } from 'react'

const useToggleTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme !== 'dark') {
            // add the theme to the localStorage for persistence
            localStorage.setItem('theme', 'dark');
            setTheme('dark')
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if(localTheme) {
            setTheme(localTheme);
        }
    }, [])
    
    return {
        theme, toggleTheme
    }
}

export default useToggleTheme;