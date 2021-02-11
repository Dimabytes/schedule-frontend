import React, { FC, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Filter } from './Filter';
import { Table } from './Table';
import { weekdayOptions, excludedLessonOptions } from './consts';
import { convertFormValuesToFilter } from './utils';
import { getSchedule } from './services';

import styles from './SchedulePage.module.scss';
import { ClassroomSchedule, FilterFormValues } from './models';

const filterInitialValues: FilterFormValues = {
  isEven: false,
  weekday: weekdayOptions[0],
  excludedLessons: [excludedLessonOptions[0]],
};

export const SchedulePage: FC = () => {
  const [filter, setFilter] = useState(convertFormValuesToFilter(filterInitialValues));
  const [tableData, setTableData] = useState<ClassroomSchedule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    getSchedule(filter).then((data) => {
      setTableData(data);
      setIsLoading(false);
    });
  }, [filter]);

  return (
    <div className={styles.root}>
      <h1 className={styles.header}>🐜 Anthill 🐜</h1>
      <div className={styles.contentWrapper}>
        <Filter onChangeFilter={setFilter} initialValues={filterInitialValues} />
        {isLoading ? (
          <div className={styles.loaderWrapper}>
            <Loader type="BallTriangle" color="#1976d2" height={100} width={100} />
          </div>
        ) : (
          <Table data={tableData} />
        )}
      </div>
    </div>
  );
};
