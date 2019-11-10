

{%  extends "../blocks.md"  %}
{%  block contain  %}

# css
**css：指层叠样式表 (Cascading Style Sheets)**



**作用**

```
css是表现和语义分离的解决方案（通常作为单独的样式文件）
css决定html如何显示
```



**语法**

```
css语法很简单,包含两个部分:
选择器和声明
```



**`P{color:antiquewhite}`**

```
P                    选择器；
{color:antiquewhite} 声明；

（ps）一般来说大括号左边的属于选择器 括号里面属于声明
```



**选择器**

```
选择的种类有很多种
选择器的的目的是选中某一元素或多个元素的某个状态
```

关于更多种类的 [选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS)



**声明**

```
声明分为属性和值
color:antiquewhite

color：       属性
antiquewhite：值

类似英文语句交流
理解为和电脑交互的方式
告诉下一个要做什么动作
要怎么做

这个声明的含义：颜色：古董白。

```

关于更多的[属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

```
这是css的使用核语法
选择器的选择配合声明的可以实现令人叹为观止的的效果
```



**早前的代码**：

```html
<ul id="navlist" style="position:relative;">
  <li id="home" style="margin:0;padding:0;list-style:none;position:absolute;top:0;">
  <a href="default.asp"></a>
  </li>
</ul>
```

有一家公司透露公司主页代码多达8000+行，大量的类似于上面的代码修改起来对于前端程序员来简直是灾难。css的出现正是为了解决这一问题。css更多的是以单独的文件形式出现。

```css
<style>
  #navlist{position:relative;}
  #navlist li{margin:0;padding:0;list-style:none;position:absolute;top:0;}
</style>
```



```html
<ul id="navlist" >
  <li id="home">
  	<a href="default.asp"></a>
  </li>
 </ul>
```



时至今日（2019），css有了突破性的发展，预编译器的出现让css生态更加丰富。

在使用的过程中发现，如果想要把单独的某个功能分离出来，首先要去html中找到对应的功能，其次在层叠样式表文件中找到对应的文件。如果项目庞大，那么光是分离某一个功能也需要花上很长的时候，所以需要一种模式把每个功能模块分开，并且满足功能复用的需求，现在互联网公司更加要求敏捷开发，功能能够共享更加与时代浪潮产生共鸣，react,vue随之孕育而生，因此react，vue组件化，模块化的概念越发的盛行。



## css简易简易

> **对于页面来说,动画真是太有用了!**

`开发页面的时候,总是会用上动画.使的网站的交互性更加的完善.很多时候会忘记使用的流程,本文作为开发笔记 方便使用.`

## 1.Transition

```css
  .con {
      font-size: 16px
    }

    .con:hover {
      font-size: 40px
    }     
```

```html
  <span class="con">
    anim
  </span>
```
**上面是一个演示,当鼠标放在文字上,文字会迅速变大,上面是很简单的代码.**

```css
   .con {
      font-size: 16px;
      transition: 1s;
    }
```

**transition的作用在于，指定状态变化(这里指的是时间)**

***由于是简易教程 所有其他的属性不展开讲 展开那可能可以写一本书
所有支持的属性请点击[链接](http://oli.jp/2010/css-animatable-properties/)
这边有一些[示例](http://leaverou.github.io/animatable/)***


    transition局限性


 1. 需要事件触发
 2. 事件是一次性的
 3. 无法定义中间状态
 4. 一条transition只能定义一个属性

## Animation

> 为了解决上述的问题 于是就有了强大的Animation
> 可以下结论:Animation就是为了解决这些问题而存在的

```css
  .con {
      font-size: 16px;
      transition: 1s;
    }

    .con:hover {
      /* font-size: 40px */
      animation: 1s scla;
    }

    @keyframes scla {
      from {
        font-size: 16px;
      }
      to{
        font-size: 40px
      }
    }
```
上面是最简单的例子

 1. 不需要事件触发

```css
  .con {
      font-size: 16px;
      animation: 1s sc;
    }
```

 2. 事件的循环次数可以自定义
```css
  .con {
      font-size: 16px;
      animation: 1s sc infinite;
    }
```
**无限播放**
 3. 可以控制中间状态

```css
 .con {
  font-size: 16px;
  animation: 1s sc forwards;
}
```
**保留最后的状态**

 4. 能定义多个属性
```css
  @keyframes sc {
      from {
        font-size: 16px;
        background-color: #fff;
      }
      to{
        font-size: 40px;
        background-color: #000;
        color: #fff

      }
    }
```
TODO...



{%  endblock  %}