import { FC } from 'react';
import { Slider } from './components/Slider';
import './style.scss';
import { slides } from './data';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};
