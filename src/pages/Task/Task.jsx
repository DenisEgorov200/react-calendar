import { useState } from 'react';
import clsx from 'clsx';

import { Modal } from 'components/ui/Modal/Modal.jsx';
import { Button } from 'components/ui/Button/Button.jsx';

import styles from './Task.module.scss';

export const Task = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.task}>
      <div className={clsx(styles.taskContainer, styles.container)}>
        <Button className={styles.taskBtn} onClick={() => setActive(true)}>
          + New account
        </Button>
        <ul className={styles.taskList}>
          <li className={styles.taskItem}></li>
        </ul>
      </div>
      <Modal active={active} setActive={setActive} className={styles.taskModal}>
        <div className={styles.taskHeader}>
          <input type="text" className={styles.taskInput} placeholder={'Новая задача'} />
        </div>
        <div className={styles.taskBody}>
          <input type="time" className={styles.taskInput} />
          <input type="time" className={styles.taskInput} />
        </div>
        <div className={styles.taskFooter}>
          <Button>Add task</Button>
        </div>
      </Modal>
    </div>
  );
};
