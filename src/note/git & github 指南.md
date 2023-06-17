


# Git指南

git是世界上最先进的发布式版本控制系统



## **git常用命令**

| 代码                        | 注释                   |
| --------------------------- | ---------------------- |
| `git init`                  | 初始化仓库             |
| `git remote add origin URL` | 绑定远程地址           |
| `git add .`                 | 添加所有改动           |
| `git commit -m NAME`        | 提交本次添加并为其命名 |
| `git push`                  | 提交到远程仓库         |
| `git stash `                | 保存当前修改           |
| `git stash pop`             | 拆包当前修改           |

![image-20191216113953773](https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/image-20191216113953773.png)

## **git强制拉取远程仓库覆盖本地**

```shell
git fetch --all                //从另一个存储库下载对象和引用
git reset --hard origin/master //放弃本地修改
git pull                       //开始更新
```



## **git协助流程**

多人协作是强大的功能之一。

多人协作（workflow）必须有一个规范流程，使得项目井井有条的进行。

![image-20191115142922654](https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/image-20191115142922654.png)

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

![img](https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/bg2015080501.png)

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

## 基本配置
```bash
# 查看当前生效的配置信息
$ git config -l

# 配置提交用户信息，--global代表全局
$ git config --global user.name <用户名>
$ git config --global user.email <邮箱地址>

# 更改Git缓存区的大小
# 缓存大小单位：B，例如：524288000（500MB）
$ git config --global http.postBuffer <缓存大小>

# 配置可以缓存密码，默认缓存时间15分钟
# 缓存时间单位：秒
$ git config --global credential.helper 'cache --timeout=<缓存时间>'

# 配置长期存储密码
$ git config --global credential.helper store
```
## 基础操作

```bash
# 初始化本地仓库，在当前目录下生成 .git 文件夹
$ git init

# 查看本地仓库的状态
$ git status

# 把指定1个或多个文件添加到暂存区中
$ git add <文件路径>

# 将工作区所有变化提交到暂存区，包括修改、新文件和删除文件。
$ git add . 
$ git add -A <文件路径>
$ git add --all <文件路径>

# 添加所有修改、已删除的文件到暂存区中，不包含新增文件
$ git add -u [<文件路径>]

# 移除跟踪指定的文件，并从本地仓库的文件夹中删除
$ git rm <文件路径>

# 移除跟踪指定的文件夹，并从本地仓库的文件夹中删除
$ git rm -r <文件夹路径>

# 移除跟踪指定的文件，在本地仓库的文件夹中保留该文件
$ git rm --cached

# 撤消工作区对文件的修改, 慎用
$ git checkout -- <文件名>

# 把暂存区中的文件提交到本地仓库中并添加描述信息
$ git commit -m "<提交的描述信息>"

# 修改上次提交的描述信息
$ git commit --amend

# 打印所有的提交记录，使用--oneline选项可以简化输出
$ git log 

# 使用--author选项可以打印出某个用户的提交记录
$ git log --author="大江狗"
```
## 版本回退
```bash
# 可查看所有分支的操作记录（包括已被删除的 commit 记录和 reset 的操作）
$ git reflog 

# 将 HEAD 的指向改变，回退到commit前的状态，文件未改变
$ git reset --soft <commit ID>

# 将 HEAD 的指向改变，文件被修改，均回到之前版本
$ git reset --hard <commit ID>

# 回退到上个版本
$ git reset --hard HEAD^

# 回退到前2次提交之前，以此类推，回退到n次提交之前
$ git reset --hard HEAD~3 

# 按提交id，可以回退，也可以前进
$ git reset --hard <commit ID>

# 生成一个新的提交来撤销某次提交
$ git revert <commit ID>
```

