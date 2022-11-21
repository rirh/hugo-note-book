<script setup lang="ts">
import VTLink from '../../../.vitepress/theme/components/VTLink.vue'
import VTIconLink from '../../../.vitepress/theme/components/VTIconLink.vue'

const props = defineProps({
  partner: { type: Object}

})
</script>

<template>
  <article class="ProductsItem">
    <div class="container">
      <div class="content">
        <h1 class="title">项目简介</h1>
        <p class="description">
          GETTR是一个全新的社交媒体平台，建立在言论自由、独立思想、拒绝政治审查和“取消文化”的原则之上。
          凭借一流的技术，我们的目标是创建一个思想市场，以便在世界范围内分享自由和民主。
        </p>
        <p class="description">
          这个项目也是我从头开始参与的一个项目，经历了三个版本的迭代。 除了传统的
          Web 开发，还涉及Dark mode、LiveStream集成、Grpc实践，多语言应用、，非常感谢此项目，这也是让我受益成长最多的项目！
        </p>
        <p class="description">
          项目的管理严格遵循gitflow流程，每一次MR都会安排互相review
          code。提高代码质量。
        </p>
        <br />
        <h1 class="title">周期</h1>
        <p class="description">2020-12 ～ 至今</p>

        <section class="data">
          <ul class="data-list">
            <h1 class="title">相关链接</h1>
            <li class="data-item">
              <div class="data-icon">
                <VTIconLink class="data-icon-svg" />
              </div>
              <VTLink
                class="data-link proficiency-item"
                href="https://www.gettr.com"
                no-icon
              >
                线上地址
              </VTLink>

              <VTLink
                class="data-link proficiency-item"
                href="https://apps.apple.com/app/id1571619156"
                no-icon
              >
                苹果客户端
              </VTLink>
              <VTLink
                class="data-link proficiency-item"
                href="https://play.google.com/store/apps/details?id=com.gettr.gettr&showAllReviews=true"
                no-icon
              >
                安卓客户端
              </VTLink>
            </li>
            <br />
            <h1 class="title">项目截图</h1>
            <img src="../../public/images/gettr-1.png" alt="" />
            <br />
            <img src="../../public/images/gettr-2.png" alt="" />
          </ul>
        </section>
      </div>
    </div>
  </article>
</template>

<style scoped>
.ProductsItem {
  padding: 64px 24px;
  background-color: var(--vt-c-bg-soft);
  transition: background-color 0.5s;
}

@media (min-width: 768px) {
  .ProductsItem {
    padding: 64px 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: 392px;
}

@media (min-width: 768px) {
  .container {
    display: flex;
    max-width: 768px;
  }
}

.billboard {
  flex-shrink: 0;
  margin: 0 auto;
  width: 192px;
}

.logo {
  display: block;
  border: 1px solid transparent;
  border-radius: 8px;
  width: 192px;
  height: 192px;
  overflow: hidden;
  transition: border-color 0.25s;
}

.logo:hover {
  border-color: var(--vt-c-brand);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: var(--vt-c-text-2);
  transition: color 0.25s;
}

.social-link:hover {
  color: var(--vt-c-text-1);
}

.social-link-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.content {
  padding-top: 24px;
  flex-grow: 1;
}

@media (min-width: 768px) {
  .content {
    padding-top: 4px;
    padding-left: 32px;
  }
}

@media (min-width: 960px) {
  .content {
    padding-left: 64px;
  }
}

.title {
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
}

.description {
  font-size: 14px;
}

.description + .description {
  padding-top: 12px;
}

.proficiencies {
  padding-top: 24px;
}

.proficiency-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}

.proficiency-item {
  padding: 0 4px;
}

.proficiency-item::after {
  margin-left: 8px;
  content: '•';
  color: var(--vt-c-text-3);
  transition: color 0.25s;
}

.proficiency-item:last-child::after {
  display: none;
}

.proficiency-link,
.proficiency-text {
  font-size: 14px;
  font-weight: 500;
  transition: color 0.25s;
}

.proficiency-link {
  color: var(--vt-c-brand);
}
.proficiency-link:hover {
  color: var(--vt-c-brand-dark);
}
.proficiency-text {
  color: var(--vt-c-text-1);
}

.data {
  padding-top: 24px;
}

.data-item {
  display: flex;
}

.data-item + .data-item {
  padding-top: 12px;
}

.data-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 12px;
  width: 16px;
  height: 24px;
}

.data-icon-svg {
  width: 16px;
  height: 16px;
  fill: var(--vt-c-text-2);
  transition: fill 0.25s;
}

.data-item {
  font-size: 14px;
  font-weight: 500;
}

.data-link {
  line-height: 24px;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

.data-link:hover {
  color: var(--vt-c-brand-dark);
}

.data-texts {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}

.data-text {
  padding: 0 4px;
  line-height: 24px;
  transition: color 0.25s;
}

.data-text::after {
  margin-left: 8px;
  content: '•';
  color: var(--vt-c-text-3);
  transition: color 0.25s;
}

.data-text:last-child::after {
  display: none;
}
</style>
