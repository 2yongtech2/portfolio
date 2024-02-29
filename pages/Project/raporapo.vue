<template>
<div class="body" :style="{'background':PAGE_INFO[currentIndex].color}">
  <section class="sec-1" style="height: 200vh;">
    <h1 class="title gangwon">
      <span class="fill">라포라포</span>
      <span class="line">게이미피케이션</span>
    </h1>
  </section>
</div>
</template>

<script lang="ts" setup>
import { PAGE_INFO } from '@/const/pageInfo'
import { gsap } from 'gsap'

const route = useRoute();
const router = useRouter();
const pageName = route.name?.toString().split('-')[1]
const currentIndex = PAGE_INFO.findIndex((item: { name: string; }) => item.name === pageName)


</script>

<style lang = "scss" scoped>
@import "~/assets/scss/variables";
.body{
  background: #000;
}
.sec-1{
  padding-top: 30vh;
  text-align: center;
  .title{
    color: #fff;
    font-size: max(4rem, 5vw);
    .line{
      color: inherit;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      -webkit-text-fill-color: transparent;
      overflow: hidden;
      font-family: inherit;
    }
    .fill{
      font-family: inherit;
      color: #fff;
    }
  }
}
</style>