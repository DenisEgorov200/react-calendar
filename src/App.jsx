import { Calendar } from 'components/Calendar/Calendar.jsx';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Calendar />
      <Calendar />
      <Calendar />
    </div>
  );
}

export default App;
