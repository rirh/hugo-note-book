<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NewsLetter from './NewsLetter.vue'
import SponsorsGroup from './SponsorsGroup.vue'
const epic = ref(' 世界上有10类人：一类是懂计算机的，一类是不懂的。')

const url =
  'https://42541d62-1eb3-4f4a-b656-cc98d4542086.bspapp.com/http/epic'

const fetchepic = async () => {
  const response = await fetch(url)
  const res = await response.json()
  const [_epic] = res.data
  epic.value = _epic.contant
}
const interval = setInterval(fetchepic, 10000)
onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div>
    <Sence />
    <section id="hero">
      <h1 class="tagline">
        My
        <span class="accent">Life</span>
        <br />Getting Better ☀️
      </h1>
      <p class="description">
        {{ epic }}
      </p>
      <p class="actions">
        <a class="get-started" href="/guide/introduction.html">
          立即探索
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
            />
          </svg>
        </a>
        <a class="setup" href="/guide/quick-start.html">开始阅读 ✍️</a>
      </p>
    </section>

    <!-- TODO make dynamic based on data -->
    <!-- <section id="special-sponsor">
      <span>鸣谢</span>
      <a href="https://www.tigerzh.com">
        <picture>
          <source
            type="image/avif"
            srcset="
              https://6372-crypto2server-576164-1302901174.tcb.qcloud.la/z-org-logos/logo-512x160.png
            "
          />
          <img
            alt="hbuilder logo"
            src="https://6372-crypto2server-576164-1302901174.tcb.qcloud.la/z-org-logos/logo-512x160.png"
          />
        </picture>
      </a>
      <span>特别支持</span>
    </section> -->

    <section id="highlights" class="vt-box-container">
      <div class="vt-box">
        <h2>兴趣是有用的东西</h2>
        <p>
          如果一样东西，你能感到它想做成什么，并且也知道它可能很重要，但是它的制造商没有做对。技术人员就会产生一种强烈的愿望来修复它，把它做对，并向人们展示它应该是什么样。
        </p>
      </div>
      <div class="vt-box">
        <h2>不要读其它人读的东西</h2>
        <p>
          课堂是一个美妙地方，老师拿着薪水在意你的想法，同学也在意大家的想法。日常生活中，这种美妙是不存在的。在工作或者生活中，大多数人并不在意你的想法
        </p>
      </div>
      <div class="vt-box">
        <h2>QUIC 协议的加密机制</h2>
        <p>
          谷歌想改进 TCP 协议，但是 TCP
          协议是操作系统内核实现的，实际上没法改进。所以，他们选择在 UDP
          协议的基础上，重新实现了一个不同的 TCP 协议，叫做 QUIC 协议
        </p>
      </div>
    </section>

    <!-- <section id="sponsors">
    <h2>Platinum Sponsors</h2>
    <SponsorsGroup tier="platinum" placement="landing" />
    <h2>Gold Sponsors</h2>
    <SponsorsGroup tier="gold" placement="landing" />
  </section> -->

    <NewsLetter />
  </div>
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}

.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
