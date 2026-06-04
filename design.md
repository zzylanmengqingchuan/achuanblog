---
version: alpha
name: achuanblog
description: 阿川 Blog 的 AI 开发设计规范。该网站是阑梦清川的个人博客与个人门面，面向对作者本人、学习经历、成长路径、AI 内容创作和个人作品感兴趣的访问者。整体风格应清爽、轻盈、可信赖，偏学术风与校园风，以内容阅读和个人理解为核心。
colors:
  primary: "#4258ff"
  primary-hover: "#2942ff"
  primary-soft: "#edf3ff"
  secondary: "#2942ff"
  accent-sky: "#cfeeff"
  page-hero: "#d9f1ff"
  page-background: "#ffffff"
  surface: "#ffffff"
  surface-muted: "#f8fafc"
  neutral: "#404654"
  neutral-strong: "#1f2937"
  neutral-muted: "#6b7280"
  on-surface: "#404654"
  border-subtle: "#e5e7eb"
  border-strong: "#cbd5e1"
  error: "#ef4444"
typography:
  headline-display:
    fontFamily: "Inter"
    fontSize: "35px"
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: "0px"
    fontFeature: "normal"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Inter"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Inter"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: "0px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: "0px"
  label-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: "0px"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "92px"
layout:
  pageMaxWidth: "1120px"
  contentMaxWidth: "760px"
  wideContentMaxWidth: "960px"
  pagePaddingDesktop: "48px"
  pagePaddingTablet: "32px"
  pagePaddingMobile: "20px"
  sectionGapDesktop: "92px"
  sectionGapMobile: "48px"
breakpoints:
  mobile: "0px"
  tablet: "768px"
  desktop: "1024px"
shadows:
  none: "none"
  sm: "0 1px 2px rgba(15, 23, 42, 0.06)"
  md: "0 8px 24px rgba(15, 23, 42, 0.08)"
motion:
  duration-fast: "120ms"
  duration-base: "180ms"
  easing-standard: "cubic-bezier(0.2, 0, 0, 1)"
components:
  button:
    primary:
      backgroundColor: "{colors.primary}"
      color: "{colors.surface}"
      borderColor: "transparent"
      borderRadius: "{rounded.sm}"
      borderWidth: "1px"
      borderStyle: "solid"
      padding: "10px 18px"
      fontSize: "16px"
      fontWeight: 400
      minWidth: "40px"
      minHeight: "40px"
      textDecoration: "none"
      boxShadow: "none"
    secondary:
      backgroundColor: "transparent"
      color: "{colors.neutral}"
      borderColor: "{colors.border-strong}"
      borderRadius: "{rounded.sm}"
      borderWidth: "1px"
      borderStyle: "solid"
      padding: "10px 18px"
      fontSize: "16px"
      fontWeight: 400
      minWidth: "40px"
      minHeight: "40px"
      textDecoration: "none"
      boxShadow: "none"
    link:
      backgroundColor: "transparent"
      color: "{colors.secondary}"
      borderColor: "transparent"
      borderRadius: "{rounded.none}"
      borderWidth: "0px"
      borderStyle: "none"
      padding: "0px"
      fontSize: "16px"
      fontWeight: 400
      minWidth: "0px"
      minHeight: "0px"
      textDecoration: "none"
      boxShadow: "none"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border-subtle}"
    borderRadius: "{rounded.md}"
    borderWidth: "1px"
    borderStyle: "solid"
    padding: "{spacing.md}"
    boxShadow: "none"
    textColor: "{colors.on-surface}"
---

# Design Intent

阿川 Blog 是阑梦清川未来五年持续建设的个人博客与个人门面。网站的第一任务不是炫技，也不是求职转化，而是让访问者更好地理解作者：他是谁、经历了什么、写过什么、如何学习和表达，以及为什么可以被视为一个可信的 AI 深度用户和 AI Agent 资深用户。

设计应服务三类核心内容：

- 个人背景：包括学习经历和成长路径，让访问者理解阑梦清川如何一步步成为现在的自己。
- 个人作品：展示 GitHub 项目、自己开发的小工具，以及作者写过的文章。
- 内容创作：长期承载 AI Agent、读书笔记和 AI 实践案例等方向的文章。

视觉气质应偏学术风、校园风、清爽可信。它可以有个人温度，但不能像通用模板站、商业落地页、强求职页面或厚重职场履历站。

# Design Principles

