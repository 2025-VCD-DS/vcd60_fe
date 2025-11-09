import IcSquare from '@/assets/icon/ic-square.svg?url';
import IcCircle from '@/assets/icon/ic-circle.svg?url';
import IcTriangle from '@/assets/icon/ic-triangle.svg?url';

export interface SubjectData {
  id: string;
  iconUrl: string;
  subjectRough: string;
  subjectEng: string;
  subjectKor: string;
  subjectProfessor: string;
  subjectText: string;
}

export const SUBJECT_ICONS = {
  SQUARE: IcSquare,
  CIRCLE: IcCircle,
  TRIANGLE: IcTriangle,
} as const;

export const SUBJECTS: SubjectData[] = [
  {
    id: 'communication-design',
    iconUrl: SUBJECT_ICONS.SQUARE,
    subjectRough: 'Rough Sketches of the Messenger',
    subjectKor: '커뮤니케이션 디자인',
    subjectEng: 'communication design project',
    subjectProfessor: '이승진',
    subjectText:
      '커뮤니케이션 디자인은 메시지를 전달하는 매개체로서 메신저가 지니는 다양한 기호와 신호를 탐구합니다.\n\nUX·UI 디자인, 편집 디자인, 브랜딩 등 다양한 프로젝트를 통해 시각언어의 상징 체계를 깊이 이해하며, 이를 바탕으로 창의적이고 효과적인 커뮤니케이션 전략을 설계합니다.',
  },
  {
    id: 'illustration-design',
    iconUrl: SUBJECT_ICONS.CIRCLE,
    subjectRough: 'Hand-drawn Rough Sketches',
    subjectKor: '스토리텔링 일러스트 디자인',
    subjectEng: 'storytelling illustration project',
    subjectProfessor: '김승민',
    subjectText:
      '일러스트레이션은 손끝에서 탄생하는 독창적인 기호와 표현의 세계에 몰입하여, 개개인의 특유의 감성과 개성을 탐구합니다.\n\n스토리 편집 및 각색 과정을 거쳐 그림책과 인쇄물로 제작하고, 출판 기획 및 화면 구성, 일러스트를 활용한 굿즈 상품 제작 등을 통해 다양한 실무 경험을 체험하며 전문성을 키웁니다.',
  },
  {
    id: 'video-design',
    iconUrl: SUBJECT_ICONS.TRIANGLE,
    subjectRough: 'Rough Sketches within the Frame',
    subjectKor: '영상 콘텐츠 디자인',
    subjectEng: 'video content design project',
    subjectProfessor: '박지다',
    subjectText:
      '영상 디자인은 영상 속 프레임이 담아내는 시각 기호와 신호를 해석하고 재구성합니다.\n\n2D·3D 애니메이션, 캐릭터 및 상품 디자인 제작을 통해 자신만의 독자적인 작품 세계를 조성하며, 실무를 체험하는 동시에 영상 매체의 문법을 이해하는 여정을 함께합니다.',
  },
];
