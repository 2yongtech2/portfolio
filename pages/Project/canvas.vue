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
        <h1 class="title fade-out"  data-scroll>
          <span class="line"> 교육용 컨텐츠 제작 플랫폼</span>
          <span class="fill">동아출판 캔버스</span>
        </h1>
        </div>
        <div class="box-main" data-scroll>
          <img src="@/assets/images/2.jpg" alt="">
        </div>
      </section>
      <section class="sec-2" data-scroll data-scroll-offset="40%">
        <div class="d-flex">
          <div class="box-left">
            <h5 class="desc fade-up">
              상상이 현실이 되는 수업공간<br>
              '라포라포로 만드는 온오프라인 교실'
            </h5>
            <div class="box-category fade-up">
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
  
            <div class="box-link fade-up">
              <a href="https://canvas.douclass.com/" target="_blank" class="link" data-scroll data-cursor-type="hover">사이트 바로가기</a>
            </div>
          </div>
          <div class="box-right">
            <div class="box-text">
              <p class="category fade-up">
                프로젝트 소개
              </p>
              <hr class="fade-up">
              <p class="text fade-up">
                캔버스는 다양한 디지털콘텐츠를 제작하고 공유할 수 있는 참여형 수업 플랫폼입니다.<br>
                교육 활동을 다양하게 지원하는 수업콘텐츠(일종의 웹 기반 PPT) 제작, 활동지 작성, 흥미를 유발하는 게임, 그리고 설문 조사 등의 만들기 도구를 통해 교육 과정을 보다 효과적으로 구성하고 학습자들의 참여를 촉진할 수 있습니다.
              </p>
            </div>
            <div class="box-text">
              <p class="category fade-up">
                수행업무 개요
              </p>
              <hr class="fade-up">
              <p class="text fade-up">
                메인페이지 및 게임세트를 생성 및 수정하는 부분은 JAVA spring 기반으로 제작되었으며,<br>
                수업콘텐츠(일종의 웹 기반 PPT) 생성 및 뷰어, 게임 실행 및 결과 확인,<br>
                설문조사 등의 페이지는 Vue, Nuxt으로 제작되었습니다.<br>
                모든 페이지의 마크업을 담당했으며, 몇몇 게임의 프론트엔드 개발을 담당했습니다.<br>
                게임의 경우 Vue를 사용하여 spa 형태의 반응형 게임으로 제작하였습니다.<br>
                <span class="caution">(영어 게임은 적응형으로 작업 되었습니다)</span>
              </p>
              <p class="caution fade-up">
                * 상세한 내용은 하기에 작성했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="sec-3">
        <div class="flow flow-1" data-scroll data-scroll-offset="50%">
          <div class="box-text fade-up">
            <p class="title-flow">
              수업콘텐츠 저작 도구
            </p>
            <p class="desc">
              한번에 많은 정보를 표시해야 하는 저작툴의 특성에 맞게 PC에 최적화된 화면을 제작하였고, 더불어 사용자의 편의를 높이기 위해 Vue 기반의 SPA를 구축하였습니다.
              처음 사용해 보는 유저가 쉽게 사용법을 익히고 가능한 많은 기능을 쉽게 사용할 수 있도록 가장 보편적인 저작툴 형태로 UI/UX를 고려하였습니다.
            </p>
          </div>
          <div class="box-media fade-up">
            <video src="@/assets/videos/canvas/content-editor.mp4" class="video" muted playsinline loop></video>
          </div>
        </div>
        <div class="flow flow-2" data-scroll data-scroll-offset="50%">
          <div class="box-media fade-up">
            <video src="@/assets/videos/canvas/content-viewer.mp4" class="video" muted playsinline loop></video>
          </div>
          <div class="box-text fade-up">
            <p class="title-flow">수업콘텐츠 뷰어</p>
            <p class="desc">
              수업콘텐츠 뷰어는 수업콘텐츠를 보여주는 페이지로, 수업콘텐츠를 생성한 후에는 뷰어에서 확인할 수 있습니다. 뷰어는 PC와 모바일에 최적화되어 있으며, 사용자가 수업콘텐츠를 보는데 불편함이 없도록 UI/UX를 고려하여 제작하였습니다.
            </p>
          </div>
        </div>
        <div class="flow" data-scroll data-scroll-offset="50%">
          <div class="box-text fade-up">
            <p class="title-flow">
              문제 저작 도구
            </p>
            <p class="desc">
              게임에 사용될 문제를 생성하는 페이지로, 한번에 많은 정보를 표시해야 하는 저작툴의 특성에 맞게 PC에 최적화된 화면을 제작하였습니다. 
              문제를 생성한 후에 미리보기도 제공하고 있습니다. 문제저작도구는 PC에 최적화되어 있으며, 사용자가 문제를 생성하는데 불편함이 없도록 UI/UX를 고려하여 제작하였습니다.
            </p>
          </div>
          <div class="box-media fade-up">
            <video src="@/assets/videos/canvas/quiz-editor.mp4" class="video" muted playsinline loop></video>
          </div>
        </div>
      </section>

      <section class="sec-4" id="secGame">
        <!-- data-scroll-sticky data-scroll-target="#secGame" -->
        <div class="box-title" data-scroll data-scroll-sticky data-scroll-target="#secGame">
          <p class="title-flow">
            수업콘텐츠 저작 도구
          </p>
          <p class="desc">
            한번에 많은 정보를 표시해야 하는 저작툴의 특성에 맞게 PC에 최적화된 화면을 제작하였고, 더불어 사용자의 편의를 높이기 위해 Vue 기반의 SPA를 구축하였습니다.
            처음 사용해 보는 유저가 쉽게 사용법을 익히고 가능한 많은 기능을 쉽게 사용할 수 있도록 가장 보편적인 저작툴 형태로 UI/UX를 고려하였습니다.
          </p>
        </div>
        <div
          class="wrap-img"
          :style="[
            {'--cardWidth' : `${cardWidth}px`}, 
            {'--cardHeight' : `${cardHeight}px`}
          ]"
          data-scroll
        >
          <div class="box-img" data-scroll data-scroll-speed="1">
            <a href="https://canvas.douclass.com/center/game/play?code=01264416&isLand=true" target="_blank" class="card">
              <div class="card-content">
                <img src="@/assets/images/canvas/game-2.png" alt="초성게임" class="thumbnail" data-cursor-type="play">
              </div>
            </a>
          </div>
          <div class="box-img" data-scroll data-scroll-speed="2">
            <a href="https://canvas.douclass.com/center/game/play?code=04335935&isLand=true" target="_blank" class="card">
              <div class="card-content">
                <img src="@/assets/images/canvas/game-1.png" alt="퀴즈타임" class="thumbnail" data-cursor-type="play">
              </div>
              <img src="@/assets/images/canvas/ufo.svg" alt="" class="ufo" data-scroll data-scroll-speed="2.5">
            </a>
          </div>
          <div class="box-img" data-scroll data-scroll-speed="3">
            <a href="https://canvas.douclass.com/center/game/play?code=03784221&isLand=true" target="_blank" class="card">
              <div class="card-content">
                <img src="@/assets/images/canvas/game-3.png" alt="카드 뒤집기" class="thumbnail" data-cursor-type="play">
              </div>
              <img src="@/assets/images/canvas/monkey.svg" alt="원숭이 아이콘" class="monkey" data-scroll data-scroll-speed="2">
            </a>
          </div>
          <div class="box-img" data-scroll data-scroll-speed="4">
            <a href="https://canvas.douclass.com/center/game/play?code=02466137&isLand=true" target="_blank" class="card">
              <div class="card-content">
                <img src="@/assets/images/canvas/game-4.png" alt="흩어진 낱말찾기" class="thumbnail" data-cursor-type="play">
              </div>
              <img src="@/assets/images/canvas/note.svg" alt="노트 아이콘" class="note" data-scroll data-scroll-speed="2">
            </a>
          </div>
        </div>
      </section>

      <section class="sec-next" :style="{'background-color' : PAGE_INFO[currentIndex + 1].color}">
        <div class="box-title">
          <h3 class="sub-title">Web/Mobile Gamification</h3>
          <h1 class="title">
            <span class="line">게이미피케이션 제작 플랫폼</span>
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
    const cursors = document.querySelector('#cursors');
    // cursors --cursotColor 변수에 PAGE_INFO[currentIndex].color 값을 할당
    cursors.style.setProperty('--cursorColor', PAGE_INFO[currentIndex].color);
    gsap.registerPlugin(ScrollTrigger)
    scroll.value = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 0.5,
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
      if (args.scroll.y < sec2.offsetTop - window.innerHeight / 4) {
        gsap.to('.body', { 
          backgroundColor: `${PAGE_INFO[currentIndex].color}`,
          '--fontColor': '#fff',
          ease: "linear",
          duration: 0.2
        });
      }
      else if (args.scroll.y >= sec2.offsetTop - window.innerHeight / 4 && args.scroll.y < sec4.offsetTop - window.innerHeight / 2) {
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
    
    const cursorTimer = document.querySelector('#cursor-timer');
    const cursorDot = document.querySelector('#cursor-inner .dot');
    const cursorArrow = document.querySelector('#cursor-inner .arrow');
    const cursorCircle = document.querySelector('#cursor-outer .circle');
    const needle = document.querySelector('#cursor-timer .needle');
    scroll.value.on('scroll', (args) => {
      nextTitle.style.transform = `translateY(${args.scroll.y - secNext.offsetTop + max}px)`;

      // secNext에 도착하면 sexNext요소 안에 있을동안 5초 기다리고 다음 페이지로 이동 sexNext를 벗어나면 5초 타이머 초기화
      if (args.scroll.y > secNext.offsetTop - window.innerHeight / 2) {
        
        if(isTimerOn) return
        isTimerOn = true
        needle.style.animation = `cursorTimer ${pageMovingTime.value}ms linear forwards`
        cursorTimer.style.opacity = 1
        cursorCircle.style.opacity = 0
        cursorDot.style.opacity = 0
        cursorArrow.style.opacity = 1
        cursors.style.mixBlendMode = 'normal'
        timer = setTimeout(() => {
          // 스크롤을 맨 아래로 이동후 콜백함수 실행
          scroll.value.scrollTo(document.body.offsetHeight - window.innerHeight, {
            callback: (target) => {
              // 다음 페이지로 이동
              alphaState.value = false
              router.push(`/project/${PAGE_INFO[currentIndex + 1 <  PAGE_INFO.length ? currentIndex + 1 : 0].name}`)
            }
          });
        }, pageMovingTime.value);
        
      } else {
        cursorTimer.style.opacity = 0
        cursorCircle.style.opacity = 1
        cursorDot.style.opacity = 1
        cursorArrow.style.opacity = 0
        needle.style.animation = 'none'
        cursors.style.mixBlendMode = 'difference'
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
          transition: transform 0.7s, opacity 0.7s;
        }
        .box-category{
          display: flex;
          flex-wrap: wrap;
          gap: 1em;
          transition: transform 0.7s 0.1s, opacity 0.7s 0.1s;

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
          transition: transform 0.7s 0.2s, opacity 0.7s 0.2s;
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
            // transition: background-color 800ms, color 800ms, border 800ms;
            // opacity: 0.3;
            background-color: $font-color;
            font-size: 15px;
          }
          .text{
            color: $font-color;
            font-size: 0.9375rem;
            font-weight: 300;
            line-height: 1.8;
          }
          &:nth-of-type(1){
            .category{
              transition: transform 0.7s, opacity 0.7s;
            }
            hr{
              transition: transform 0.7s 0.1s, opacity 0.7s 0.1s;
            }
            .text{
              transition: transform 0.7s 0.2s, opacity 0.7s 0.2s;
            }
          }
          &:nth-of-type(2){
            .category{
              transition: transform 0.7s 0.3s, opacity 0.7s 0.3s;
            }
            hr{
              transition: transform 0.7s 0.4s, opacity 0.7s 0.4s;
            }
            .text{
              transition: transform 0.7s 0.5s, opacity 0.7s 0.5s;
            }
          }
        }
        .caution{
          transition: transform 0.7s 0.6s, opacity 0.7s 0.6s;
          opacity: 0;
        }
      }
      .caution{
        color: $font-color;
        font-size: 0.75rem;
        font-weight: 300;
        margin-top: 3%;
        opacity: 0.8;
      }
      .fade-up{
        opacity: 0 !important;
        transform: translateY(80px);
      }
      &.is-inview{
        .fade-up{
          opacity: 1 !important;
          transform: translateY(0);
          &hr{
            opacity: 0.3 !important;
          }
          .caution{
            opacity: 0.8 !important;
          }
        }
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
          transition-delay: 0.1s !important;
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
          box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
          border-radius: 8px;
          
          video, img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .fade-up{
          opacity: 0;
          transform: translateY(80px);
          transition: 0.7s;
        }
        &.is-inview{
          .fade-up{
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }

    .title-flow{color: $font-color;
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
          .card-content{
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
            img{
              transition: 0.5s;
            }
          }
          
          &:hover{
            .card-content{
              img{
                transform: scale(1.05);
                // opacity: 0.5;
              }
            }
          }
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