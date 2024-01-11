import { FC } from 'react';

import styles from './SlideNavigation.module.scss';
import { SlideNavigationProps } from './types';

export const SlideNavigation: FC<SlideNavigationProps> = ({ title, active, onNavClick = () => {} }) => {
  return (
    <button className={active ? styles.buttonActive : ''} title={title} onClick={onNavClick}>{title}</button>
  );
};
