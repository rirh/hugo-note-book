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
          style="height: 40px"
          src="../../public/images/openalpha-logo.ico"
          alt=""
      /></template>
      <template #title>Open Alpha</template>
      <template #lead>
        OpenAlpha开放平台提供基金指标入驻，支持接口单个或套餐销售，会员销售，服务对象投顾，自媒体，机构，个人，量化。
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
