<template>
  <section class="sec-hero">
    <p>강성민 바보</p>
  </section>
  <section class="sec-detail">
    
  </section>
  <div class="aaaa">
    <img :src="`/resources/images/1.jpg`" alt="">
  </div>
</template>

<script setup>
onMounted(() => {
  const p = document.querySelector('p');
  setTimeout(() => {
    p.classList.add('active');
  }, 500)
})
</script>

<style lang = "scss" scoped>
@import "~/assets/scss/variables";

.aaaa{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.sec-hero{
  height: 900px;
}
p{
  font-size: 150px;
  color: #fff;
  z-index: 9999;
  position: relative;
  opacity: 0;
  transition: 0.5s;
  &.active{
    opacity: 1;
  }
}

.sec-detail{
  height: 900px;
  background: antiquewhite;
}

section{
  position: relative;
  z-index: 2;
}
</style>