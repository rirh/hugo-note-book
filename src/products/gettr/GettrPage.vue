<script setup lang="ts">
import VTLink from '../../../.vitepress/theme/components/VTLink.vue'
import GettrHero from './GettrHero.vue'
import GettrDetail from './GettrDetail.vue'
</script>

<template>
  <div class="GettrPage">
    <GettrHero>
      <template #title>GETTR</template>
      <template #lead
        ><VTLink href="https://www.gettr.com/" no-icon>GETTR</VTLink> is a
        brand new social media platform founded on the principles of free
        speech, independent thought and rejecting political censorship and
        “cancel culture.” With best in class technology, our goal is to
        create a marketplace of ideas in order to share freedom and
        democracy around the world.</template
      >
    </GettrHero>
    <GettrDetail />
  </div>
</template>

<style scoped>
.GettrPage {
  padding-bottom: 16px;
}
</style>
