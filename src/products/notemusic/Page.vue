<script setup lang="ts">
import VTLink from '../../../.vitepress/theme/components/VTLink.vue'

import PageHero from './PageHero.vue'
import PageDetail from './PageDetail.vue'
</script>

<template>
  <div class="GettrPage">
    <PageHero>
      <template #logo
        ><img
          style="height: 64px"
          src="https://6372-crypto2server-576164-1302901174.tcb.qcloud.la/z-org-logos/64x64.png"
          alt=""
      /></template>
      <template #title>Note Music</template>
      <template #lead> 音乐播放器 </template>
    </PageHero>
    <PageDetail />
  </div>
</template>

<style scoped>
.GettrPage {
  padding-bottom: 16px;
}
</style>
