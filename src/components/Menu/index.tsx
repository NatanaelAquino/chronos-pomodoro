import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './Styles.module.css';
import { useEffect, useState } from 'react';
type AvailableThems = 'dark' | 'light';

export function Menu() {
  const [Theme, setTheme] = useState<AvailableThems>(() => {
    const strogageTheme = localStorage.getItem('theme') as AvailableThems;
    return strogageTheme === 'light' ? 'light' : 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handlThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextThme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextThme;
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', Theme);
    localStorage.setItem('theme', Theme);
  }, [Theme]);
  return (
    <nav className={styles.Menu}>
      <a
        href='#'
        className={styles.MenuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.MenuLink}
        aria-label='Vê historico'
        title='Vê historico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.MenuLink}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.MenuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handlThemeChange}
      >
        {nextThemeIcon[Theme]}
      </a>
    </nav>
  );
}
