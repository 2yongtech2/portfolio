<template>
  <div class="body">
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
  @import "~/assets/scss/variables";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    background: #000;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 48px;

    .link {
      color: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
    }
  }

  .body {
    padding-top: 60px;
  }
</style>