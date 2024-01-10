import { FC } from 'react';
import { Slider } from './components/Slider';
import './style.scss';
import { SlideItemProps } from './components/types';

export const App: FC<{ name: string }> = ({ name }) => {
  const slides: SlideItemProps[] = [
    {
      images: [
        {
          src: 'https://picsum.photos/id/12/800/600',
        },
        {
          src: 'https://picsum.photos/id/13/800/600',
        },
        {
          src: 'https://picsum.photos/id/14/800/600',
        },
        {
          src: 'https://picsum.photos/id/15/800/600',
        },
        {
          src: 'https://picsum.photos/id/16/800/600',
        },
      ],
      url: 'https://www.google.com/',
      title: 'When ocean rises',
    },
  ];
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};
