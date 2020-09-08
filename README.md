![Anurag’s github stats](https://github-readme-stats.vercel.app/api?username=TongLin138&show_icons=true&theme=merko)

## 京东薅羊毛工具（活动入口：京东app->我的->游戏与互动->查看更多）

1.  京东水果([jd_fruit.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_fruit.js))
2.  东东萌宠([jd_pet.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_pet.js))
3.  宠汪汪([jd_joy.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_joy.js))
4.  种豆得豆([jd_plantBean.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_plantBean.js))
5.  天天加速([jd_speed.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_speed.js))
6.  摇钱树([jd_moneyTree.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_moneyTree.js))
7.  宠汪汪兑换奖品([jd_joy_reward.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_joy_reward.js))
8.  取关京东店铺和商品([jd_unsubscribe.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_unsubscribe.js))
9.  京小超([jd_superMarket.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_superMarket.js))
10. 京小超领蓝币(兑换京豆)([jd_blueCoin.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_blueCoin.js))
11. 宠汪汪偷好友狗粮与积分([jd_joy_steal.js](https://raw.githubusercontent.com/TongLin138/Module/master/Tasks/jd_joy_steal.js))

**脚本兼容: [QuantumultX](https://apps.apple.com/us/app/quantumult-x/id1443988620), [Surge](https://apps.apple.com/us/app/surge-4/id1442620678), [Loon](https://apps.apple.com/us/app/loon/id1373567447), JSBox, Node.js**

**目前可多账号的脚本：东东水果，宠汪汪，天天加速，摇钱树，取关京东店铺和商品，京小超，京小超领蓝币，宠汪汪偷好友狗粮与积分**

## 食用方法

- 方法一：本地安装Node.js，下载本库脚本

缺点：需要手动运行脚本，不能自动定时运行脚本

需自行安装依赖包(`crypto-js` ，`got` ，`http-server` ， `tough-cookie`) 例: `npm install crypto-js http-server tough-cookie got --save`

- 方法二：云服务器，腾讯云函数等等

需自行有云服务器，云函数等

**腾云云函数使用,我说下面几点:**

1先下本仓库脚本,然后本地 npm install 下载好依赖包

`其中npm install 的使用,需要本地pc安装node.js可自行搜索安装`

2腾讯云那边使用的时候,选择上传本地文件夹(因为在线下载的依赖包会有问题)

3其中index.js文件,需要下面这样子写,其中require里面,你需要的是哪个脚本,就写那个脚本的名称.

```
'use strict';
exports.main_handler = async (event, context, callback) => {
    require('./jd_speed.js')
}
```

- 方法三：GitHub action，使用教程暂且可看 [这里](https://github.com/lxk0301/scripts/issues/8)

注：以上三种运行机制都是nodejs，故您需仔细阅读下面几点


   
1、如果使用方法一与方法二，需自行提供京东cookie填写到 [jdCookie.js](https://raw.githubusercontent.com/TongLin138/Scripts/master/jdCookie.js) 里面

2、方法三京东cookie不要！不要！不要！填写到 [jdCookie.js](https://raw.githubusercontent.com/TongLin138/Scripts/master/jdCookie.js) 里面
   
3、获取京东cookie教程可参考 [浏览器获取京东cookie教程](https://shimo.im/docs/CTwhjpG6ydvC3qJJ/)

- 方法四：iOS系统的代理软件（QuantumultX, Surge, Loon）

#### 以下内容只针对iOS用户

#### ios使用多个京东账号，需要使用BoxJs保存多会话进行切换 
  
##### 【BoxJs简单说明】[BoxJs仓库地址](https://github.com/chavyleung/scripts/)

使用box可以实现远程订阅助力好友。

1、BoxJs使用教程请查看Chavy频道 [Chavy频道链接](https://t.me/chavyscripts);

2、BoxJs教程视频 [视频链接](https://youtu.be/eIpBrRxiy0w);

目前京东活动中以下三个脚本可以使用box功能

【1】京东水果

【2】京东萌宠

【3】京东种豆

【用box订阅的好处】

 1、脚本也可以远程挂载。京东活动助力功能的分享码只需在box里面填写。以后只需远程更新就行。

 2、所有脚本的cookie都可以备份，方便你迁移到其他支持box的软件。

 3、box可以支持多账号
 
 [京东活动的box订阅链接](https://raw.githubusercontent.com/lxk0301/scripts/master/lxk0301.boxjs.json)

#### 2个京东账号的Qumutumult X cron设置(5分钟为间隔)

#### 最后，农场萌宠种豆得豆互相助力可进此[telegram讨论组](https://t.me/JD_fruit_pet)

### 特别感谢：
* [@lxk0301](https://github.com/lxk0301)

* [@NobyDa](https://github.com/NobyDa)

* [@chavyleung](https://github.com/chavyleung)

* [@liuxiaoyucc](https://github.com/liuxiaoyucc)

* [@Zero-S1](https://github.com/Zero-S1)

* [@uniqueque](https://github.com/uniqueque)

* [@nzw9314](https://github.com/nzw9314)
