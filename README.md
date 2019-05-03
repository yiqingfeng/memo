## MEMO 备忘录

### 项目结构

```
├── chameleon.config.js                 // 项目的配置文件
├── dist                                // 打包产出目录
    ├── alipay                          // 支付宝小程序代码
    ├── baidu                           // 百度小程序代码
    ├── wx                              // 微信小程序代码
├── mock                                // 模拟数据目录
├── node_modules                        // npm包依赖
├── npm-shrinkwrap.json
├── package.json
└── src                                 // 项目源代码
    ├── app                             // app启动入口
    ├── components                      // 组件文件夹
    ├── pages                           // 页面文件夹
    ├── router.config.json              // 路由配置
    └── store                           // 全局状态管理

```