- 内容优先：页面首先要让人读懂内容，再考虑视觉表现。
- 学术清爽：使用浅色背景、蓝色强调、宽松留白和轻量排版，营造校园与知识站气质。
- 个人可信：信息组织应让访问者相信作者真实、持续学习、有 AI 实践和作品沉淀。
- 克制表达：不使用过度动画、复杂背景、厚重阴影、强烈渐变或营销式模块。
- 可持续扩展：后续新增经历、文章、作品时，不应破坏整体结构和视觉一致性。

# Visual Style

整体风格应接近“轻量学术个人站”，而不是“作品集炫技站”或“企业官网”。

- 页面背景以白色为主。
- 首页或关键分区可以使用浅蓝色背景，形成清爽、校园感的第一印象。
- 使用蓝色作为链接、导航状态和关键操作色。
- 卡片、列表和内容分区使用细边框和留白建立层次。
- 视觉装饰必须少量使用，并且服务作者身份、学习经历、成长路径或作品内容。

# Color Usage

使用浅色模式作为唯一默认主题。除非后续 PRD 明确要求，不设计深色模式。

- `page-background` 用于全站基础背景。
- `page-hero` 用于首页首屏或关键介绍区，体现轻盈校园感。
- `surface` 用于内容卡片、文章列表、经历条目。
- `primary` 用于主要按钮、当前导航状态、关键链接悬停。
- `secondary` 用于正文链接和轻量操作。
- `primary-soft` 和 `accent-sky` 用于轻提示、标签背景、引用区背景。
- `neutral-strong` 用于标题。
- `neutral` 用于正文。
- `neutral-muted` 用于日期、标签、说明性文字。
- `border-subtle` 用于卡片和分割线。

不要新增大面积高饱和色块。不要使用黑色大背景、霓虹色、玻璃拟态渐变或强烈对比色系统。

# Typography

主字体使用 Inter。中文与英文内容共用同一套现代无衬线系统，保持清楚、轻量、可读。

- 标题使用常规字重，避免粗黑标题。
- 正文应适合长文阅读，行高必须舒适。
- 中文段落不要过密，段落之间需要明确间距。
- 英文技术词、产品名和 AI Native 相关表达可以自然混排，不单独切换字体。
- 不使用装饰性字体、手写字体或过度文艺的衬线字体。

字号使用规则：

- `headline-display`：仅用于首页主标题或最高层级个人介绍。
- `headline-lg`：页面标题和一级内容区标题。
- `headline-md`：作品、文章、经历模块标题。
- `headline-sm`：卡片内部标题或次级小节标题。
- `body-lg`：首页介绍、关于页关键叙事。
- `body-md`：普通正文、摘要、列表内容。
- `body-sm`：日期、标签、补充说明。

# Page Structure

网站默认采用以下页面结构。后续如果用户确认新的栏目，应更新本节，不要在开发时临时新增栏目。

## Home

首页用于建立第一印象。首屏必须回答：

- 这是阿川 Blog。
- 作者是阑梦清川。
- 作者是一名 AI 爱好者和内容创作者。
- 这是一个用于了解作者、阅读内容和查看作品的个人博客。

首页建议模块顺序：

1. Hero：站点名、作者身份、简短介绍、主要入口。
2. About preview：简短说明作者是谁。
3. Growth preview：展示成长路径中的关键节点。
4. Works preview：展示 GitHub 项目、小工具和文章精选。
5. Latest articles：展示 AI Agent、读书笔记和 AI 实践案例等近期文章。
6. Contact：提供含蓄的继续了解或联系入口。

## About

关于页用于完整介绍阑梦清川。它应以叙事为主，不做成纯简历表格。

必须包含：

- 个人简介。
- 当前身份：AI 爱好者和内容创作者。
- 关注方向：AI Agent、读书笔记、AI 实践案例。
- 与 AI Native 或 Agent 实践相关的判断。

## Experience

经历页用于呈现正式的学习经历和工作经历。它应该清晰、可信、偏事实性，但不要做成厚重的企业化工作履历。

每条经历建议包含：

- 标题。
- 时间。
- 机构或场景。
- 简短说明。
- 相关链接或文章，如果存在。

## Growth Path

成长路径页用于描述作者如何一步步成为现在的自己。它应比经历页更叙事，重点呈现关键节点和转折。

可包含：

- 开始写作的契机。
- 接触 AI 或 AI Agent 的关键节点。
- 形成持续学习习惯的节点。
- 重要内容创作、项目或实践经历。

## Works

作品页用于展示个人作品。已确认的作品类型包括 GitHub 项目、自己开发的小工具，以及自己写的文章。

每个作品条目建议包含：

