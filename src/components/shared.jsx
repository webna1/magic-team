import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'Work', page: 'work' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 36 C6 36 10 8 18 14 C26 20 22 30 30 20 C38 10 34 8 42 14 C50 20 46 30 54 20"
        stroke="#e8b4f8" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function LogoFull({ navigate }) {
  return (
    <div
      onClick={() => navigate('home')}
      style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}
    >
      <LogoMark size={38} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 22, color: '#e8b4f8', letterSpacing: '-0.02em' }}>Magic</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 11, color: '#a07ab8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: -2 }}>team</span>
      </div>
    </div>
  );
}

export function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(23,9,38,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232,180,248,0.08)' : 'none',
      transition: 'all 0.35s ease',
      padding: '0 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <LogoFull navigate={navigate} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15,
                color: currentPage === link.page ? '#e8b4f8' : '#a07ab8',
                padding: '8px 16px', borderRadius: 8,
                transition: 'color 0.2s ease', letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { if (currentPage !== link.page) e.target.style.color = '#e8b4f8'; }}
              onMouseLeave={e => { if (currentPage !== link.page) e.target.style.color = '#a07ab8'; }}
            >{link.label}</button>
          ))}
          <button
            onClick={() => navigate('contact')}
            style={{
              marginLeft: 8,
              background: 'linear-gradient(135deg, #c832d4, #8b1fa8)',
              border: 'none', borderRadius: 100, cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14,
              color: '#fff', padding: '10px 24px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 20px rgba(200,50,212,0.3)',
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 4px 32px rgba(200,50,212,0.5)'; }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 0 20px rgba(200,50,212,0.3)'; }}
          >Get Started</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#e8b4f8', fontSize: 24, padding: 8 }}
        >{menuOpen ? '✕' : '☰'}</button>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(23,9,38,0.98)', borderTop: '1px solid rgba(232,180,248,0.1)', padding: '16px 40px 24px' }}>
          {NAV_LINKS.map(link => (
            <button
              key={link.page}
              onClick={() => { navigate(link.page); setMenuOpen(false); }}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 16,
                color: currentPage === link.page ? '#e8b4f8' : '#a07ab8',
                padding: '12px 0', borderBottom: '1px solid rgba(232,180,248,0.06)',
              }}
            >{link.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer({ navigate }) {
  return (
    <footer style={{ background: '#0f0619', borderTop: '1px solid rgba(232,180,248,0.08)', padding: '72px 40px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(232,180,248,0.08)' }} className="footer-grid">
          <div>
            <LogoFull navigate={navigate} />
            <p style={{ marginTop: 20, color: '#a07ab8', fontSize: 15, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", maxWidth: 280 }}>We Made every story Magical. Your creative partner for growth, brand, and digital excellence.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['in', 'tw', 'ig', 'be'].map(s => (
                <div key={s} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(232,180,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a07ab8', fontSize: 12, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#c832d4'; e.currentTarget.style.color = '#e8b4f8'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(232,180,248,0.2)'; e.currentTarget.style.color = '#a07ab8'; }}
                >{s}</div>
              ))}
            </div>
          </div>
          {[
            { title: 'Services', links: ['Brand Strategy', 'Content Creation', 'Digital Marketing', 'Web Design', 'Social Media'] },
            { title: 'Company', links: ['About Us', 'Our Work', 'Careers', 'Blog', 'Press'] },
            { title: 'Contact', links: ['hello@magicteam.co', '+1 555 000 0000', 'Baghdad, Iraq', 'Schedule a Call'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(l => (
                  <span key={l} style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#e8b4f8'}
                    onMouseLeave={e => e.target.style.color = '#a07ab8'}
                  >{l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32 }}>
          <p style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>© 2026 MagicTeam. All rights reserved.</p>
          <p style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}

export function PrimaryBtn({ children, onClick, large }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'linear-gradient(135deg, #d940e8, #9b26c4)' : 'linear-gradient(135deg, #c832d4, #8b1fa8)',
        border: 'none', borderRadius: 100, cursor: 'pointer',
        fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
        fontSize: large ? 17 : 15, color: '#fff',
        padding: large ? '16px 36px' : '12px 28px',
        boxShadow: hov ? '0 8px 40px rgba(200,50,212,0.5)' : '0 0 24px rgba(200,50,212,0.25)',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition: 'all 0.25s ease', letterSpacing: '0.01em',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}
    >{children}</button>
  );
}

export function SecondaryBtn({ children, onClick, large }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'transparent',
        border: `1.5px solid ${hov ? '#e8b4f8' : 'rgba(232,180,248,0.3)'}`,
        borderRadius: 100, cursor: 'pointer',
        fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
        fontSize: large ? 17 : 15, color: hov ? '#e8b4f8' : '#a07ab8',
        padding: large ? '16px 36px' : '12px 28px',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition: 'all 0.25s ease', letterSpacing: '0.01em',
      }}
    >{children}</button>
  );
}

export function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      background: 'rgba(200,50,212,0.12)',
      border: '1px solid rgba(200,50,212,0.25)',
      color: '#cc44dd', borderRadius: 100,
      fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
      fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '5px 14px',
    }}>{children}</span>
  );
}

export function SectionHeading({ tag, title, subtitle, center }) {
  const renderTitle = (t) => {
    if (typeof t !== 'string') return t;
    const parts = t.split('\n');
    return parts.map((p, i) => (
      <span key={i}>
        {p}
        {i < parts.length - 1 && <br />}
      </span>
    ));
  };
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}>
      {tag && <Tag>{tag}</Tag>}
      <h2 style={{
        marginTop: tag ? 16 : 0,
        fontFamily: "'DM Serif Display', serif", fontWeight: 400,
        fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.15,
        color: '#f0e4ff', letterSpacing: '-0.02em',
      }}>{renderTitle(title)}</h2>
      {subtitle && <p style={{
        marginTop: 16, color: '#a07ab8',
        fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7,
        maxWidth: center ? 560 : 520, margin: center ? '16px auto 0' : '16px 0 0',
      }}>{subtitle}</p>}
    </div>
  );
}
