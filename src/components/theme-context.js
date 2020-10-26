import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    color: '#000000'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    color: '#ffffff'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});