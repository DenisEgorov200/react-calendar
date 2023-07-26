import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { addTodo, getTodos } from '@/services/todosService.js';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import clsx from 'clsx';

import { Modal } from 'components/ui/Modal/Modal.jsx';
import { Button } from 'components/ui/Button/Button.jsx';
import { Input } from 'components/ui/Input/Input.jsx';

import time from 'assets/icon/time.svg';
import styles from './Task.module.scss';

export const Task = () => {
  const { date } = useParams();
  const todoId = uuidv4();
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [timeRange, setTimeRange] = useState({
    startTime: format(new Date(), 'HH:mm'),
    endTime: format(new Date(), 'HH:mm'),
  });

  console.log(timeRange);

  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodos(date),
    queryKey: ['todos', 'all'],
  });

  const onClickAddTask = () => {
    addTodo(todoId, date, inputValue, false);
    setActive(false);
    setInputValue('');
  };

  const handleStartTimeChange = (event) => {
    setTimeRange((prevTimeRange) => ({
      ...prevTimeRange,
      startTime: event.target.value,
    }));
  };

  const handleEndTimeChange = (event) => {
    setTimeRange((prevTimeRange) => ({
      ...prevTimeRange,
      endTime: event.target.value,
    }));
  };

  return (
    <div className={styles.task}>
      <div className={clsx(styles.taskContainer, styles.container)}>
        <Button className={styles.taskBtn} onClick={() => setActive(true)}>
          + New account
        </Button>
        <ul className={styles.taskList}>
          {isLoading && <span>loading</span>}
          {todos?.map((todo) => (
            <li key={todo.id} className={styles.taskItem}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
      <Modal active={active} setActive={setActive} className={styles.taskModal}>
        <div className={styles.taskHeader}>
          <Input
            type="text"
            placeholder={'Новая задача'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className={styles.taskBody}>
          <div className={styles.taskInputWrapper}>
            <Input
              type="time"
              className={styles.taskInput}
              value={timeRange.startTime}
              onChange={handleStartTimeChange}
            />
            <img className={styles.taskImg} src={time} alt="time" />
          </div>
          <div className={styles.taskInputWrapper}>
            <Input
              type="time"
              className={styles.taskInput}
              value={timeRange.endTime}
              onChange={handleEndTimeChange}
            />
            <img className={styles.taskImg} src={time} alt="time" />
          </div>
        </div>
        <div className={styles.taskFooter}>
          <Button onClick={onClickAddTask}>Add task</Button>
        </div>
      </Modal>
    </div>
  );
};