- 标题。
- 摘要。
- 类型。
- 时间。
- 标签。
- 阅读或查看入口。

## Articles

文章列表页用于承载个人分享、学习记录和思考沉淀。

主要内容方向：

- AI Agent。
- 读书笔记。
- AI 实践案例。

列表项必须清晰展示：

- 文章标题。
- 摘要。
- 发布时间。
- 标签或分类。

## Article Detail

文章详情页必须优先保证阅读体验。

要求：

- 正文宽度不超过 `contentMaxWidth`。
- 标题、日期、标签与正文层级清楚。
- 不放置干扰阅读的大型侧栏。
- 段落、引用、列表、代码块和图片样式需要统一。

## Contact

联系区域用于让访问者以比较含蓄的方式继续了解或联系作者。它不应呈现强求职或强商业转化风格。

计划包含 GitHub 链接、X 链接、个人邮箱以及其他社交媒体链接。具体链接尚未确认前，开发时不得虚构邮箱、社交账号或外链；如果没有真实联系方式，使用占位文案并标记为待补充。

# Information Architecture

信息架构应围绕访问者的理解路径组织：

1. 识别：这是阿川 Blog。
2. 定位：阑梦清川是一名 AI 爱好者和内容创作者。
3. 背景：了解他的正式学习经历和工作经历。
4. 成长：理解他如何一步步成为现在的自己。
5. 判断能力：查看 GitHub 项目、小工具和文章。
6. 持续阅读：阅读 AI Agent、读书笔记和 AI 实践案例。
7. 继续行动：通过 GitHub、X、邮箱或其他社交媒体建立连接。

导航建议使用：

- 首页
- 关于我
- 学习经历
- 成长路径
- 作品集
- 文章
- 联系

导航文案应保持短、直白、中文优先。不要使用原参考网站的栏目名。不要新增未确认的栏目，例如照片、音乐、菜谱、订阅等。

# Layout

全站使用居中容器和明确的最大宽度。

- 页面主容器最大宽度使用 `pageMaxWidth`。
- 长文内容最大宽度使用 `contentMaxWidth`。
- 作品、学习经历和成长路径列表可以使用 `wideContentMaxWidth`。
- 桌面端页面左右内边距使用 `pagePaddingDesktop`。
- 平板端页面左右内边距使用 `pagePaddingTablet`。
- 移动端页面左右内边距使用 `pagePaddingMobile`。

布局规则：

- 桌面端可以使用两列布局展示 Hero，但文字列必须是视觉主角。
- 移动端所有主要内容单列堆叠。
- 区块之间使用足够垂直间距，避免压缩成密集简历或求职页面。
- 卡片网格最多两列；文章长列表优先单列。
- 不在卡片中嵌套卡片。

# Components

## Header

Header 应轻量、稳定、低干扰。

- 左侧显示站点名称“阿川 Blog”或 `achuanblog`，优先使用“阿川 Blog”。
- 右侧显示导航项。
- 当前页面导航项使用蓝色或浅蓝底强调。
- 移动端使用折叠菜单或简洁纵向菜单。
- Header 不使用厚重阴影；可以使用白色背景和底部分割线。

## Hero

Hero 是首页第一屏的信息中心。

必须包含：

- 站点名或主标题。
- 一段简短说明：阑梦清川是一名 AI 爱好者和内容创作者。
- 一到两个主要入口，例如“了解我”“查看作品”。

可以包含：

- 个人头像、抽象插画或轻量校园感图形。

不允许：

- 使用无意义装饰图压过文字。
- 使用超过两个主要按钮。
- 使用营销式大标题替代真实个人介绍。

## Content Card

Content Card 用于学习经历、成长路径、作品和文章列表。

结构建议：

- 标题。
- 摘要或说明。
- 时间或阶段。
- 标签。
- 可选链接。

样式要求：

- 白色背景。
- `border-subtle` 细边框。
- `rounded.md` 圆角。
- 默认无阴影。
- 悬停时只允许轻微边框变化、浅背景变化或 `shadows.sm`。

## Article List Item

文章列表项应像编辑型内容索引，而不是新闻信息流。

- 标题清楚。
- 摘要不超过两到三行。
- 时间和标签弱化显示。
- 整个条目可以点击，但视觉上不要像大按钮。

## Quote Block

Quote Block 用于承载个人判断、阶段性总结或关键表达。

- 使用浅蓝或浅灰背景。
- 可以使用左侧细线。
- 不使用巨大装饰引号。
- 不将普通宣传语包装成引用。

## Button

按钮只用于明确操作。

