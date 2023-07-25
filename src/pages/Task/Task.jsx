import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodos } from '@/services/todosService.js';
import { format } from 'date-fns';
import clsx from 'clsx';

import { Modal } from 'components/ui/Modal/Modal.jsx';
import { Button } from 'components/ui/Button/Button.jsx';
import { Input } from 'components/ui/Input/Input.jsx';

import time from 'assets/icon/time.svg';
import styles from './Task.module.scss';

export const Task = () => {
  const { taskId } = useParams();
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onClickAddTask = () => {
    setActive(false);
    setInputValue('');
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos(taskId);
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  return (
    <div className={styles.task}>
      <div className={clsx(styles.taskContainer, styles.container)}>
        <Button className={styles.taskBtn} onClick={() => setActive(true)}>
          + New account
        </Button>
        <ul className={styles.taskList}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.taskItem}>
              {todo.date}
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
            <Input type="time" className={styles.taskInput} value={format(new Date(), 'HH:mm')} />
            <img className={styles.taskImg} src={time} alt="time" />
          </div>
          <div className={styles.taskInputWrapper}>
            <Input type="time" className={styles.taskInput} value={format(new Date(), 'HH:mm')} />
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
