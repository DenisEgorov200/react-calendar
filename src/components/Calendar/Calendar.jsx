import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import { weekDays } from 'components/constants/constants.js';

import styles from './Calendar.module.scss';
import { useState } from 'react';

export const Calendar = () => {
  const today = startOfToday();
  const [currentDate, setCurrentDate] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());

  console.log(currentDate);

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentDate),
    end: endOfWeek(endOfMonth(firstDayCurrentDate)),
  });

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarGrid}>
        <ul className={styles.calendarNames}>
          {weekDays.map((weekDay) => (
            <li key={weekDay}>{weekDay}</li>
          ))}
        </ul>
        <ul className={styles.calendarNumbers}>
          {calendarDays.map((day, dayIdx) => (
            <li key={dayIdx}>{format(day, 'd')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
