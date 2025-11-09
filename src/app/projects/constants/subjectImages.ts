// PC (1920px) images
import ImgCommunicationPc from '@/assets/image/1920-img_communication.svg?url';
import ImgIllustrationPc from '@/assets/image/1920-img_illustration.svg?url';
import ImgMediaPc from '@/assets/image/1920-img_media.svg?url';

// Tablet (1280px) images
import ImgCommunicationTablet from '@/assets/image/1280-img_communication.svg?url';
import ImgIllustrationTablet from '@/assets/image/1280-img_illustration.svg?url';
import ImgMediaTablet from '@/assets/image/1280-img_media.svg?url';

// Mobile (360px) images
import ImgCommunicationMobile from '@/assets/image/360-img_communication.svg?url';
import ImgIllustrationMobile from '@/assets/image/360-img_illustration.svg?url';
import ImgMediaMobile from '@/assets/image/360-img_media.svg?url';

export interface ResponsiveImage {
  pc: string;
  tablet: string;
  mobile: string;
}

export interface SubjectImages {
  [key: string]: ResponsiveImage;
}

export const SUBJECT_IMAGES: SubjectImages = {
  'communication-design': {
    pc: ImgCommunicationPc,
    tablet: ImgCommunicationTablet,
    mobile: ImgCommunicationMobile,
  },
  'illustration-design': {
    pc: ImgIllustrationPc,
    tablet: ImgIllustrationTablet,
    mobile: ImgIllustrationMobile,
  },
  'video-design': {
    pc: ImgMediaPc,
    tablet: ImgMediaTablet,
    mobile: ImgMediaMobile,
  },
} as const;
