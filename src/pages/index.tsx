import styles from '@/shared/styles/index.module.scss';
import { SWRConfig } from 'swr';

import FactsList from '@/widgets/FactsList/FactsList';
import RandomFact from '@/components/RandomFact/RandomFact';
import fetchRandomFact from '@/shared/api/fetchRandomFact';
import { IFact } from '@/shared/types/api';

interface HomePageProps {
  fallback: object;
}

export default function Home({ fallback }: HomePageProps) {
  return (
    <main className={styles.main}>
      <SWRConfig value={{ fallback }}>
        <RandomFact />
      </SWRConfig>
      <FactsList />
    </main>
  );
}

export async function getStaticProps() {
  const randomFact: IFact = await fetchRandomFact();

  return {
    props: {
      fallback: {
        '/api/random-fact': randomFact,
      },
    },
  };
}
