---
title: "SuperGrok 订阅升值了：Hermes Agent 接入 xAI，一次订阅解锁全能 AI 工作站"
description: "xAI 与 Hermes Agent 合作后，SuperGrok 订阅可直接驱动这款开源 Agent，搜索、生图、语音、视觉全部打通，无需额外 API Key。"
date: 2026-05-17
category: "AI Agent"
tags: ["Hermes Agent", "Grok", "xAI", "AI Agent"]
draft: false
featured: false
cover: "/covers/3.png"
---

Hermes Agent 实际上是一款非常强大的 Agent 工具，并且是开源的。

5 月 15 日 xAI 官方宣布合作后：同一个 SuperGrok 订阅可以直接接入 Hermes Agent，瞬间把 Grok 变成一个 24 小时待命、持久记忆、能控制电脑、接 Telegram/微信/Discord、自主学习、自改进的超级 Agent（Jarvis），而且不用额外花一分钱买 API Key。

这波 xAI 借力打力太聪明，不自己做 Agent，直接把 Grok 塞进最火的开源 Agent 里。

这波，订阅了 SuperGrok 的用户就是赚到了。

今天这篇文章，我先展示一下演示的效果，然后再告诉大家如何进行配置。

因为 Hermes Agent 可以接入社交软件，所以我在演示的时候使用 Telegram。

# 1.为啥赚到了

Grok 和 Hermes 合作之后，现在 Grok 的搜索、生图、TTS 全部配齐，支出可控。而且对于事实性、时效性的信息和搜索，Grok 应该是最强的，没有之一。

# 2.能做什么

无论是单轮搜索还是混合搜索，直接轻松搞定

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517222906837.png?imageSlim)

直接调用 Grok 生图模型生成图片：

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517222949064.png?imageSlim)
语音功能直接使用：

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517223019108.png?imageSlim)
识别图片的能力，视觉模型：

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517223050372.png?imageSlim)
所以现在基本上多模态的能力都具备，无论是语音、生图、识图、视频生成，还是推理，它基本上都具备了。有了 Grok 的加持之后，Hermes 现在真的是秒变全能，不需要再去额外购买 API Key，就可以一次订阅打通所有。当然，实际使用仍然会消耗对应订阅的额度。这也是为什么我说 SuperGrok 的订阅就直接升值了。


# 3.配置流程

首先，把模型从原来的提供商切换到 xAI。如果你还没有更新 Hermes，打开下面这个模型列表时，可能会发现找不到使用 OAuth 验证方式登录的选项。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517204645687.png?imageSlim)
你可以让 AI 帮你执行更新，然后重新刷新模型列表，就可以找到 xAI 模型的 OAuth 登录方式，也就是通过订阅进行验证登录。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517205319093.png?imageSlim)
更新完成之后，选择对应的订阅方式，我们就可以选择 xAI 的模型了。我这里选择默认的 Grok 4.3。
![image.png|518](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517205629473.png?imageSlim)
然后是语音模型。默认使用的是 EDGE，但是 xAI 也有自己的 TTS 语音模型，所以建议选择 xAI 的 TTS 语音模型。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517205751700.png?imageSlim)
接下来讨论一个问题：Hermes Agent 执行终端命令用哪种方式运行？

会有 SSH、远程服务器，或者 Docker 这样的容器运行方式，但是你也可以选择默认的本地运行。这里选择默认即可，不需要额外配置。


下面这个表示的是 Hermes Agent 在一次任务对话过程中，它允许最多调用的工具次数（例如执行代码、搜索、画图、操作文件等），默认是 90 次。

你设置的数值越高，表示它能处理的任务就越复杂（如写代码、深度研究），但也意味着会消耗更多的 token。这里可以根据实际情况进行选择：
1. 如果想处理复杂任务，可以适当调高数值。
2. 如果想选择保守方案，直接按下 Enter 键保留 90 也是没有问题的。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517210155874.png?imageSlim)
下面这个表示 Hermes 在运行工具的时候（比如搜索、画图、执行代码），在终端里面显示多少过程信息：

1. Off：表示只显示最终答案，你完全看不到 Agent 在干什么
2. Neo：表示只在工具切换时显示简略状态
3. AML：表示每次调用工具的时候显示简单的预览，这种对于普通人比较友好
4. Verbose：表示显示完整的参数、结果和调用日志，超级详细，但是会非常吵，适合调试的时候使用

如果只是日常使用，可以选 AML；如果只想看最终结果，可以选 Off。我这里选择的是 Off，然后按下 Enter 即可。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517210334219.png?imageSlim)


这个表示的是上下文的压缩阈值，也就是当历史对话太长、快要塞满上下文窗口的时候，Hermes 会自动把旧消息总结压缩成精简版。

具体的设置规则如下：
1. 数值设置越高：保留的原始对话越多。
2. 数值设置越低：会越早进行压缩，从而更加节省 token。

选择 0.5 是一个比较保守的选择。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517210356221.png?imageSlim)
下面这个就是决定你在哪些社交媒体软件里面去使用。

如果你之前配置过一些的话，保持之前配置的即可；没有的话，你可以选择进行配置。这里面大部分都是国外的一些社交软件，但是也有微信或者 QQ 之类的。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517210801091.png?imageSlim)
这个主要是添加一些工具，比如说生成视频、生成音频等。

你可以检查一下有哪些工具还没有添加，并根据需要进行选择。如果你想添加之前没用过的工具，只需将鼠标悬停在上面，然后按一下空格键就可以添加成功了。
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com//20260517211222491.png?imageSlim)
