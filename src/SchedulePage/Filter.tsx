import { Formik, Field, Form } from 'formik';
import React, { FC, useCallback } from 'react';
import Select from 'react-select';
import { LessonType, Weekday } from './models';

import styles from './SchedulePage.module.scss';

const weekdayOptions = [
  {
    value: Weekday.Monday,
    label: 'Понедельник',
  },
  {
    value: Weekday.Thursday,
    label: 'Вторник',
  },
];

const excludedLessonOptions = [
  {
    value: LessonType.Lesson1,
    label: '1 пара',
  },
  {
    value: LessonType.Lesson2,
    label: '2 пара',
  },
];

export const Filter: FC = () => {
  const onSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }, []);
  return (
    <Formik
      initialValues={{
        isEven: false,
        weekday: weekdayOptions[0],
        excludedLessons: [excludedLessonOptions[0]],
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Form className={styles.formWrapper}>
          <div className={styles.fieldWrapper}>
            <p>Четная неделя</p>
            <Field type="checkbox" name="isEven" />
          </div>

          <div className={styles.fieldWrapper}>
            <p>День недели</p>
            <Select
              className={styles.filterSelect}
              onChange={(value) => setFieldValue('weekday', value)}
              value={values.weekday}
              options={weekdayOptions}
            />
          </div>

          <div className={styles.fieldWrapper}>
            <p>Исключенные пары</p>
            <Select
              className={styles.filterSelect}
              onChange={(value) => setFieldValue('excludedLessons', value)}
              value={values.excludedLessons}
              options={excludedLessonOptions}
              isMulti
            />
          </div>

          <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
            Фильтровать
          </button>
        </Form>
      )}
    </Formik>
  );
};
