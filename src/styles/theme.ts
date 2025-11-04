const breakpoints = {
  mobile: 767,
  tablet: 1023,
  pc: 1024,
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  pc: `@media (min-width: ${breakpoints.pc}px)`,
};

export const theme = {
  colors: {
    primary: '#DF2781',
    mainPink: '#E4007F',
    subPink: '#F19EC2',
    burgundyDS: '#981A45',
    white: '#FFF',
    black: '#000',
    black70: 'rgba(0, 0, 0, 0.7)',
    gray: '#2F353B',
    subGray: '#878C9E',
    paleBlue: '#E8F2FF',
  },
  breakpoints,
  media,
};

export type ThemeType = typeof theme;
