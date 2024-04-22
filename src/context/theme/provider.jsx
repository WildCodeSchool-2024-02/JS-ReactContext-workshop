import { useState } from "react";
import { themeContext } from "./context";
import PropTypes from "prop-types";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export default ThemeProvider;
