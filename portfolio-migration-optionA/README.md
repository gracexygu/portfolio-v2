# Portfolio 移植方案：Option A 完整实施指南

## 方案概述

将 `grace-portfolio-v6.html` 的新版设计移植到 `portfolio-v2` 的 React + Vite 架构中。

**预估工作量**：4-6 小时
**技术栈**：React 18 + TypeScript + Vite + Tailwind CSS

---

## 目录结构（移植后）

```
portfolio-v2/
├── src/
│   ├── App.tsx                      # 更新：移除顶部 Nav，保留滚动监听
│   ├── data.ts                      # 更新：补充完整数据
│   ├── index.css                    # 更新：添加 Klein Blue 动效
│   ├── hooks/
│   │   └── useScrollReveal.ts       # 保留：复用
│   └── components/
│       ├── index.ts                 # 更新：新增导出
│       ├── Hero.tsx                 # 重写：Klein Orb + 底部导航
│       ├── About.tsx                # 重写：Morphing Blob 标题
│       ├── Experience.tsx           # 重写：Morphing Blob + 时间轴
│       ├── Toolkit.tsx              # 重写：多核聚合球 + 平铺展示
│       ├── Taste.tsx                # 重写：Morphing Blob + 小红书卡片
│       ├── Contact.tsx              # 重写：深色背景 + 香槟金 hover
│       ├── Footer.tsx               # 新增：手写签名
│       ├── KleinOrb.tsx             # 新增：克莱因蓝模糊球
│       ├── MorphingBlob.tsx         # 新增：变形 Blob 组件
│       └── MultiNucleusBlob.tsx     # 新增：多核聚合球
├── tailwind.config.js               # 更新：Klein Blue Token
└── package.json                     # 保留
```

---

## 移植 Checklist

### Phase 1: 基础配置（30 分钟）

- [ ] 1.1 更新 `tailwind.config.js`：添加 Klein Blue 色彩系统
- [ ] 1.2 更新 `index.css`：添加动画 keyframes 和全局样式
- [ ] 1.3 更新 `data.ts`：补充完整的 Experience 和 Project 数据

### Phase 2: 核心动效组件（1 小时）

- [ ] 2.1 创建 `KleinOrb.tsx`：Hero 区域的克莱因蓝模糊球
- [ ] 2.2 创建 `MorphingBlob.tsx`：带差异化动画的变形 Blob
- [ ] 2.3 创建 `MultiNucleusBlob.tsx`：Toolkit 的多核聚合球

### Phase 3: 页面组件重写（2-3 小时）

- [ ] 3.1 重写 `Hero.tsx`：底部四栏导航 + Klein Orb
- [ ] 3.2 重写 `About.tsx`：Morphing Blob 标题 + 双栏布局
- [ ] 3.3 重写 `Experience.tsx`：Morphing Blob + 时间轴
- [ ] 3.4 重写 `Taste.tsx`：Morphing Blob + 小红书卡片
- [ ] 3.5 重写 `Toolkit.tsx`：多核球 + 平铺展示（去掉 Tab）
- [ ] 3.6 重写 `Contact.tsx`：深色背景 + 香槟金 hover
- [ ] 3.7 创建 `Footer.tsx`：手写签名

### Phase 4: 整合与优化（30 分钟）

- [ ] 4.1 更新 `App.tsx`：移除顶部 Nav，调整 section 间距
- [ ] 4.2 更新 `components/index.ts`：导出新组件
- [ ] 4.3 响应式测试与调优
- [ ] 4.4 `prefers-reduced-motion` 支持

---

## 文件清单

本目录包含以下可直接使用的代码文件：

| 文件 | 说明 |
|------|------|
| `tailwind.config.js` | 更新后的 Tailwind 配置 |
| `index.css` | 更新后的全局样式 |
| `data.ts` | 更新后的数据文件 |
| `components/KleinOrb.tsx` | 克莱因蓝模糊球组件 |
| `components/MorphingBlob.tsx` | 变形 Blob 组件 |
| `components/MultiNucleusBlob.tsx` | 多核聚合球组件 |
| `components/Hero.tsx` | 重写后的 Hero |
| `components/About.tsx` | 重写后的 About |
| `components/Experience.tsx` | 重写后的 Experience |
| `components/Toolkit.tsx` | 重写后的 Toolkit |
| `components/Taste.tsx` | 重写后的 Taste |
| `components/Contact.tsx` | 重写后的 Contact |
| `components/Footer.tsx` | 新增的 Footer |
| `components/index.ts` | 组件导出 |
| `App.tsx` | 更新后的主入口 |

---

## 使用方法

1. 将本目录下的文件复制到 `portfolio-v2/src/` 对应位置
2. 运行 `npm install`（依赖不变）
3. 运行 `npm run dev` 启动开发服务器
4. 替换占位符内容（照片、邮箱、LinkedIn）

---

## 待替换占位符

| 占位符 | 说明 |
|--------|------|
| `[PHOTO_URL]` | 个人照片 URL |
| `[EMAIL]` | 真实邮箱地址 |
| `[LINKEDIN_URL]` | LinkedIn 主页 URL |
| `[GALLERY_PHOTOS]` | Taste 摄影作品（5-10 张） |
