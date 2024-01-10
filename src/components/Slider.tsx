import { FC } from 'react';
import { SlideItem } from './SlideItem';

import './Slider.module.scss';
import { SliderProps } from './types';

export const Slider: FC<SliderProps> = ({ slides }) => {
  return (
    <>
      {slides.map(({ images, url, title }) => (
        <SlideItem images={images} url={url} title={title} />
      ))}
    </>
  );
};
