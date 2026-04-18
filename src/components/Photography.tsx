import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

/* ------------------------------------------------------------------ */
/*  Photography — Klein Blue Flip-Book Album                          */
/*  GSAP 3D page-flip with CSS transforms                            */
/* ------------------------------------------------------------------ */

// Page content data
const PHOTOS = {
  p01L: { src: 'https://images.unsplash.com/photo-1506744626753-143683980b43?q=80&w=800&auto=format&fit=crop', cap: '01 / Urban Silence', desc: 'Tokyo at 4 AM — the city holds its breath before the dawn breaks.' },
  p01R: { src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=800&auto=format&fit=crop', cap: '01 / Urban Silence · II', desc: 'Shibuya crossing — a million footsteps, each with its own destination.' },
  p02L: { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop', cap: '02 / Alpine Raw', desc: 'The Monochrome Peak — raw geometry at 3,800m altitude.' },
  p02R: { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', cap: '02 / Alpine Raw · II', desc: 'Into the mist — the mountain reveals an ethereal, fragile face.' },
  p03:  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop' },
  p04:  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop', cap: '04 / Golden Hour', desc: 'Bali sunset — when light touches everything with gold, even the ordinary becomes sacred.' },
  p05:  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', cap: '05 / Deep Blue', desc: 'Santorini dusk — white walls catching the last breath of sunlight.' },
  cs1:  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop' },
  cs2:  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
  cs3:  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop' },
  cs4:  { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
};

export const Photography: React.FC = () => {
  const vpRef = useRef<HTMLDivElement>(null);
  const bwRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const pnRef = useRef<HTMLDivElement>(null);

  // Mutable state via ref (avoid re-renders during animation)
  const state = useRef({ current: 0, animating: false, baseW: 0 });

  const getBaseW = useCallback(() => {
    const book = bookRef.current;
    if (!book) return 380;
    const raw = getComputedStyle(book).width;
    return parseFloat(raw) || 380;
  }, []);

  useEffect(() => {
    if (!bookRef.current || !bwRef.current || !prevRef.current || !nextRef.current || !dotsRef.current || !pnRef.current) return;
    const book = bookRef.current!;
    const bw = bwRef.current!;
    const prevBtn = prevRef.current!;
    const nextBtn = nextRef.current!;
    const dotsEl = dotsRef.current!;
    const pnEl = pnRef.current!;

    const pages = gsap.utils.toArray<HTMLElement>('.flip-page');
    const N = pages.length;
    const VIEWS = N + 1;
    const s = state.current;
    s.baseW = getBaseW();

    /* ---- Z-index ---- */
    function updateZ() {
      pages.forEach((p, i) => {
        p.style.zIndex = String(i < s.current ? i + 1 : (N + 1) - i);
      });
    }
    updateZ();

    /* ---- Layout ---- */
    function layout() {
      const w = s.baseW;
      const vw = window.innerWidth;
      const gap = 18;
      const aw = 46;
      const isOpen = s.current > 0 && s.current < N;

      let targetX: number;
      if (s.current === 0) targetX = -w / 2;
      else if (s.current === N) targetX = w / 2;
      else targetX = 0;

      gsap.set(bw, { yPercent: -50 });
      gsap.to(bw, { x: targetX, duration: 0.4, ease: 'power2.inOut', overwrite: true });

      // Collapse book container on back cover
      if (s.current === N) {
        gsap.to(book, { width: 0, duration: 0.35, ease: 'power2.inOut', overwrite: true });
      } else {
        gsap.to(book, { width: w, duration: 0.35, ease: 'power2.inOut', overwrite: true });
      }

      let bookL: number, bookR: number;
      if (isOpen) {
        bookL = vw / 2 - w;
        bookR = vw / 2 + w;
      } else {
        bookL = vw / 2 - w / 2;
        bookR = vw / 2 + w / 2;
      }

      gsap.to(prevBtn, { left: bookL - gap - aw, duration: 0.4, ease: 'power2.inOut', overwrite: true });
      gsap.to(nextBtn, { left: bookR + gap, duration: 0.4, ease: 'power2.inOut', overwrite: true });
      prevBtn.style.right = 'auto';
      nextBtn.style.right = 'auto';
    }

    /* ---- Dots ---- */
    for (let i = 0; i < VIEWS; i++) {
      const d = document.createElement('button');
      d.className = 'flip-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    }

    function updateUI() {
      prevBtn.disabled = s.current === 0;
      nextBtn.disabled = s.current === N;
      dotsEl.querySelectorAll('.flip-dot').forEach((d, i) => d.classList.toggle('active', i === s.current));
      pnEl.textContent = (s.current + 1) + ' / ' + VIEWS;
      layout();
    }
    updateUI();

    function handleResize() {
      (book as HTMLElement).style.width = '';
      s.baseW = getBaseW();
      layout();
    }
    window.addEventListener('resize', handleResize);

    /* ---- Flip ---- */
    function flipNext(cb?: () => void) {
      if (s.animating || s.current >= N) return;
      s.animating = true;
      const page = pages[s.current];
      const idx = s.current;
      const tl = gsap.timeline({
        onComplete() { s.current = idx + 1; updateZ(); updateUI(); s.animating = false; if (cb) cb(); },
      });
      tl.to(page, { rotateY: -90, duration: 0.4, ease: 'power2.in' });
      tl.call(() => { page.style.zIndex = String(idx + 1); for (let i = idx + 1; i < N; i++) pages[i].style.zIndex = String((N + 1) - i); });
      tl.to(page, { rotateY: -180, duration: 0.4, ease: 'power2.out' });
    }

    function flipPrev(cb?: () => void) {
      if (s.animating || s.current <= 0) return;
      s.animating = true;
      const page = pages[s.current - 1];
      const idx = s.current;
      const tl = gsap.timeline({
        onComplete() { s.current = idx - 1; updateZ(); updateUI(); s.animating = false; if (cb) cb(); },
      });
      tl.to(page, { rotateY: -90, duration: 0.4, ease: 'power2.in' });
      tl.call(() => { page.style.zIndex = String(N + 2); });
      tl.to(page, { rotateY: 0, duration: 0.4, ease: 'power2.out' });
    }

    function goTo(t: number) {
      if (s.animating || t === s.current) return;
      if (t > s.current) flipNext(() => { if (s.current < t) goTo(t); });
      else flipPrev(() => { if (s.current > t) goTo(t); });
    }

    prevBtn.onclick = () => flipPrev();
    nextBtn.onclick = () => flipNext();

    return () => {
      window.removeEventListener('resize', handleResize);
      dotsEl.innerHTML = '';
    };
  }, [getBaseW]);

  /* ---- Arrow SVG ---- */
  const ArrowLeft = <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>;
  const ArrowRight = <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>;

  return (
    <section id="taste" className="relative w-full h-screen" style={{ background: '#f9f8f6' }}>
      <div ref={vpRef} className="relative w-full h-full overflow-hidden">
        {/* Nav Arrows */}
        <button ref={prevRef} className="flip-nav" disabled>{ArrowLeft}</button>
        <button ref={nextRef} className="flip-nav">{ArrowRight}</button>

        {/* Book */}
        <div ref={bwRef} className="flip-bw">
          <div ref={bookRef} className="flip-book">

            {/* P1: Front Cover / Endpaper */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-cover-f">
                <div className="flip-meta" style={{ color: 'rgba(255,255,255,.5)' }}>Portfolio / 2024</div>
                <h1 className="flip-title" style={{ color: '#fff' }}>Grace Gu's<br />Visual<br />Diary.</h1>
              </div>
              <div className="flip-face flip-back flip-endpaper" />
            </div>

            {/* P2: Prologue / Photo 01 Left */}
            <div className="flip-page">
              <div className="flip-face flip-front" style={{ padding: 36 }}>
                <div className="flip-meta">Prologue</div>
                <h2 className="flip-title">The Art of<br /><span style={{ color: '#002FA7' }}>Seeing.</span></h2>
                <p className="flip-desc">Every frame is a silent conversation between the observer and the observed. Welcome to my visual diary.</p>
              </div>
              <div className="flip-face flip-back flip-pg-photo">
                <div className="flip-photo-cap-top">{PHOTOS.p01L.cap}</div>
                <div className="flip-photo-img" style={{ backgroundImage: `url('${PHOTOS.p01L.src}')` }} />
                <div className="flip-photo-cap-bot">{PHOTOS.p01L.desc}</div>
              </div>
            </div>

            {/* P3: Photo 01 Right / Photo 02 Left */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-pg-photo">
                <div className="flip-photo-cap-top">{PHOTOS.p01R.cap}</div>
                <div className="flip-photo-img" style={{ backgroundImage: `url('${PHOTOS.p01R.src}')` }} />
                <div className="flip-photo-cap-bot">{PHOTOS.p01R.desc}</div>
              </div>
              <div className="flip-face flip-back flip-pg-photo">
                <div className="flip-photo-cap-top">{PHOTOS.p02L.cap}</div>
                <div className="flip-photo-img" style={{ backgroundImage: `url('${PHOTOS.p02L.src}')` }} />
                <div className="flip-photo-cap-bot">{PHOTOS.p02L.desc}</div>
              </div>
            </div>

            {/* P4: Photo 02 Right / Story 03 text */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-pg-photo">
                <div className="flip-photo-cap-top">{PHOTOS.p02R.cap}</div>
                <div className="flip-photo-img" style={{ backgroundImage: `url('${PHOTOS.p02R.src}')` }} />
                <div className="flip-photo-cap-bot">{PHOTOS.p02R.desc}</div>
              </div>
              <div className="flip-face flip-back" style={{ padding: 36 }}>
                <div className="flip-meta">03 / Into the Mist</div>
                <h2 className="flip-title">A World<br />Unseen</h2>
                <p className="flip-desc">When the fog rolls in, the mountain reveals a different face — ethereal, fragile, and impossibly vast. Shot from a ridge trail in the Swiss Alps, waiting two hours for the clouds to part.</p>
              </div>
            </div>

            {/* P5: Full Bleed Photo 03 / Verse */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-full-bleed">
                <div className="flip-bleed-img" style={{ backgroundImage: `url('${PHOTOS.p03.src}')` }} />
              </div>
              <div className="flip-face flip-back flip-verse-pg">
                <p className="flip-verse">"In the right light,<br />at the right time,<br />everything is extraordinary."</p>
                <p className="flip-verse-attr">— Aaron Rose</p>
              </div>
            </div>

            {/* P6: Photo 04 / Story 04 */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-pg-photo">
                <div className="flip-photo-cap-top">{PHOTOS.p04.cap}</div>
                <div className="flip-photo-img" style={{ backgroundImage: `url('${PHOTOS.p04.src}')` }} />
                <div className="flip-photo-cap-bot">{PHOTOS.p04.desc}</div>
              </div>
              <div className="flip-face flip-back" style={{ padding: 36 }}>
                <div className="flip-meta">04 / Golden Hour</div>
                <h2 className="flip-title">Bali<br />Sunset</h2>
                <p className="flip-desc">Uluwatu cliffs at dusk. The temple sits on the edge of the world, and for a few minutes, time dissolves into warm amber.</p>
              </div>
            </div>

            {/* P7: CS Grid / CS Diagonal */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-cs-grid">
                <div className="flip-cs-hd">Contact Sheet — Portraits</div>
                <div className="flip-cg flip-cg-1x2">
                  <div className="flip-ci">
                    <div className="flip-ct" style={{ backgroundImage: `url('${PHOTOS.cs1.src}')` }} />
                    <div className="flip-cl"><span className="flip-cn">05</span> · The Briefing · Studio 2024</div>
                  </div>
                  <div className="flip-ci">
                    <div className="flip-ct" style={{ backgroundImage: `url('${PHOTOS.cs2.src}')` }} />
                    <div className="flip-cl"><span className="flip-cn">10</span> · Quiet Portrait · Jakarta 2024</div>
                  </div>
                </div>
              </div>
              <div className="flip-face flip-back flip-cs-diag">
                <div className="flip-cs-hd">Contact Sheet — Wanderlust</div>
                <div className="flip-cs-area">
                  <div className="flip-cs-card" style={{ top: '2%', left: '2%', transform: 'rotate(-3deg)', zIndex: 2, backgroundImage: `url('${PHOTOS.cs3.src}')` }} />
                  <div className="flip-cs-lbl" style={{ top: '4%', right: '4%' }}><span className="flip-cn">06</span> · Starry Summit<br />Dolomites 2024</div>
                  <div className="flip-cs-card" style={{ bottom: '2%', right: '2%', transform: 'rotate(2deg)', zIndex: 1, backgroundImage: `url('${PHOTOS.cs4.src}')` }} />
                  <div className="flip-cs-lbl" style={{ bottom: '4%', left: '4%' }}><span className="flip-cn">07</span> · Red Gate Path<br />Kyoto 2023</div>
                </div>
              </div>
            </div>

            {/* P8: Photo 05 / Story 05 */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-pg-photo">
                <div className="flip-photo-cap-top">{PHOTOS.p05.cap}</div>
                <div className="flip-photo-img" style={{ backgroundImage: `url('${PHOTOS.p05.src}')` }} />
                <div className="flip-photo-cap-bot">{PHOTOS.p05.desc}</div>
              </div>
              <div className="flip-face flip-back" style={{ padding: 36 }}>
                <div className="flip-meta">05 / Deep Blue</div>
                <h2 className="flip-title">Santorini<br />Dusk</h2>
                <p className="flip-desc">The Aegean stretches endlessly, whispering stories of ancient voyages. Every journey ends where it begins — with a single glance.</p>
              </div>
            </div>

            {/* P9: Epilogue / Breath */}
            <div className="flip-page">
              <div className="flip-face flip-front" style={{ padding: 36, alignItems: 'center', textAlign: 'center' }}>
                <div className="flip-meta">Epilogue</div>
                <h2 className="flip-title">There's always<br />more to <span style={{ color: '#002FA7' }}>see.</span></h2>
                <p className="flip-desc" style={{ marginTop: 6 }}>2024 Collection · 10 Selected Works</p>
                <a href="#contact" className="flip-cta">View Full Gallery →</a>
              </div>
              <div className="flip-face flip-back flip-breath-pg">
                <div className="flip-breath-line" />
                <div className="flip-breath-txt">Fin</div>
              </div>
            </div>

            {/* P10: Endpaper / Back Cover */}
            <div className="flip-page">
              <div className="flip-face flip-front flip-endpaper" />
              <div className="flip-face flip-cover-b">
                <div className="flip-meta" style={{ color: 'rgba(255,255,255,.5)' }}>Grace Gu</div>
                <h2 className="flip-title" style={{ color: '#fff', fontSize: 'clamp(16px,2.5vw,22px)' }}>Visual Diary<br />2024</h2>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom dots */}
        <div className="flip-bottom">
          <div ref={dotsRef} className="flip-dots" />
          <div ref={pnRef} className="flip-pn" />
        </div>
      </div>
    </section>
  );
};

export default Photography;
