import React from 'react'
import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.background,
            color: theme.color,
            padding: "1rem 2rem"
          }}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;