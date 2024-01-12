import * as React from "react";

export interface SlideImageProps {
  src: string;
  offset?: string;
}

export interface SlideItemProps {
  images: SlideImageProps[];
  title?: string;
  url: string;
  id: number;
  active?: boolean;
}

export interface SliderProps {
  slides: SlideItemProps[];
}

export interface SlideNavigationProps {
  slideId: number;
  title?: string;
  active: boolean;
  onNavClick?: (e: React.MouseEvent, id: number) => void;
}
