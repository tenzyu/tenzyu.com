import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TheHeader.module.scss';

const TheHeader: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <div>
        <Link href="/">
          <Image
            src="/img/cat.png"
            alt="cat"
            width={50}
            height={50}
            className="inverted"
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/posts/">Posts</Link>
      </nav>
    </div>
  </header>
);

export { TheHeader };
