import { useState } from 'react';
import { format, getMonth, parse, startOfToday, startOfWeek } from 'date-fns';
import clsx from 'clsx';

import { months } from '@/constants/constants.js';

import styles from './CalendarMonth.module.scss';

export const CalendarMonth = () => {
  const today = startOfToday();
  const [currentDate] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());
  const [selectedMonth, setSelectedMonth] = useState(startOfWeek(firstDayCurrentDate).getDate());

  console.log(selectedMonth);

  return (
    <ul className={styles.calendarNames}>
      {months.map((month, monthIdx) => (
        <li
          key={month}
          className={clsx(
            styles.calendarItem,
            { [styles.active]: monthIdx === selectedMonth },
            { [styles.today]: today.getMonth() === monthIdx },
          )}
          onClick={() => setSelectedMonth(monthIdx)}>
          {month}
        </li>
      ))}
    </ul>
  );
};
