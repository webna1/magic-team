import { useState } from 'react';
import { Tag } from '../components/shared';

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'hello@magicteam.co',
    href: 'mailto:hello@magicteam.co',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Baghdad, Iraq',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Hours',
    value: 'Mon – Fri, 9am – 6pm',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: '#',
    color: '#1769FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.49-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.63.17-1.3.254-2.006.254H0V4.5h6.938v.003zm-.412 5.53c.585 0 1.052-.14 1.395-.43.34-.29.51-.724.51-1.31 0-.32-.056-.588-.17-.8-.11-.214-.267-.387-.46-.514-.19-.13-.42-.22-.67-.27-.26-.05-.535-.075-.82-.075H3.26V10.03h3.266v.003zm.15 5.77c.31 0 .6-.03.87-.09s.5-.16.7-.3c.197-.14.353-.32.467-.55.11-.23.17-.51.17-.84 0-.67-.19-1.16-.57-1.47-.38-.308-.884-.463-1.508-.463H3.26v3.714h3.414v-.003zm8.433-1.35c.34.33.837.495 1.494.495.465 0 .867-.116 1.205-.35.337-.236.543-.485.616-.75h2.56c-.41 1.28-1.04 2.2-1.893 2.76-.852.56-1.884.84-3.097.84-.84 0-1.598-.135-2.273-.404-.675-.27-1.248-.65-1.72-1.14-.47-.49-.833-1.08-1.085-1.76-.253-.68-.38-1.43-.38-2.24 0-.787.13-1.52.39-2.19.26-.67.63-1.25 1.108-1.74.478-.49 1.05-.87 1.718-1.14.667-.27 1.408-.4 2.223-.4.91 0 1.71.175 2.4.524.69.35 1.26.82 1.71 1.42.45.6.775 1.29.975 2.07.2.78.27 1.6.21 2.46H15.2c0 .74.2 1.28.54 1.61l-.003-.002zm2.62-4.396c-.27-.3-.7-.45-1.3-.45-.38 0-.694.063-.944.19-.25.127-.45.285-.6.474-.15.188-.253.39-.31.6-.057.21-.09.41-.1.59h3.794c-.09-.64-.273-1.104-.54-1.404zM16.42 5.1h4.72v1.26h-4.72V5.1z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [hoveredContact, setHoveredContact] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <section style={{ padding: '160px 40px 140px', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glows */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1000, height: 600, background: 'radial-gradient(ellipse at 50% 0%, rgba(200,50,212,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(139,31,168,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Tag>Contact</Tag>

          {/* Headline */}
          <h1 style={{
            marginTop: 28,
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: 'clamp(52px, 7vw, 92px)',
            lineHeight: 1.04,
            color: '#f0e4ff',
            letterSpacing: '-0.03em',
          }}>
            Let's make<br />something<br />
            <em style={{ color: '#cc44dd', fontStyle: 'italic' }}>great together.</em>
          </h1>

          <p style={{
            marginTop: 32,
            color: '#a07ab8',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.85,
            maxWidth: 540,
          }}>
            Tell us about your brand and what you want to achieve. We'll come back with a clear plan — no fluff, no vague promises. Just results.
          </p>

          {/* ── Contact info cards ── */}
          <div style={{ marginTop: 72 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: '#5c4470', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Get in touch</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {CONTACT_ITEMS.map((item, i) => {
                const active = hoveredContact === i;
                const wrap = (children) => item.href
                  ? <a key={item.label} href={item.href} style={{ textDecoration: 'none' }}>{children}</a>
                  : <div key={item.label}>{children}</div>;

                return wrap(
                  <div
                    onMouseEnter={() => setHoveredContact(i)}
                    onMouseLeave={() => setHoveredContact(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 18,
                      padding: '18px 22px',
                      borderRadius: 14,
                      background: active ? 'rgba(200,50,212,0.07)' : 'transparent',
                      border: `1px solid ${active ? 'rgba(200,50,212,0.2)' : 'transparent'}`,
                      transition: 'all 0.22s ease',
                      cursor: item.href ? 'pointer' : 'default',
                    }}
                  >
                    <div style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: active ? 'rgba(200,50,212,0.16)' : 'rgba(232,180,248,0.06)',
                      border: `1px solid ${active ? 'rgba(200,50,212,0.3)' : 'rgba(232,180,248,0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: active ? '#cc44dd' : '#7a5a90',
                      transition: 'all 0.22s ease',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#5c4470', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: active ? '#e8d0ff' : '#c4a4d8', transition: 'color 0.22s ease', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div style={{ margin: '56px 0', height: 1, background: 'linear-gradient(90deg, rgba(200,50,212,0.3) 0%, rgba(232,180,248,0.06) 55%, transparent 100%)' }} />

          {/* ── Social media ── */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: '#5c4470', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Find us online</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {SOCIALS.map((s, i) => {
                const active = hoveredSocial === i;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(i)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '12px 20px',
                      borderRadius: 12,
                      background: active ? `${s.color}18` : 'rgba(232,180,248,0.05)',
                      border: `1px solid ${active ? `${s.color}44` : 'rgba(232,180,248,0.1)'}`,
                      textDecoration: 'none',
                      transition: 'all 0.22s ease',
                      cursor: 'pointer',
                      color: active ? s.color : '#7a5a90',
                    }}
                  >
                    {s.icon}
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: active ? s.color : '#a07ab8',
                      transition: 'color 0.22s ease',
                      letterSpacing: '0.01em',
                    }}>
                      {s.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Map placeholder ── */}
          <div style={{
            marginTop: 64,
            height: 240,
            borderRadius: 20,
            background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.02) 0px, rgba(232,180,248,0.02) 1px, transparent 1px, transparent 32px), #100620',
            border: '1px solid rgba(232,180,248,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 55%, rgba(200,50,212,0.08) 0%, transparent 55%)' }} />
            {/* Pin dot */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', width: 10, height: 10, borderRadius: '50%', background: '#cc44dd', boxShadow: '0 0 0 6px rgba(200,50,212,0.15), 0 0 0 14px rgba(200,50,212,0.07)' }} />
            <div style={{ textAlign: 'center', zIndex: 1, marginTop: 28 }}>
              <span style={{ color: '#3d1d55', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.12em' }}>BAGHDAD, IRAQ</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
