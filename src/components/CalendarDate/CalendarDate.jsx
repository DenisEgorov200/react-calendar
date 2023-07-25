import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

import { setSelectedDay } from '@/store/select/selectSlice.js';
import { weekDays } from '@/constants/constants.js';

import styles from './CalendarDate.module.scss';

export const CalendarDate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = startOfToday();
  const [currentDate, setCurrentDate] = useState(format(today, 'MMM-yyyy'));
  const { selectedYear, selectedMonth, selectedDay } = useSelector((state) => state.select);
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentDate),
    end: endOfWeek(endOfMonth(firstDayCurrentDate)),
  });

  const onClickDay = (day) => {
    dispatch(setSelectedDay(day));
  };

  useEffect(() => {
    setCurrentDate(`${selectedMonth}-${selectedYear}`);
  }, [selectedMonth, selectedYear]);

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
                [styles.inactive]: !isSameMonth(day, firstDayCurrentDate),
              },
              { [styles.active]: dayIdx === selectedDay },
              { [styles.today]: isToday(day) },
            )}
            onClick={() => onClickDay(dayIdx)}
            onDoubleClick={() =>
              navigate(`/task/${format(day, 'y')}-${format(day, 'MM')}-${format(day, 'dd')}`)
            }>
            {format(day, 'd')}
          </li>
        ))}
      </ul>
    </>
  );
};