- 主按钮：用于最重要入口，如“查看作品”。
- 次按钮：用于次要入口，如“了解经历”。
- 文本链接：用于文章链接、外部链接和轻量跳转。

按钮文字必须短，避免使用含糊文案。

## Tag

标签用于文章分类、作品类型或经历阶段。

- 使用小字号。
- 背景使用 `primary-soft` 或 `surface-muted`。
- 文字使用 `neutral-muted` 或 `secondary`。
- 标签不能喧宾夺主。

# Interaction

交互应细微、明确、低干扰。

- 链接悬停时颜色变为 `primary-hover`，可添加下划线。
- 卡片悬停时使用轻微边框加深或浅阴影。
- 按钮悬停时背景变为 `primary-hover`。
- 动画时长使用 `duration-fast` 或 `duration-base`。
- 不使用大幅滚动动画、视差、自动播放视频或复杂转场。

# Responsive Behavior

移动端优先保证阅读和导航。

- Header 可折叠。
- Hero 改为单列，文字在前。
- 经历、作品、文章列表全部单列。
- 图片宽度不得超过容器。
- 按钮可以纵向排列，但每行不超过两个主要操作。
- 正文行宽在移动端由页面 padding 控制，不额外压缩。

# Accessibility

设计和实现必须满足基础可访问性。

- 正文与背景对比度必须清晰。
- 蓝色链接不能只依赖颜色区分，悬停或聚焦时应有下划线或可见状态。
- 所有可点击元素最小点击区域不小于 40px。
- 键盘聚焦状态必须可见。
- 图片必须有有意义的替代文本；装饰图使用空替代文本。
- 不使用自动播放或闪烁元素。

# Content Rules

文案必须真实、具体、清楚。

- 可以写学习经历、工作经历、成长路径、GitHub 项目、小工具、作品文章和 AI Native 相关实践。
- 文章内容方向应优先围绕 AI Agent、读书笔记和 AI 实践案例。
- 不写泛泛而谈的自我夸奖。
- 不虚构学校、公司、项目、奖项、联系方式或外部链接。
- 如果内容未确认，使用“待补充”标记，不生成假的具体信息。
- 页面文案应使用中文为主，英文技术词自然保留。

# AI Development Constraints

AI 开发时必须遵守以下约束：

- 不要添加未在 brief 或后续 PRD 中确认的真实个人信息。
- 不要照搬参考网站的专有名称、栏目、人物、机构、履历或文案。
- 不要把网站做成通用作品集模板。
- 不要把网站做成强求职导向的 Hire Me 页面；求职只是潜在结果，不是主风格。
- 不要把首页做成营销落地页。
- 不要新增复杂功能，例如账号系统、评论系统、订阅系统、搜索系统，除非后续 PRD 明确要求。
- 不要为了视觉丰富而引入大量图片、插画或动画。
- 如果必须使用占位内容，占位内容必须明显标注为“待补充”。

# Do's and Don'ts

## Do

- 保持页面清爽、宽松、安静。
- 保留浅蓝色首屏或分区背景带来的校园感。
- 使用白色内容区、细边框、轻量卡片建立结构。
- 优先展示学习经历、成长路径、作品集和文章。
- 让首页快速说明“阿川 Blog 是什么”以及“阑梦清川是一名 AI 爱好者和内容创作者”。
- 让文章、GitHub 项目和小工具成为网站的主要内容资产。
- 支持中文长文阅读，也兼容少量英文技术词。
- 让设计服务可信度、可读性和长期维护。

## Don't

- 不使用原参考网站的专有名称、专有栏目、具体机构或个人信息。
- 不把网站做成厚重的职场履历站。
- 不把网站做成求职风格很重的个人简历站。
- 不做泛泛而谈、千篇一律的个人主页模板。
- 不引入深色模式风格或大面积高饱和背景。
- 不使用粗重、压缩或装饰性展示字体。
- 不过度使用阴影、渐变、玻璃拟态或复杂动效。
- 不把卡片做成厚边框、大圆角、强阴影的重组件。
- 不让装饰性插图、图标或背景压过文字内容。
- 不把链接全部做成按钮，只有真正重要的操作才使用按钮样式。

# Open Questions

以下内容尚未在当前文件夹中确认，后续需要由用户补充后再进入设计或开发：

- 是否需要真实头像或个人插画。
- GitHub、X、个人邮箱和其他社交媒体的具体链接。
- 学习经历是否按时间线展示。
- 成长路径是否按时间线展示，还是按主题分组展示。
- 首页主 CTA 应优先指向“了解我”还是“查看作品”。
