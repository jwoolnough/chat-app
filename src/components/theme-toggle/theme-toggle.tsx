import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "../button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    window?.localStorage.getItem("theme") || "light"
  );

  const handleClick = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    root.classList.add("is-switching-theme");

    const handleTransitionEnd = () => {
      root.classList.remove("is-switching-theme");
      root.removeEventListener("transitionend", handleTransitionEnd);
    };
    root.addEventListener("transitionend", handleTransitionEnd);

    window?.localStorage.setItem("theme", theme);

    requestAnimationFrame(() => {
      root.classList.add(theme);
    });

    return () => {
      root.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [theme]);

  return (
    <Button
      variant="link"
      className="absolute top-6 right-6 z-10"
      onClick={handleClick}
    >
      {theme === "light" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </Button>
  );
};

export { ThemeToggle };
