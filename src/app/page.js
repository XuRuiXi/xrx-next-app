import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <Image
          src="/飞驰的木马.jpg"
          alt="Picture of the author"
          className={styles.author}
          width={100}
          height={100}
        />
        <div className={styles.infoContent}>
          <Link href="/info/mine">个人资料</Link>
          <Link href="/workExperience">工作经历</Link>
          <Link href="/project">项目介绍</Link>
          <Link target='_blank' href="https://github.com/XuRuiXi">github</Link>
        </div>
      </div>
    </div>
  )
}
