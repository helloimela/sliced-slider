import { FC, useState } from 'react';
import cn from 'classnames';

import { SlideImage } from './SlideImage';
import styles from './SlideItem.module.scss';
import { SlideItemProps } from './types';

export const SlideItem: FC<SlideItemProps> = ({ images, url, title, active }) => {
  const [hoverOffset, setHoverOffset] = useState<string>('50%');

  const handleSlideHover = (e: React.MouseEvent) => {
    const innerWidth = window.innerWidth;
    const calcOffset = (e.clientX / innerWidth) * 100;
    setHoverOffset(`${calcOffset}%`);
  };

  return (
      <div className={cn(styles.slideItemContainer, active ? styles.activeSlide : '')}>
        <h2 className={styles.slideTitle}>{title}</h2>
        <ul className={cn(styles.slideListParent)} onMouseMove={(e) => handleSlideHover(e)}>
          {images.map(({ src }, index) => (
            <li
              key={index}
              className={cn(styles.slideItemList)}
              //style={{ transform: 'translateY(17px)' }}
            >
              <SlideImage src={src} offset={hoverOffset} />
            </li>
          ))}
        </ul>
      </div>
  );
};
