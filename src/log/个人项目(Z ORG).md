# ZORG

## 背景

web2的所有网络都是租赁关系，属于我们自己的只有操作方法和管道数据。数据和流量对我们，利用网上的，以最小的代价创建自己互联网组织打造极具个人平台

## IDEA

```
每天买菜记账小程序
需要记录明天要买什么菜


```



## 修改速记

- 1.字体更改  2.区间颜色（金）
- 对了，就是后面的图字号可能要改动下，我今又和领导确认了下（金）
- 颜色修改一下（涛）
- 哎有时间还得再改（金）
- 四个指标图开始位置
- 去掉windows上滚动条问题
- x轴显示月末
- 添加左侧Panel折叠效果 折叠显示icon业绩走势图  
- 多选数据设置
- 业绩指标表年化文字
- 相关性保留四位小数·
- 基金经理模糊匹配接口（走开放平台）
- 基金模糊匹配接口（走开放平台）





## 看板

- [冲刺看板](https://table-au.atlassian.net/jira/software/c/projects/TAB/boards/1/backlog?selectedIssue=TAB-1&issueLimit=100&atlOrigin=eyJpIjoiNzg4ZjBjYzRiMTg4NDIzYzllN2YxOTRkOGIwMDk4ZjQiLCJwIjoiaiJ9)
- [接口说明文档](https://docs.qq.com/doc/DQVRPWVpXUk9pREt5)
- [需求文档](https://docs.qq.com/doc/DV1RNVHpJQVZqeUN1)
- [bug跟踪](https://docs.qq.com/sheet/DZFN1VVNUcVBIVnp0?tab=BB08J2)
- [UI（蓝湖）](https://lanhuapp.com/web/#/item/project/stage?tid=8e328edc-d935-4d57-9cbe-d9b1811457f6&pid=851e8897-2d68-45e1-a2a0-7b648f12c531)

## 组织过程资产

- [模版库](https://docs.qq.com/doc/DV3pNcW5OSnhjS3h1)
- [figma](https://www.figma.com/file/orVQj1y3YQyWeGDFffDGDt/Untitled?node-id=0%3A1)
- [tinycolor2(颜色格式转化包)](https://www.npmjs.com/package/tinycolor2)
- [excel表格包](https://handsontable.com/)

## 产品输出

- [测试地址](https://test.datumwealth.com/funddatabrowse/tableAubrowse/index)
- 账号：admin
- 密码：qutke.com

## 架构布局

- 根据几百种研报图表风格，抽离出若干种使用频率高，覆盖范围广的模版
- 抽离公共的store

## 更新模版

```
测试环境0928更新

图表更新
持股数量图
偏离度和超额收益图

其他更新
修复业绩走势图超额收益legend隐藏自定义选项
修复输入不存在基金报错提示
修复基金经理生涯曲线季度排名走势图-数据缺失
修复业绩走势图-起点处基金经理入职信息显示不全
修复业绩指标表-性价比及相关性两类指标均不带%，格式和Beta保持一致
基金产品部分默认产品调整为华安智能生活（006879)
基金经理姓名支持模糊匹配
修复搜索基金报错
修复图表下载图片清晰度较差

请大家及时测试回归bug
bug统计
https://docs.qq.com/sheet/DZFN1VVNUcVBIVnp0?tab=BB08J2
测试网址
https://test.datumwealth.com/funddatabrowse/tableAubrowse/index
账号密码
admin/qutke.com
```

