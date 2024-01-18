import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { SlideImage } from './SlideImage';
import styles from './SlideItem.module.scss';
import { SlideItemProps } from './types';
import * as React from 'react';

export const SlideItem: FC<SlideItemProps> = ({ images, url, title, active, className }) => {
  const [hoverOffset, setHoverOffset] = useState<string>('50%');
  const [offsetY, setOffsetY] = useState<number[]>([]);

  const handleSlideHover = (e: React.MouseEvent) => {
    const innerWidth = window.innerWidth;
    const calcOffset = (e.clientX / innerWidth) * 100;
    setHoverOffset(`${calcOffset}%`);
  };
  const calcOffsetY = (index: number): string => {
    const rand = Math.floor(Math.random() * 30) + 1;
    if (index !== 0 && index%1) {
      return `${rand * -1}px`;
    } else {
      return `${rand * -1}px`;
    }
  }

  useEffect(() => {
    const offsets = [];
    images.map((image, index) => {
      const value = calcOffsetY(index);
      offsets.push(value);
    });
    setOffsetY(offsets);
  }, [active]);
 
  return (
    <div className={cn(styles.slideItemContainer, active ? styles.activeSlide : '', styles[className])} onMouseMove={(e) => handleSlideHover(e)}>
        <h2 className={styles.slideTitle}>{title}</h2>
        <ul className={cn(styles.slideListParent)} style={{"--offsetX": `${hoverOffset}`} as React.CSSProperties}>
          {images.map(({ src }, index) => (
            <li
              key={index}
              className={cn(styles.slideItemList)}
              style={{transform: `translateY(${offsetY[index]})`}}
            >
              <SlideImage src={src} isActive={active} className={className} />
            </li>
          ))}
        </ul>
        <a className={styles.slideButton} href={url}>Discover</a>
      </div>
  );
};
