---
title: 下载插件
author: yikuaibaiban
createTime: 2024/05/23 17:30:05
---

# 下载插件

## 下载地址

点击[这里](/extensions/chinahrtAutoplay_0.0.1.crx)下载插件。
由于浏览器限制，建议适用解压和白名单方式安装插件。

## 安装插件(crx 安装方式)

以下以 Edge 浏览器为例，介绍如何安装插件。其余类 Edge 浏览器安装方式类似。

1. 下载插件后，打开 Edge 浏览器。
2. 在地址栏输入 `edge://extensions/` 并回车，或者点击右上角的三个点，选择 `扩展` -> `扩展管理`。
3. 打开开发者模式，打开允许来自其他网站的扩展程序。
4. 将下载的插件拖拽到浏览器中，完成安装。

<div align=center><img src="/images/extension_install_help1.png" /></div>

## 安装插件(解压安装方式)

以下以 Edge 浏览器为例，介绍如何安装插件。其余类 Edge 浏览器安装方式类似。

1. 下载插件后，解压插件(将下载的文件改名为 `.zip` 后解压，也可以用压缩工具直接解压)。
2. 在地址栏输入 `edge://extensions/` 并回车，或者点击右上角的三个点，选择 `扩展` -> `扩展管理`。
3. 打开开发者模式，打开允许来自其他网站的扩展程序。
4. 点击 `加载解压的扩展`，选择解压后的插件文件夹，完成安装。

<div align=center><img src="/images/extension_install_help2.png" /></div>

## 安装插件(插件白名单方式)

以下以 Edge 浏览器为例，介绍如何安装插件。其余类 Edge 浏览器安装方式类似。

1. 下载adm文件，[下载地址](https://www.microsoft.com/zh-cn/edge/business/download)。
![获取Adm文件](/images/getmsedge_adm.png)
2. 进入网址 选择频道-版本-平台 后 获取政策文件
3. 打开下载的压缩包  解压 \windows\adm\zh-CN\msedge.adm 文件
4. 使用 win+r 调出 运行框后 输入gpedit.msc 进入 本地组策略编辑器
5. 依次展开计算机配置->管理模板
6. 右键添加/删除模板-添加-选定上面准备的msedge.adm文件，此时你的管理模块里会多出个（经典管理模块 ADM）
![添加模板](/images/add_adm.png)
7. 依次展开经典管理模块 ADM->Microsoft Edge->扩展-允许安装特定扩展 启用 并设置 白名单
![选择adm](/images/select_adm.png)
![选择adm](/images/select_adm1.png)
8. 复制浏览器扩展内的 不可用插件id(`aafcmkchlngpcccdgfenepioonimfoln`) 填入白名单内 确认并应用
![插件id](/images/extension_id.png)
9. 重启浏览器 即可启用此插件 （还不行的话可以拖crx文件至扩展页 重新安装）