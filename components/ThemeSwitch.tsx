import React, { useState, useEffect } from "react";
import { useTheme, Theme } from "remix-themes";
import { Button } from "components/ui/button";
import { Moon, Sun } from "lucide-react";

// Switch the theme
const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Click the button to switch the theme
  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  // If it's not a client, return an empty element to avoid SSR issues
  if (!isClient) return null;

  return (
    <Button variant={"ghost"} size="icon" onClick={toggleTheme}>
      {theme === Theme.DARK ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitch;