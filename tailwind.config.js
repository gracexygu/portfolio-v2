/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Klein Blue 色彩系统
        klein: {
          DEFAULT: '#002FA7',
          mid: '#1A47C9',
          light: '#3D6AE8',
        },
        // 香槟金 accent
        accent: {
          DEFAULT: '#C9A962',
        },
        // 背景与文字
        bg: '#FFFFFF',
        text: {
          DEFAULT: '#0A0A0A',
          secondary: '#737373',
          muted: '#A3A3A3',
        },
        // 三层边框系统
        border: {
          DEFAULT: '#E5E5E5',
          l1: '#D4D4D4',
          l2: '#E5E5E5',
          l3: '#F0F0F0',
        },
        gray: {
          100: '#F8F8F8',
          300: '#D4D4D4',
          500: '#737373',
        },
      },
      fontFamily: {
        script: ['Caveat', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'section': '6px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'orb-breathe': 'orbBreathe 4s ease-in-out infinite',
        'orb-float': 'orbFloat 6s ease-in-out infinite',
        'blob-about': 'blobAbout 6s ease-in-out infinite',
        'blob-experience': 'blobExperience 8s ease-in-out infinite',
        'blob-taste': 'blobTaste 10s ease-in-out infinite',
        'nucleus-1': 'nucleus1 4s ease-in-out infinite',
        'nucleus-2': 'nucleus2 5s ease-in-out infinite',
        'nucleus-3': 'nucleus3 6s ease-in-out infinite',
        // 旋转文字环相关动画
        'ring-rotate': 'ringRotate 50s linear infinite',
        'nav-breathe': 'navBreathe 4s ease-in-out infinite',
        'orb-explode': 'orbExplode 1s ease-out forwards',
        'ring-explode': 'ringExplode 1s ease-out forwards',
        'title-explode': 'titleExplode 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Klein Orb 呼吸动画
        orbBreathe: {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1)', 
            opacity: '0.6',
            filter: 'blur(80px)',
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.25)', 
            opacity: '0.4',
            filter: 'blur(100px)',
          },
        },
        orbFloat: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)', 
            opacity: '0.4',
          },
          '50%': { 
            transform: 'translate(-40px, 50px) scale(1.18)', 
            opacity: '0.25',
          },
        },
        // Morphing Blob - ABOUT: 柔和呼吸
        blobAbout: {
          '0%, 100%': { 
            transform: 'translateY(-50%) scale(1)',
            borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          },
          '50%': { 
            transform: 'translateY(-50%) scale(1.1)',
            borderRadius: '50% 50% 50% 50%',
          },
        },
        // Morphing Blob - EXPERIENCE: 水平拉伸
        blobExperience: {
          '0%, 100%': { 
            transform: 'translateY(-50%) scaleX(1)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          },
          '50%': { 
            transform: 'translateY(-50%) scaleX(1.4) translateX(15px)',
            borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%',
          },
        },
        // Morphing Blob - TASTE: 大幅度变形
        blobTaste: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translateY(-50%) rotate(0deg) scale(1)',
          },
          '33%': {
            borderRadius: '40% 60% 70% 30% / 30% 70% 30% 70%',
          },
          '66%': { 
            borderRadius: '30% 70% 50% 50% / 50% 50% 70% 30%',
            transform: 'translateY(-50%) rotate(120deg) scale(1.2)',
          },
        },
        // 多核聚合球
        nucleus1: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.15)', opacity: '0.85' },
        },
        nucleus2: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.12)', opacity: '0.75' },
        },
        nucleus3: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' },
        },
        // ========== 旋转文字环导航动画 ==========
        // 旋转
        ringRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // 导航呼吸泡
        navBreathe: {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1)', 
            opacity: '0.45',
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.7)', 
            opacity: '0.65',
          },
        },
        // 呼吸泡爆炸
        orbExplode: {
          '0%': { 
            transform: 'translate(-50%, -50%) scale(1.7)', 
            opacity: '0.65', 
            filter: 'blur(50px)' 
          },
          '40%': { 
            transform: 'translate(-50%, -50%) scale(10)', 
            opacity: '0.12', 
            filter: 'blur(70px)' 
          },
          '70%': { 
            transform: 'translate(-50%, -50%) scale(22)', 
            opacity: '0.06', 
            filter: 'blur(110px)' 
          },
          '100%': { 
            transform: 'translate(-50%, -50%) scale(40)', 
            opacity: '0', 
            filter: 'blur(160px)' 
          },
        },
        // 文字环爆炸
        ringExplode: {
          '0%': { 
            transform: 'rotate(var(--current-rotation, 0deg)) scale(1)', 
            opacity: '1' 
          },
          '40%': { 
            transform: 'rotate(var(--current-rotation, 0deg)) scale(1.6)', 
            opacity: '0.7' 
          },
          '70%': { 
            transform: 'rotate(var(--current-rotation, 0deg)) scale(2.8)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'rotate(var(--current-rotation, 0deg)) scale(4.5)', 
            opacity: '0' 
          },
        },
        // 标题爆炸
        titleExplode: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(6)', opacity: '0.7' },
          '100%': { transform: 'scale(18)', opacity: '0', filter: 'blur(25px)' },
        },
      },
    },
  },
  plugins: [],
}
