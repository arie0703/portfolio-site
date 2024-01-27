'use client'
import styles from '@/styles/components/work-container.module.scss';
import { useState } from 'react';
import { WorkDescription } from '../WorkDescription';
import { work } from '@/consts/work'
import Image from 'next/image';

export const WorkContainer = () => {

  const [selectedWorkIndex, setSelectedWorkIndex] = useState(-1)

  return (
    <div className={styles['workContainer']}>
      <div className={styles['workContainer__flex']}>
        <Image src={work.imagePath} alt={work.title} width={200} height={200} />
        <WorkDescription
          title={work.title}
          description={work.description}
          workUrl={work.workUrl}
          repositoryUrl={work.repositoryUrl}
        />
      </div>
    </div>
  )
}
