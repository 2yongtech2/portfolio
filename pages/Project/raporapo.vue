<template>
<div 
  class="body" 
  :style="[
    {'background':PAGE_INFO[currentIndex].color},
    {'--fontColor': '#fff'}
  ]" 
  data-scroll-container
  >
  <div class="wrap-all" :style="alphaState ? 'visibility : hidden' : 'visibility : visible'">
    <section class="sec-1">
      <div class="box-title">
        <h3 class="sub-title fade-out" data-scroll>Web/Mobile Gamification</h3>
      <h1 class="title fade-out" data-scroll>
        <span class="line"> 게이미피케이션 제작 플랫폼</span>
        <span class="fill">RAPORAPO</span>
      </h1>
      </div>
      <div class="box-main" data-scroll>
        <img src="@/assets/images/2.jpg" alt="">
      </div>
    </section>
    <section class="sec-2">
      <div class="d-flex">
        <div class="box-left">
          <h5 class="desc">
            QR코드 기반 Gamification 제작 플랫폼<br>
            '라포라포로 만드는 온오프라인 교실'
          </h5>
          <div class="box-category">
            <dl>
              <dt>클라이언트</dt>
              <dd>큐리어드</dd>
            </dl>
            <dl>
              <dt>카테고리</dt>
              <dd>게이미피케이션, 컨텐츠 메이킹 툴, 적응형</dd>
            </dl>
            <dl>
              <dt>개발 기간</dt>
              <dd>3개월</dd>
            </dl>
            <dl>
              <dt>역할군</dt>
              <dd>퍼블리셔(Markup Dev)</dd>
            </dl>
            <dl>
              <dt>참여율</dt>
              <dd>90%</dd>
            </dl>
            <dl>
              <dt>기술 스택</dt><br>
              <dd>Vue3, Nuxt3, Vu2, Spring, Gitlab, Ts, Js, Html, Scss</dd>
            </dl>
          </div>

          <div class="box-link">
            <a href="https://raporapo.com" target="_blank" class="link" data-scroll>사이트 바로가기</a>
            <a href="" target="_blank" class="link">데모게임 바로가기</a>
          </div>
          <p class="caution">* 라포라포는 유료 결제를 통해 사용을 해볼 수 있어, 하단에 데모 게임 및 이미지를 첨부하였습니다.</p>
        </div>
        <div class="box-right">
          <div class="box-text">
            <p class="category">
              프로젝트 소개
            </p>
            <hr>
            <p class="text">
              라포라포는 QR코드를 활용한 온라인, 오프라인 연계형 게이미피케이션 제작 플랫폼입니다.<br>
              웹과 모바일 각각의 환경에 맞게 적응형으로 제작되었으며, 웹에서는 사용자가 쉽게 게임을 제작하고,<br>
              모바일에서는 사용자가 게임을 즐길 수 있도록 제작되었습니다.
            </p>
          </div>
          <div class="box-text">
            <p class="category">
              수행업무 개요
            </p>
            <hr>
            <p class="text">
              웹은 JAVA spring 기반으로 제작되었으며 모바일은 Vue2 기반, 출시 후에 추가된 라포의회는 Vue3, Nuxt3으로 제작되었습니다.
              메인페이지, 모바일 게임, 문제 제작 툴, 토론 게임 등의 페이지의 마크업을 담당했습니다.
            </p>
            <p class="caution">
              * 상세한 내용은 하기에 작성했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="sec-3">
      <h3 class="sec-title">
        
      </h3>
      <div class="flow flow-1">
        <div class="box-text">
          <p class="title-flow">
            메인페이지
          </p>
          <p class="desc">
            캐주얼 게임의 느낌을 주기 위해 작은 오브젝트 들에 트랜지션을 적용하였습니다.
            메뉴 이동시에는 해당 영역이 확대 되는 트랜지션을 적용하여 사용자가 이동하는 느낌을 주었습니다.
            확대 후에도 이미지가 깨지지 않기 위해 백그라운드 이미지를 SVG로 변환하여 사용했었으나.
            이로 인해 트랜지션이 끊기는 문제가 발생하여 확대 이후 크기에 맞게 이미지로 변경하였습니다.
          </p>
        </div>
        <div class="box-media">
          <video src="@/assets/videos/111.webm" class="video" muted playsinline></video>
        </div>
      </div>
      <div class="flow flow-2">
        <div class="box-media">
          <video src="@/assets/videos/222.webm" class="video" muted playsinline></video>
        </div>
        <div class="box-text">
          <p class="title-flow">문제 제작 툴</p>
          <p class="desc">
            사용자가 입력한 텍스트에 대해 마크업을 적용하여 사용자가 입력한 텍스트가 어떻게 보일지 미리보기를 제공하였습니다.
            아이콘의 경우 마우스 오버 및 클릭시 색상이 변경되기 때문에 fontello를 이용하여 아이콘을 폰트화 하였습니다.
            셀렉트의 경우 select2라는 js 라이브러리를 사용하여 커스텀 하였습니다.
          </p>
        </div>
      </div>
      <div class="flow-3">
        <div class="box-text">
          <p class="title-flow">모바일 게임</p>
          <p class="desc">
            Vue를 사용하여 spa 형태의 모바일 게임으로 제작하였습니다.<br>
            개임별로 주어진 다양한 데이터 및 스테이트의 변화를 감지하여 실시간으로 화면을 업데이트 하였습니다.<br>
          </p>
        </div>
      </div>
      <div class="flow flow-4 half">
        <div class="box-media">
          <img src="@/assets/images/123.jpg" alt="">
        </div>
        <div class="box-text">
          <p class="title-flow">QR 퀴즈 방탈출</p>
          <p class="desc">
            QR 퀴즈 방탈출은 참여자들이 테마에 맞는 문제를 해결하고 방을 탈출하는 게임입니다. 각 참가자는 특정 테마 넘버를 받아오게 되며, 이를 통해 게임이 테마에 맞게 다양한 CSS 변경이 가능하도록 구성되어 있습니다. 각 테마는 고유한 분위기와 디자인을 갖추고 있어 참여자들이 게임을 즐기는 동안 새로운 경험을 할 수 있습니다. 
          </p>
        </div>
      </div>
      <div class="flow flow-5 half">
        <div class="box-text">
          <p class="title-flow">HIT & RUN</p>
          <p class="desc">
            'HIT & RUN'은 야구를 주제로 한 문제를 맞춰 카드를 획득하는 게임입니다. 게임은 야구의 특성을 반영하여 공격과 수비로 나누어 진행됩니다. 각 턴마다 공격팀은 Strike(스트라이크), Ball(볼), Out(아웃), Hit(안타), HomeRun(홈런) 등의 상태를 경험할 수 있습니다. 이에 따라 알맞은 영상이 재생되고 화면이 업데이트됩니다. 이를 통해 야구의 재미를 경험할 수 있는 게임입니다.
          </p>
        </div>
        <div class="box-media">
          <img src="@/assets/images/123.jpg" alt="">
        </div>
      </div>
    </section>
    <section class="sec-4"></section>
    <section class="sec-next" :style="{'background-color' : PAGE_INFO[currentIndex + 1 <  PAGE_INFO.length ? currentIndex + 1 : 0].color}">
      <div class="box-title">
        <h3 class="sub-title">Web/Mobile Gamification</h3>
        <h1 class="title">
          <span class="line"> 게이미피케이션 제작 플랫폼</span>
          <span class="fill">RAPORAPO</span>
        </h1>
      </div>
    </section>
  </div>
