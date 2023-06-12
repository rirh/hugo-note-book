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
          style="height: 100px"
          src="/public/images/coupon-logo.jpg"
          alt=""
      /></template>
      <template #title>优惠券小程序</template>
      <template #lead>
        <!-- 微信搜索"COUPON ORG+" -->
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
