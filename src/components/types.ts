export interface SlideImageProps {
  src: string;
  offset?: string;
}

export interface SlideItemProps {
  images: SlideImageProps[];
  title?: string;
  url: string;
}

export interface SliderProps {
  slides: SlideItemProps[];
}
