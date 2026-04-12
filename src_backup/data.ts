// Skills data
export interface Skill {
  id: string
  name: string
  description: string
  tags: string[]
  url: string
}

export const skills: Skill[] = [
  {
    id: 'prompt-engineering',
    name: 'prompt-engineering',
    description: 'Prompt 工程方法论',
    tags: ['LLM', 'Prompt'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/prompt-engineering',
  },
  {
    id: 'ai-workflow-automation',
    name: 'ai-workflow-automation',
    description: 'AI 自动化工作流',
    tags: ['Automation', 'Agent'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/ai-workflow-automation',
  },
  {
    id: 'model-evaluation',
    name: 'model-evaluation',
    description: '模型评估框架',
    tags: ['Evaluation', 'LLM'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/model-evaluation',
  },
  {
    id: 'rag-pipeline',
    name: 'rag-pipeline',
    description: 'RAG 检索增强生成',
    tags: ['RAG', 'Search'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/rag-pipeline',
  },
  {
    id: 'fine-tuning-recipes',
    name: 'fine-tuning-recipes',
    description: '微调实践指南',
    tags: ['Fine-tuning', 'Training'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/fine-tuning-recipes',
  },
  {
    id: 'karpathy-guidelines',
    name: 'karpathy-guidelines',
    description: 'Karpathy 编码准则',
    tags: ['Coding', 'Best Practice'],
    url: 'https://github.com/gracexygu/ai-toolkit/tree/main/karpathy-guidelines',
  },
]

// Vibe Coding projects (placeholder)
export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  url: string
  image?: string
}

export const projects: Project[] = [
  // TODO: Add your Vibe Coding projects here
]

// Experience data
export interface Experience {
  period: string
  title: string
  organization: string
  description?: string
  type: 'work' | 'education'
}

export const experiences: Experience[] = [
  {
    period: '2024',
    title: '印尼 Mall 策略运营',
    organization: '字节跳动 · 全球电商',
    description: '跨境电商策略运营与 AI 提效工具探索',
    type: 'work',
  },
  {
    period: '2023 - 2025',
    title: '国际关系硕士',
    organization: '同济大学',
    description: '气候政策研究、组态分析（fsQCA）',
    type: 'education',
  },
]

// Navigation items
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'taste', label: 'Taste' },
  { id: 'contact', label: 'Contact' },
]
