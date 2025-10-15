/**
 * @file next.config.ts - Next.js 프로젝트 전역 설정
 *
 * 이 파일에서는 Next.js 프로젝트의 빌드, 이미지, Webpack, 절대 경로,
 * SVG 처리 등 프로젝트 전반에 필요한 설정을 정의합니다.
 *
 * @note
 * - reactStrictMode: 개발 중 double render 문제로 일시 해제 가능
 * - webpack alias: '@/...' 형식으로 src 경로 접근 가능
 * - svg: 컴포넌트처럼 import 가능하게 설정
 *
 * @author 목소연
 */

import path from "path";
import type { NextConfig } from "next";

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
   * - SVG를 React 컴포넌트처럼 import 가능
   */
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  /**
   * @description 정적 / 서버 렌더링 모드
   * - output: "standalone" -> 서버용 빌드
   * - output: "export" -> 정적 사이트용
   * - 필요에 따라 주석 해제 후 사용
   */
  // output: "standalone",
  // output: "export",
};

export default nextConfig;
