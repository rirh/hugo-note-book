{%  extends "../blocks.md"  %}
{%  block contain  %}

# Nginx

**简介**

轻量、开源、HTTP服务器软件！可以和apache配合使用。

nginx基于事件和异步操作，访问量很大的时候可以轻松处理；

apache依赖于线程，访问量大会大量新增线程，很快耗尽内存。



**环境:CentOS Linux release 7.5.1804 (Core)**
**阿里云 服务器**

| 代码                         | 注释                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| sudo yum install nginx       | 安装nginx                                                    |
| sudo systemctl enable nginx  | 设置开机启动                                                 |
| sudo systemctl start nginx   | 启动服务                                                     |
| sudo systemctl stop nginx    | 停止服务                                                     |
| sudo systemctl restart nginx | 重启服务                                                     |
| sudo systemctl reload nginx  | 重新加载，因为一般重新配置之后，不希望重启服务，这时可以使用重新加载。 |
| sudo nginx -t                | 验证配置文件是否有语法错误                                   |
| sudo systemctl status nginx  | 查看 nginx 状态                                              |



nginx 一般目录位置。

- /var/log/nginx/ ：日志文件目录，通常包含`access.log`和`error.log`两个主日志文件，以及各个站点的日志。

- /etc/nginx/：配置文件目录。

- /etc/nginx/sites-available/：所有站点的配置文件目录。

- /etc/nginx/sites-enabled/：生效站点的配置文件目录，通常是`/etc/nginx/sites-available/`对应文件的软连接。

- /etc/nginx/nginx.conf：主配置文件。

  

### 我的服务器nginx配置文件

**一个域名作为默认网址** 

**解析的一个域名作为api接口**

**分别配置了接口转发和https代理**

```
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;



events {
    worker_connections 1024;
}


http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;



    server {
        listen       80 default_server;
        server_name  www.huzhihui.org.cn;

        location / {
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_max_temp_file_size 0;
            proxy_pass http://127.0.0.1:3001/;
            proxy_redirect off;
            proxy_read_timeout 240s;
        }
       
        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

     server {
        listen       80;
        server_name  music.huzhihui.org.cn;

        location / {
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_max_temp_file_size 0;
            proxy_pass http://127.0.0.1:3002/;
            proxy_redirect off;
            proxy_read_timeout 240s;
        }
       
        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

    server {
        listen 443;
        server_name www.huzhihui.org.cn;
        ssl on;
        ssl_certificate  /root/web/Blog/cert/www.huzhihui.org.cn.pem;
        ssl_certificate_key /root/web/Blog/cert/www.huzhihui.org.cn.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_max_temp_file_size 0;
            proxy_pass http://127.0.0.1:3001/;
            proxy_redirect off;
            proxy_read_timeout 240s;
        }
      }
     
       server {
        listen 443;
        server_name music.huzhihui.org.cn;
        ssl on;
        ssl_certificate  /root/web/NotesMusic/cert/music.huzhihui.org.cn_nginx/music.huzhihui.org.cn.pem;
        ssl_certificate_key /root/web/NotesMusic/cert/music.huzhihui.org.cn_nginx/music.huzhihui.org.cn.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_max_temp_file_size 0;
            proxy_pass http://127.0.0.1:3002/;
            proxy_redirect off;
            proxy_read_timeout 240s;
        }
      }
}

```

{%  endblock  %}