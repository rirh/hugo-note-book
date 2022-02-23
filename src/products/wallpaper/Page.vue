<script setup lang="ts">
import { VTLink } from '../../../.vitepress/theme/lib/core'
import PageHero from './PageHero.vue'
import PageDetail from './PageDetail.vue'
</script>

<template>
  <div class="GettrPage">
    <PageHero>
      <template #logo
        ><img
          style="height: 64px"
          src="../../public/images/wallpaper-logo.png"
          alt=""
      /></template>
      <template #title>WALL PAPER</template>
      <template #lead>
        WALL PAPER是一款壁纸软件。丰富你的电脑屏幕。
      </template>
    </PageHero>
    <PageDetail />
  </div>
</template>

<style scoped>
.GettrPage {
  padding-bottom: 16px;
}
</style>
