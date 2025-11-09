/**
 * @file Emotion 테마 타입 확장을 위한 선언 파일
 *
 * 이 파일은 @emotion/react의 Theme 인터페이스를 확장하여
 * 프로젝트 전역에서 theme 객체의 타입을 자동 인식하도록 도와줍니다.
 *
 * GlobalStyles, styled 등 Emotion API에서 theme 사용 시
 * 자동 완성 및 타입 안전성을 제공합니다.
 *
 * @example
 * // theme.ts에 정의된 색상 팔레트를 기반으로 자동 완성 예시
 * import styled from "@emotion/styled";
 *
 * const Box = styled.div`
 *   color: ${({ theme }) => theme.colors.primary};
 * `;
 *
 * @note
 * 이 파일은 직접 렌더링되는 컴포넌트를 포함하지 않으며,
 * Emotion Theme 타입 시스템 확장을 위해서만 사용됩니다.
 *
 * @author 목소연
 **/

import '@emotion/react';
import { theme } from './theme';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  export type Theme = ThemeType;
}
