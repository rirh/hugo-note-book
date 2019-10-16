{%  extends "blocks.md"  %}
{%  block contain  %}
# Git

git是世界上最先进的发布式版本控制系统



**git常用命令**

| 代码                        | 注释                   |
| --------------------------- | ---------------------- |
| `git init`                  | 初始化仓库             |
| `git remote add origin URL` | 绑定远程地址           |
| `git add .`                 | 添加所有改动           |
| `git commit -m NAME`        | 提交本次添加并为其命名 |
| `git push`                  | 提交到远程仓库         |



**git强制拉取远程仓库覆盖本地**

```shell
git fetch --all                //从另一个存储库下载对象和引用
git reset --hard origin/master //放弃本地修改
git pull                       //开始更新
```

{%  endblock  %}

