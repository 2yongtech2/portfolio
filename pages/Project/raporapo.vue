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
              <dt>Client.</dt>
              <dd>큐리어드</dd>
            </dl>
            <dl>
              <dt>Category.</dt>
              <dd>Gamification, Contents maker tool</dd>
            </dl>
            <dl>
              <dt>Duration.</dt>
              <dd>3month</dd>
            </dl>
            <dl>
              <dt>Role.</dt>
              <dd>Markup Developer</dd>
            </dl>
            <dl>
              <dt>Technology Stack.</dt>
              <dd>Vue3, Nuxt3, scss, spring, gitlab, ts, js, html</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script lang="ts" setup>
import { PAGE_INFO } from '@/const/pageInfo'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

const route = useRoute();
const router = useRouter();
const pageName = route.name?.toString().split('-')[1]
const currentIndex = PAGE_INFO.findIndex((item: { name: string; }) => item.name === pageName)
const tl = gsap.timeline({defaults: {duration: 0.7}})
let scroll = ref()
const fontColor = ref('#fff')
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.wrap-all', {autoAlpha: 0, duration: 1, ease: "Expo.easeInOut"})
  requestAnimationFrame(() => {
    scroll.value = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 0.8,
      paused: true,
    });

    window.addEventListener('resize', () => {
      scroll.value.update();
    });

    scroll.value.on("scroll", (scrollArgs:any) => {
      // 모든 fade-out 클래스를 가진 요소에 대해 처리
      document.querySelectorAll('.fade-out').forEach((element) => {
          // 요소가 보이는 정도에 따라 투명도 조절
          const opacity = 1 - scrollArgs.scroll.y / 500;
          (element as HTMLElement).style.opacity = opacity.toString();
      });
    });
    gsap.from('.sub-title', {opacity: 0, ease: "power2.out", y:"50%", duration: 0.7, delay: 1})
    gsap.from('.title', {opacity: 0, ease: "power2.out", y:"30%", duration: 0.7, delay: 1})
    gsap.from('.box-main', {opacity: 0, ease: "power2.out", y:"10%",  width:"80%", duration: 0.7, delay: 1})
    
    gsap.to('.body', {
      scrollTrigger: {
        trigger: '.sec-2',
        start: 'top center',
        end: 'top center', 
        scrub: true,
        onEnter: () => {
          gsap.to('.body', { 
            backgroundColor: '#fff',
            '--fontColor': '#000',
            ease: "Expo.easeInOut",
            duration: 1.2
          });
        },
        onLeaveBack: () => {
          gsap.to('.body', { 
            backgroundColor: `${PAGE_INFO[currentIndex].color}`,
            '--fontColor': '#fff',
            ease: "Expo.easeInOut",
            duration: 1.2
          });
        }
      }
    });
  })
})

onBeforeUnmount(() => {
  // Locomotive Scroll 중지
  scroll.value = null;
});

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
  }
}


</style>