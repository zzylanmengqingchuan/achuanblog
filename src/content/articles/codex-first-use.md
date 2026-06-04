---
title: "Claude Code 老用户初次体验 Codex：功能差异、上手感受与使用建议"
description: "订阅 ChatGPT Plus 后第一次使用 Codex，从一个 Claude Code 深度用户的角度，记录两者在体验上的关键不同。"
date: 2026-03-08
category: "AI Agent"
tags: ["Codex", "Claude Code", "ChatGPT", "AI Agent"]
draft: false
featured: false
cover: "/covers/15.png"
---

大家好，我是**阑梦清川**

今天通过一个偶然的机会，订阅了一个月的 **chatgpt Plus** 会员。

其中 Plus 会员有一项权益，就是可以使用 **CodeX**。我之前从来没有使用过 CodeX，据说免费用户也可以使用，但是我觉得 Plus 用户的额度应该要比免费用户的额度更多一些吧。

之前我更多还是去使用 **Claude**code，是在 VS Code 里面安装了一个插件，然后去使用 Claudecode。并且 Claudecode 是可以自定义配置大模型的 API 的，我配置的是智谱的 API，也使用过一些第三方中转站的，使用起来感觉一直挺顺手、挺不错的。

但是今天订阅 Plus 之后，CodeX 可以免费使用。我之前一直听说过它，但没有使用过，为什么不去试试呢？

它最近上线了 **Windows** 版本的客户端工具，我直接安装并登录使用。系统提示在 4 月 2 号之前可以享受两倍的额度。

我今天下午使用 CodeX 做了一款 Chrome 浏览器插件，只消耗了 **5 小时限额** 的 **10%** 额度，感觉还是非常 nice 的。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260307231422462.png)
今天这篇文章，我就站在一个 CodeX 新用户的角度，来说一下我对于它和 Claudecode 的理解，以及两者之间的不同。

# 1.基本页面介绍

在 CodeX 这款桌面客户端工具里面，基本的 **布局** 如下所示：

左边的这个 **线程** 实际上就是一个又一个的 **文件夹**，也就是我们 vibe coding 的一个又一个项目。我今天因为是第一次使用，所以体验了这个功能。

1. 核心布局与功能
   实际上，这跟你使用 **VS Code** 打开一个文件夹没有什么区别。
2. 与 Claude Code 的对比
   (a) 灵活性：
       相比之下，CodeX 一个更加 **灵活** 的地方就在于，它可以更加自如地进行不同项目之间的切换。
   (b) **项目管理**：
       之前使用 VS Code 的时候只能打开多个页面，但是现在 CodeX 的桌面端可以在一个页面下面管理多个项目。

这一点其实感觉使用上还是要比 **Claude Code** 好很多的。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260307231719750.png)
# 2.其他介绍

### 配置选项与设置平移

其次就是 CodeX 的设置里面有一个 **配置选项**。在这个配置里面，可以进行一些设置的平移。

1. **Skill 的导入**
   如果我们之前使用 Claude Code，在一些系统级别的目录下面安装了一些 Skill，那么现在可以直接把这些 Skill 应用到 CodeX 里面。在配置面板中，这些 Skill 是可以直接导入的。

2. **配置文件处理**
   我们也可以把 Claude 文件夹下的 settings.json 文件导入到 config.toml 文件中。这相当于大模型的配置，但我个人觉得这个用不到。
   (a) 因为我们直接使用 CodeX 的 **GPT 5.3** 就可以了。
   (b) 之前在 Claude Code 里的 settings.json 配置的是第三方大模型的密钥（比如我之前使用的是智谱的模型）。
   (c) 现在使用 CodeX 桌面端的话，直接使用它 **官方的模型** 就可以了，所以配置文件的平移完全用不到。

倒是 **Skill** 我觉得挺有用的，一些很不错的 Skill 可以直接导入。在第一次打开 CodeX 的时候，系统会提供两个选项：一个是 config，一个是 Skill。

因为我已经导入完成了，所以它现在显示的是 "Selected"。如果你是第一次使用，这两个部分都是可以导入的。因为第一个配置文件（config）我用不到，所以我只导入了 Skill。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260307231926206.png)
其次，针对 Claude Code 的老用户，当你第一次使用 CodeX 的时候，其实是看不到具体的 **项目文件结构** 的。

如果你在 VS Code 里面使用 Claude Code，实际上是可以看到文件夹里每一个文件的内容，但 CodeX 目前还做不到直接查看。它只能通过右上角的一个选项，在 VS Code 里面打开。

这种体验和在 VS Code 中直接查看还是有一些差别的，但可能这也是 CodeX 自己的一个 **特点** 吧，熟悉一下就好了。

![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260307232305897.png)

codex核心定位是 **Agent 指挥中心**，而不是代码编辑器，它主要是在独立的沙盒环境里运行，然我们我们最终审查，而不是像 vscode里面使用Claudecode 那样实时展示我们修改的方式以及最终的交互结果。

它们的 **交互方式** 还是有很大的区别的。

对于 **新手**，我觉得还是claudecode+GLM套餐更加划算，更加友好，难点就是需要配置（门槛），如果你熟悉的话，我说的cc用起来可能对于新手更加友好（前提是你可以解决配置问题，去正常使用）

文章写得很乱，记录自己的感想，关于插件，明天介绍，最后，如果你能阅读到这里，很不容易，我把我领取chatgpt plus一个月的方式告诉你，也算是阅读到最后的小伙伴的一个奖励：

点击链接，0元订阅：免费一个月的 **chatgpt plus**  https://chatgpt.com/?promoCode=openaisequoialondon

祝你玩得开心

---
免费星球(日常分享，想法碎片)
![image.png](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260303143955783.png)
付费星球（深度交流，长期沉淀+付费群）
![](https://zzy-1326340203.cos.ap-beijing.myqcloud.com/20260302214035704.png)

我是**阑梦清川**，希望得到您的关注










