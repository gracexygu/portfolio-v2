import React from 'react';

interface NoteData {
  id: number;
  cover: string;
  title: string;
  likes: string;
  link: string;
}

const notes: NoteData[] = [
  {
    id: 1,
    cover: 'https://placehold.co/440x950/1a1a1a/666666?text=笔记1',
    title: '爆款笔记标题1',
    likes: '5.2K',
    link: '#',
  },
  {
    id: 2,
    cover: 'https://placehold.co/440x950/1a1a1a/666666?text=笔记2',
    title: '爆款笔记标题2',
    likes: '3.8K',
    link: '#',
  },
  {
    id: 3,
    cover: 'https://placehold.co/440x950/1a1a1a/666666?text=笔记3',
    title: '爆款笔记标题3',
    likes: '2.9K',
    link: '#',
  },
];

const stats = [
  { value: '12.5K', label: 'Followers' },
  { value: '86', label: 'Notes' },
  { value: '45K', label: 'Likes' },
];

const PhoneMockup: React.FC<{
  cover: string;
  title: string;
  likes: string;
  link: string;
  variant?: 'left' | 'center' | 'right';
}> = ({ cover, title, likes, link, variant = 'center' }) => {
  const variantClass =
    variant === 'center'
      ? 'z-20 -translate-y-3 scale-[1.06]'
      : variant === 'left'
        ? 'z-10 translate-y-2 -rotate-[1deg] scale-[0.98]'
        : 'z-10 translate-y-2 rotate-[1deg] scale-[0.98]'

  return (
    <div className={`relative group transition-transform duration-500 ${variantClass}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[220px] h-[475px] bg-[#1a1a1a] rounded-[36px] p-2 
                   shadow-[0_30px_60px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.08)]
                   transition-all duration-400 ease-out
                   hover:-translate-y-2.5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.2),0_15px_30px_rgba(0,0,0,0.12)]"
      >
        <div className="w-full h-full rounded-[28px] overflow-hidden bg-white">
          <img src={cover} alt={title} className="w-full h-full object-cover" />
        </div>
      </a>
      {/* Hover label */}
      <span
        className="absolute -bottom-9 left-1/2 -translate-x-1/2 
                   text-xs text-gray-500 whitespace-nowrap
                   bg-white/95 px-3.5 py-1.5 rounded-xl shadow-sm
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        ❤️ {likes} · {title}
      </span>
    </div>
  );
};

export const Xiaohongshu: React.FC = () => {
  return (
    <section
      id="xhs"
      className="py-24 px-8 md:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-[1fr_2fr] min-h-[760px]">
            {/* 左侧：Klein Blue 品牌区 (1/3) */}
            <div className="relative">
              {/* Paper margin */}
              <div className="absolute inset-0 border-r border-black/10" />
              <div className="relative p-10 md:p-14 h-full">
                <div className="bg-[#002FA7] text-white h-full p-10 md:p-12 flex flex-col justify-between shadow-[0_30px_90px_rgba(0,47,167,0.25)]">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[11px] tracking-widest uppercase text-white/65">
                      03 — Xiaohongshu
                    </span>
                    <span className="font-serif text-6xl font-light text-white/12 leading-none">
                      03
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-white">
                    <h2 className="font-serif text-[44px] font-normal leading-[1.05] mb-7">
                      Share
                      <br />
                      <em className="text-white/70">Life & Insights</em>
                    </h2>
                    <div className="h-px w-16 bg-white/25 mb-7" />
                    <p className="text-sm font-light leading-relaxed text-white/78 mb-10 max-w-[34ch]">
                      在小红书记录真实的生活片段：留学见闻、AI 产品思考、城市街拍。
                      不追求数据，只分享值得分享的。
                    </p>

                    {/* Stats strip */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15">
                      {stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="font-mono text-2xl font-medium text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://www.xiaohongshu.com/user/profile/5bc9f03eb39f6600012df592"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#002FA7] 
                               rounded-full text-[13px] font-medium self-start
                               transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  >
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#002FA7]/70">
                      read
                    </span>
                    访问我的小红书 →
                  </a>

                  {/* Decorative circle */}
                  <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.10] -bottom-[70px] -right-[70px]" />
                </div>
              </div>
            </div>

            {/* 右侧：三手机水平排列 (2/3) */}
            <div className="relative flex items-center justify-center">
              {/* subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.55] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />

              {/* phones */}
              <div className="relative z-10 flex gap-8 items-end">
                {notes.map((note, idx) => (
                  <PhoneMockup
                    key={note.id}
                    cover={note.cover}
                    title={note.title}
                    likes={note.likes}
                    link={note.link}
                    variant={idx === 1 ? 'center' : idx === 0 ? 'left' : 'right'}
                  />
                ))}
              </div>

              {/* Editorial caption */}
              <div className="absolute left-10 bottom-10 z-10 max-w-[48ch]">
                <p className="text-xs text-black/45 tracking-wide leading-relaxed">
                  A curated set of posts — study abroad notes, AI product thinking, and street photography.
                </p>
              </div>

              {/* Watermark */}
              <span className="absolute bottom-10 right-12 text-xs text-black/35 tracking-[0.18em] font-mono">
                @谷谷谷雨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Xiaohongshu;
