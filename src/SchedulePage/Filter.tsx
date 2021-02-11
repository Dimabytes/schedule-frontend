import { Formik, Field, Form } from 'formik';
import React, { FC, useCallback } from 'react';
import Select from 'react-select';
import { FilterFormValues, ScheduleFilter } from './models';
import {
  weekdayOptions,
  excludedLessonOptions,
  noOptionsMessage,
  selectPlaceholder,
} from './consts';

import styles from './SchedulePage.module.scss';
import { convertFormValuesToFilter } from './utils';

export interface FilterProps {
  onChangeFilter: (newValue: ScheduleFilter) => void;
  initialValues: FilterFormValues;
}

export const Filter: FC<FilterProps> = ({ onChangeFilter, initialValues }) => {
  const onSubmit = useCallback((values: FilterFormValues, { setSubmitting }) => {
    setSubmitting(false);
    onChangeFilter(convertFormValuesToFilter(values));
  }, []);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className={styles.formWrapper}>
          <div className={styles.fieldWrapper}>
            <p>День недели</p>
            <Select
              noOptionsMessage={noOptionsMessage}
              placeholder={selectPlaceholder}
              className={styles.filterSelect}
              onChange={(value) => setFieldValue('weekday', value)}
              value={values.weekday}
              options={weekdayOptions}
            />
          </div>

          <div className={styles.fieldWrapper}>
            <p>Исключенные пары</p>
            <Select
              styles={{}}
              placeholder={selectPlaceholder}
              className={styles.filterSelect}
              onChange={(value) => setFieldValue('excludedLessons', value)}
              value={values.excludedLessons}
              options={excludedLessonOptions}
              isMulti
            />
          </div>

          <div className={styles.fieldWrapper}>
            <p>Четная неделя</p>
            <div className={styles.checkboxWrapper}>
              <Field type="checkbox" name="isEven" />
            </div>
          </div>

          <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
            Фильтровать
          </button>
        </Form>
      )}
    </Formik>
  );
};
