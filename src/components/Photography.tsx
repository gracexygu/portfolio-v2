import React from 'react';

interface PhotoData {
  id: number;
  src: string;
  alt: string;
  style: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width: number;
    rotate: number;
    zIndex: number;
  };
}

const photos: PhotoData[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&h=350&fit=crop',
    alt: 'Tokyo street',
    style: { top: '8%', left: '5%', width: 260, rotate: -3, zIndex: 5 },
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Mountains',
    style: { top: '5%', right: '10%', width: 220, rotate: 4, zIndex: 4 },
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd36a33c1f?w=350&h=450&fit=crop',
    alt: 'Night city',
    style: { top: '35%', left: '25%', width: 180, rotate: 2, zIndex: 6 },
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=450&h=300&fit=crop',
    alt: 'Lake reflection',
    style: { bottom: '10%', left: '8%', width: 240, rotate: -2, zIndex: 3 },
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=380&h=280&fit=crop',
    alt: 'Team meeting',
    style: { bottom: '15%', right: '12%', width: 200, rotate: 3, zIndex: 2 },
  },
];

const categories = [
  { name: 'Street', count: 24 },
  { name: 'Portrait', count: 18 },
  { name: 'Landscape', count: 31 },
  { name: 'Urban', count: 15 },
];

const PhotoCard: React.FC<{ photo: PhotoData }> = ({ photo }) => {
  const positionStyle: React.CSSProperties = {
    top: photo.style.top,
    bottom: photo.style.bottom,
    left: photo.style.left,
    right: photo.style.right,
    width: photo.style.width,
    zIndex: photo.style.zIndex,
  };

  return (
    <div
      className="absolute cursor-pointer transition-all duration-400 ease-out
                 hover:scale-105 hover:rotate-0 hover:z-50
                 hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
      style={{
        ...positionStyle,
        transform: `rotate(${photo.style.rotate}deg)`,
      }}
    >
      {/* 白色边框模拟打印照片 */}
      <div className="bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export const Photography: React.FC = () => {
  return (
    <section
      id="taste"
      className="py-24 px-8 md:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Open-book spread */}
        <div
          className="relative overflow-hidden border border-border-l2 shadow-2xl"
          style={{
            background:
              'radial-gradient(1200px 800px at 50% 40%, rgba(0,47,167,0.07) 0%, transparent 55%), #F6F2EA',
          }}
        >
          {/* subtle paper grain */}
          <div
            className="absolute inset-0 opacity-[0.55] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Book spine */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[56px] -translate-x-1/2 pointer-events-none z-20">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.06) 35%, rgba(255,255,255,0.12) 50%, rgba(0,0,0,0.06) 65%, rgba(0,0,0,0.14) 100%)',
              }}
            />
            <div
              className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
              style={{ background: 'rgba(0,0,0,0.18)' }}
            />
          </div>

          {/* page shadows */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.06) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.06) 100%)',
            }}
          />

          <div className="grid grid-cols-[0.9fr_3.6fr] min-h-[820px]">
            {/* Left page */}
            <div className="relative p-8 md:p-10 pr-12">
              {/* inner margin line */}
              <div className="absolute top-12 bottom-12 right-6 w-px bg-black/10" />

              {/* Klein catalog panel sits on paper */}
              <div className="bg-[#002FA7] text-white h-full p-7 md:p-8 flex flex-col justify-between shadow-[0_30px_90px_rgba(0,47,167,0.22)]">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[11px] tracking-widest uppercase text-white/65">
                    04 — Photography
                  </span>
                  <span className="font-serif text-6xl font-light text-white/12 leading-none">
                    04
                  </span>
                </div>

                {/* Content */}
                <div className="text-white">
                  <h2 className="font-serif text-[34px] md:text-[38px] font-normal leading-[1.05] mb-6">
                    Captured
                    <br />
                    <em className="text-white/70">Moments</em>
                  </h2>
                  <div className="h-px w-12 bg-white/25 mb-6" />

                  {/* Categories */}
                  <div className="space-y-3">
                    {categories.map((cat, idx) => (
                      <div
                        key={cat.name}
                        className="flex items-center justify-between text-white/82 border-b border-white/12 pb-2"
                      >
                        <span className="text-sm">
                          <span className="text-white/40 mr-3 font-mono text-xs">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          {cat.name}
                        </span>
                        <span className="font-mono text-xs text-white/55">
                          {cat.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page number decoration */}
                <div className="text-white/30 font-mono text-xs tracking-widest">
                  PAGE 04
                </div>

                {/* Decorative circle */}
                <div className="absolute w-[180px] h-[180px] rounded-full border border-white/[0.10] -bottom-[60px] -right-[60px]" />
              </div>
            </div>

            {/* Right page */}
            <div className="relative p-8 md:p-10 pl-12">
              {/* inner margin line */}
              <div className="absolute top-12 bottom-12 left-6 w-px bg-black/10" />

              <div className="relative h-full overflow-hidden">
                {photos.map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} />
                ))}

                {/* Corner decoration */}
                <span className="absolute bottom-4 right-2 text-xs text-black/35 tracking-[0.18em] font-mono">
                  2024 Collection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
