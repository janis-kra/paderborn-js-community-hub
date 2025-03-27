import { useContext } from 'react';
import { ThemeProviderContext } from '../components/ThemeProvider';

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  // Add a toggleTheme function for easy theme switching
  const toggleTheme = () => {
    context.setTheme(context.theme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme: context.theme,
    setTheme: context.setTheme,
    toggleTheme,
  };
} 