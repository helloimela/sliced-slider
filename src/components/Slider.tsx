import { FC } from 'react';
import { SlideItem } from './SlideItem';

import styles from  './Slider.module.scss';
import { SliderProps } from './types';
import { SlideNavigation } from './SlideNavigation';

export const Slider: FC<SliderProps> = ({ slides }) => {

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slideItemContainer}>
      {slides.map(({ images, url, title }) => (
          <SlideItem images={images} url={url} title={title} />
        ))}
      </div>
      <div className={styles.navigationWrapper}>
          {slides.map(({title}) => (
            <SlideNavigation title={title} active={false} />
          ))}
      </div>
    </div>
  );
};
