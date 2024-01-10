import { FC } from 'react';

import styles from './SlideImage.module.scss';
import { SlideImageProps } from './types';

export const SlideImage: FC<SlideImageProps> = ({ src, offset }) => {
  return (
    <img
      className={styles.slideImage}
      src={src}
      style={{ objectPosition: `${offset} 50%` }}
    />
  );
};