## 远程操作
```bash
# 列出已经存在的远程仓库
$ git remote

# 列出远程仓库的详细信息，在别名后面列出URL地址
$ git remote -v

# 添加远程仓库，别名一般默认origin
$ git remote add <远程仓库的别名> <远程仓库的URL地址>

# 修改远程仓库的别名
$ git remote rename <原远程仓库的别名> <新的别名>

# 删除指定名称的远程仓库
$ git remote remove <远程仓库的别名>

# 修改远程仓库的 URL 地址
$ git remote set-url <远程仓库的别名> <新的远程仓库URL地址>

# 将远程仓库所有分支的最新版本全部取回到本地
$ git fetch <远程仓库的别名>

# 将远程仓库指定分支的最新版本取回到本地
$ git fetch <远程主机名> <分支名>

# 把指定的分支合并到当前所在的分支下
$ git merge <分支名称>

# 从远程仓库获取最新版本，并合并，等于fetch + merge
$ git pull

# 把本地仓库的分支推送到远程仓库的指定分支
$ git push <远程仓库的别名> <本地分支名>:<远程分支名>

# 首次使用u推送后，下次无需设置别名和本地分支可直接git push。
$ git push -u origin main

# 删除指定的远程仓库的分支
$ git push <远程仓库的别名> :<远程分支名>
$ git push <远程仓库的别名> --delete <远程分支名>

# 删除指定的远程仓库的分支
$ git push <远程仓库的别名> :<远程分支名>
$ git push <远程仓库的别名> --delete <远程分支名>

# 将远程仓库代码复制一份到本地当前目录
$ git clone <远程仓库的网址>

# 指定本地仓库的目录
$ git clone <远程仓库的网址> <本地目录>

# -b 指定要克隆的分支，默认是main分支
$ git clone <远程仓库的网址> -b <分支名称> <本地目录>
```
## 分支操作
```bash
# 列出本地的所有分支，当前所在分支以 "*" 标出
$ git branch

# 同时列出本地和远程的所有分支
$ git branch -a

# 列出本地的所有分支并显示最后一次提交，当前所在分支以 "*" 标出
$ git branch -v

# 创建新分支，新的分支基于上一次提交建立
$ git branch <分支名>

# 修改分支名称
# 如果不指定原分支名称则为当前所在分支
$ git branch -m [<原分支名称>] <新的分支名称>

# 强制修改分支名称
$ git branch -M [<原分支名称>] <新的分支名称>

# 删除指定的本地分支
$ git branch -d <分支名称>

# 强制删除指定的本地分支
$ git branch -D <分支名称>

# 删除远程分支
$ git push origin --delete <分支名称>

# 切换到已存在的指定分支，如git checkout main
$ git checkout <分支名称>

# 与指定分支合并，比如将刚切换的main分支与dev分支合并
# 合并前建议先拉取git pull origin main，然后再合并
$ git merge dev

# 把已经提交的记录合并到当前分支
$ git cherry-pick <commit ID>

# 创建+切换到指定的分支，保留所有的提交记录
# 等同于 "git branch" 和 "git checkout" 两个命令合并
$ git checkout -b <分支名称>

# 创建+切换到指定的分支，删除所有的提交记录
$ git checkout --orphan <分支名称>
```
分支命令时一定要注意遵循一定规范，常见的分支名有：

- main: 主分支
- dev: 开发分支
- hotfix : 紧急修复主分支的bug，可以按issue编号命令，如hotfix/#1，方便与main主分支合并
- feature : 按照功能点命名 feature/新增功能，如 feature/add_search。

## 标签管理

```bash
# 打印所有的标签
$ git tag

# 添加轻量标签，指向提交对象的引用，可以指定之前的提交记录
$ git tag <标签名称> [<commit ID>]

# 添加带有描述信息的附注标签，可以指定之前的提交记录
$ git tag -a <标签名称> -m <标签描述信息> [<commit ID>]

# 切换到指定的标签
$ git checkout <标签名称>

# 查看标签的信息
$ git show <标签名称>

# 删除指定的标签
$ git tag -d <标签名称>

# 将指定的标签提交到远程仓库
$ git push <远程仓库的别名> <标签名称>

# 将本地所有的标签全部提交到远程仓库
$ git push <远程仓库的别名> –tags
```

## Git常见使用场景

```bash
# 服务器上首次安装git并通过SSH连接github
$ sudo apt-get install git # ubuntu系统
$ git config --global user.name "Your name here"
$ git config --global user.email "your_email@example.com"
$ ssh-keygen -t rsa -C "your_email@example.com"
# 打开隐藏.ssh/id_rsa.pub，复制key
# 打开Github Account Settings > Add SSH Key
$ ssh -T git@github.com
# 阿里云连接github慢，取消GSSAPIAuthentication no的注释
vim /etc/ssh/ssh_config

# 开发分支（dev）上的代码达到上线的标准后，要合并到main分支
$ git checkout dev
$ git pull
$ git checkout main
$ git merge dev
$ git push -u origin main

# 当master代码改动了，需要更新开发分支（dev）上的代码
$ git checkout main
$ git pull 
$ git checkout dev
$ git merge main
$ git push -u origin dev

# 放弃本地修改，使用远程仓库代码强制覆盖本地命令
$ git fetch --all
$ git reset --hard origin/main
$ git pull

# 多分支实现小的功能改动
$ git checkout -b feature/add_search dev # 创建两个分支feature和dev
$ git add somefile # 做出小的修改
$ git commit -m 'msg' # 提交修改
$ git checkout dev # 切换到开发分支
$ git pull # 拉取远程代码与本地dev分支合并
$ git merge feature/add_search # 将minor_feature与dev分支合并
$ git push # 提交到远程仓库dev分支
$ git checkout main # 切换到main分支
$ git merge dev # 将dev与main分支合并
$ git push # 提交到远程仓库main分支
```

