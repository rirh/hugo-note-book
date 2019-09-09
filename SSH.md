

# 本地链接SSH



| 代码                                  | 含义                           |
| ------------------------------------- | ------------------------------ |
| `ssh-keygen -t rsa -f`     **NAME**   | 生成密钥                       |
| `scp FILENAME root@101.201.234.154:.` | 拷贝文件到指定服务器默认路径   |
| cat FILE1 >> FILE2                    | 将文件一的内容追加的文件二里面 |
| `systemctl restart sshd`              | 重启ssh服务                    |

### 免密码登录服务器步骤

1. 进入`~/.ssh/`文件夹生存密钥

   ```shell
   ssh-keygen -t rsa -f  NAME
   ```

2. 拷贝共钥到服务器默认路径（生成的pub结尾文件）

   ```
   scp FILENAME root@101.201.234.154:.
   ```

3. 登录服务器并进入服务器`~/.ssh/`文件夹 

4. .ssh文件夹下的authorized_keys尾部追加公钥文件内容

   ```shell
   cat FILE1 >> FILE2
   ```

5. 重启服务端ssh服务

   ```
   systemctl restart sshd
   ```

   

6. 回到客户端在`~/.ssh/`下新建config文件

   ```shell
   Host blog
      HostName 101.201.234.154 //服务器ip
      port 22                  //默认的端口
      User root                //用户名
      IdentityFile ~/.ssh/blog //私钥文件
   ```

   ```
   此时使用 ssh blog 将直接登录服务器 如果有错误可能是需要删除原来生成的known_hosts的文件就可以了
   ```

   ### 代码流程

   ```shell
   cd ~/.ssh/;
   ssh-keygen -t rsa -f blog;
   scp blog.pub root@101.201.234.154:.;
   ssh root@101.201.234.154 -p 22;
   cd ~/.ssh/;
   cat ~/blog.pub >> ~/.ssh/authorized_keys;
   systemctl restart sshd;
   exit;
   cd ~/.ssh/;
   touch config;
   
   *********************** config *********************
   
   Host blog
      HostName 101.201.234.154 //服务器ip
      port 22                  //默认的端口
      User root                //用户名
      IdentityFile ~/.ssh/blog //私钥文件
      
   *********************** config *********************
   
   vim known_hosts 
   删除内容 dd后esc 冒号wq
   ssh blog
   
   ```

   

