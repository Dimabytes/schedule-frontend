import { FilterFormValues, ScheduleFilter } from './models';

export const convertFormValuesToFilter = ({
  weekday,
  isEven,
  excludedLessons,
}: FilterFormValues): ScheduleFilter => ({
  weekday: weekday.value,
  isEven,
  excludedLessonTypes: excludedLessons.map((el) => el.value),
});
