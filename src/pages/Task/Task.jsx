import clsx from 'clsx';

import { Button } from 'components/ui/Button/Button.jsx';

import styles from './Task.module.scss';

export const Task = () => {
  return (
    <div className={styles.task}>
      <div className={clsx(styles.taskContainer, styles.container)}>
        <Button className={styles.taskBtn}>+ New account</Button>
        <ul className={styles.taskList}>
          <li className={styles.taskItem}></li>
        </ul>
      </div>
    </div>
  );
};
