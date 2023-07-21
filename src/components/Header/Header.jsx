import clsx from 'clsx';

import { SelectWrapper } from 'components/SelectWrapper/SelectWrapper.jsx';
import { RadioButton } from 'components/ui/RadioButton/RadioButton.jsx';

import styles from './Header.module.scss';
import { useState } from 'react';

const radioItems = ['month', 'year'];
const radioItems1 = ['day', 'hours'];

export const Header = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('');

  const onChangeInput = (item) => {
    setSelectedRadioBtn(item);
  };

  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        <SelectWrapper />
        <RadioButton
          radioItems={radioItems}
          onChangeInput={onChangeInput}
          selectedRadioBtn={selectedRadioBtn}
        />
        <RadioButton
          radioItems={radioItems1}
          onChangeInput={onChangeInput}
          selectedRadioBtn={selectedRadioBtn}
        />
      </div>
    </header>
  );
};
