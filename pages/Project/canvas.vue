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
        <div class="box-title">
          <h3 class="sub-title fade-out" data-scroll data-scroll-speed="2">Web/Mobile Gamification</h3>
        <h1 class="title fade-out" data-scroll data-scroll-speed="2" data-scroll-opacity="0">
          <span class="line"> 교육용 컨텐츠 제작 플랫폼</span>
          <span class="fill">동아출판 캔버스</span>
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
              상상이 현실이 되는 수업공간<br>
              '라포라포로 만드는 온오프라인 교실'
            </h5>
            <div class="box-category">
              <dl>
                <dt>클라이언트</dt>
                <dd>동아출판(주)</dd>
              </dl>
              <dl>
                <dt>카테고리</dt>
                <dd>게이미피케이션, 컨텐츠 저작도구, 적응형</dd>
              </dl>
              <dl>
                <dt>개발 기간</dt>
                <dd>3개월</dd>
              </dl>
              <dl style="width: 100%;">
                <dt>참여율</dt>
                <dd>퍼블리싱 100%, 프론트앤드 20%</dd>
              </dl>
              <dl style="width: 100%;">
                <dt>기술 스택</dt><br>
                <dd>Vue3, Nuxt3, Spring, Gitlab, Ts, Js, Html, Scss</dd>
              </dl>
            </div>
  
            <div class="box-link">
              <a href="https://canvas.douclass.com/" target="_blank" class="link" data-scroll>사이트 바로가기</a>
            </div>
          </div>
          <div class="box-right">
            <div class="box-text">
              <p class="category">
                프로젝트 소개
              </p>
              <hr>
              <p class="text">
                캔버스는 다양한 디지털콘텐츠를 제작하고 공유할 수 있는 참여형 수업 플랫폼입니다.<br>
                교육 활동을 다양하게 지원하는 수업콘텐츠(일종의 웹 기반 PPT) 제작, 활동지 작성, 흥미를 유발하는 게임, 그리고 설문 조사 등의 만들기 도구를 통해 교육 과정을 보다 효과적으로 구성하고 학습자들의 참여를 촉진할 수 있습니다.
              </p>
            </div>
            <div class="box-text">
              <p class="category">
                수행업무 개요
              </p>
              <hr>
              <p class="text">
                메인페이지 및 게임세트를 생성 및 수정하는 부분은 JAVA spring 기반으로 제작되었으며,<br>
                수업콘텐츠(일종의 웹 기반 PPT) 생성 및 뷰어, 게임 실행 및 결과 확인,<br>
                설문조사 등의 페이지는 Vue, Nuxt으로 제작되었습니다.<br>
                모든 페이지의 마크업을 담당했으며, 몇몇 게임의 프론트엔드 개발을 담당했습니다.<br>
                게임의 경우 Vue를 사용하여 spa 형태의 반응형 게임으로 제작하였습니다.<br>
                <span class="caution">(영어 게임은 적응형으로 작업 되었습니다)</span>
              </p>
              <p class="caution">
                * 상세한 내용은 하기에 작성했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="sec-3">
        <div class="flow flow-1">
          <div class="box-text">
            <p class="title-flow">
              수업콘텐츠 저작 도구
            </p>
            <p class="desc">
              한번에 많은 정보를 표시해야 하는 저작툴의 특성에 맞게 PC에 최적화된 화면을 제작하였고, 더불어 사용자의 편의를 높이기 위해 Vue 기반의 SPA를 구축하였습니다.
              처음 사용해 보는 유저가 쉽게 사용법을 익히고 가능한 많은 기능을 쉽게 사용할 수 있도록 가장 보편적인 저작툴 형태로 UI/UX를 고려하였습니다.
            </p>
          </div>
          <div class="box-media">
            <video src="@/assets/videos/canvas/content-editor.mp4" class="video" muted playsinline loop></video>
          </div>
        </div>
        <div class="flow flow-2">
          <div class="box-media">
            컴퓨터, 모바일 목업 뷰어 이미지 or 뷰어 영상찍기
          </div>
          <div class="box-text">
            <p class="title-flow">수업콘텐츠 뷰어</p>
            <p class="desc">
              수업콘텐츠 뷰어는 수업콘텐츠를 보여주는 페이지로, 수업콘텐츠를 생성한 후에는 뷰어에서 확인할 수 있습니다. 뷰어는 PC와 모바일에 최적화되어 있으며, 사용자가 수업콘텐츠를 보는데 불편함이 없도록 UI/UX를 고려하여 제작하였습니다.
            </p>
          </div>
        </div>
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
  
    
    gsap.from('.box-title', {ease: "power2.out", y:"50%", duration: 0.7, delay: 1})
    // gsap.from('.title', {ease: "power2.out", top:"30%", duration: 0.7, delay: 1})
    gsap.from('.box-main', {ease: "power2.out", y:"10%",  width:"80%", duration: 0.7, delay: 1})
  
    scroll.value.on("scroll", (scrollArgs) => {
      // 모든 fade-out 클래스를 가진 요소에 대해 처리
      document.querySelectorAll('.fade-out').forEach((element) => {
        // 요소가 보이는 정도에 따라 투명도 조절
        const opacity = 1 - scrollArgs.scroll.y / 500;
        element.style.opacity = opacity.toString();
      });
    });
  
    const sec2 = document.querySelector('.sec-2');
    const flow3 = document.querySelector('.flow-3');
    // locomotive스크롤로 .sec-2에 스크롤 트리거를 추가
    scroll.value.on('scroll', (args) => {
      if (args.scroll.y < sec2.offsetTop - window.innerHeight / 2) {
        gsap.to('.body', { 
          backgroundColor: `${PAGE_INFO[currentIndex].color}`,
          '--fontColor': '#fff',
          ease: "linear",
          duration: 0.5
        });
      }
      // else if (args.scroll.y >= sec2.offsetTop - window.innerHeight / 2 && args.scroll.y < flow3.offsetTop - window.innerHeight / 2) {
      //   gsap.to('.body', { 
      //     backgroundColor: '#fff',
      //     '--fontColor': '#000',
      //     ease: "linear",
      //     duration: 0.5
      //   });
      // }
      else {
        gsap.to('.body', { 
          backgroundColor: '#fff',
          '--fontColor': '#000',
          ease: "linear",
          duration: 0.5
        });
      }
    });
    
    // video에 도착하면 재생
    const video = document.querySelectorAll('.video');
    video.forEach((item) => {
      scroll.value.on('scroll', (args) => {
        if (args.scroll.y > item.offsetTop - window.innerHeight / 2) {
          item.play();
        } else {
          item.pause();
        }
      });
    });
  
    const boxMedia = document.querySelectorAll('.box-media video, .box-media img');
    // box-media에 스크롤한 양 만큼 scale 1로 가기 현재 화면이 box-media보다 위에있으면 scale을 점점 늘린다 최대 1.6 까지
    // boxMedia.forEach((item) => {
    //   scroll.value.on('scroll', (args) => {
    //     if (args.scroll.y < item.offsetTop) {
    //       const scale = Math.max(1.6 - (args.scroll.y - item.offsetTop + window.innerHeight) / 1000, 1); // 최소 스케일을 1로 설정합니다.
    //       item.style.transform = `scale(${scale})`;
    //     }
    //   });
    // });
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
  }
  </style>