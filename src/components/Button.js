import { useTheme } from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      Button ({theme})
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change
      </button>
    </div>
  );
}

export default Button;
