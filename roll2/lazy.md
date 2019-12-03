{%  extends "../blocks.md"  %}
{%  block contain  %}

### 图片加载优化

页面中使用图片是很常见的，当页面加载图片的数量变大时，随之而来的是网络请求的增加，页面变的卡顿，对于用户来说影响体验，对于开发来说，一张很大的页面所有的图片一次性全部加载不做任何处理，显得不是那么专业。



**问题：**

项目使用ant-design-vue框架，首页有大量图片使用Avatar组件进行展示，页面图片过多导致加载速度过慢 



**解决方案**

窗口视图（viewport）是固定的，当图片在窗口视图可见进行加载，不可见显示默认图片或者不显示图片。



**核心代码**

```javascript
// 判断是否可见
function isIntersecting(el){
    let result = false;
    let windowHeight = window.innerHeight;
    let rect = el.getBoundingClientRect();
    const { top , height } = rect;
    result = top < windowHeight && top > -height;
    return result;
}

// 加载图片
function loadImage(img,src){
  const canload = img && src && isIntersecting(img);
  if(canload)img.setAttribute('src',src);   
}

// 获取窗口滚动执行优化图片的方法
// 一般来说监听页面滚动事件
 window.addEventListener('scroll',() => loadImage(img,src));

//vue自定义指令
export default {
  install(Vue, options){
    Vue.directive('lazy', {
      bind: function(el, binding, vnode){
        el.setAttribute('src', options.loading)
        window.addEventListener('scroll', function(){
          loadImage(el, binding.value)
        })
      },
      inserted: function(el, binding, vnode){
        loadImage(el)
      }
    })
  }
}
```

**实际运用中上面的代码并不是那么的好用**

- 窗口如果不是window的滚动监听会失效

- 多个页面需要分别对父DOM的进行监听滚动事件

- 实行起来工作量较大

  

针对上面的问题，进行下一步的优化

介绍一个最新API `IntersectionObserver`  提供了一种异步观察目标元素与其祖先元素或顶级文档视窗([viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport))交叉状态的方法 [MDN介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)



**兼容性也是很友好了**

![image-20191127120129214](../assets/images/image-20191127120129214.png)

**核心代码**

```javascript
const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((el: any) => {
        const isintersecting = el.isIntersecting;
        if (isintersecting) {
          this.src = this.realadder;
        }
      });
});
```

**修改思路**

引入组件使用的是按需引入的方式

![image-20191127121405103](../assets/images/image-20191127121405103.png)





**修改流程**

1. 引入Avatar组件
2. 创建高阶组件（HOC）修改自定义观察src属性，通过`IntersectionObserver`观察是否进入页面进行图片加载。进行优化处理
3. 注册高阶组件替换原来的组件



**实践**

```javascript
<style lang="less" scoped>
</style>
<template>
  <Avatar ref="image" v-on="$listeners" :src="src" v-bind="$attrs"></Avatar>
</template>
<script lang="ts">
/**
 * HOC VUE组件
 * 问题：
 * 音乐播放器的图片使用ant-design-vue Avatar组件实现；
 * 当有tab切换页且图片很多时页面非常卡顿,体验不好需要优化
 * 解决
 * 使用高阶组件对avatar进行封装
 * 监听图片是否在可见视图中 对可见的图片进行网络请求实现懒加载
 *
 */
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import ant from 'ant-design-vue';
const Avatar: any = ant.Avatar;
@Component({
  components: {
    Avatar,
  },
})
export default class Avatars extends Vue {
  //   @Prop() public data: any;
  public cach = '';
  public realadder = '';
  public src = '';
  @Watch('$attrs', { deep: true })
  public asyncSrc(params: any) {
    if (params.src) {
      this.src = params.src;
    }
  }

  public mounted() {
    this.realadder = this.$attrs.src;
    const image_dom: any = this.$refs.image;
    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((el: any) => {
        const isintersecting = el.isIntersecting;

        if (isintersecting) {
          this.src = this.realadder;
        }
      });
    });
    // const dom: any = document.querySelector(".HolyGrail-content");
    observer.observe(image_dom.$el);
    // console.log( window.document);

    // window.document.addEventListener("scroll", () => {
    //   console.log("滚动中...");
    // });
  }
}
</script>
```

🎉 效果
<image src="../assets/images/20191127-122628-HD.gif" alt="gif">

{%  endblock   %}