import { useState } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import clsx from 'clsx';

import { weekDays } from '@/constants/constants.js';

import styles from './CalendarDate.module.scss';

export const CalendarDate = () => {
  const today = startOfToday();
  const [currentDate, setCurrentDate] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());
  const [selectedDay, setSelectedDay] = useState(startOfWeek(firstDayCurrentDate).getDate());

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentDate),
    end: endOfWeek(endOfMonth(firstDayCurrentDate)),
  });

  return (
    <>
      <ul className={styles.calendarNames}>
        {weekDays.map((weekDay) => (
          <li key={weekDay} className={styles.calendarName}>
            {weekDay}
          </li>
        ))}
      </ul>
      <ul className={styles.calendarNumbers}>
        {calendarDays.map((day, dayIdx) => (
          <li
            key={dayIdx}
            className={clsx(
              styles.calendarNumber,
              {
                [styles.inactive]: !isSameMonth(day, today),
              },
              { [styles.active]: dayIdx === selectedDay },
              { [styles.today]: isToday(day) },
            )}
            onClick={() => setSelectedDay(dayIdx)}>
            {format(day, 'd')}
          </li>
        ))}
      </ul>
    </>
  );
};
