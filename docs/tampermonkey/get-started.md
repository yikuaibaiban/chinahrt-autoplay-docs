---
title: 开始使用
author: yikuaibaiban
createTime: 2024/05/23 17:30:05
---

# 开始使用

![GitHub Repo stars](https://img.shields.io/github/stars/yikuaibaiban/chinahrt-autoplay) ![GitHub forks](https://img.shields.io/github/forks/yikuaibaiban/chinahrt-autoplay) [![star](https://gitee.com/yikuaibaiban/chinahrt-autoplay/badge/star.svg?theme=dark)](https://gitee.com/yikuaibaiban/chinahrt-autoplay/stargazers) [![fork](https://gitee.com/yikuaibaiban/chinahrt-autoplay/badge/fork.svg?theme=dark)](https://gitee.com/yikuaibaiban/chinahrt-autoplay/members)

以下开始介绍如何使用本脚本。

## 前期准备

1. 安装用于脚本运行的插件，推荐使用 [Violentmonkey](https://violentmonkey.github.io/)和[Tampermonkey](https://www.tampermonkey.net/)。
2. 安装脚本，点击 [这里](https://greasyfork.org/zh-CN/scripts/400775) 安装。

## 添加到播放列表

进入课程详情页面，安装脚本后会在后侧出现当前课程的所有章节信息的窗口，点击章节后的按钮即可添加到播放列表，也可以点击窗口顶部的按钮一次性添加所有章节。

<div align=center><img src="/images/tampermonkey_can_playlist.png" /></div>

## 播放页面

进入课程播放页面，安装脚本后会在页面右侧出现播放列表、播放器配置、实验功能三大块。

1. 播放列表：显示当前所有添加到自动播放列表的课程章节。
2. 播放器配置：可调整播放速度、静音、自动播放等功能。
3. 实验功能：提供一些特殊的播放模式，但只有极个别人群会适用。

<div align=center><img src="/images/tampermonkey_playlist.png" /></div>

## 后续操作
添加完成所有需要播放的课程到播放列表后，随便进入一个课程的播放页面，即可开始自动播放。
当播放列表中的课程播放完毕后，会自动播放下一个课程，直到播放列表中的课程全部播放完毕。
中间过程无需再进行人工干预。