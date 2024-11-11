import React from 'react';
import styles from './style.module.css';

const Sobre: React.FC = () => {
  return (
    <section className={styles.sobreSection}>
      <div className={styles.intro}>
        <h1 className={styles.titulo}>Sobre Nós</h1>
        <p className={styles.descricao}>
          Somos uma empresa focada em soluções tecnológicas inovadoras, desenvolvendo softwares que impulsionam o sucesso dos nossos clientes. Acreditamos no poder da tecnologia para transformar ideias em realidade.
        </p>
      </div>

      <div className={styles.missaoVisao}>
        <div className={styles.bloco}>
          <h2 className={styles.subtitulo}>Nossa Missão</h2>
          <p>Desenvolver soluções que simplifiquem a vida das pessoas e ampliem o potencial das empresas.</p>
        </div>
        <div className={styles.bloco}>
          <h2 className={styles.subtitulo}>Nossa Visão</h2>
          <p>Ser referência em inovação e qualidade no desenvolvimento de softwares sob medida.</p>
        </div>
      </div>

      <div className={styles.servicos}>
        <h2 className={styles.subtitulo}>Serviços</h2>
        <ul className={styles.listaServicos}>
          <li>Desenvolvimento Web</li>
          <li>Aplicações Móveis</li>
          <li>Consultoria em TI</li>
          <li>Integração de Sistemas</li>
        </ul>
      </div>

    

      <a href="/contato" className={styles.botaoContato}>Entre em Contato</a>
    </section>
  );
};

export default Sobre;
