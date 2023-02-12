<script setup lang="ts">
import VTLink from '../../../.vitepress/theme/components/VTLink.vue'
import PageHero from './PageHero.vue'
import PageDetail from './PageDetail.vue'
import PagePatient from './PagePatient.vue'
</script>

<template>
  <div class="GettrPage">
    <PageHero>
      <template #logo
        ><img
          style="height: 64px"
          src="../../public/images/dling.png"
          alt=""
      /></template>
      <template #title>叮铃医生</template>
      <template #lead
        ><VTLink href="https://www.51dling.com/" no-icon> 叮铃医生</VTLink>
        是通过PPP合作模式，通过智能自助终端+云平台+服务的产品形态，立杆见影的改善病人就医体验，推动分级诊疗，让医疗资源充分下沉，结合慢病的家庭医生计划，让广大市民在家里或家门口就可以高质量的看病。
        医疗卫生信息化体系的基本架构，实现跨机构、跨部门的卫生信息互联互通、数据共享，让数据在健康管理中真正流动起来为医疗所用，创新构建大健康生态圈。加快各级各类医疗卫生服务业务协同，促进区域协调，提高医疗卫生服务效率，为各级政府及部门提供全面、准确及时的信息，为病人高质量的智慧医疗卫生服务。
      </template>
    </PageHero>
    <PageDetail />
    <PagePatient />
  </div>
</template>

<style scoped>
.GettrPage {
  padding-bottom: 16px;
}
</style>
