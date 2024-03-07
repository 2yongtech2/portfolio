<template>
<div 
  class="body" 
  :style="[
    {'background':PAGE_INFO[currentIndex].color},
    {'--fontColor': '#fff'}
  ]" 
  data-scroll-container
  >
  <div class="wrap-all">
    <section class="sec-1">
      <h3 class="sub-title fade-out" data-scroll data-scroll-speed="2">Web/Mobile Gamification</h3>
      <h1 class="title fade-out" data-scroll data-scroll-speed="2" data-scroll-opacity="0">
        <span class="line"> 게이미피케이션 제작 플랫폼</span>
        <span class="fill">RAPORAPO</span>
      </h1>
      <div class="box-main" data-scroll>
        <img src="@/assets/images/2.jpg" alt="">
      </div>
    </section>
    <section class="sec-2">
      <div class="d-flex">
        <div class="box-left">
          <h5 class="desc">
            온, 오프라인 연계형 게이미피케이션 제작 플랫폼<br>
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
              수행업무
            </p>
            <hr>
            <p class="text">
              웹은 JAVA spring 기반으로 제작되었으며 모바일은 Vue2 기반, 출시 후에 추가된 라포의회는 Vue3, Nuxt3으로 제작되었습니다.
              메인페이지, 모바일 게임, 문제 제작 툴, 토론 게임 등의 페이지의 마크업을 담당했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="sec-3">

    </section>
  </div>
</div>
</template>

<script setup>
import { PAGE_INFO } from '@/const/pageInfo'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  gsap.from('.wrap-all', {autoAlpha: 0, duration: 1, ease: "Expo.easeInOut"})

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

  scroll.value.on("scroll", (scrollArgs) => {
    // 모든 fade-out 클래스를 가진 요소에 대해 처리
    document.querySelectorAll('.fade-out').forEach((element) => {
      // 요소가 보이는 정도에 따라 투명도 조절
      const opacity = 1 - scrollArgs.scroll.y / 500;
      element.style.opacity = opacity.toString();
    });
  });
  
  gsap.from('.sub-title', {opacity: 0, ease: "power2.out", y:"50%", duration: 0.7, delay: 1})
  gsap.from('.title', {opacity: 0, ease: "power2.out", y:"30%", duration: 0.7, delay: 1})
  gsap.from('.box-main', {opacity: 0, ease: "power2.out", y:"10%",  width:"80%", duration: 0.7, delay: 1})

  const sec2 = document.querySelector('.sec-2');
  // locomotive스크롤로 .sec-2에 스크롤 트리거를 추가
  scroll.value.on('scroll', (args) => {
    if (args.scroll.y > sec2.offsetTop - window.innerHeight / 2) {
      gsap.to('.body', { 
        backgroundColor: '#fff',
        '--fontColor': '#000',
        ease: "linear",
        duration: 1
      });
    } else {
      gsap.to('.body', { 
        backgroundColor: `${PAGE_INFO[currentIndex].color}`,
        '--fontColor': '#fff',
        ease: "linear",
        duration: 1
      });
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
    padding: 0 max(4.375rem, 3.65vw);
  }
  .sec-1{
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: max(4rem, 12.5vw);
    .sub-title{
      color: $font-color;
      font-size: max(1.125rem, 1.25vw);
      opacity: 1;
      transform: translateY(0);
      font-family: 'GmarketSans';
      font-weight: 300;
      margin-bottom: 0.8em;
    }
    .title{
      color: $font-color;
      font-size: max(3.6rem, 4.5vw);
      opacity: 1;
      transform: translateY(0);
      margin-bottom: 1em;
      font-weight: 900;
      font-family: 'GmarketSans';
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
        font-family: 'GmarketSans';
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
          transition: background-color 800ms, color 800ms, border 800ms;
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
            transition: background-color 800ms, color 800ms, border 800ms;
            opacity: 0.15;
          }
        }
      }
      .caution{
        color: $font-color;
        font-size: 0.75rem;
        font-weight: 300;
        margin-top: 3%;
        font-family: 'GmarketSans';
        opacity: 0.8;
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
          font-family: 'GmarketSans';
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
          font-family: 'GmarketSans';
        }
      }
    }
    
  }
}

.sec-3{
  height: 200vh;
}
</style>