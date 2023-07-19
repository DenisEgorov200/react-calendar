import { Select } from 'components/ui/Select/Select.jsx';
import { useState } from 'react';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <Select isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
};
