<template>
<div class="body" :style="{'background':PAGE_INFO[currentIndex].color}" data-scroll-container>
  <div class="wrap-all">
    <section class="sec-1" style="height: 200vh;">
      <h3 class="sub-title" data-scroll data-scroll-speed="1">Web/Mobile Gamification</h3>
      <h1 class="title" data-scroll data-scroll-speed="2">
        <span class="fill">라포라포</span>
        <span class="line">게이미피케이션</span>
      </h1>
      <div class="box-main">
        <img src="@/assets/images/2.jpg" alt="">
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
onMounted(() => {
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector('[data-scroll-container]'),
  //   smooth: true,
  //   multiplier: 0.8,
  //   paused: true,
  // });
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.wrap-all', {autoAlpha: 0, duration: 1, ease: "Expo.easeInOut"})
  requestAnimationFrame(() => {
    gsap.to('.sub-title', {opacity: 1, ease: "power2.out", y:0, duration: 0.7, delay: 1})
    gsap.to('.title', {opacity: 1, ease: "power2.out", y:0, duration: 0.7, delay: 1})
    gsap.to('.box-main', {opacity: 1, ease: "power2.out", y:0,  width:"100%", duration: 0.7, delay: 1})
  })
})

</script>

<style lang = "scss" scoped>
@import "~/assets/scss/variables";
.body{
  background: #000;
  padding-top: max(14rem, 16.875vw);
}

.wrap-all{
  visibility: hidden;
}
.sec-1{
  text-align: center;
  padding: 0 max(4.375rem, 3.65vw);
  .sub-title{
    color: #fff;
    font-size: max(1.125rem, 1.25vw);
    margin-bottom: 1em;
    opacity: 0;
    transform: translateY(50%);
  }
  .title{
    color: #fff;
    font-size: max(4rem, 5vw);
    opacity: 0;
    transform: translateY(30%);
    margin-bottom: 1em;
    font-weight: 900;
    .line{
      color: inherit;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      -webkit-text-fill-color: transparent;
      overflow: hidden;
      font-family: inherit;
      font-weight: inherit;
    }
    .fill{
      font-family: inherit;
      color: #fff;
      font-weight: inherit;
      padding-right: 0.25em;
    }
  }

  .box-main{
    width: 80%;
    left: 50%;
    transform: translateY(10%) translateX(-50%);
    aspect-ratio: 16/9;
    background: #333;
    position: relative;
    opacity: 0;
    img, video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>