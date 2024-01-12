import { FC, useEffect, useState } from 'react';
import { SlideItem } from './SlideItem';

import styles from  './Slider.module.scss';
import { SliderProps } from './types';
import { SlideNavigation } from './SlideNavigation';

export const Slider: FC<SliderProps> = ({ slides }) => {

  const [activeSlide, setActiveSlide] = useState<number>();

  useEffect(() => {
    setActiveSlide(slides[0].id);
  }, []);

  const onNavClick = (e, slideId) => {
    e.preventDefault();
    setActiveSlide(slideId);
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slideItemContainer}>
      {slides.map(({ id, images, url, title }) => (
          <SlideItem
            key={id}
            id ={id}
            images={images}
            url={url}
            title={title}
            active={id === activeSlide ? true : false}
          />
        ))}
      </div>
      <div className={styles.navigationWrapper}>
          {slides.map(({id, title}) => (
            <SlideNavigation
              key={id}
              slideId={id}
              title={title}
              active={id === activeSlide ? true : false} 
              onNavClick={onNavClick}
            />
          ))}
      </div>
    </div>
  );
};
