

{%  extends "blocks.md"  %}
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



**`P{color:red}`**

```
上面例子

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

写起来和说英文类似
就像在和电脑交流
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

```html
<style>
#navlist{position:relative;}
#navlist li{margin:0;padding:0;list-style:none;position:absolute;top:0;}
</style>
<ul id="navlist" >
  <li id="home">
  <a href="default.asp"></a>
  </li>
</ul>
```



时至今日（2019），css有了突破性的发展，预编译器的出现让css生态更加丰富。



{%  endblock  %}