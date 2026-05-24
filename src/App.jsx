import { useState, useCallback, useEffect, useRef } from 'react';
import { Navbar, Footer } from './components/shared';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhatsAppFloat from './components/WhatsAppFloat';
import './index.css';

function useMagicCursor() {
  useEffect(() => {
    const dot = document.getElementById('magic-cursor');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = -200, my = -200, rx = -200, ry = -200, lastSpark = 0;

    const lerp = (a, b, t) => a + (b - a) * t;
    let rafId;
    const loop = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(loop);
    };
    loop();

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      const now = Date.now();
      if (now - lastSpark < 60) return;
      lastSpark = now;
      const s = document.createElement('div');
      s.className = 'cursor-spark';
      const size = Math.random() * 5 + 3;
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 28 + 10;
      const hue = Math.random() > 0.5 ? '#e8b4f8' : '#cc44dd';
      s.style.cssText = `left:${mx}px;top:${my}px;width:${size}px;height:${size}px;background:${hue};box-shadow:0 0 ${size*2}px ${hue};--dx:${Math.cos(angle)*dist}px;--dy:${Math.sin(angle)*dist}px;animation-duration:${Math.random()*0.4+0.4}s;`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 900);
    };

    const onOver = (e) => {
      if (e.target.matches('button, a, [role="button"]')) {
        document.getElementById('cursor-dot').style.transform = 'translate(-50%,-50%) scale(1.8)';
        ring.style.width = '52px'; ring.style.height = '52px';
        ring.style.borderColor = 'rgba(200,50,212,0.7)';
      }
    };
    const onOut = (e) => {
      if (e.target.matches('button, a, [role="button"]')) {
        document.getElementById('cursor-dot').style.transform = 'translate(-50%,-50%) scale(1)';
        ring.style.width = '36px'; ring.style.height = '36px';
        ring.style.borderColor = 'rgba(232,180,248,0.45)';
      }
    };
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };
    const onEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);
}

export default function App() {
  const [page, setPage] = useState('home');
  const [pageKey, setPageKey] = useState(0);
  useMagicCursor();

  const navigate = useCallback((p) => {
    setPage(p);
    setPageKey(k => k + 1);
    setTimeout(() => window.scrollTo(0, 0), 10);
  }, []);

  const pageMap = {
    home:     <HomePage     navigate={navigate} />,
    services: <ServicesPage navigate={navigate} />,
    work:     <WorkPage     navigate={navigate} />,
    about:    <AboutPage    navigate={navigate} />,
    contact:  <ContactPage  navigate={navigate} />,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#170926' }}>
      <Navbar currentPage={page} navigate={navigate} />
      <main key={pageKey} className="page-enter" style={{ paddingTop: 0 }}>
        {pageMap[page] || pageMap.home}
      </main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}
