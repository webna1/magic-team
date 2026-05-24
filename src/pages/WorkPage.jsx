import { useState, useEffect } from 'react';
import { PrimaryBtn, Tag } from '../components/shared';
import awjiLogo from '../assets/awji-t.png';
import dogoLogo from '../assets/dogo-t.png';
import twistedLogo from '../assets/twisted-t.png';
import modernLogo from '../assets/modern-t.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Awji Burger',
    category: 'Brand Identity + Social Media',
    tags: ['Branding', 'Social Media', 'Content'],
    result: '3× Engagement',
    year: '2024',
    size: 'large',
    logo: awjiLogo,
    accentColor: '#e8603c',
  },
  {
    id: 2,
    title: 'Dogo',
    category: 'Visual Identity + Web',
    tags: ['Identity', 'Web Design'],
    result: '+85% Traffic',
    year: '2024',
    size: 'small',
    logo: twistedLogo,
    accentColor: '#cc44dd',
  },
  {
    id: 3,
    title: 'Twisted',
    category: 'Creative Direction + Content',
    tags: ['Creative Direction', 'Content'],
    result: '2.4× Reach',
    year: '2025',
    size: 'small',
    logo: modernLogo,
    accentColor: '#f0b429',
  },
  {
    id: 4,
    title: 'Venice',
    category: 'Brand Strategy + Digital Marketing',
    tags: ['Branding', 'Social Media', 'Identity'],
    result: '4.2× ROAS',
    year: '2025',
    size: 'large',
    logo: dogoLogo,
    accentColor: '#5cbbf6',
  },
];

const CASE_DETAILS = {
  1: {
    subtitle: 'Building a Bold Burger Brand from the Ground Up',
    duration: '4 Months',
    problem: 'Awji Burger had a great product but no brand voice — generic packaging, inconsistent social presence, and nothing that made them stand out in a competitive local food scene.',
    solution: 'We crafted a full brand identity: logo system, colour palette, packaging, and a content-first social strategy built around personality and appetite-driven visuals. The result was a feed that made people hungry and a brand people remembered.',
    results: [
      { value: '3×', label: 'Engagement Rate' },
      { value: '+120%', label: 'Followers Growth' },
      { value: '4 mo', label: 'Time to Results' },
      { value: '#1', label: 'Local Brand Recall' },
    ],
    services: ['Brand Identity', 'Logo Design', 'Packaging', 'Social Media', 'Content Production'],
  },
  2: {
    subtitle: 'A Visual Identity That Speaks Without Words',
    duration: '6 Weeks',
    problem: 'Dogo needed a visual identity that communicated their brand values instantly — distinctive, modern, and scalable across digital and physical touchpoints.',
    solution: 'We built a complete visual system: wordmark, icon set, typography scale, and a web presence that translated the brand into a seamless digital experience.',
    results: [
      { value: '+85%', label: 'Web Traffic' },
      { value: '96', label: 'NPS Score' },
      { value: '6 wk', label: 'Delivery Time' },
      { value: '2×', label: 'Conversion Rate' },
    ],
    services: ['Visual Identity', 'Logo Design', 'Web Design', 'Brand Guidelines'],
  },
  3: {
    subtitle: 'Creative Direction That Cuts Through the Noise',
    duration: '3 Months',
    problem: 'Twisted had strong product-market fit but content that blended in. They needed a creative direction that matched the boldness of their brand name.',
    solution: 'We took over creative direction end-to-end — art direction, photography briefs, motion guidelines, and a content calendar built around standout storytelling.',
    results: [
      { value: '2.4×', label: 'Content Reach' },
      { value: '+70%', label: 'Save Rate' },
      { value: '3 mo', label: 'Campaign Period' },
      { value: '58%', label: 'Brand Recall Lift' },
    ],
    services: ['Creative Direction', 'Art Direction', 'Content Strategy', 'Photography Briefs', 'Motion Guidelines'],
  },
  4: {
    subtitle: 'A Venice Brand Built to Scale',
    duration: '5 Months',
    problem: 'Venice had ambitions that outpaced their brand. Inconsistent messaging, no defined positioning, and a digital presence that didn\'t reflect what the brand actually stood for.',
    solution: 'We started with a brand strategy sprint — positioning, tone of voice, and audience definition. Then built the full identity system and launched a paid social strategy that drove measurable ROI from week one.',
    results: [
      { value: '4.2×', label: 'ROAS' },
      { value: '+140%', label: 'Qualified Leads' },
      { value: '5 mo', label: 'Time to Results' },
      { value: '72%', label: 'Brand Recall' },
    ],
    services: ['Brand Strategy', 'Visual Identity', 'Paid Social', 'Digital Marketing', 'Content Production'],
  },
};

