import styles from './RadioButton.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

const radioItems = ['month', 'year'];

export const RadioButton = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('');
  const isRadioSelected = (value) => selectedRadioBtn === value;

  return (
    <div className={styles.radio}>
      {radioItems.map((item, index) => (
        <label
          key={item}
          className={clsx(styles.radioLabel, { [styles.active]: isRadioSelected(item) })}>
          <input
            type="radio"
            name="date"
            value={item}
            onChange={() => setSelectedRadioBtn(item)}
            checked={isRadioSelected(item)}
          />
          <span>{item}</span>
        </label>
      ))}
      <span className={styles.radioLine}></span>
    </div>
  );
};
