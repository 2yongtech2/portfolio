<template>
  <div class="body">
    <section class="sec-1">
      <div class="wrap" style="height: 100px;">

      </div>
      <div 
        class="box-video"
        :style="`height: 1000px`"
      >
        <video class="main-video" autoplay playsinline loop muted>
          <source :src="'/resources/videos/main-video1.mp4'" type="video/mp4">
        </video>
      </div>
    </section>
    <section class="sec-2">
      <div
        class="wrap-thumb"
      >
        <div class="thumb" v-for="(item, index) in 7" :key="index" @click="handleClickMovePage(index)">
          <img :src="`/resources/images/${index + 1}.jpg`" alt="">
        </div>
      </div>
    </section>
    <section class="sec-3" style="height: 500px"></section>
    <div class="box-page-bg">
      <div class="page-bg" v-for="(item, index) in 7" :key="index">
        <img :src="`/resources/images/${index + 1}.jpg`" alt="">
      </div>
    </div>
  </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(ScrollTrigger)
  history.scrollRestoration = "manual"
  gsap.from('.body', {autoAlpha: 0, duration: 1, ease: "Expo.easeInOut"})
  
  setTimeout(() => {
    innerWidth.value = window.innerWidth
    innerHeight.value = window.innerHeight
    thumb.value = document.querySelectorAll('.thumb');
    pageBg.value = document.querySelectorAll('.page-bg');
    setPageBg()
    window.addEventListener('resize', () => {
      innerWidth.value = window.innerWidth
      innerHeight.value = window.innerHeight
      setPageBg()
    })
  }, 1000)
})

const innerWidth = ref()
const innerHeight = ref()
const pageBg = ref()
const thumb = ref()

const setPageBg = () =>{
  gsap.set('.body', {overflow: 'visible', height: 'auto'})
}

const handleClickMovePage = (index) => {
  const tl = gsap.timeline()
  // index에 해당하는 thumb를 제외하고 opacity 0으로 변경
  thumb.value.forEach((item, i) => {
    gsap.to(item, { opacity: 0, duration: 0.2 })
  })
  let { top, left, width, height } = thumb.value[index].getBoundingClientRect()
  gsap.set(pageBg.value[index], { top, left, width, height})
  
  tl.to(pageBg.value[index], { 
    top: 0, 
    left: 0, 
    width: innerWidth.value, 
    height: innerHeight.value, 
    ease:"Expo.easeInOut",
    duration: 1,
    delay: 0.5,
  })
  tl.to('.body', {overflow: 'hidden', height: '100vh'})
  // 페이지 이동
  setTimeout(() => {
    // TODO: detail/index + 1로 이동해야됨 파라미터 귀찮아서 아직 안했을뿐 매우 쉬움
    router.push(`project`)
  }, 1500)
}

</script>

<style lang="scss" scoped>
.body{
  visibility: hidden;
}

.main-video{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.sec-2{
  background: #fff;
  position: relative;
  z-index: 0;
}
.wrap-thumb {
  width: 320px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;
}
.thumb {
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 100;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}
.page-bg {
  width: 0;
  height: 0;
  position: fixed;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>