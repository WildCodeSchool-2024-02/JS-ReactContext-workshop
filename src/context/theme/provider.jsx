import { useState } from "react";
import PropTypes from "prop-types";
import themeContext from "./context";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.func,
};

export default ThemeProvider;
