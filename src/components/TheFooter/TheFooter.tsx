import React from 'react';
import styles from './TheFooter.module.scss';

const TheFooter: React.FC = () => (
  <footer
    className={`${styles.footer} h-16 mt-4 flex justify-center items-center`}
  >
    <small>© Tenzyu Masuda</small>
  </footer>
);

export { TheFooter };
