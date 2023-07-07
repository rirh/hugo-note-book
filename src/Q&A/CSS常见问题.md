# CSS常见问题

## Q:如何自动填充剩余空间？

CSS自动填充剩余空间有以下几种方法：

1. ##### flexbox布局

Flexbox是一种CSS布局模式，可以使用它来轻松地实现自适应布局和自动填充剩余空间。具体实现方式是在父容器上添加`display: flex;`属性，同时利用`justify-content`和`align-items`属性来控制子元素的排布及大小。

例如，可以使用以下代码使一个元素根据剩余空间自适应：

``` css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

2. ##### grid布局

Grid布局是另一种CSS布局模式，也可以用于实现自适应布局和自动填充剩余空间。在Grid布局中，使用`grid-template-columns`和`grid-template-rows`属性来定义每一行和每一列的大小。

例如，可以使用以下代码使一个元素在父容器中自适应：

``` css
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
```

3. ##### 使用calc()函数

使用CSS的calc()函数也可以实现自动填充剩余空间。例如，可以使用以下代码使一个元素根据父容器的剩余高度自适应：

``` css
.container {
  height: 300px;
}
.element {
  height: calc(100% - 100px);
}
```

其中，`.container`元素的高度为300px，而`.element`元素的高度通过`calc()`函数计算为父元素高度减去100px。

