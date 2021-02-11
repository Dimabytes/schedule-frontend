import React from 'react';
import { render } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { SchedulePage } from './SchedulePage';
import { backendUrl, routers } from './services';
import { ClassroomSchedule } from './models';

const exampleSchedule: ClassroomSchedule[] = [
  {
    room: '200',
    roomId: '123',
    isLesson1: true,
    isLesson2: false,
    isLesson3: true,
    isLesson4: true,
    isLesson5: true,
    isLesson6: true,
  },
  {
    room: '100',
    roomId: '123',
    isLesson1: true,
    isLesson2: true,
    isLesson3: true,
    isLesson4: false,
    isLesson5: true,
    isLesson6: true,
  },
];

describe('componentTest', () => {
  beforeAll(() => {
    fetchMock.post(`${backendUrl}${routers.getSchedule()}`, {
      body: [exampleSchedule],
      status: 200,
    });
  });

  test('render table', async () => {
    const screen = render(<SchedulePage />);
    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
  });
});
