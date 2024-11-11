import React from 'react';
import styles from './styles.module.css';
import image1 from '../../assets/sistemaweb.webp';
import image2 from '../../assets/embarcados.webp';
import image3 from '../../assets/consultoriaTI.jpg';

const Servicos: React.FC = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.title}>Nossos Serviços</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src={image1}
            alt="Desenvolvimento de Sistemas WEB"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Desenvolvimento de Sistemas WEB</h3>
          <p className={styles.cardText}>
            Criamos soluções web personalizadas para atender às necessidades específicas do seu negócio, utilizando as tecnologias mais modernas.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={image2}
            alt="Desenvolvimento de Sistemas Embarcados"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Desenvolvimento de Sistemas Embarcados</h3>
          <p className={styles.cardText}>
            Projetamos e implementamos sistemas embarcados para dispositivos específicos, otimizando desempenho e funcionalidade.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={image3}
            alt="Consultoria em TI"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Consultoria em TI</h3>
          <p className={styles.cardText}>
            Oferecemos consultoria especializada para otimizar a infraestrutura de TI da sua empresa e garantir o sucesso das operações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
