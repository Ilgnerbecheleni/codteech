import React from 'react';
import styles from './style.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre Nós</h1>
        <p className={styles.text}>
          Somos a <strong>Codteech</strong>, uma empresa focada em soluções tecnológicas inovadoras, desenvolvendo softwares que impulsionam o sucesso dos nossos clientes. Acreditamos no poder da tecnologia para transformar ideias em realidade.
        </p>
      </div>
    </div>
  );
};

export default Home;
