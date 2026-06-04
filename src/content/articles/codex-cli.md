---
title: "从插件到命令行：第一次上手 Codex CLI，和 Claude Code 有什么不同？"
description: "已经习惯 Claude Code 命令行后，初次尝试 Codex CLI 的安装与上手过程，以及两者在体验上的关键差异。"
date: 2026-04-28
category: "AI 实践案例"
tags: ["Codex", "Claude Code", "CLI", "AI Agent"]
draft: false
featured: false
cover: "/covers/4.png"
---
其实我之前在 VS Code 里面安装了 Codex 的插件，但是因为昨天我已经体验了 Claude Code 的命令行，我现在想试一下 Codex 的命令行，看看两者有什么不同。

说实话，Codex 和 Claude Code 的命令行工具之间还是存在很大差异的。

因为我已经安装了 Claude Code，并且搭配了 GLM 5.1 这个最新的模型，那么我就可以直接让 Claude Code 去给我安装 Codex，这个还是非常爽的

下面这个是我在知乎的一个帖子里面找到的安装提示词，我觉得写的很不错：

原贴：https://zhuanlan.zhihu.com/p/1972655407605520311


安装提示词：

```
帮我自动检查环境并安装 Codex CLI 工具，按以下步骤执行：

第一步：检查系统和环境
- 检查我的操作系统（Mac/Linux/Windows）
- 如果是 Windows：检查是否有 WSL（运行 wsl --version 或 wsl -l -v）

第二步：检查 Node.js
- 运行 node -v 检查 Node.js 是否已安装
- 如果没有安装，提示我：
  Mac: 运行 brew install node 或去 nodejs.org 下载
  Linux: 运行 sudo apt install nodejs npm 或去 nodejs.org 下载
  Windows: 去 nodejs.org 下载安装

第三步：安装 Codex
根据环境选择：
- Mac/Linux：直接运行 npm install -g @openai/codex
- Windows 有 WSL：在 WSL 环境运行 npm install -g @openai/codex
  （提醒我：以后使用时先输入 wsl 再输入 codex）
- Windows 无 WSL：先询问我是否要安装 WSL（推荐，更稳定）
  - 如果要：运行 wsl --install，提醒我重启后继续
  - 如果不要：运行 npm install -g @openai/codex --force --no-os-check
    （警告：Windows 原生环境可能有兼容问题）

第四步：验证安装
- 运行 codex --version 检查是否安装成功
- 告诉我下一步该怎么启动 Codex
```


在安装的过程中，它会提到 WSL。这个 WSL 实际上是在 Windows 系统里面运行一个精简的 Linux 子系统，然后在这个 Linux 环境里去安装 Codex。

但是如果你想快速使用，现在其实我们已经有了原生安装的方案，就可以直接装：
1. 虽然原生安装可能存在少量的兼容性问题，但大部分情况下都是没有问题的。
2. 我昨天用这个 Codex 跑了一个 skill，就没有遇到任何问题。

所以我觉得如果你不想折腾的话，选择直接在原生的 Windows 环境下安装就可以了，这能解决大部分问题。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260403145734255.png)

- 最快
- 步骤最少
- 不用重启折腾 WSL
- 你现在已经有 Node.js 了，可以直接装


然后这个是可以使用 GPT 进行登录的。在安装成功之后，第一次进入 Codex 会要求你登录。

如果你订阅了 Plus、Pro 或者 Team 的话，直接用 Google 账号登录就可以了。然后就会进入 Codex 的命令行界面。

显然，你使用的模型等相关信息，跟这一步以及 Claude Code 的差异其实不是很大，但是用法上有所不同。

很多用法都是和这个库的函数相似的。我们知道，Codex 里面有这个 faster 模式，比正常模式要快两倍，但是它的基本消耗也会更快一些。

如果你想打开 faster 模式：
1. 它最开始会提示你使用一些 faster 的命令
2. 然后就可以使用两倍的剂量，加快这个处理的速度
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260403150538442.png)
Codex 的命令行工具（CLI）在处理大段内容时表现非常出色，这甚至可以算是一个“世界级”的亮点。

它不像 Claude Code 的命令行那样会吞掉你的很多内容。关于这一点，我昨天专门写了一篇文章，介绍如何处理在工具中内容被吞掉的情况：

1. 实际上，你需要使用快捷键直接调用。
2. 然后系统会弹出一个文本框。
3. 你把内容整理进去，再统一发送。

就这个地方的操作体验来说，Codex 要做得比 Claude Code 好很多。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260403150859585.png)
上面这个就是在 Codex 里面直接粘贴做到的效果，Codex 是没有办法直接做到这个效果的。

如果你想在 Codex 里面使用你安装的一些 Skill，你需要首先使用  /skills 命令， 然后选择 `listskills` 把这些技能全部列举出来供你选择。

相比之下，如果是 Claude Code 的话，你可以直接使用 `con` 加上你的 Skill 名字，就可以直接调用了。

所以从这一点上来说：
1. Claude Code 的操作更加直接。
2. Codex 稍微麻烦了一些，但也可以达到类似的效果。


所以整体上来说，Claude Code 和 Codex 在使用方式上没有太大的区别。但在一些细节上面，例如是否可以直接粘贴多行对话，以及 Skill 的加载方式上，还存在细微的差别。

当然，这只是我短期使用后的感受，可能还有很多差异我还没有察觉到。但总体而言，只要你学会了其中一个，想要上手另一个是非常方便且快速的。

两者的核心驱动也不同：
1. Codex：它是使用国产的蓝模（GLM）去驱动的，额度非常充足。
2. Claude Code：你必须订阅 GPT 相关的服务才能使用。

所以两款工具各有千秋，大家可以结合自己的实际情况进行选择。
