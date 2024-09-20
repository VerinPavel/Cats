import styles from './FactsList.module.scss';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

import { IFact } from '@/shared/types/api';
import fetchFacts from '@/shared/api/fetchFacts';
import Fact from '@/components/Fact/Fact';
import Pagination from '@/components/Pagination/Pagination';
import FactsListLoader from '@/components/FactsListLoader/FactsListLoader';

export default function FactsList() {
  const [pageIndex, setPageIndex] = useState(1);
  const { data: facts, error } = useSWR(`?page=${pageIndex}`, fetchFacts);

  useEffect(() => {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  }, [pageIndex]);

  if (error) return <div>Failed to load data</div>;
  if (!facts) return <FactsListLoader />;

  return (
    <div className={styles.section}>
      <div className={styles.factsList}>
        {facts.map((fact: IFact, index: number) => (
          <Fact fact={fact} key={index} />
        ))}
      </div>
      <Pagination
        onPrevPage={() => setPageIndex((prev) => Math.max(prev - 1, 1))}
        onNextPage={() => setPageIndex((prev) => prev + 1)}
        disabled={pageIndex === 1}
      />
    </div>
  );
}
