import { useState, useEffect } from 'react';
import { PrimaryBtn, Tag } from '../components/shared';

const PROJECTS = [
  { id: 1, title: 'Luminary Ventures', category: 'Brand Strategy + Campaign', tags: ['Branding', 'Campaign'], result: '2.8× Lead Growth', year: '2025', size: 'large' },
  { id: 2, title: 'Archform Studio', category: 'Visual Identity + Web', tags: ['Identity', 'Web'], result: '96 NPS Score', year: '2025', size: 'small' },
  { id: 3, title: 'Forta Group', category: 'Digital Marketing', tags: ['Paid Social', 'SEO'], result: '4.1× ROAS', year: '2024', size: 'small' },
  { id: 4, title: 'Nexus Platform', category: 'Web Design + Content', tags: ['Web', 'Content'], result: '+180% Organic Traffic', year: '2024', size: 'large' },
  { id: 5, title: 'Velour Fashion', category: 'Social Media + Creative', tags: ['Social', 'Creative Direction'], result: '320K New Followers', year: '2024', size: 'small' },
  { id: 6, title: 'Orbit SaaS', category: 'Brand Strategy + Growth', tags: ['Branding', 'Growth'], result: '3× ARR in 12 Months', year: '2023', size: 'small' },
];

const CASE_DETAIL = {
  1: {
    title: 'Luminary Ventures',
    subtitle: 'Redefining a Category Through Strategic Repositioning',
    category: 'Brand Strategy + Campaign',
    year: '2025', duration: '3 Months',
    problem: 'Luminary Ventures had strong fundamentals but was invisible in a saturated market. Their messaging was generic, their visual identity forgettable, and their conversion rate reflected it.',
    solution: 'We rebuilt their brand from the positioning layer up — new messaging architecture, a refined visual identity, and a 90-day integrated campaign designed to create category distinction and capture demand.',
    results: [{ value: '2.8×', label: 'Lead Growth' }, { value: '68%', label: 'Brand Recall' }, { value: '+140%', label: 'Conversion Rate' }, { value: '3mo', label: 'Time to Results' }],
    services: ['Brand Positioning', 'Visual Identity', 'Campaign Strategy', 'Paid Social', 'Content Production'],
  },
};

const ALL_TAGS = ['All', 'Branding', 'Campaign', 'Identity', 'Web', 'Paid Social', 'SEO', 'Content', 'Social', 'Creative Direction', 'Growth'];

