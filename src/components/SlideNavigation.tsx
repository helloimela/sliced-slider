
import { FC } from 'react';

import styles from './SlideNavigation.module.scss';
import { SlideNavigationProps } from './types';

export const SlideNavigation: FC<SlideNavigationProps> = ({ slideId, title, active = false, onNavClick = () => {} }) => {
  return (
    <button className={active ? styles.buttonActive : ''} title={title} onClick={(e) => onNavClick(e, slideId)}>{title}</button>
  );
};
