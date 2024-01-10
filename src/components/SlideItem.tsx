import { FC, useState } from 'react';
import { SlideImage } from './SlideImage';

import styles from './SlideItem.module.scss';
import { SlideItemProps } from './types';

export const SlideItem: FC<SlideItemProps> = ({ images, url, title }) => {
  const [hoverOffset, setHoverOffset] = useState<string>('50%');

  const handleSlideHover = (e: React.MouseEvent) => {
    const innerWidth = window.innerWidth;
    const calcOffset = (e.clientX / innerWidth) * 100;
    setHoverOffset(`${calcOffset}%`);
  };

  return (
    <div className={styles.slideWrapper}>
      <ul className={styles.slideListParent} onMouseMove={(e) => handleSlideHover(e)}>
        {images.map(({ src }, index) => (
          <li
            key={index}
            className={styles.slideItemList}
            //style={{ transform: 'translateY(17px)' }}
          >
            <SlideImage src={src} offset={hoverOffset} />
          </li>
        ))}
      </ul>
    </div>
  );
};