const ALL_TAGS = ['All', 'Branding', 'Identity', 'Social Media', 'Content', 'Web Design', 'Creative Direction'];

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
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${hov ? 'rgba(200,50,212,0.3)' : 'rgba(232,180,248,0.08)'}`,
        transition: 'all 0.3s ease',
        transform: hov ? 'translateY(-6px)' : 'none',
        boxShadow: hov ? '0 24px 60px rgba(0,0,0,0.35)' : 'none',
        opacity: 0,
        background: 'rgba(26,9,38,0.95)',
      }}
    >
      {/* Card image area — logo centered */}
      <div style={{
        height: isLarge ? 360 : 280,
        background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.02) 0px, rgba(232,180,248,0.02) 1px, transparent 1px, transparent 32px), #100820',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Ambient glow behind logo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor}22 0%, transparent 65%)`,
          transition: 'opacity 0.4s ease',
          opacity: hov ? 1 : 0.5,
        }} />

        {/* Logo */}
        <img
          src={project.logo}
          alt={project.title}
          style={{
            maxHeight: isLarge ? 120 : 88,
            maxWidth: isLarge ? 280 : 200,
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1,
            filter: hov ? 'brightness(1.1)' : 'brightness(0.85)',
            transition: 'all 0.3s ease',
            transform: hov ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* Hover overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,3,20,0.75)',
          opacity: hov ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}>
          <span style={{
            color: '#e8b4f8',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: '0.06em',
            border: '1.5px solid rgba(232,180,248,0.4)',
            borderRadius: 100,
            padding: '10px 28px',
          }}>
            View Case Study →
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div style={{
        padding: '26px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderTop: '1px solid rgba(232,180,248,0.06)',
      }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
            {project.tags.map(t => (
              <span key={t} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                color: '#a07ab8',
                border: '1px solid rgba(232,180,248,0.12)',
                borderRadius: 100,
                padding: '3px 10px',
                letterSpacing: '0.05em',
              }}>{t}</span>
            ))}
          </div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: '#f0e4ff', fontWeight: 400, marginBottom: 4 }}>{project.title}</h3>
          <p style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{project.category} · {project.year}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 24 }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: project.accentColor, fontWeight: 400 }}>
            {project.result.split(' ')[0]}
          </div>
          <div style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.06em' }}>
            {project.result.split(' ').slice(1).join(' ')}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyModal({ project, onClose }) {
  const detail = CASE_DETAILS[project.id];
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(8,2,18,0.93)',
        backdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        overflow: 'auto', padding: '40px 20px',
      }}
    >
      <div style={{
        background: '#13082a',
        borderRadius: 24,
        border: '1px solid rgba(232,180,248,0.1)',
        maxWidth: 920,
        width: '100%',
        boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
      }}>
        {/* Modal hero — logo on dark */}
        <div style={{
          height: 300,
          borderRadius: '24px 24px 0 0',
          overflow: 'hidden',
          background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.025) 0px, rgba(232,180,248,0.025) 1px, transparent 1px, transparent 40px), #0d0420',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 50% 50%, ${project.accentColor}28 0%, transparent 60%)`,
          }} />
          <img
            src={project.logo}
            alt={project.title}
            style={{ maxHeight: 120, maxWidth: 280, objectFit: 'contain', position: 'relative', zIndex: 1 }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 20, right: 20,
              background: 'rgba(232,180,248,0.07)',
              border: '1px solid rgba(232,180,248,0.15)',
              borderRadius: '50%', width: 40, height: 40,
              cursor: 'pointer', color: '#e8b4f8', fontSize: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >✕</button>
        </div>

        {/* Modal body */}
        <div style={{ padding: '48px 56px 56px' }}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 20, alignItems: 'center' }}>
            <Tag>{project.category}</Tag>
            <span style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{project.year} · {detail.duration}</span>
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, color: '#f0e4ff', fontWeight: 400, marginBottom: 10, letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>
          <p style={{ color: '#a07ab8', fontFamily: "'DM Serif Display', serif", fontSize: 19, fontStyle: 'italic', marginBottom: 44 }}>
            {detail.subtitle}
          </p>

          {/* Results row */}
          <div style={{
            display: 'flex',
            marginBottom: 48,
            background: `${project.accentColor}0d`,
            borderRadius: 16,
            padding: '28px 0',
            border: `1px solid ${project.accentColor}28`,
          }}>
            {detail.results.map((r, i) => (
              <div key={i} style={{
                flex: 1, textAlign: 'center',
                borderRight: i < detail.results.length - 1 ? '1px solid rgba(232,180,248,0.08)' : 'none',
              }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: project.accentColor, fontWeight: 400 }}>{r.value}</div>
                <div style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{r.label}</div>
              </div>
            ))}
          </div>

          {/* Problem / Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
            <div>
              <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>The Problem</h4>
              <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85 }}>{detail.problem}</p>
            </div>
            <div>
              <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Our Approach</h4>
              <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85 }}>{detail.solution}</p>
            </div>
          </div>

          {/* Services */}
          <h4 style={{ color: '#e8b4f8', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Services Delivered</h4>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {detail.services.map(s => (
              <span key={s} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: '#c4a4d8',
                border: '1px solid rgba(232,180,248,0.14)',
                borderRadius: 100, padding: '6px 16px',
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage({ navigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter));

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.06 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <div>
      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}

      {/* ── Hero ── */}
      <section style={{ padding: '160px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse at 50% 0%, rgba(200,50,212,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 620, margin: '0 auto' }}>
          <Tag>Our Work</Tag>
          <h1 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.08, color: '#f0e4ff', letterSpacing: '-0.03em' }}>
            Work that <em style={{ color: '#cc44dd' }}>moves</em><br />markets
          </h1>
          <p style={{ marginTop: 20, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7 }}>
            Real brands. Real results. Click any project to see the full story.
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div style={{ padding: '0 40px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              style={{
                background: activeFilter === tag ? 'linear-gradient(135deg, #c832d4, #8b1fa8)' : 'rgba(34,13,56,0.5)',
                border: `1px solid ${activeFilter === tag ? 'transparent' : 'rgba(232,180,248,0.12)'}`,
                borderRadius: 100,
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 13,
                color: activeFilter === tag ? '#fff' : '#a07ab8',
                padding: '8px 20px',
                transition: 'all 0.2s ease',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section style={{ padding: '0 40px 120px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {filtered.map(p => <ProjectCard key={p.id} project={p} onClick={setSelected} />)}
        </div>
      </section>

      {/* ── CTA ── */}
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
