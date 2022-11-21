<script setup lang="ts">
import VTLink from '../../../.vitepress/theme/components/VTLink.vue'
import VTIconLink from '../../../.vitepress/theme/components/VTIconLink.vue'
import PageHero from './PageHero.vue'
import PageDetail from './PageDetail.vue'
</script>

<template>
  <div class="GettrPage">
    <PageHero>
      <template #logo
        ><img
          style="height: 64px"
          src="../../public/images/btcalory.ico"
          alt=""
      /></template>
      <template #title>币傲</template>
      <template #lead>
        面向个人用户的量化交易终端,使用比特卡路里的目的并不是替代交易所，而是给您交易所开个“外挂”。一个终端连接3大交易所；比特卡路里操作速度比交易所更快，比特卡路里有更好的止盈止损方法。
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
