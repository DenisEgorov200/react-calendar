import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { setIsSelectedYear } from '@/store/select/selectSlice.js';
import { SelectWrapper } from 'components/SelectWrapper/SelectWrapper.jsx';
import { RadioButton } from 'components/ui/RadioButton/RadioButton.jsx';

import styles from './Header.module.scss';

const radioItems = [
  { id: 1, name: 'date', value: 'month', label: 'month', checked: false },
  { id: 2, name: 'date', value: 'year', label: 'year', checked: false },
];

export const Header = () => {
  const dispatch = useDispatch();

  const onChangeRadio = (selectedItem) => {
    dispatch(setIsSelectedYear(selectedItem.value));
  };

  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        <SelectWrapper />
        <RadioButton radioItems={radioItems} onChangeRadio={onChangeRadio} />
      </div>
    </header>
  );
};
