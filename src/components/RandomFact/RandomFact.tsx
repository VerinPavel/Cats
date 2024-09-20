import styles from './RandomFact.module.scss';
import Image from 'next/image';
import useSWR from 'swr';

import catImage from '/public/Random_fact.webp';
import fetchRandomFact from '@/shared/api/fetchRandomFact';
import { IFact } from '@/shared/types/api';
import Button from '@/shared/ui/Button/Button';

export default function RandomFact() {
  const {
    data: randomFact,
    error,
    mutate,
  } = useSWR<IFact>('/api/random-fact', fetchRandomFact, {
    revalidateOnMount: false,
  });

  if (error) return <div>Failed to load data</div>;
  if (!randomFact) return <div className={styles.loader}></div>;

  return (
    <div className={styles.section}>
      <div className={styles.sectionText}>
        <h2 className={styles.title}>{randomFact.fact}</h2>
        <p className={styles.description}>{randomFact.length}</p>
        <Button handleClick={() => mutate()} />
      </div>
      <Image className={styles.image} src={catImage} alt={randomFact.fact} />
    </div>
  );
}
