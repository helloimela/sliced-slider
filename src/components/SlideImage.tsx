import { FC } from 'react';
import cn from 'classnames';

import styles from './SlideImage.module.scss';
import { SlideImageProps } from './types';

export const SlideImage: FC<SlideImageProps> = ({ src, offset, isActive, className }) => {
  return (
    <div
      className={cn(styles.slideImage, isActive ? styles.active : '', styles[className])}
      style={{ backgroundPositionX: `${offset}`, backgroundImage: `linear-gradient(0deg, rgba(6,6,6,0.5) 0%, rgba(65,65,65,0.1) 80%), url(${src})` }}
    />
  );
};