</div>
</template>

<script setup>
import { PAGE_INFO } from '@/const/pageInfo'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageStore } from '@/stores/page'
import LocomotiveScroll from 'locomotive-scroll';

const route = useRoute();
const router = useRouter();
const pageName = route.name?.toString().split('-')[1]
const currentIndex = PAGE_INFO.findIndex((item) => item.name === pageName)
const tl = gsap.timeline({defaults: {duration: 0.7}})
let scroll = ref()
const fontColor = ref('#fff')
const isResizeObserver = ref()
let resizeObserver = null;
const cardWidth = ref(372)
const cardHeight = ref(567)
let max = Math.max(14 * 16, 16.875 * window.innerWidth / 100);

const store = usePageStore()
const { alphaState, pageMovingTime } = storeToRefs(store)

onMounted(() => {
  initFunction()
})

onBeforeUnmount(() => {
  // Locomotive Scroll 중지
  scroll.value.destroy();
  scroll.value = null;

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

const initFunction = () =>{
  gsap.registerPlugin(ScrollTrigger)
 

  scroll.value = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.8,
    getDirection: true,

  });

  resizeObserver = new ResizeObserver(() => scroll.value.update());
  resizeObserver.observe(document.querySelector("[data-scroll-container]")); // ResizeObserver 할당

  window.addEventListener('resize', () => {
    scroll.value.update();
  });

  if(alphaState.value){
    gsap.from('.wrap-all', {autoAlpha: 0, duration: 1, ease: "Expo.easeInOut"})
    gsap.from('.box-title', {ease: "power2.out", y:"50%", duration: 0.7, delay: 1})
  }
  gsap.from('.box-main', {ease: "power2.out", y:"10%",  width:"80%", duration: 0.7, delay: 1, opacity: 0})
  
  max = Math.max(14 * 16, 16.875 * window.innerWidth / 100)
  scroll.value.on("scroll", (scrollArgs) => {
    // 모든 fade-out 클래스를 가진 요소에 대해 처리
    document.querySelectorAll('.fade-out').forEach((element) => {
      // 요소가 보이는 정도에 따라 투명도 조절
      const opacity = 1 - scrollArgs.scroll.y / 500;
      element.style.opacity = opacity.toString();
      // 요소가 보이는 정도에 따라 y축 이동
      element.style.transform = `translateY(${scrollArgs.scroll.y / 2}px)`;
    });
  });

  const sec2 = document.querySelector('.sec-2');
  const sec4 = document.querySelector('.sec-4');
  // locomotive스크롤로 .sec-2에 스크롤 트리거를 추가
  scroll.value.on('scroll', (args) => {
    if (args.scroll.y < sec2.offsetTop - window.innerHeight / 2) {
      gsap.to('.body', { 
        backgroundColor: `${PAGE_INFO[currentIndex].color}`,
        '--fontColor': '#fff',
        ease: "linear",
        duration: 0.2
      });
    }
    else if (args.scroll.y >= sec2.offsetTop - window.innerHeight / 2 && args.scroll.y < sec4.offsetTop - window.innerHeight / 2) {
      gsap.to('.body', { 
        backgroundColor: '#fff',
        '--fontColor': '#000',
        ease: "linear",
        duration: 0.2
      });
    }
    else {
      gsap.to('.body', { 
        backgroundColor: '#111',
        '--fontColor': '#fff',
        ease: "linear",
        duration: 0.2
      });
    }
  });
  
  // video에 도착하면 재생
  const video = document.querySelectorAll('.video');
  
  video.forEach((item) => {
    item.playbackRate = 1.1;
    scroll.value.on('scroll', (args) => {
      if (args.scroll.y > item.offsetTop - window.innerHeight / 2) {
        item.play();
      } else {
        item.pause();
      }
    });
  });

  const secNext = document.querySelector('.sec-next');
  const nextTitle = document.querySelector('.sec-next .box-title');
  let isTimerOn = false;
  let timer = null;
  scroll.value.on('scroll', (args) => {
    nextTitle.style.transform = `translateY(${args.scroll.y - secNext.offsetTop + max}px)`;

    // secNext에 도착하면 sexNext요소 안에 있을동안 5초 기다리고 다음 페이지로 이동 sexNext를 벗어나면 5초 타이머 초기화
    if (args.scroll.y > secNext.offsetTop - window.innerHeight / 2) {
      
      if(isTimerOn) return
      isTimerOn = true
      timer = setTimeout(() => {
        alphaState.value = false
        router.push(`/project/${PAGE_INFO[currentIndex + 1 <  PAGE_INFO.length ? currentIndex + 1 : 0].name}`)
      }, pageMovingTime.value);
    } else {
      isTimerOn = false
      clearTimeout(timer);
    }
  });
}

