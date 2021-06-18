import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
export const ThemeContext = React.createContext({} as { theme: string, setTheme: any });

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
