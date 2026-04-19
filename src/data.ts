// ==================== Types ====================

export interface Skill {
  id: string
  name: string
  description: string
  tags: string[]
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  highlight: string
  url?: string
}

export interface Experience {
  period: string
  title: string
  organization: string
  description?: string
  type: 'work' | 'education'
}

export interface NavItem {
  id: string
  label: string
}

export interface TasteItem {
  id: string
  title: string
  story: string
  location: string
  date: string
  image: string
}

export interface XhsNote {
  id: string
  title: string
  likes: string
  thumbnail: string
}

// ==================== Navigation ====================

export const navItems: NavItem[] = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'taste', label: 'photography' },
  { id: 'xhs', label: 'xhs' },
  { id: 'toolkit', label: 'toolkit' },
  { id: 'contact', label: 'contact' },
]

// ==================== Skills ====================

export const skills: Skill[] = [
  {
    id: 'context-snapshot',
    name: 'context-snapshot',
    description: '对话上下文快照与迁移工具，方便跨平台恢复上下文',
    tags: ['Context', 'Migration'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/context-snapshot',
  },
  {
    id: 'hv-analysis',
    name: 'hv-analysis',
    description: '横纵分析法深度研究框架，输出 PDF 研究报告',
    tags: ['Research', 'Analysis'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/hv-analysis',
  },
  {
    id: 'karpathy-guidelines',
    name: 'karpathy-guidelines',
    description: 'Karpathy 编码行为准则，避免常见 LLM 编码错误',
    tags: ['Coding', 'Best Practice'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/karpathy-guidelines',
  },
  {
    id: 'khazix-writer',
    name: 'khazix-writer',
    description: '数字生命卡兹克的写作风格 Skill，公众号长文写作',
    tags: ['Writing', 'Style'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/khazix-writer',
  },
  {
    id: 'memory-vault',
    name: 'memory-vault',
    description: '个人记忆仓库管理器，自动联通 GitHub 存储长期记忆',
    tags: ['Memory', 'GitHub'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/memory-vault',
  },
  {
    id: 'superpower',
    name: 'superpower',
    description: '软件开发超能力工作流，涵盖设计探索、TDD、调试',
    tags: ['Development', 'Workflow'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/superpower',
  },
  {
    id: 'ui-ux-pro-max',
    name: 'ui-ux-pro-max',
    description: 'UI/UX 设计智能助手，内置设计风格、配色、字体搭配库',
    tags: ['Design', 'UI/UX'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/skills/ui-ux-pro-max',
  },
]

// ==================== Projects ====================

export const projects: Project[] = [
  {
    id: 'ai-data-workflow',
    title: 'AI 数据工作流',
    description: '从 0 到 1 搭建 AI 自动化数据监控工作流，周报耗时从 4h 压缩至 10min',
    highlight: '人工干预减少 80%+',
  },
  {
    id: 'ai-resume-architect',
    title: 'AI Resume Architect',
    description: '智能简历编辑器，双引擎架构 + 模型分级调用，1 周 Vibe Coding 完成 MVP',
    highlight: '单次诊断成本 -60%',
  },
  {
    id: 'ai-toolkit',
    title: 'ai-toolkit',
    description: '7 个 Mira 自定义 Skills 开源集合，涵盖写作、设计、开发工作流',
    highlight: '开源',
    url: 'https://github.com/gracexygu/ai-toolkit',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: '你正在看的这个网站，React + TypeScript + Tailwind CSS + Vibe Coding',
    highlight: 'Vibe Coding',
    url: 'https://github.com/gracexygu/portfolio-v2',
  },
]

// ==================== Experience ====================

export const experiences: Experience[] = [
  {
    period: '2025.10 – 2026.03',
    title: '印尼站 Mall 策略运营',
    organization: 'TikTok',
    description: '优惠券策略设计、A/B 实验、品类差异化补贴',
    type: 'work',
  },
  {
    period: '2025.03 – 2025.09',
    title: '跨境商业化运营',
    organization: '小红书',
    description: '跨境广告投放策略、高转化素材 SOP',
    type: 'work',
  },
  {
    period: '2024.10 – 2025.03',
    title: '跨境渠道销售运营',
    organization: '小红书',
    description: '渠道代理商拓展与分层运营',
    type: 'work',
  },
  {
    period: '2024 – 2027',
    title: '国际关系硕士',
    organization: '同济大学',
    description: '气候政策研究、组态分析（fsQCA）',
    type: 'education',
  },
  {
    period: '2020 – 2024',
    title: '公共管理学士',
    organization: '兰州大学 管理学院',
    type: 'education',
  },
]

// ==================== Taste Items (3D Flip Gallery) ====================

export const tasteItems: TasteItem[] = [
  {
    id: 'taste-1',
    title: 'Morning Light',
    story: '清晨五点爬起来等日出，冻得发抖，但当第一缕光打在山尖的时候，一切都值了。',
    location: 'Switzerland',
    date: '2024.03',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
  },
  {
    id: 'taste-2',
    title: 'Golden Hour',
    story: '黄金时刻转瞬即逝，但相机记住了这一刻永恒的温暖。',
    location: 'Norway',
    date: '2024.06',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
  },
  {
    id: 'taste-3',
    title: 'Forest Silence',
    story: '森林里的寂静不是空无，而是充满了生命的呼吸声。',
    location: 'Japan',
    date: '2023.11',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=600&fit=crop',
  },
  {
    id: 'taste-4',
    title: 'Misty Valley',
    story: '雾气缭绕的山谷，像是大自然为我们留下的一幅水墨画。',
    location: 'Iceland',
    date: '2024.02',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop',
  },
  {
    id: 'taste-5',
    title: 'The Path',
    story: '每一条小路都通向未知，而这正是旅行的意义。',
    location: 'New Zealand',
    date: '2023.09',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=900&fit=crop',
  },
  {
    id: 'taste-6',
    title: 'Cascade',
    story: '站在瀑布前，能感受到水雾扑面而来的清凉，还有大自然的力量。',
    location: 'Costa Rica',
    date: '2024.01',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&h=700&fit=crop',
  },
  {
    id: 'taste-7',
    title: 'Mirror Lake',
    story: '湖面如镜，倒映着天空和山峦，分不清哪里是天，哪里是地。',
    location: 'Canada',
    date: '2024.07',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&h=600&fit=crop',
  },
  {
    id: 'taste-8',
    title: 'Green Valley',
    story: '绿色是治愈的颜色，在这里，所有的疲惫都烟消云散。',
    location: 'Ireland',
    date: '2023.08',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=800&fit=crop',
  },
]

// ==================== XHS Notes ====================

export const xhsNotes: XhsNote[] = [
  {
    id: 'xhs-1',
    title: '跨境广告投放策略：从 0 到月销百万的素材 SOP',
    likes: '2.3k',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-4b46-4eec-8f9c-24dfc3e8a1f1?w=400&h=400&fit=crop',
  },
  {
    id: 'xhs-2',
    title: 'TikTok 印尼 Mall 运营：优惠券策略 A/B 实验复盘',
    likes: '1.8k',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
  },
  {
    id: 'xhs-3',
    title: '从文科转产品：非技术背景如何用 AI 工具做 Side Project',
    likes: '3.1k',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd36a33c1f?w=400&h=400&fit=crop',
  },
]

// ==================== About Content ====================

export const aboutContent = {
  paragraphs: [
    "I'm a <highlight>Master's student at Tongji University</highlight> studying International Relations, with a background in Public Administration from Lanzhou University. My journey spans operations, strategy, and now product — always driven by curiosity about how systems work and how AI can make them better.",
    "From designing coupon strategies at TikTok Indonesia to crafting high-conversion ad materials at Xiaohongshu, I've learned to balance data-driven decisions with creative intuition.",
  ],
  quote: "The best products emerge from deeply understanding both users and technology.",
}

// ==================== Contact Links ====================

export const contactLinks = [
  { label: 'Email', href: 'mailto:[EMAIL]', icon: 'email' },
  { label: 'GitHub', href: 'https://github.com/gracexygu', icon: 'github' },
  { label: '小红书', href: 'https://www.xiaohongshu.com/user/profile/5bc9f03eb39f6600012df592', icon: 'xhs' },
]

// ==================== Social Links ====================

export const socialLinks = {
  email: '[EMAIL]',
  github: 'https://github.com/gracexygu',
  xhs: 'https://www.xiaohongshu.com/user/profile/5bc9f03eb39f6600012df592',
}

/** Chronicle Dial 拨盘数据 */
export interface DialExperience {
  year: number
  title: string
  subtitle: string
  description: string
  location: string
  type: 'work' | 'education' | 'achievement'
  image: string
}

/* ── 岁月拨盘 Chronicle Dial 数据 ── */
export const dialExperiences: DialExperience[] = [
  {
    year: 2020,
    title: '兰州大学',
    subtitle: '本科 · 新闻与传播学院',
    description:
      '在西北旷野的风沙里，我第一次学会用镜头和文字捕捉世界。那些在黄河边拍纪录片的深夜，让我相信"讲故事"是一种超能力。',
    location: '甘肃 · 兰州',
    type: 'education',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop',
  },
  {
    year: 2022,
    title: '同济大学',
    subtitle: '硕士 · 设计创意学院',
    description:
      '从传播跨到设计，像是一场蓄谋已久的冒险。在同济的工作坊和深夜Studio里，我把"用户思维"刻进了骨子里，也找到了产品设计的语感。',
    location: '上海',
    type: 'education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
  },
  {
    year: 2024,
    title: '小红书',
    subtitle: '产品经理实习 · 社区增长',
    description:
      '第一次把课堂里的方法论扔进真实的战场。负责社区内容分发策略优化，用数据驱动实验迭代，终于理解了"增长"不是黑魔法，而是无数个0.1%的叠加。',
    location: '上海',
    type: 'work',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
  },
  {
    year: 2025,
    title: 'TikTok',
    subtitle: '产品经理 · 电商',
    description:
      '加入全球化最前线的战场，在直播电商的高速列车上学会了"边开枪边换轮子"。跨时区协作、从0到1搭建商家工具，每一天都在被推着进化。',
    location: '新加坡',
    type: 'work',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&h=400&fit=crop',
  },
  {
    year: 2026,
    title: 'AI PM 转型',
    subtitle: '探索 AI-Native 产品设计',
    description:
      '当大模型重新定义交互范式，我决定All-in这个时代最大的变量。从Prompt Engineering到Agent架构，正在用产品经理的直觉，寻找AI与人之间最舒服的握手方式。',
    location: '地球 Online',
    type: 'achievement',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
]