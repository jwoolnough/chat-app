import { FiMoon } from "react-icons/fi";
import { Button } from "../button";

const ThemeToggle = () => {
  return (
    <Button variant="link" className="absolute top-6 right-6">
      <FiMoon size={18} />
    </Button>
  );
};

export { ThemeToggle };
