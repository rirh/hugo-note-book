<template>
  <div>
    <pre>{{ userAgent }}</pre>
    <pre>{{ page }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
const { page } = useData()
const userAgent = ref(navigator.userAgent)
console.log(userAgent)

</script>



<style scoped></style>
