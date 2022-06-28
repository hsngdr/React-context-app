import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme } = useTheme();

  return <div>Header ({theme})</div>;
}

export default Header;
