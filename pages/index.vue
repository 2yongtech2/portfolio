<template>
  <div class="body">
    <div class="intro" v-if="false">
      <h1 class="title" v-for="a in titleArrr" :key="a">
        {{ a }}
      </h1>
    </div>
    <div class="slider">
      <div
        v-for="(page, index) in PAGE_INFO" :key="page.name"
        class="slide"
        :style="{
          'display': slideIndex === index ? 'block' : 'none',
        }"
      >
        <div class="box-img">
          <img :src="`/portfolio/resources/images/${page.name}.jpg`" alt="">
        </div>
        <div
          class="wrap-title"
          :class="`wrap-title-${index}`"
          @click="handleClickMovePage(page.name)"
        >
          <h2 class="title line">
            <span v-for="spell in splitName(page.name)" :key="spell" class="spell" :class="`spell-${index}`">
              {{ spell }}
            </span>
          </h2>
          <h2 class="title fill">
            <span v-for="spell in splitName(page.name)" :key="spell">
              {{ spell }}
            </span>
          </h2>
        </div>
      </div>
    </div>

    <div
      class="page-transition"
      :class="[
        {'up' : isUpScroll},
        {'down' : isDownScroll},
        {'move' : isMoveScroll}
      ]"
      :style="{
        'background': PAGE_INFO[currentSlide].color
      }"
    ></div>
  </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import textScroll from '@/assets/js/TextScroll.js'
import { PAGE_INFO } from '@/const/pageInfo'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute();
const router = useRouter();



onMounted(() => {
  let startY = 0
  textScroll()
  gsap.from('.body', {autoAlpha: 0, duration: 1, ease: "Expo.easeInOut"})
  innerHeight.value = window.innerHeight
  window.addEventListener('resize', () => {
    innerHeight.value = window.innerHeight
  })
  // 이벤트 리스너 연결
  window.addEventListener('wheel', handleScroll);
  window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });
  window.addEventListener('touchmove', handleTouch);
  // 초기 애니메이션 실행
  isScrollable.value = true;
  setTimeout(() => {
    revealText();
  }, 1000);
})

onBeforeRouteLeave(() => {
  // isScrollable.value = false
  window.removeEventListener('wheel', handleScroll);
  window.removeEventListener('touchstart', handleTouch);
  window.removeEventListener('touchmove', handleTouch);
})

const isScroll = ref(false)
const isUpScroll = ref(false)
const isDownScroll = ref(false)
const isMoveScroll = ref(false)
const currentSlide = ref(0)
const slideIndex = ref(0)
const innerWidth = ref()
const innerHeight = ref(0)
const tl = gsap.timeline()
const isScrollable = ref(true)


const handleClickMovePage = (name) => {
  isMoveScroll.value = true
  isScrollable.value = false
  // 페이지 이동
  setTimeout(() => {
    router.push(`project/${name}`)
  }, 1500)   
}

const splitName = (name) => {
  return name.split('')
}

const revealText = () => {
  tl.to(`.spell-${slideIndex.value}`,{
    opacity: 1,
    stagger: 0.05,
    ease: "expoScale(0.5,7,none)",
    y: 0,
  })
  tl.to(`.wrap-title-${slideIndex.value}`,{
    className: `wrap-title wrap-title-${slideIndex.value} active`,
  })
}

const coverText = () => {
  tl.to(`.spell-${slideIndex.value}`,{
    opacity: 0,
    stagger: 0.05,
    ease: "expoScale(0.5,7,none)",
    y: 50,
    duration: 0.2
  })
  tl.to(`.wrap-title-${slideIndex.value}`,{
    className: `wrap-title wrap-title-${slideIndex.value}`,
  })
}

// Scroll 이벤트 핸들러
const handleScroll = (e) => {
  if (isScroll.value) return;
  isScroll.value = true;
  if (e.deltaY > 0) {
    handleDownScroll();
  } else {
    handleUpScroll();
  }
  setTimeout(() => {
    isScroll.value = false;
    isUpScroll.value = false;
    isDownScroll.value = false;
    if (isScrollable.value) revealText();
  }, 1500);
};

// Touch 이벤트 핸들러
const handleTouch = (e) => {
  if (isScroll.value) return;
  isScroll.value = true;
  const deltaY = e.touches[0].clientY - startY;
  if (deltaY > 0) {
    handleDownScroll();
  } else {
    handleUpScroll();
  }
  setTimeout(() => {
    isScroll.value = false;
    isUpScroll.value = false;
    isDownScroll.value = false;
    if (isScrollable.value) revealText();
  }, 1500);
};

// Down Scroll 핸들러
const handleDownScroll = () => {
  if (currentSlide.value !== PAGE_INFO.length - 1) {
    currentSlide.value++;
    isDownScroll.value = true;
    setTimeout(() => {
      if (isScrollable.value) coverText();
      slideIndex.value++;
    }, 700);
  }
};

// Up Scroll 핸들러
const handleUpScroll = () => {
  if (currentSlide.value !== 0) {
    isUpScroll.value = true;
    currentSlide.value--;
    setTimeout(() => {
      if (isScrollable.value) coverText();
      slideIndex.value--;
    }, 700);
  }
};

</script>

<style lang="scss" scoped>
.body{
  width: 100vw;
  overflow: hidden;
  visibility: hidden;
}
.slider {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide {
  width: 100%;
  height: 100%;
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  position: absolute;
  .wrap-title{
    position: absolute;
    // width: 80vw;
    text-align: center;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .title{
    display: inline-block;
    font-size: max(132px, 4.5vw);
    color: #fff;
    line-height: 1;
    text-transform: uppercase;
    word-break: break-all;
    white-space: inherit;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    cursor: pointer;
    font-family: 'GmarketSans';
    &.line{
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      -webkit-text-fill-color: transparent;
      overflow: hidden;
    }
    &.fill{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      -webkit-text-fill-color: #fff;
      clip-path: circle(0vw at 50% 50%);
      z-index: 999;
    }
    .spell{
      opacity: 0;
      transform: translateY(50px);
      display: block;
      position: relative;
    }
    span{
      font-family: inherit;
      font-weight: inherit;
    }
  }
  .box-img{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    img, video{
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }
  }
}

.page-transition {
  width: 100vw;
  height: 150vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: 100;
  &.up {
    animation: upScroll 1.5s forwards;
  }
  &.down {
    animation: downScroll 1.5s forwards;
  }
  &.move{
    animation: moveScroll 0.7s forwards;
  }
}


@keyframes upScroll {
  0% {
    transform: translate(-50%, -100%);
  }
  45% {
    transform: translate(-50%, 0%);
  }
  55%{
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, 100%);
  }
}

@keyframes downScroll {
  0% {
    transform: translate(-50%, 100%);
  }
  45% {
    transform: translate(-50%, 0%);
  }
  55%{
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, -100%);
  }
}

@keyframes moveScroll {
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}
</style>