function ProjectCard({ project, onClick }) {
  const [hov, setHov] = useState(false);
  const isLarge = project.size === 'large';
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onClick(project)}
      className="reveal"
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
        border: `1px solid ${hov ? 'rgba(200,50,212,0.3)' : 'rgba(232,180,248,0.08)'}`,
        transition: 'all 0.3s ease',
        transform: hov ? 'translateY(-6px)' : 'none',
        boxShadow: hov ? '0 24px 60px rgba(0,0,0,0.3)' : 'none',
        opacity: 0,
      }}
    >
      <div style={{ height: isLarge ? 360 : 280, background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.025) 0px, rgba(232,180,248,0.025) 1px, transparent 1px, transparent 32px), #1a0926', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at ${hov ? '45%' : '50%'} 50%, rgba(200,50,212,0.15) 0%, transparent 60%)`, transition: 'all 0.5s ease' }} />
        <span style={{ color: '#3d1d55', fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.08em', zIndex: 1 }}>[ {project.category} ]</span>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(23,9,38,0.7)', opacity: hov ? 1 : 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <span style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.06em', border: '1.5px solid rgba(232,180,248,0.4)', borderRadius: 100, padding: '10px 24px' }}>View Case Study →</span>
        </div>
      </div>
      <div style={{ padding: '28px 32px', background: 'rgba(26,9,38,0.95)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
            {project.tags.map(t => (
              <span key={t} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#a07ab8', border: '1px solid rgba(232,180,248,0.12)', borderRadius: 100, padding: '3px 10px', letterSpacing: '0.06em' }}>{t}</span>
            ))}
          </div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: '#f0e4ff', fontWeight: 400, marginBottom: 4 }}>{project.title}</h3>
          <p style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{project.category} · {project.year}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 24 }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: '#cc44dd', fontWeight: 400 }}>{project.result.split(' ')[0]}</div>
          <div style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.06em' }}>{project.result.split(' ').slice(1).join(' ')}</div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyModal({ project, onClose }) {
  const detail = CASE_DETAIL[project.id] || CASE_DETAIL[1];
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,3,20,0.92)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'auto', padding: '40px 20px' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background: '#13082a', borderRadius: 24, border: '1px solid rgba(232,180,248,0.12)', maxWidth: 900, width: '100%', boxShadow: '0 40px 120px rgba(0,0,0,0.5)' }}>
        <div style={{ height: 320, borderRadius: '24px 24px 0 0', overflow: 'hidden', background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.03) 0px, rgba(232,180,248,0.03) 1px, transparent 1px, transparent 40px), #1a0926', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(200,50,212,0.2) 0%, transparent 60%)' }} />
          <span style={{ color: '#4a2060', fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.08em' }}>[ case study imagery ]</span>
          <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(232,180,248,0.08)', border: '1px solid rgba(232,180,248,0.15)', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#e8b4f8', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
        <div style={{ padding: '48px 56px 56px' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
            <Tag>{detail.category}</Tag>
            <span style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13, paddingTop: 6 }}>{detail.year} · {detail.duration}</span>
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, color: '#f0e4ff', fontWeight: 400, marginBottom: 12, letterSpacing: '-0.02em' }}>{detail.title}</h2>
          <p style={{ color: '#a07ab8', fontFamily: "'DM Serif Display', serif", fontSize: 20, fontStyle: 'italic', marginBottom: 48 }}>{detail.subtitle}</p>
          <div style={{ display: 'flex', gap: 0, marginBottom: 48, background: 'rgba(200,50,212,0.06)', borderRadius: 16, padding: '28px 0', border: '1px solid rgba(200,50,212,0.12)' }}>
            {detail.results.map((r, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < detail.results.length - 1 ? '1px solid rgba(232,180,248,0.1)' : 'none' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: '#cc44dd', fontWeight: 400 }}>{r.value}</div>
                <div style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{r.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>The Problem</h4>
              <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8 }}>{detail.problem}</p>
            </div>
            <div>
              <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Our Approach</h4>
              <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8 }}>{detail.solution}</p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Services Delivered</h4>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {detail.services.map(s => (
                <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#c4a4d8', border: '1px solid rgba(232,180,248,0.15)', borderRadius: 100, padding: '6px 16px' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage({ navigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(activeFilter));

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      });
    }, { threshold: 0.06 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <div>
      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}

      <section style={{ padding: '160px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse at 50% 0%, rgba(200,50,212,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <Tag>Our Work</Tag>
          <h1 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.08, color: '#f0e4ff', letterSpacing: '-0.03em' }}>
            Work that <em style={{ color: '#cc44dd' }}>moves</em><br />markets
          </h1>
        </div>
      </section>

      <div style={{ padding: '0 40px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {ALL_TAGS.map(tag => (
            <button key={tag} onClick={() => setActiveFilter(tag)} style={{ background: activeFilter === tag ? 'linear-gradient(135deg, #c832d4, #8b1fa8)' : 'rgba(34,13,56,0.5)', border: `1px solid ${activeFilter === tag ? 'transparent' : 'rgba(232,180,248,0.12)'}`, borderRadius: 100, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13, color: activeFilter === tag ? '#fff' : '#a07ab8', padding: '8px 20px', transition: 'all 0.2s ease' }}>{tag}</button>
          ))}
        </div>
      </div>

      <section style={{ padding: '0 40px 120px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {filtered.map(p => <ProjectCard key={p.id} project={p} onClick={setSelected} />)}
        </div>
      </section>

      <section style={{ padding: '80px 40px 120px', background: '#0f0619', borderTop: '1px solid rgba(232,180,248,0.06)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(32px, 4vw, 52px)', color: '#f0e4ff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Your story could be<br /><em style={{ color: '#cc44dd' }}>next</em>
          </h2>
          <p style={{ marginTop: 20, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7 }}>Let's build something you'll want to show off.</p>
          <div style={{ marginTop: 36 }}>
            <PrimaryBtn large onClick={() => navigate('contact')}>Start a Project →</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
