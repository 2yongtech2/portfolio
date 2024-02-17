<template>
  <div
    class="wrap-thumb"
  >
    <div class="thumb" v-for="(item, index) in 7" :key="index" @click="handleClickMovePage(index)">
      <img :src="`/resources/images/${index + 1}.jpg`" alt="">
    </div>
  </div>
  <div class="box-page-bg">
    <div class="page-bg" v-for="(item, index) in 7" :key="index">
      <img :src="`/resources/images/${index + 1}.jpg`" alt="">
    </div>
  </div>
  
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { gsap } from 'gsap'

const route = useRoute();
const router = useRouter();

onMounted(() => {
  innerWidth.value = window.innerWidth
  innerHeight.value = window.innerHeight
  thumb.value = document.querySelectorAll('.thumb');
  pageBg.value = document.querySelectorAll('.page-bg');
  setPageBg()
  window.addEventListener('resize', () => {
    innerWidth.value = window.innerWidth
    innerHeight.value = window.innerHeight
  })
})

const innerWidth = ref()
const innerHeight = ref()
const pageBg = ref()
const thumb = ref()

const setPageBg = () =>{
  pageBg.value.forEach((item, index) => {
    const { top, left, width, height } = thumb.value[index].getBoundingClientRect()
    gsap.set(item, { top, left, width, height })
  })
}
const handleClickMovePage = (index) => {
  // index에 해당하는 thumb를 제외하고 opacity 0으로 변경
  thumb.value.forEach((item, i) => {
    gsap.to(item, { opacity: 0, duration: 0.2 })
  })
  pageBg.value.forEach((item, i) => {
    if(i !== index){
      gsap.to(item, { opacity: 0, duration: 0.2 })
    }
  })
  gsap.to(pageBg.value[index], { 
    top: 0, 
    left: 0, 
    width: innerWidth.value, 
    height: innerHeight.value, 
    ease:"Expo.easeInOut",
    duration: 1,
    delay: 0.5
  })
  // 페이지 이동
  setTimeout(() => {
    // TODO: detail/index + 1로 이동해야됨 파라미터 귀찮아서 아직 안했을뿐 매우 쉬움
    router.push(`detail`)
  }, 1500)
}

</script>

<style lang="scss" scoped>
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