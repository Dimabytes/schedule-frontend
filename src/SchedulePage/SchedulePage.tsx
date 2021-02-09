import React, { FC } from 'react';
import { Filter } from './Filter';
import { Table } from './Table';

import styles from './SchedulePage.module.scss';

export const SchedulePage: FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>🐜 Anthill 🐜</h1>

      <Filter />

      <Table />
    </div>
  );
};
