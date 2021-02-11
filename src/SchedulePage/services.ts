import { ClassroomSchedule, ScheduleFilter } from './models';

export const backendUrl = 'http://localhost:3001';

export const routers = {
  getSchedule: (): string => '/schedule',
};

export const getSchedule = (filter: ScheduleFilter): Promise<ClassroomSchedule[]> => {
  return fetch(`${backendUrl}${routers.getSchedule()}`, {
    method: 'POST',
    body: JSON.stringify(filter),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json());
};
