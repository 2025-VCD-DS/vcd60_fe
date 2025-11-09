// PC & Tablet (1920px) images
import ImgCommunicationTextboxPc from '@/assets/image/1920-img_communication_textbox.svg?url';
import ImgIllustrationTextboxPc from '@/assets/image/1920-img_illustration_textbox.svg?url';
import ImgMediaTextboxPc from '@/assets/image/1920-img_media_textbox.svg?url';

// Mobile (360px) images
import ImgCommunicationTextboxMobile from '@/assets/image/360-img_communication_textbox.svg?url';
import ImgIllustrationTextboxMobile from '@/assets/image/360-img_illustration_textbox.svg?url';
import ImgMediaTextboxMobile from '@/assets/image/360-img_media_textbox.svg?url';

export interface ResponsiveTextboxImage {
  pc: string;
  tablet: string;
  mobile: string;
}

export interface SubjectTextboxImages {
  [key: string]: ResponsiveTextboxImage;
}

export const SUBJECT_TEXTBOX_IMAGES: SubjectTextboxImages = {
  'communication-design': {
    pc: ImgCommunicationTextboxPc,
    tablet: ImgCommunicationTextboxMobile,
    mobile: ImgCommunicationTextboxMobile,
  },
  'illustration-design': {
    pc: ImgIllustrationTextboxPc,
    tablet: ImgIllustrationTextboxMobile,
    mobile: ImgIllustrationTextboxMobile,
  },
  'video-design': {
    pc: ImgMediaTextboxPc,
    tablet: ImgMediaTextboxMobile,
    mobile: ImgMediaTextboxMobile,
  },
} as const;
