import { LessonType, Weekday } from './models';

export const weekdayOptions = [
  {
    value: Weekday.Monday,
    label: 'Понедельник',
  },
  {
    value: Weekday.Tuesday,
    label: 'Вторник',
  },
  {
    value: Weekday.Wednesday,
    label: 'Среда',
  },
  {
    value: Weekday.Thursday,
    label: 'Четверг',
  },
  {
    value: Weekday.Friday,
    label: 'Пятница',
  },
  {
    value: Weekday.Saturday,
    label: 'Суббота',
  },
  {
    value: Weekday.Sunday,
    label: 'Воскресенье',
  },
];

export const excludedLessonOptions = [
  {
    value: LessonType.Lesson1,
    label: '1 пара',
  },
  {
    value: LessonType.Lesson2,
    label: '2 пара',
  },
  {
    value: LessonType.Lesson3,
    label: '3 пара',
  },
  {
    value: LessonType.Lesson4,
    label: '4 пара',
  },
  {
    value: LessonType.Lesson5,
    label: '5 пара',
  },
  {
    value: LessonType.Lesson6,
    label: '6 пара',
  },
];

export const noOptionsMessage = (): string => 'Пусто';
export const selectPlaceholder = 'Выберите...';
