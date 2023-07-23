import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  parse,
  startOfToday,
  startOfWeek,
  isToday,
} from 'date-fns';
import clsx from 'clsx';

import { weekDays } from '@/constants/constants.js';
import { Header } from 'components/Header/Header.jsx';
import { CalendarDate } from 'components/CalendarDate/CalendarDate.jsx';
import { CalendarMonth } from 'components/CalendarMonth/CalendarMonth.jsx';

import styles from './Calendar.module.scss';

export const Calendar = () => {
  const { isSelectYear } = useSelector((state) => state.select);

  return (
    <div className={styles.calendar}>
      <Header />
      <div className={clsx(styles.calendarContainer, styles.container)}>
        {!isSelectYear ? <CalendarDate /> : <CalendarMonth />}
      </div>
    </div>
  );
};
