/**
 * @file next.config.ts - Next.js 프로젝트 전역 설정
 *
 * 이 파일에서는 Next.js 프로젝트의 빌드, 이미지, Webpack, 절대 경로,
 * SVG 처리 등 프로젝트 전반에 필요한 설정을 정의합니다.
 *
 * @note
 * - reactStrictMode: 개발 중 double render 문제로 일시 해제 가능
 * - webpack alias: '@/...' 형식으로 src 경로 접근 가능
 * - svg: 이미지 또는 컴포넌트처럼 import 가능하게 설정
 *
 * @author 목소연, 김서윤
 */

import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * @description React Strict Mode 설정
   * - 개발 중 디버깅 시 double rendering 문제 발생 가능
   * - 일시적으로 false로 변경 가능
   */
  reactStrictMode: true,

  /**
   * @description 외부 이미지 도메인 허용 설정
   * - 외부 이미지 사용 시 반드시 도메인을 추가해야 Next Image 최적화 적용 가능
   * - 필요 시 배열에 도메인 입력 후 사용
   */
  images: {
    domains: [],
  },

  /**
   * @description Webpack 커스터마이징
   * - 절대 경로 alias 설정
   * - SVG를 React 컴포넌트 또는 이미지로 import 가능
   */
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    // 기존 SVG 로더 규칙 찾기
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // SVG를 컴포넌트로 import할 때 (?url이 없는 경우)
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // ?url이 없으면 컴포넌트로
        use: ['@svgr/webpack'],
      },
      // SVG를 이미지로 import할 때 (?url을 붙인 경우)
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // ?url이 있으면 이미지로
      },
    );

    // 기존 파일 로더가 SVG를 처리하지 않도록 수정
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
