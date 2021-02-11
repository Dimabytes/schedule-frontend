import React, { FC, useState } from 'react';
import { Filter } from './Filter';
import { Table } from './Table';
import { weekdayOptions, excludedLessonOptions } from './consts';
import { convertFormValuesToFilter } from './utils';

import styles from './SchedulePage.module.scss';
import { FilterFormValues } from './models';

const filterInitialValues: FilterFormValues = {
  isEven: false,
  weekday: weekdayOptions[0],
  excludedLessons: [excludedLessonOptions[0]],
};

export const SchedulePage: FC = () => {
  const [filter, setFilter] = useState(convertFormValuesToFilter(filterInitialValues));

  console.log(filter);

  return (
    <div className={styles.root}>
      <h1 className={styles.header}>🐜 Anthill 🐜</h1>
      <div className={styles.contentWrapper}>
        <Filter onChangeFilter={setFilter} initialValues={filterInitialValues} />
        <Table />
      </div>
    </div>
  );
};
