import { useState } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';

import clsx from 'clsx';
import styles from './CalendarMonth.module.scss';
import { months } from '@/constants/constants.js';

export const CalendarMonth = () => {
  const today = startOfToday();
  const [currentDate, setCurrentDate] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());
  const [selectedDay, setSelectedDay] = useState(startOfWeek(firstDayCurrentDate).getDate());

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentDate),
    end: endOfWeek(endOfMonth(firstDayCurrentDate)),
  });

  return (
    <ul className={styles.calendarNames}>
      {months.map((weekDay) => (
        <li key={weekDay} className={styles.calendarItem}>
          {weekDay}
        </li>
      ))}
    </ul>
  );
};
