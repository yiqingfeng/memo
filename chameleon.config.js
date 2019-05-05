// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

cml.config.merge({
	projectName: 'Memo',
	templateLang: "cml",
	templateType: "html",
	enableLinter: true, // 开启语法检查，默认为 true
	globalCheckWhiteList: [/node_modules/], // 文件路径能匹配 node_modules 的文件不进行校验
	platforms: ["web", "wx"],
	// 一致性基础样式
	// baseStyle: {
 	//    wx: true,
 	//    alipay: false,
 	//    baidu: false,
 	//    web: true,
 	//    weex: false
 	//  },
	buildInfo: {
		wxAppId: '123456'
	},
	wx: {
		dev: {},
		build: {
			apiPrefix
		}
	},
	web: {
		dev: {
			analysis: false,
			console: false
		},
		build: {
			analysis: false,
			publicPath: `${publicPath}/web/`,
			apiPrefix
		}
	},
});
