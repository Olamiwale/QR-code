import react, { useState } from "react";

function Navbar() {

  
  const themes = () => {
    return "theme" ? "dark" : "light";
  };

  const [theme, setTheme] = useState(themes);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <h2>I want to change the background color to red</h2>

      <button onClick={switchTheme}>Click me</button>
    </div>
  );
}

export default Navbar;