## github免密登陆

要在 GitHub 上实现免密登录，可以按照以下步骤进行操作：

1. ##### 生成 SSH 密钥：
   
   首先，你需要生成一个 SSH 密钥对，用于身份验证。在终端中执行以下命令：
   
   ```
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
   将 "your_email@example.com" 替换为你在 GitHub 上注册的电子邮件地址。根据提示，选择保存密钥的路径和文件名，并为密钥设置一个强密码。
   
2. ##### 将公钥添加到 GitHub：
   
   打开生成的公钥文件（通常是 `~/.ssh/id_rsa.pub`），将其中的内容复制到剪贴板。
   
   - 在浏览器中登录到 GitHub 帐户。
   - 点击右上角的头像，选择 "Settings"。
   - 在左侧导航栏中，点击 "SSH and GPG keys"。
   - 点击 "New SSH key"。
   - 在 "Title" 字段中，为该密钥提供一个描述性名称。
   - 在 "Key" 字段中，粘贴刚刚复制的公钥内容。
   - 点击 "Add SSH key"。
   
3. ##### 验证 SSH 连接：
   
   打开终端，并运行以下命令来验证 SSH 连接是否成功：
   
   ```
   ssh -T git@github.com
   ```
   如果一切正常，你应该会看到一条欢迎信息。
   
4. ##### 配置 Git 用户名和电子邮件：
   
   在终端中执行以下命令，设置全局的 Git 用户名和电子邮件：
   
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your_email@example.com"
   ```
   将 "Your Name" 替换为你的姓名，将 "your_email@example.com" 替换为你在 GitHub 上注册的电子邮件地址。
   
5. ##### 克隆仓库或进行其他 Git 操作：
   
   现在你可以克隆 GitHub 上的仓库或执行其他 Git 操作，而无需每次都输入用户名和密码。

注意事项：
- 请确保你的私钥（`~/.ssh/id_rsa`）得到妥善保管，不要将其泄露给他人。
- 如果你使用多个 GitHub 帐户或有其他密钥管理需求，可以参考 Git 的密钥管理文档进行配置。

以上步骤应该能帮助你在 GitHub 上实现免密登录。这样你就可以更方便地进行 Git 操作而无需频繁输入密码。

## GitHub上传大文件

GitHub允许上传大文件，但是默认情况下，我们只能上传小于100MB的文件。如果要上传大于100MB的文件，则必须使用Git LFS（Large File Storage）系统。Git LFS系统允许我们将大文件存储在独立的数据服务器上，并通过GitHub指针链接下载。

以下是GitHub上传大文件的详细步骤：

