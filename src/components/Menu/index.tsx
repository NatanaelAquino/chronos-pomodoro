import { HistoryIcon, HouseIcon,  SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Styles.module.css';

export function Menu() {
  return (
    <nav className={styles.Menu}>
      <a href='#' className={styles.MenuLink}>
        <HouseIcon />
      </a>
        <a href='#' className={styles.MenuLink}>
        <HistoryIcon />
      </a>
        <a href='#' className={styles.MenuLink}>
        <SettingsIcon />
      </a>
        <a href='#' className={styles.MenuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
