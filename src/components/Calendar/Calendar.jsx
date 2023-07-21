import { useState } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import clsx from 'clsx';

import { weekDays } from 'components/constants/constants.js';
import { Header } from 'components/Header/Header.jsx';

import styles from './Calendar.module.scss';

export const Calendar = () => {
  const today = startOfToday();
  const [currentDate] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());
  const [indexDay, setIndexDay] = useState(startOfWeek(firstDayCurrentDate).getDate() + 1);

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentDate),
    end: endOfWeek(endOfMonth(firstDayCurrentDate)),
  });

  return (
    <div className={styles.calendar}>
      <Header />
      <div className={clsx(styles.calendarContainer, styles.container)}>
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
                { [styles.active]: dayIdx === indexDay },
              )}
              onClick={() => setIndexDay(dayIdx)}>
              {format(day, 'd')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
