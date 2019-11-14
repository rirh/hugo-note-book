

{%  extends "../blocks.md"  %}
{%  block contain  %}

# Mac 绑定邮箱

**Apple自带的邮件是一款出色的软件**

邮件的绑定和登录的流程不一样，导致很多用户并不会绑定邮箱，软件一直很少被使用。无法体验到软件的便利，其实对于用户来说更多的是一直损失。

```
邮箱绑定本质属于第三方的信任的授权，提供邮件的接收，发送以及其他权限操作。
每种邮箱校验和信任的方式有差异，加上安全验证问题导致添加起来比较麻烦。
1.获得邮箱的授权码(POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务)
2.打开邮件选择邮箱类型绑定账户
```

![image-20191114105443682](/Users/zh/Documents/个人信息/gitbook/web/assets/images/image-20191114105443682.png)

mac支持绑定多种类型的邮箱

1. 打开邮箱选择添加账户
2. 选择要添加账户的类型(以腾讯邮箱为例)
3. 邮箱输入QQ邮箱
4. 密码输入授权码

![image-20191114110301185](/Users/zh/Documents/个人信息/gitbook/web/assets/images/image-20191114110301185.png)



![image-20191114114509794](/Users/zh/Documents/个人信息/gitbook/web/assets/images/image-20191114114509794.png)

获取授权码都需要的邮箱端开启服务验证用户才能获得

![image-20191114115404764](/Users/zh/Library/Application Support/typora-user-images/image-20191114115404764.png)

获取以后直接登录就行了

{%  endblock   %}