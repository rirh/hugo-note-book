

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
| `git stash `                | 保存当前修改           |
| `git stash pop`             | 拆包当前修改           |

![image-20191216113953773](../assets/images/image-20191216113953773.png)

**git强制拉取远程仓库覆盖本地**

```shell
git fetch --all                //从另一个存储库下载对象和引用
git reset --hard origin/master //放弃本地修改
git pull                       //开始更新
```



**git协助流程**

多人协作是强大的功能之一。

多人协作（workflow）必须有一个规范流程，使得项目井井有条的进行。

![image-20191115142922654](../assets/images/image-20191115142922654.png)

可以把git抽象为仓库，当执行 git init 命令的时候，文件夹就初始化了一个.git文件夹仓库，
文件夹里的文件以git自己的方式记录当前文件夹的变化，一般来说为了防止用户误操作文件夹破坏仓库完整性，文件夹默认是隐藏的。

当使用git必须要掌握几个术语：

- 仓库（Repository）：一个完整的git项目
- 分支（branch）：拥有自己历史信息的时间线
- 工作区（Workspace）：本地的仓库的提交暂存
- 暂存区（index）:本地代码和远程有冲突的时候可以先存到暂存区

如果现在是一名作家写作流程：

首先需要初始化仓库每次的写完时候进行本地的仓库提交一些信息，然后再同步到远程的仓库，本地提交完成以后本地的仓库中会有你的这次的提交记录，远程仓库会同步本地仓库的所有的操作就记录在云端了。

每次写作操作很简单，只需要两步：

1. 提交本地仓库
2. 提交远程仓库

这样就算完成了最简单的流程

现在作者有多个设备，希望能够在家的时候通过家里的电脑写作，在公司通过公司电脑写作。当前作者仓库都是通过家里的电脑提交的。

1. 在公司的电脑上克隆仓库
2. 进行写作提交本地仓库
3. 提交远程仓库

每次写作的时候只需要先拉取家里电脑的提交的内容然后在进行写作在提交，这样内容就可以连接上，是在一个流水线了。

```
注意：1.如果某一天在家里写了文章忘记提交了，但人已经到公司了。没这种情况应该如何处理呢？  
     2.还有一种情况：在家里提交了，但是到公司脑子里想的就是接着写下去没有拉取家里的提交在公司写完就提交了，这        时候该怎么处理呢？
     
       这是最常见的两类情况！
```

1. 到公司可以接着写，写完提交，到家的时候先把家里的代码保存暂存区，拉去公司写的东西，把暂存区的文章pop进文件然后就算插进来了。再进行本地提交。
2. 第二种情况提交的仓库做了只能处理，提交到远程的时候会提示远程有一个带拉去的最新代码，所以先拉取然后再推送。

再后来。作者的新书出版了。只不过作者打算做一个连载网络版本，每过几天就需要更新一个版本。

1. 本地仓库和远程仓库都已经有了在这个基础上我们需要创建新的分支
2. 第一个分支是每次发布新书的内容，所以没发布一次就提交一次
3. 第二个分支是连载的内容，这个分支的内容完全是和第一个分支一样的。但是会有不同的是连载的内容只在这个分支上写只有到修改完需要发布的时候才会在第一个分支上同步第二个分支上的内容

```
可以理解为第一个分支是主线，第二个分支是最新学习内容
注意：分支的远程和本地的同步问题
     分支的管理问题
     多端分支的提交冲突问题
     提交错误会退的问题
```

后来作者越做越大成立了自己的公司，项目也越来越大，要提交的东西不仅仅是两个分支上的内容后来请来还几个人做翻译，写成译本出售。还有专门的插画师专门做给文章做插画但是还是这个项目为主打

于是作者给每个人都配了git分支 每个人需要把第一分支（主分支）和第二分支（最新连载）分支拉取下来，然后对每个人进行分工，在每个人分别对应的会建立一个属于自己的分支。每个人任务分工明确有几点特别重要

- 每个人只允许在自己的分支直接提交远程分支
- 合并的时候切换到最新分支
- merge你自己分支的内容（有冲突在本地解决再提交）
- 每完成一次任务提交一次

有了这些规则员工会很容易进行开发，项目管理清晰。无论扩展性还是管理性都很容易。

上面的故事

- git适合一个人使用（github flow）模式
- 小项目可以使用主线（git flow）模式
- 大项目使用（gitlab flow）模式

关于git的使用

团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。

否则，每个人都提交一堆杂乱无章的commit，项目很快就会变得难以协调和维护。

