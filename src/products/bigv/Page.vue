<script setup lang="ts">
import { VTLink } from '../../../.vitepress/theme/lib/core'
import PageHero from './PageHero.vue'
import PageDetail from './PageDetail.vue'
</script>

<template>
  <div class="GettrPage">
    <PageHero>
      <template #logo>
        <img
          style="height: 64px"
          src="../../public/images/bigv-logo.jpeg"
          alt=""
      /></template>
      <template #title>大V支持</template>
      <template #lead>
        大V支持是一站式基金投研平台，提供投前基金筛选、基金经理排名、市场总览、基金组合回测、业绩归因等功能。
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
