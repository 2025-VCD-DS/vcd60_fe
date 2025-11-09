/**
 * 한글 초성 목록
 */
export const INITIAL_CONSONANTS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/**
 * 전체 한글 초성 목록 (쌍자음 포함)
 */
const FULL_INITIAL_CONSONANTS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/**
 * 한글 문자에서 초성을 추출합니다.
 * @param char - 한글 문자 (한 글자)
 * @returns 초성 또는 null (한글이 아닌 경우)
 */
export function getInitialConsonant(char: string): string | null {
  const code = char.charCodeAt(0);

  // 한글 유니코드 범위: 0xAC00 ~ 0xD7A3
  if (code < 0xac00 || code > 0xd7a3) {
    return null;
  }

  // 초성 추출 공식: (유니코드 - 0xAC00) / 588
  const initialIndex = Math.floor((code - 0xac00) / 588);
  const actualInitial = FULL_INITIAL_CONSONANTS[initialIndex];

  // 쌍자음은 기본 자음으로 매핑
  const mapping: { [key: string]: string } = {
    ㄲ: 'ㄱ',
    ㄸ: 'ㄷ',
    ㅃ: 'ㅂ',
    ㅆ: 'ㅅ',
    ㅉ: 'ㅈ',
  };

  return mapping[actualInitial] || actualInitial;
}

/**
 * 문자열의 첫 글자에서 초성을 추출합니다.
 * @param text - 문자열
 * @returns 첫 글자의 초성 또는 null
 */
export function getFirstInitialConsonant(text: string): string | null {
  if (!text || text.length === 0) {
    return null;
  }

  return getInitialConsonant(text[0]);
}
