

# Gettr

## 背景

[GETTR](https://www.gettr.com/) （中文名为盖特）是源于美国的社群网络服务及社会化媒体网站，总部位于美国纽约州，由前美国总统唐纳德·特朗普的助手和发言人杰森·米勒创建。



GETTR 是一个全新的社交媒体平台，其创立基于言论自由、独立思考以及反对政治审查和“文化取消”的原则。凭借最先进的技术，的目标是创建一个思想交流的市场，以分享自由和民主的理念，让其在全球范围内传播。



## 看板

- [网页版](https://www.figma.com/proto/sL1mV6J082suvJIQfW0bmx/Untitled?node-id=19%3A576&viewport=-6778%2C567%2C1&scaling=min-zoom) [App版本](https://www.figma.com/file/RhWwd6KAtjmtSMTtX72uDo/JLGsoftware?type=design&node-id=1401-280)（2022/11/21）
- [项目安排](https://docs.google.com/spreadsheets/d/1_BTsYIpUGw_Z0Z2FWVkrOKYWKdFlYpxw0BDuxulFjh4/edit#gid=0)
- [会议纪要](https://docs.google.com/spreadsheets/d/1JJVgPn7qTHjd395qXO5b40v2iZxGDizcKqTRAR8eQ-Y/edit#gid=1559807966)
- [工时统计](https://cdn.discordapp.com/attachments/848785420325355530/925207153575358534/5184941ddfd96da8.pdf)
- [分支管理](https://docs.google.com/spreadsheets/d/1Q3wnNdp6JgAkFHzi8pnTynnbdnlnG_nNVMHTA_qXXYE/edit#gid=0)

## 组织过程资产

- [文件管理模块](https://cdn.discordapp.com/attachments/778797009195761667/785696518552289300/Getter.pdf)
- [文件上传模块](https://cdn.discordapp.com/attachments/778797009195761667/790415255191683102/Getter_Media_Upload_20201211.pdf)
- [川普频道](https://gab.com/realdonaldtrump)
- [需求池](https://docs.google.com/spreadsheets/d/1r1kG6-CvmM4nlQQT81K_jEhksVDxo1h9yzdhiFrgLQo/edit?usp=sharing)

- [搜索引擎公司资源](https://docs.google.com/spreadsheets/d/1um9HdSCjKOCxK3sxJWhyHocyyu8fmtWPG8Y9NpPI2VY/edit#gid=0)
- [搜索引擎开源仓库](https://github.com/meilisearch/MeiliSearch)

## 用户体系概述

eb端和APP端。有所不同，但是账号基本上都是通用的。

一 账号分类：
    1 Web端： 
      1.1 ‌匿名用户： 除了游览之外，基本上不可以进行其他操作，但是可以注册和登录。
    ‌  1.2 正式账号，我们通常意义上所说的正常账号。
    2 APP端：
        ‌2.1 未设置密码的临时账号：首次建立临时账号，系统按规则给他生成 UserID 和 UserName，当他要退出该临时账号的时候提醒用户：
            2.1.1 改UserName：系统帮他生成的 UserName, 他有机会改一次，主要是系统生成的用户很难记, 他可能希望改成他平时容易记住 UserName
            2.1.2 设置密码: 如果没有设置密码，信息不会保存，数据会全部丟失，设置密码之后就转换成下面这类账号（设置了密码的临时账号）。
            用户设置完了之后，把 UserName 保存手机APP端，供系统下次启动的时候让用户选择账号登录。
            如果临时用户知道怎么使用退出功能的话，让他设置 UserName 和密码也不是难事。
        ‌2.2 设置了密码的临时账号：退出的时候就不会提示用户要设置密码，退出系统之后，下次再打开APP，如果该手机只有一个临时账号就。让他输入密码直接登录。如果该手机有两个或以上临时账号，就用一个列表让他选择要登录的账号，输入密码之后登录。
        2.3 正式账号：绑定了Email（后面可能会实现绑定手机号码或者是指纹…）就升级成为了正式账号

3 为什么临时账号要设置密码？
    3.1 设置了密码之后， 在Web端可以使用 UserName + 密码 的方式在Web端登录（当然，后面可能会实现通过APP端二维码扫描的方式登录Web端）
    3.2 可以在同一部手机中使用多个临时账号。
    3.3 个人隐私保密。

4 总的来说账号应该有4类：
    4.1 匿名用户（Web端， 严格意义上来说，这不是账号，因为后端也不会保存匿名用户）。
    4.2 未设置密码的临时账号(APP端)。
    4.3 已设置密码的临时账号(APP端)。
    4.4 正式账号(Web端 和 APP端)。

‌
二 临时账号的意义主要是方便APP端的使用，但要限制一些功能， 这是为了防止产生大量的垃圾数据， 所以临时账号除了可以查看，还可以点赞和转发，但是不能 post 和 reply。
    产生临时账号只能在APP端，使用已设置密码的临时账号既可以在APP端，也可以在web端，如果实现了二维码扫描web登录的话，未设置密码的临时用户也可以通过二维码扫描登录。

三 临时账号产生的两种方式（只在APP端）：
    1 手机上连一个账号都没有，通常是在安装APP后首次打开APP的时候会有这种情况。
    2 手机APP上虽然有账号（只包括已设置密码的临时账号和正式账号，不包括未设置密码的临时账号，因为未设置密码的临时账号退出时不会保存数据），但是都已经登出了，这时候当用户打开APP，应该还有一个类似于“随便看看”的按钮，此时APP也会产生另外一个临时账号。（除了随便看看之外，还应该让用户选择哪个账号来登录，如果只有一个账号那就不用列表，如果有多个账号那就要用列表让他选择要登录的账号）

四 正式账号的产生方式有三种（包括 web端和APP端）：
    1 web端直接注册为正式账号，必须绑定Email。
    2 APP端的临时账号升级成为正式账号： 必须设置密码和绑定Email。
    3 APP端直接注册正式账号，必须绑定Email（或者后面实现绑定手机号码、指纹…）

五 临时账号升级成正式账号的两种方式：
    1 APP端绑定email（后面可能会实现手机号码或者指纹绑定…）升级成正式账号， 还有一点很重要，如果是未设置密码的临时账号升级成正式账号，必须设置密码。
    2 如果实现了Web端通过APP端二维码扫描登录功能，而且是临时账号登录到Web端，也可以在Web端绑定Email或者手机号码升级成正式账号。

## Twitter用户迁移流程图

![img](https://c18e-1257416358.cos.accelerate.myqcloud.com/g_claim.png)



## 机型调研

![img](https://c18e-1257416358.cos.accelerate.myqcloud.com/unknown.png)

![](https://c18e-1257416358.cos.accelerate.myqcloud.com/unknown-20230614204039205.png)

## 任务安排

![img](https://c18e-1257416358.cos.accelerate.myqcloud.com/unknown-20230614204316390.png)

![img](https://c18e-1257416358.cos.accelerate.myqcloud.com/unknown-20230614204436999.png)

## 测试数据

- [数据库性能测试](https://discord.com/channels/778797009195761664/778797009195761667/782284306206687237)

  数据库系统性能初步测试 现在的Redis加上MongoDB集群的设计是非常好的，能够使用 Redis的缓存能力， 加上MongoDB 分布式存储能力，达到提供高负载， 高可用性的目的. 可以基于现有系统进行初步的性能测试. 名词定义： 1. 在线用户/online user: 指在某一时刻，该用户在线观看直播或者浏览网页，没有点击或者发送信息或者刷新网页。 2. 并发用户/concurrent user: 指在某一时刻，该用户刷新网页，发送盖文，给主播 VIP 点赞等.  3. 读写比例：指用户如何使用本系统，用户行为，是点赞发盖文还是浏览信息刷新页面. 真实的比例需要分析 GTV 日志才会有准确值,目前先假定 80% 对 20% 的比例 4. 数据库并发量：数据库某一时刻同时写和读的进程,数据库一定数量并发量可以支持并发用户数量取决于软件设计  性能测试场景： 1. 100% 读场景：模拟平时系统不繁忙的场景,理论上性能最好, 系统的最大容量, 先不考虑用户访问数据"穿透" Redis 去 MongoDB 去访问磁盘, 即Redis 缓存失效，造成的性能下降 2. 100% 写场景: 模拟系统非常繁忙或者是受到黑客攻击的场景,理论上性能最差. 系统最小的容量,会有大量数据写入系统，导致 Redis缓存失效. 3. 80% 写 + 20% 读： 模拟有VIP直播的时候， 用户大量发送信息，点赞，等场景，是系统典型应用场景. 4. 20% 写 + 80% 读： 模拟没有VIP直播，用户只是在浏览网页，少量发盖文，点赞等.
   以上测试先不考虑 MongoDB 本身缓存的影响.  性能测试并发数： 先以 4000 并发用户开始 , 加大到 100000.   性能测试工具： 市场很多测试工具，我个人使用 ycsb
   https://github.com/brianfrankcooper/YCSB/tree/master/mongodb  MongoDB的 发行版/distribution version :  建议使用percona 公司版本，是community 社区版本的增强版,免费,也可以收费提供支持  MongoDB 备份建议： 1. 每周全备份 full backup weekly  2. 每天增量备份  differential backup daily  3. 备份文件压缩加密， 保存到 其他服务器上，避免泄密 4. 系统管理员 和数据库管理员 分开，避免互相泄密 .  5. 备份工具建议 同样 percona 公司产品 https://www.percona.com/software/mongodb/percona-backup-for-mongodb ,免费,也可以收费提供支持  性能监控软件: grafana 可以实时观察服务器的 CPU 内存， 磁盘等性能,对于了解 服务器负载 ， 分析问题 有很大帮助 https://grafana.com/products/enterprise/

  GitHub

  [brianfrankcooper/YCSB](https://github.com/brianfrankcooper/YCSB/tree/master/mongodb)

  Yahoo! Cloud Serving Benchmark. Contribute to brianfrankcooper/YCSB development by creating an account on GitHub.

  

  ![图片](https://images-ext-2.discordapp.net/external/iq9cXjYyNXurdvSjmeS5GS5pwW_ro_cGejt9Axx-880/%3Fs%3D400%26v%3D4/https/avatars3.githubusercontent.com/u/247619?width=160&height=160)

  Percona

  [Percona Backup for MongoDB](https://www.percona.com/software/mongodb/percona-backup-for-mongodb)

  Your database stores your most valuable information. The native high-availability provided by replication in MongoDB protects against hardware failure, but a way to rewind time to before a bug

  

  ![Percona Backup for MongoDB](https://images-ext-1.discordapp.net/external/Ur0XdLX3m4dyE2dZcCUbsW-K-Ro_F_Mygg91W6jbiAo/https/www.percona.com/sites/default/files/social_sharing_img/mongoDB-backup-social.jpg?width=800&height=418)

  Grafana Labs

  [Grafana Enterprise](https://grafana.com/products/enterprise/)

  Why organizations choose Grafana Enterprise: Enhanced collaboration and usage analytics for teams. Advanced security and reporting requirements. Visibility …



