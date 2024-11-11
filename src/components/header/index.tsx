import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import styles from './style.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaLaptopCode className={styles.logoIcon} /> {/* Ícone adicionado */}
        CodTeech
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/sobre" className={styles.navLink}>Sobre</a>
          </li>
          <li className={styles.navItem}>
            <a href="/servicos" className={styles.navLink}>Serviços</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contato" className={styles.navLink}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