下面是[ThoughtBot](https://github.com/thoughtbot/guides/tree/master/protocol/git) 的Git使用规范流程。我从中学到了很多，推荐你也这样使用Git。

![img](../assets/images/bg2015080501.png)

## 第一步：新建分支

首先，每次开发新功能，都应该新建一个单独的分支。

> ```bash
> # 获取主干最新代码
> $ git checkout master
> $ git pull
> 
> # 新建一个开发分支myfeature
> $ git checkout -b myfeature
> ```

## 第二步：提交分支commit

分支修改后，就可以提交commit了。

> ```bash
> $ git add --all
> $ git status
> $ git commit --verbose
> ```

git add 命令的all参数，表示保存所有变化（包括新建、修改和删除）。从Git 2.0开始，all是 git add 的默认参数，所以也可以用 git add . 代替。

git status 命令，用来查看发生变动的文件。

git commit 命令的verbose参数，会列出diff 的结果。

## 第三步：撰写提交信息

提交commit时，必须给出完整扼要的提交信息，下面是一个范本。

> ```bash
> Present-tense summary under 50 characters
> 
> * More information about commit (under 72 characters).
> * More information about commit (under 72 characters).
> 
> http://project.management-system.com/ticket/123
> ```

第一行是不超过50个字的提要，然后空一行，罗列出改动原因、主要变动、以及需要注意的问题。最后，提供对应的网址（比如Bug ticket）。

## 第四步：与主干同步

分支的开发过程中，要经常与主干保持同步。

> ```bash
> $ git fetch origin
> $ git rebase origin/master
> ```

## 第五步：合并commit

分支开发完成后，很可能有一堆commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。

那么，怎样才能将多个commit合并呢？这就要用到 git rebase 命令。

> ```bash
> $ git rebase -i origin/master
> ```

git rebase命令的i参数表示互动（interactive），这时git会打开一个互动界面，进行下一步操作。

下面采用[Tute Costa](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)的例子，来解释怎么合并commit。

> ```bash
> pick 07c5abd Introduce OpenPGP and teach basic usage
> pick de9b1eb Fix PostChecker::Post#urls
> pick 3e7ee36 Hey kids, stop all the highlighting
> pick fa20af3 git interactive rebase, squash, amend
> 
> # Rebase 8db7e8b..fa20af3 onto 8db7e8b
> #
> # Commands:
> #  p, pick = use commit
> #  r, reword = use commit, but edit the commit message
> #  e, edit = use commit, but stop for amending
> #  s, squash = use commit, but meld into previous commit
> #  f, fixup = like "squash", but discard this commit's log message
> #  x, exec = run command (the rest of the line) using shell
> #
> # These lines can be re-ordered; they are executed from top to bottom.
> #
> # If you remove a line here THAT COMMIT WILL BE LOST.
> #
> # However, if you remove everything, the rebase will be aborted.
> #
> # Note that empty commits are commented out
> ```

上面的互动界面，先列出当前分支最新的4个commit（越下面越新）。每个commit前面有一个操作命令，默认是pick，表示该行commit被选中，要进行rebase操作。

4个commit的下面是一大堆注释，列出可以使用的命令。

> - pick：正常选中
> - reword：选中，并且修改提交信息；
> - edit：选中，rebase时会暂停，允许你修改这个commit
> - squash：选中，会将当前commit与上一个commit合并
> - fixup：与squash相同，但不会保存当前commit的提交信息
> - exec：执行其他shell命令

上面这6个命令当中，squash和fixup可以用来合并commit。先把需要合并的commit前面的动词，改成squash（或者s）。

> ```bash
> pick 07c5abd Introduce OpenPGP and teach basic usage
> s de9b1eb Fix PostChecker::Post#urls
> s 3e7ee36 Hey kids, stop all the highlighting
> pick fa20af3 git interactive rebase, squash, amend
> ```

这样一改，执行后，当前分支只会剩下两个commit。第二行和第三行的commit，都会合并到第一行的commit。提交信息会同时包含，这三个commit的提交信息。

> ```bash
> # This is a combination of 3 commits.
> # The first commit's message is:
> Introduce OpenPGP and teach basic usage
> 
> # This is the 2nd commit message:
> Fix PostChecker::Post#urls
> 
> # This is the 3rd commit message:
> Hey kids, stop all the highlighting
> ```

如果将第三行的squash命令改成fixup命令。

> ```bash
> pick 07c5abd Introduce OpenPGP and teach basic usage
> s de9b1eb Fix PostChecker::Post#urls
> f 3e7ee36 Hey kids, stop all the highlighting
> pick fa20af3 git interactive rebase, squash, amend
> ```

运行结果相同，还是会生成两个commit，第二行和第三行的commit，都合并到第一行的commit。但是，新的提交信息里面，第三行commit的提交信息，会被注释掉。

> ```bash
> # This is a combination of 3 commits.
> # The first commit's message is:
> Introduce OpenPGP and teach basic usage
> 
> # This is the 2nd commit message:
> Fix PostChecker::Post#urls
> 
> # This is the 3rd commit message:
> # Hey kids, stop all the highlighting
> ```

[Pony Foo](http://ponyfoo.com/articles/git-github-hacks)提出另外一种合并commit的简便方法，就是先撤销过去5个commit，然后再建一个新的。

> ```bash
> $ git reset HEAD~5
> $ git add .
> $ git commit -am "Here's the bug fix that closes #28"
> $ git push --force
> ```

squash和fixup命令，还可以当作命令行参数使用，自动合并commit。

> ```bash
> $ git commit --fixup  
> $ git rebase -i --autosquash 
> ```

## 第六步：推送到远程仓库

合并commit后，就可以推送当前分支到远程仓库了。

> ```bash
> $ git push --force origin myfeature
> ```

git push命令要加上force参数，因为rebase以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送

## 第七步：发出Pull Request

提交到远程仓库以后，就可以发出 Pull Request 到master分支，然后请求别人进行代码review，确认可以合并到master。







