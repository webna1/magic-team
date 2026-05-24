import { useState, useEffect } from 'react';
import { PrimaryBtn, Tag, SectionHeading } from '../components/shared';

const SERVICES_FULL = [
  { num: '01', title: 'Brand Strategy', desc: 'Positioning is everything. We dig deep into your market, audience, and competitive landscape to define a brand position that is ownable, credible, and magnetic.', points: ['Brand Positioning & Messaging', 'Audience & Competitor Research', 'Brand Voice & Tone', 'Visual Identity Direction'], accent: '#cc44dd' },
  { num: '02', title: 'Content Creation', desc: 'From campaign concepting to final delivery — photography, video, copywriting, and design that stops the scroll and tells your story with intent.', points: ['Campaign Concepting', 'Photography & Video Production', 'Copywriting & Editorial', 'Motion Design'], accent: '#a855d4' },
  { num: '03', title: 'Digital Marketing', desc: 'Performance-driven campaigns engineered for measurable growth. We build, run, and optimise across every channel that matters for your business.', points: ['Paid Social & Search', 'Email & Automation', 'SEO & Content Strategy', 'Analytics & Reporting'], accent: '#8b3fc4' },
  { num: '04', title: 'Web Design & Dev', desc: 'Websites that convert. We design and build premium digital experiences that reflect your brand and are engineered to turn visitors into customers.', points: ['UX/UI Design', 'Conversion Optimisation', 'Landing Page Design', 'Webflow / CMS Build'], accent: '#cc44dd' },
  { num: '05', title: 'Social Media Management', desc: 'Consistent, strategic, creative. We manage your social presence end-to-end — from calendar planning and content creation to community management.', points: ['Content Planning & Scheduling', 'Community Management', 'Platform Strategy', 'Growth Analytics'], accent: '#a855d4' },
  { num: '06', title: 'Creative Direction', desc: 'Need someone to hold the creative vision? We embed as your creative lead — directing shoots, guiding agencies, and ensuring brand consistency across every touchpoint.', points: ['Art Direction', 'Shoot Direction', 'Brand Consistency Audits', 'Agency Management'], accent: '#8b3fc4' },
];


function ServiceCard({ s, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '48px', borderRadius: 20,
        border: `1px solid ${hov ? 'rgba(200,50,212,0.3)' : 'rgba(232,180,248,0.08)'}`,
        background: hov ? 'rgba(34,13,56,0.8)' : 'rgba(34,13,56,0.3)',
        transition: 'all 0.3s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? '0 16px 48px rgba(200,50,212,0.1)' : 'none',
        opacity: 0,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <span style={{ color: s.accent, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em' }}>{s.num}</span>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(200,50,212,0.12)', border: '1px solid rgba(200,50,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.accent, fontSize: 18, fontWeight: 700 }}>✦</div>
      </div>
      <h3 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 26, color: '#f0e4ff', marginBottom: 16, lineHeight: 1.2 }}>{s.title}</h3>
      <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>{s.desc}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {s.points.map(p => (
          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.accent, flexShrink: 0 }} />
            <span style={{ color: '#c4a4d8', fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function ServicesPage({ navigate }) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <section style={{ padding: '160px 40px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse at 50% 0%, rgba(200,50,212,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <Tag>Services</Tag>
          <h1 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.08, color: '#f0e4ff', letterSpacing: '-0.03em' }}>Every tool you need<br />to <em style={{ color: '#cc44dd' }}>grow</em></h1>
          <p style={{ marginTop: 24, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.7, maxWidth: 500, margin: '24px auto 0' }}>End-to-end creative and marketing services, built for brands that refuse to blend in.</p>
        </div>
      </section>

      <section style={{ padding: '0 40px 120px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {SERVICES_FULL.map((s, i) => <ServiceCard key={i} s={s} index={i} />)}
        </div>
      </section>


      <section style={{ padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 56px)', color: '#f0e4ff', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Not sure where to start?</h2>
          <p style={{ marginTop: 20, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7 }}>Book a free 30-minute strategy call. We'll listen, ask the right questions, and tell you exactly how we'd approach your brand.</p>
          <div style={{ marginTop: 40 }}>
            <PrimaryBtn large onClick={() => navigate('contact')}>Book Free Strategy Call →</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
