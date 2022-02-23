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
          src="../../public/images/fas-logo.png"
          alt=""
      /></template>
      <template #title>基金研究平台</template>
      <template #lead
        ><VTLink href="https://datumwealth.com/" no-icon> 西筹</VTLink>
        基金研究平台将各种基金信息、分析工具接口化，为了赋能任何有基金研究、开发需求的团队，使其能快速搭建自身的财富管理平台，或调用相关数据。
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