</script>
<style lang="scss">
@import "~/assets/scss/locomotive";
</style>
<style lang = "scss" scoped>
@import "~/assets/scss/variables";

.body{
  background: #000;
  padding-top: max(14rem, 16.875vw);
  $font-color: var(--fontColor);

  .wrap-all{
    visibility: hidden;
    
  }
  section{
    padding: 0 10vw;
  }
  .sec-1{
    padding: 0 max(4.375rem, 3.65vw);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: max(4rem, 12.5vw);
    .box-title{
      opacity: 1;
      transform: translateY(0);
    }
    .sub-title{
      color: $font-color;
      font-size: max(1.125rem, 1.25vw);
      opacity: 0;
      font-weight: 300;
      margin-bottom: 0.8em;
      position: relative;
      top: 0;
    }
    .title{
      color: $font-color;
      font-size: max(3.6rem, 4.5vw);
      opacity: 1;
      margin-bottom: 1em;
      font-weight: 900;
      position: relative;
      top: 0;
      .line{
        color: inherit;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: $font-color;
        -webkit-text-fill-color: transparent;
        overflow: hidden;
        font-family: inherit;
        font-weight: inherit;
        padding: 0 0.125em;
      }
      .fill{
        font-family: inherit;
        color: $font-color;
        font-weight: inherit;
        padding: 0 0.125em;
      }
    }

    .box-main{
      width: 100%;
      // left: 50%;
      transform: translateY(0);
      aspect-ratio: 16/9;
      background: #333;
      position: relative;
      opacity: 1;
      img, video{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .sec-2{
    padding-bottom: max(3rem, 10vw);
    margin-bottom: max(3rem, 3.9vw);
    .d-flex{
      display: flex;
      gap: 5%;
    }
    .box-left{
      width: calc((100% - 5%)/2);
      .desc{
        color: $font-color;
        font-size: max(2.2rem, 2vw);
        line-height: 1.8;
        font-weight: 500;
        margin-bottom: 0.65em;
        line-height: 1.3;
      }
      .box-category{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        dl{
          display: flex;
          font-size: 0.9375rem;
          dt{
            color: $font-color;
            
            font-weight: 300;
            margin-right: 0.5em;
            opacity: 0.6;
          }
          dd{
            color: $font-color;
            
            font-weight: 300;
          }
        }
      }
      .box-link{
        display: flex;
        align-items: center;
        gap: 1em;
        margin-top: 2em;
        .link{
          color: $font-color;
          font-size: 14px;
          font-weight: 300;
          display: block;
          font-family: 'GmarketSans';
          // border에 opacity를 주기 위해 rgba로 색상 지정
          padding: 1em 1.5em;
          border-radius: 60px;
          // transition: background-color 800ms, color 800ms, border 800ms;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 60px;
            border: 1px solid $font-color;
            z-index: -1;
            // transition: background-color 800ms, color 800ms, border 800ms;
            opacity: 0.15;
          }
        }
      }
    }
    .box-right{
      width: calc((100% - 5%)/2);
      .box-text{
        margin-bottom: 2em;
        .category{
          color: $font-color;
          font-size: max(1rem, 0.9375vw);
          font-weight: 500;
          margin-bottom: 0.5em;
        }
        hr{
          margin: 1.25em 0;
          height: 1px;
          transition: background-color 800ms, color 800ms, border 800ms;
          opacity: 0.3;
          background-color: $font-color;
          font-size: 15px;
        }
        .text{
          color: $font-color;
          font-size: 0.9375rem;
          font-weight: 300;
          line-height: 1.8;
        }
      }
    }
    .caution{
      color: $font-color;
      font-size: 0.75rem;
      font-weight: 300;
      margin-top: 3%;
      opacity: 0.8;
    }
  }
  .sec-3{
    // height: 200vh;
    .sec-title{
      color: $font-color;
      font-size: max(2rem, 1.8vw);
      font-weight: 500;
      margin-bottom: 2em;
    }
    .flow{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 5%;
      margin-bottom: 12rem;
      .box-text{
        width: 30%;
        min-width: 30%;
      }
      &.half{
        gap: 0;
        align-items: stretch;
        .box-text{
          width: 50%;
          min-width: 50%;
          background: #fff;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 4vw;
          .title-flow{
            color: #000;
          }
          .desc{
            // 색 반전
            color: #000;
          }
        }
        .box-media{
          aspect-ratio: 1;
          background: #1D1D1D;
          padding: 2vw;
          img{
            width: 50%;
            margin: 0 auto;
            display: block;
            transition: 0.7s;
          }
          &:hover{
            img{
              transform: scale(1.1);
            }
          
          }
        }
      }
      .box-media{
        flex: 1;
        aspect-ratio: 16/9;
        overflow: hidden;
        
        video, img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .title-flow{
      color: $font-color;
      font-size: max(1.5rem, 1.56vw);
      font-weight: 500;
      margin-bottom: 1em;
    }
    .desc{
      color: $font-color;
      font-size: max(0.875rem, 0.8333vw);
      font-weight: 300;
      line-height: 1.8;
    }
  }

  .flow-3{
    margin-bottom: 2rem;
  }
  .sec-4{
      display: flex;
      position: relative;
      padding: 0 10vw;
      gap: 8%;
      min-height: 1858px;
      align-items: flex-start;
      .box-title{
        width: 30%;
        min-width: 20%;
        padding: 130px 0;
      }
      .wrap-img{
        position: relative;
        width: 62%;
        padding: 130px 0;
      }
      .box-img{
        position: absolute;
        width: var(--cardWidth);
        height: var(--cardHeight);
        .card{
          width: 100%;
          height: 100%;
          position: relative;
          display: block;
          .ufo{
            position: absolute;
            top: -18px;
            right: -67px;
            width: 160px;
          }
          .monkey{
            position: absolute;
            top: 200px;
            left: -95px;
            width: 190px;
          }
          .note{
            position: absolute;
            top: 65%;
            left: -70px;
            width: 140px;
          }
        }
        &:nth-child(1){
          top: 0;
          left: 0;
        }
        &:nth-child(2){
          top: calc(var(--cardHeight) / 2);
          left: calc(var(--cardWidth) + 15%);
        }
        &:nth-child(3){
          top: calc(var(--cardHeight) * 1.2);
          left: 0;
        }
        &:nth-child(4){
          top: calc(var(--cardHeight) * 1.6);
          left: calc(var(--cardWidth) + 15%);
        }
      }
    }
    .sec-next{
      height: 100vh;
      padding: 0 max(4.375rem, 3.65vw);
      // padding-top: max(14rem, 16.875vw);
      text-align: center;
      position: relative;
      overflow: hidden;
      .sub-title{
        color: #fff;
        font-size: max(1.125rem, 1.25vw);
        font-weight: 300;
        margin-bottom: 0.8em;
        position: relative;
      }
      .title{
        color: #fff;
        font-size: max(3.6rem, 4.5vw);
        opacity: 1;
        margin-bottom: 1em;
        font-weight: 900;
        position: relative;
        .line{
          color: inherit;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          -webkit-text-fill-color: transparent;
          overflow: hidden;
          font-family: inherit;
          font-weight: inherit;
          padding: 0 0.125em;
        }
        .fill{
          font-family: inherit;
          color: #fff;
          font-weight: inherit;
          padding: 0 0.125em;
        }
      }
    }
}
</style>