1. ##### 安装 Git LFS（Large File Storage）：
   
   首先，你需要安装 Git LFS 扩展，用于管理和上传大文件。你可以前往 [Git LFS 的官方网站](https://git-lfs.github.com/)下载并安装适合你操作系统的版本。
   
2. ##### 初始化 Git LFS：
   
   打开终端，并进入你要上传的 Git 仓库的本地目录。运行以下命令以初始化 Git LFS：
   
   ```
   git lfs install
   ```
   
3. ##### 将大文件添加到 Git LFS 追踪列表：
   
   使用以下命令将你要上传的大文件添加到 Git LFS 追踪列表：
   
   ```
   git lfs track "path/to/large/file"
   ```
   将 "path/to/large/file" 替换为你要上传的大文件的路径。你可以追踪多个文件，每个文件一行。
   
4. ##### 将大文件添加到 Git 仓库：
   
   使用以下命令将大文件添加到 Git 仓库：
   
   ```
   git add path/to/large/file
   ```
   将 "path/to/large/file" 替换为你要添加的大文件的路径。
   
5. ##### 提交并推送变更：
   
   运行以下命令以提交并推送你的变更到 GitHub 仓库：
   
   ```
   git commit -m "Add large file"
   git push origin master
   ```
   确保将 "master" 替换为你要推送到的分支名称。
   
6. ##### 检查大文件是否已上传：
   
   打开你的 GitHub 仓库页面，导航到相应的文件路径，并确认大文件已成功上传。

注意事项：
- Git LFS 可以帮助你有效地管理大文件，但它仍然会占用存储空间。确保你的 Git 仓库和存储库有足够的空间来存储这些大文件。
- GitHub 免费版对 Git LFS 有一定的限制。如果你需要上传大量大文件或者超过 GitHub 免费版的限制，请考虑升级到付费版或寻找其他适合存储大文件的解决方案。

## Github Action 和 CICD

1. ### CICD

   CI/CD（持续集成/持续交付）是一种软件开发实践，它通过自动化流程来持续集成代码、构建、测试和交付软件，以便快速且可靠地发布高质量的应用程序。下面是一个详细的示例，展示了一个基本的 CI/CD 流程：

   1. **代码托管**：将代码存储在版本控制系统（如 Git）中，并使用分支来管理不同的开发任务和版本。

   2. **持续集成**：当有新的代码提交或分支合并到主分支时，触发 CI 流程。

      - 自动化构建：使用构建工具（如 Maven、Gradle 或 npm）自动编译和构建应用程序。

      - 代码质量检查：运行静态代码分析工具（如 SonarQube）来检查代码质量和潜在问题。

      - 单元测试：运行单元测试套件，确保代码的功能正确性。

   3. **持续交付**：在通过了持续集成阶段后，将构建的应用程序部署到开发环境中进行进一步的测试和验证。

      - 部署到开发环境：自动将构建的应用程序部署到开发服务器或容器中。

      - 集成测试：运行集成测试，验证不同组件和服务之间的交互是否正常。

   4. **自动化测试**：使用自动化测试工具（如 Selenium、JUnit、Cypress）执行端到端测试、功能测试、性能测试等，以确保应用程序在不同环境下的稳定性和可靠性。

   5. **部署到生产环境**：在通过了测试阶段后，将应用程序部署到生产环境中。

      - 部署到生产环境：自动将应用程序部署到生产服务器或云平台中。

      - 监控和日志：配置监控工具（如 Prometheus）来收集应用程序的运行时数据和日志，以便实时监测和分析。

   6. **持续交付和回滚**：通过自动化流程和版本控制，实现持续交付和快速回滚。

      - 持续交付：根据需要，将更新的版本交付给用户。

      - 快速回滚：如果出现问题或错误，可以快速回滚到之前的可靠版本。

   通过实施 CI/CD，可以提高软件交付的速度和质量，并增强团队的协作效率。使用适当的工具和技术，可以根据项目的需求和团队的能力进行自定义和扩展。流程中的每个阶段都可以使用不同的工具和自动化脚本来实现

2. ### Github Action

   当你在 GitHub 仓库中使用 GitHub Actions 时，你可以通过以下示例来详细了解如何配置和使用它：

   1. ##### 在你的 GitHub 仓库中，点击页面上方的 "Actions" 选项卡。

   2. ##### 如果你是第一次使用 GitHub Actions，你可能会看到一些模板供选择。如果你已经有一些工作流程，可以选择 "Set up a workflow yourself"。

   3. ##### 在打开的编辑器中，你可以开始编写工作流程的配置文件（YAML 格式）。以下是一个简单的示例：

   ```yaml
   name: CI Pipeline
   
   on:
     push:
       branches:
         - main
     pull_request:
       branches:
         - main
   
   jobs:
     build:
       runs-on: ubuntu-latest
   
       steps:
         - name: Checkout code
           uses: actions/checkout@v2
   
         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: 14
   
         - name: Install dependencies
           run: npm ci
   
         - name: Run tests
           run: npm test
   ```

   以上配置定义了一个名为 "CI Pipeline" 的工作流程。该工作流程将在每次推送到 `main` 分支或针对 `main` 分支的拉取请求时触发。

   4. ##### 点击编辑器上方的 "Start commit" 按钮，输入提交消息并提交工作流程配置文件。

   5. ##### GitHub 将自动运行你的工作流程。你可以在 "Actions" 选项卡的页面上查看工作流程的执行状态和输出结果。

   上述示例展示了一个基本的 CI（持续集成）工作流程。当你推送代码到 `main` 分支或针对 `main` 分支的拉取请求时，GitHub Actions 将执行以下步骤：

   - 检出代码到工作环境。
   - 设置 Node.js 环境。
   - 安装项目的依赖项。
   - 运行测试。

   你可以根据项目需求和 CI/CD 流程进行自定义配置。例如，你可以添加其他步骤来进行代码检查、构建 Docker 镜像、发布到云平台等等。

   除了基本的 CI 工作流程外，GitHub Actions 还支持更复杂的工作流程，例如自动化部署、定时任务、与第三方服务的集成等。你可以在 GitHub Actions 官方文档中了解更多配置选项和示例。

   请注意：
   - 确保你的项目具有适当的测试和构建脚本，以便在 GitHub Actions 中运行。
   - 在工作流程中使用的依赖项和脚本应与项目的实际需求相符。
   - 配置敏感信息时，请使用 GitHub 仓库的 Secrets 功能来安全地存储和引用这些值。

   以上是一个简单的 GitHub Actions 的示例，你可以根据你的项目需求进行适当的调整和扩展。GitHub Actions 提供了强大的自动

   化功能，可以帮助你提高开发效率和代码质量。





