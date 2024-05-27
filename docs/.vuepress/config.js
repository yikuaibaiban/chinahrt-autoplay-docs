import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchPlugin } from '@vuepress/plugin-search';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';

export default defineUserConfig({
	base: '/chinahrt-autoplay-docs/',
	
	lang: 'zh-CN',

	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'Chinahrt Autoplay',
			description: '自动播放脚本/插件使用文档',
		},
	},

	head:[
		"script",
		{},
		`var _hmt = _hmt || [];
		(function() {
		  var hm = document.createElement("script");
		  hm.src = "https://hm.baidu.com/hm.js?aeab4eebc94827112a8b857ad2fac7e6";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(hm, s);
		})();`
	],

	theme: defaultTheme({
		logo: '/images/logo.png',

		navbar: [
			'/',
			{
				text: 'Tampermonkey(脚本)',
				children: [
					'/tampermonkey/',
					{
						text: 'GitHub',
						link: 'https://github.com/yikuaibaiban/chinahrt-autoplay',
					},
					{
						text: 'Gitee',
						link: 'https://gitee.com/yikuaibaiban/chinahrt-autoplay',
					},
				],
			},
			{
				text: 'Extension(插件)',
				children: [
					'/extension/',
					{
						text: 'GitHub',
						link: 'https://github.com/yikuaibaiban/chinahrt-autoplay-chrome-extension',
					},
					{
						text: 'Gitee',
						link: 'https://gitee.com/yikuaibaiban/chinahrt-autoplay-chrome-extension',
					},
				],
			},
		],

		externalLinkIcon: false,

		locales: {
			'/': {
				selectLanguageName: '简体中文',
			},
		},

		lastUpdated: '上次更新',
	}),

	bundler: viteBundler({
		viteOptions: {},
		vuePluginOptions: {},
	}),

	plugins: [
		searchPlugin({
			locales: {
				'/': {
					placeholder: '搜索',
				},
			},
		}),
		backToTopPlugin(),
	],
});
