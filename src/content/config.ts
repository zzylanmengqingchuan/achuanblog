import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(["AI Agent", "读书笔记", "AI 实践案例", "其他"]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    cover: z.string().optional()
  })
});

const works = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["GitHub 项目", "小工具", "文章", "其他"]),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional()
  })
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    period: z.string(),
    institution: z.string().optional(),
    location: z.string().optional(),
    type: z.enum(["教育经历", "工作经历", "其他"]),
    description: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    order: z.number()
  })
});

const growth = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    period: z.string().optional(),
    summary: z.string(),
    theme: z.enum(["写作", "AI", "学习", "创作", "其他"]),
    order: z.number(),
    featured: z.boolean().default(false)
  })
});

export const collections = { articles, works, experience, growth };
