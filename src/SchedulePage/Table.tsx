import React, { FC } from 'react';
import { CellProps, Column, Renderer, useTable } from 'react-table';
import cn from 'classnames';
import { ClassroomSchedule } from './models';

import styles from './SchedulePage.module.scss';

const LessonCell = ({ value }: CellProps<ClassroomSchedule, boolean>) => {
  const className = value ? styles.redCell : styles.greenCell;
  return <div className={cn(className, styles.lessonCell)} />;
};

const columns: Array<Column<ClassroomSchedule>> = [
  {
    Header: 'Кабинет',
    accessor: 'room',
  },
  {
    Header: '1 пара',
    accessor: 'isLesson1',
    Cell: LessonCell,
  },
  {
    Header: '2 пара',
    accessor: 'isLesson2',
    Cell: LessonCell,
  },
  {
    Header: '3 пара',
    accessor: 'isLesson3',
    Cell: LessonCell,
  },
  {
    Header: '4 пара',
    accessor: 'isLesson4',
    Cell: LessonCell,
  },
  {
    Header: '5 пара',
    accessor: 'isLesson5',
    Cell: LessonCell,
  },
  {
    Header: '6 пара',
    Cell: LessonCell,
    accessor: 'isLesson6',
  },
];

const data: ClassroomSchedule[] = [
  {
    roomId: '112',
    room: '443',
    isLesson1: true,
    isLesson2: true,
    isLesson3: false,
    isLesson4: false,
    isLesson5: true,
    isLesson6: true,
  },
  {
    roomId: '334',
    room: '444',
    isLesson1: false,
    isLesson2: true,
    isLesson3: true,
    isLesson4: false,
    isLesson5: false,
    isLesson6: true,
  },
];

export const Table: FC = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table className={styles.table} {...getTableProps()}>
      <colgroup>
        <col style={{ width: '6em' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: 'auto' }} />
      </colgroup>
      <thead>
        {headerGroups.map((group) => (
          <tr {...group.getHeaderGroupProps()}>
            {group.headers.map((column) => (
              <th className={styles.headerCell} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className={styles.cell} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
