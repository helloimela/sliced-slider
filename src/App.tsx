import { FC, useState } from 'react';
import { SlideItem } from './components/SlideItem';
import './style.scss';

export const App: FC<{ name: string }> = ({ name }) => {
  const [hoverOffset, setHoverOffset] = useState<string>('50%');

  const handleSlideHover = (e: React.MouseEvent) => {
    const innerWidth = window.innerWidth;
    const calcOffset = (e.clientX / innerWidth) * 100;
    setHoverOffset(`${calcOffset}%`);
  };
  return (
    <div>
      <div className="slideWrapper">
        <ul onMouseMove={(e) => handleSlideHover(e)}>
          <li className="slideItemList">
            <SlideItem
              src="https://picsum.photos/id/14/600/800"
              offset={hoverOffset}
            />
          </li>
          <li className="slideItemList">
            <SlideItem
              src="https://picsum.photos/id/15/600/800"
              offset={hoverOffset}
            />
          </li>
          <li className="slideItemList">
            <SlideItem
              src="https://picsum.photos/id/16/600/800"
              offset={hoverOffset}
            />
          </li>
          <li className="slideItemList">
            <SlideItem
              src="https://picsum.photos/id/17/600/800"
              offset={hoverOffset}
            />
          </li>
          <li className="slideItemList">
            <SlideItem
              src="https://picsum.photos/id/13/600/800"
              offset={hoverOffset}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
