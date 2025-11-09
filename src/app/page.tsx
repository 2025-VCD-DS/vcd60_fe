import * as S from '@/app/pageStyle';
import mainpatch from '@/assets/lottie/mainpatch.lottie.json';

export default function HomePage() {
  return (
    <S.Container>
      <S.BackSign src="/assets/bg-sign-white.svg" alt="backgrond sign" />
      <S.WhiteContainer>
        <S.LottiePlayerWrapper autoplay loop src={mainpatch} />
        <S.Logo src="/assets/logo-exh.svg" alt="The Rough Sketch on the Ground" />
        <S.LeftBox>
          DUKSUNG Women’s University
          <br />
          Visual Communication Design
          <br />
          <strong>60th Graduation Exhibition</strong>
          <br />
          The Rough Sketch on the Ground
        </S.LeftBox>
        <S.RightBox>
          덕성여자대학교 시각디자인 전공 제60회 졸업전시회
          <div>더 러프 스케치 온 더 그라운드</div>
          <strong>홍익대 대학로아트센터 지하2층 제3전시실</strong>
          <strong>2025. 11. 13. — 11. 17.</strong>
        </S.RightBox>
        <S.PosterBox>
          <S.VideoPlayerWrapper autoPlay loop muted playsInline>
            <source src="/assets/poster.mp4" type="video/mp4" />
            브라우저가 동영상을 지원하지 않습니다.
          </S.VideoPlayerWrapper>
          <S.PosterImage />
        </S.PosterBox>
      </S.WhiteContainer>
      <S.BlackContainer>
        <S.Gradient>
          <S.CropSign src="/assets/bg-sign-crop.svg" alt="backgrond sign" />
        </S.Gradient>
        <S.PinkSign src="/assets/bg-sign-pink.svg" alt="backgrond sign" />
        <S.TextArea>
          <S.Title>
            The Rough Sketch on the Ground <br className="mobile-only" /> 더 러프 스케치 온 더 그라운드
          </S.Title>
          <S.Content>
            모든 작업의 시작점이자 앞으로 나아가기 위한 첫걸음.
            <br />
            우리는 첫 발을 디딘 곳에서부터 설렘과 긴장이 뒤섞인
            <br className="mobile-only" /> 러프 스케치를 수없이 그려왔습니다.
            <br />
            <br />
            졸업에 이르기까지 우리는 얼마나 많은 지점을 지나왔을까요? <br />
            출발점에서 시작해 중간 지점을 거쳐 도착점에 도달하기까지, <br />
            우리는 서로 다른 모양의 선을 그으며
            <br className="mobile-only" /> 각자의 여정을 스케치했습니다.
            <br />
            그렇게 무수한 점을 이어 우리만의 표적이 된 각자의
            <br className="mobile-only" /> 사인sign들은, <br className="pc-only" />
            이제 하나의 커다란 전시로 완성됩니다.
            <br />
            <br /> 제60회 시각디자인전공 졸업전시회
            <br />
            &lt;The Rough Sketch on the Ground <br className="mobile-only" />더 러프 스케치 온 더 그라운드&lt;는
            <br />
            총 58명의 디자이너가 참여하는 전시로, <br className="mobile-only" />
            일러스트레이션, 영상디자인, 커뮤니케이션디자인
            <br />
            세 가지 분야의 작품을 선보입니다.
            <br />
            <br />
            이번 전시는, 세상과 마주하기 전 디자이너들의 깊은 고민과 <br className="mobile-only" />
            다양한 해석이 담긴 자리입니다.
            <br />또 다른 작업의 출발점, 우리의 러프 스케치가 새겨지는 <br className="mobile-only" />첫 페이지에
            여러분을 초대합니다.
          </S.Content>
          <S.Title>제 60회 시각디자인학전공 졸업준비위원회</S.Title>
          <S.Credit>
            <S.Position>
              <div>위원장</div>
              <div>부위원장</div>
              <div>총무</div>
              <div>디자인팀</div>
              <div>영상팀</div>
              <div>도록팀</div>
              <div>홍보팀</div>
            </S.Position>
            <S.Person>
              <div>현지원</div>
              <div>박진의</div>
              <div>문소희</div>
              <div>양새연</div>
              <div>나윤서</div>
              <div>양소영</div>
              <div>김려원</div>
              <div>조수연</div>
              <div>김연수</div>
              <div>전아영</div>
              <div>전한나</div>
            </S.Person>
          </S.Credit>
        </S.TextArea>
      </S.BlackContainer>
    </S.Container>
  );
}
