import { FC } from 'react';
import cn from 'classnames';

import styles from './SlideImage.module.scss';
import { SlideImageProps } from './types';

export const SlideImage: FC<SlideImageProps> = ({ src, offset, isActive }) => {
  return (
    <img
      className={cn(styles.slideImage, isActive ? styles.active : '')}
      src={src}
      style={{ objectPosition: `${offset} 50%` }}
    />
  );
};
