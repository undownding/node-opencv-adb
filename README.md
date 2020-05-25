# node-opencv-adb

没错，这三个东西组合在一起就是用来干你所想的那种事情。

adb 那个裤子，需要当前运行环境下直接敲 adb 有反应，请自行配置环境。

opencv 那玩意，国内使用的话使用国内镜像源

````bash
$ cat .gitconfig
[user]
        name = undownding
        email = undownding@gmail.com
[url "https://gitee.com/mirrors"]
        insteadOf = https://github.com/opencv
````

使用方式：
````bash

npm install
babel-node ./main.js

````

## 结构说明

### start.cmd
因为这玩意我使用 wsl 里的 babel-node 来跑，然后把 cmd 作为 Windows 自带的计划任务的启动器，所以写了这玩意

### control 目录
一些调用 adb 对模拟器进行基础操作的脚本，默认不需要改动。

````
back.js     - 模拟 back 按键
connect.js  - 连接到模拟器，端口号可酌情修改
find.js     - 查找某个模板图片在截图中是否存在，需手动调用 screencap() 并传入截图路径
home.js     - 模拟 home 按键
screencap.js - 截图并保存到当前目录的 screenshot.png
sleep.js     - 顾名思义
tap.js       - 模拟点击某个坐标
touch.js     - 查找某个元素并点击
````

### actions 目录
自定义一些对游戏的基础操作

### scripts 目录
自定义一些高级/复杂的脚本操作，可以稍微参考一下。

其中 launchMuMu.js 为启动 Windows 下的 MuMu 模拟器，因为环境配置导致的路径不同，若直接使用请修改。

### templates 目录
存放一些图像模板，请注意使用自定义模板时用 adb shell screencap -p 来生成截图再裁剪。

总之目录划分没有很严格的规则，只要能让 main.js 调用到怎么写都没问题。