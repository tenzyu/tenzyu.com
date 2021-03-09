import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TheHeader.module.scss';

const TheHeader: React.FC = () => (
  <header
    className={`${styles.header} flex sticky z-50 top-0 left-0 h-16 mb-4 px-4`}
  >
    <div className="w-full container mx-auto max-w-screen-lg items-center flex justify-between">
      <Link href="/">
        <Image
          src="/img/cat.png"
          alt="cat"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      <nav className="text-xl pr-3">
        <Link href="/blog/">Blog</Link>
      </nav>
    </div>
  </header>
);

export { TheHeader };
