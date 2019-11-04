{%  extends "../blocks.md"  %}
{%  block contain  %}

# emulator

**Android 模拟器**

| 命令                    | 注释                      |
| ----------------------- | ------------------------- |
| emulator -avd  设备名称 | 启动android stduio 模拟器 |
| adb install 文件路径    | 安装apk                   |
| emulator -list-avds     | 获取设备列表              |



**ios模拟器**

| 命令                                                        | 注释                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| open -a Simulator                                           | 打开ios模拟器                                                |
| xcrun simctl install booted 文件路径                        | 安装ipa需要先将ipa文件后缀改为zip然后解压zip得到app结尾的文件然后通过命令安装文件 |
| xcrun simctl list devices                                   | 正在运行的模拟器                                             |
| xcrun simctl openurl booted "url"                           | 通过模拟器打开网址                                           |
| xcrun simctl openurl booted "com.netease.preciousMetal.dev" | 通过urlscheme打开app                                         |
| xcrun simctl shutdown booted                                | 关闭                                                         |

{%  endblock  %}