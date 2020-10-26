import React from 'react'
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    }

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "30vh"
    }}>
      <ThemeTogglerButton />
    </div>
  );
}

export default App