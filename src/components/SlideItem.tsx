import { FC } from 'react';

import './SlideItem.scss';

interface SlideItemProps {
  src: string;
  offset?: string;
}

export const SlideItem: FC<SlideItemProps> = ({ src, offset }) => {
  return (
    <img
      className="slideItem"
      src={src}
      style={{ objectPosition: `${offset} 50%` }}
    />
  );
};
