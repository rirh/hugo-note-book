<script setup lang="ts">
import { VTLink, VTIconLink } from '../../../.vitepress/theme/lib/core'

const props = defineProps({
  partner: { type: Object, required: true }
})
</script>

<template>
  <article class="ProductsItem">
    <div class="container">
      <div class="content">
        <h1 class="title" style="font-size: 22px">医生端</h1>
        <br />
        <h1 class="title">项目简介</h1>
        <p class="description">
          医生端是给医护人员使用的APP，帮助那些有需求没时间来医院的人提供线上就医服务。
        </p>
        <p class="description">
          全新的医生端我作为App
          Owner，负责android和ios端的研发、APP上架、证书管理、版本管理的工作。结合团队现有技术栈和公司时间预期，使用uniapp开发。
          由于android和ios的新特性和政策的持续更新，
          应用被动保持同步更新。期间也遇上了很多条款协议上的问题，值得一提的是：第一版在医院发布上线通知的头天晚上12点通过审核：）
        </p>
        <p class="description">
          项目集成腾讯（TIM）进行在线问诊、基于个推推送、历史聊天手机端本地数据库缓存策略，配置 sensors.js，简化埋点使用
        </p>

        <br />
        <h1 class="title">周期</h1>
        <p class="description">2020-01 ～ 2021-03</p>

        <section class="data">
          <ul class="data-list">
            <h1 class="title">相关链接</h1>
            <li class="data-item">
              <div class="data-icon">
                <VTIconLink class="data-icon-svg" />
              </div>

              <VTLink
                class="data-link proficiency-item"
                href="https://apps.apple.com/cn/app/叮铃医生-医生版/id1475864364?l=nl"
                no-icon
              >
                苹果客户端
              </VTLink>
              <VTLink
                class="data-link proficiency-item"
                href="http://www.pc6.com/az/813185.html"
                no-icon
              >
                安卓客户端
              </VTLink>
            </li>
            <br />
            <h1 class="title">项目截图</h1>
            <div class="screenshot">
              <img src="../../public/images/doctor1.png" alt="" />
              <img src="../../public/images/doctor2.png" alt="" />
              <img src="../../public/images/doctor3.png" alt="" />
              <img src="../../public/images/doctor4.png" alt="" />
            </div>
          </ul>
        </section>
      </div>
    </div>
  </article>
</template>

<style scoped>
.screenshot {
  display: block;
  box-sizing: border-box;
}
.screenshot img {
  width: 100%;
  margin-bottom: 10px;
}

.ProductsItem {
  padding: 64px 24px;
  background-color: var(--vt-c-bg-soft);
  transition: background-color 0.5s;
}

@media (min-width: 768px) {
  .ProductsItem {
    padding: 64px 32px;
  }
  .screenshot {
    display: flex;
    box-sizing: border-box;
  }
  .screenshot img {
    width: 25%;
    margin-right: 10px;
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
