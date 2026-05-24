import { useState, useEffect } from 'react';
import { Tag, SectionHeading } from '../components/shared';

const TEAM = [
  { name: 'Sarah Hussien', role: 'Founder & Creative Director', bio: 'Brand strategist and storyteller with 10+ years building category-defining brands across MENA and Europe.', initials: 'SH' },
  { name: 'Marcus Bell', role: 'Head of Digital Marketing', bio: 'Performance marketer obsessed with turning data into creative decisions. Ex-BBDO, ex-Meta.', initials: 'MB' },
  { name: 'Sofia Reyes', role: 'Lead Designer', bio: 'Visual systems thinker with a love for clean craft. Creates brand worlds that feel inevitable.', initials: 'SR' },
  { name: 'Omar Khalil', role: 'Head of Content', bio: 'Writer and director who believes every brand has a film worth making. He just finds it.', initials: 'OK' },
  { name: 'Priya Nair', role: 'Strategy Director', bio: 'Market researcher and positioning specialist. She finds the gap nobody else is talking about.', initials: 'PN' },
  { name: 'Tom Eriksen', role: 'Web & Tech Lead', bio: 'Builds experiences that are as fast as they are beautiful. Design is only as good as the build.', initials: 'TE' },
];

const VALUES = [
  { title: 'Craft Over Volume', desc: 'We never mass-produce. Every deliverable is built with intention, precision, and pride.' },
  { title: 'Honest Partnerships', desc: "We tell clients what they need to hear — not what they want. That's how real results happen." },
  { title: 'Speed Without Sacrifice', desc: 'We move fast and stay sharp. Timelines are respected. Quality is non-negotiable.' },
  { title: 'Results First', desc: "We measure everything. Beautiful work that doesn't convert isn't good enough for us." },
];

const TIMELINE = [
  { year: '2018', title: 'Founded', desc: 'Started as a two-person creative studio in Dubai, focused on brand identity.' },
  { year: '2020', title: 'Went Full Service', desc: 'Expanded into digital marketing and content production. First international clients.' },
  { year: '2022', title: 'Team of 15', desc: 'Grew to a full in-house team. Opened a second studio. Crossed 100 projects.' },
  { year: '2024', title: 'Global Reach', desc: 'Clients across 12 countries. Named one of the top boutique agencies in MENA.' },
  { year: '2026', title: 'Today', desc: '180+ projects, a lean expert team, and an unbroken record of over-delivering.' },
];

function TeamCard({ member, index }) {
  const [hov, setHov] = useState(false);
  const colors = ['#c832d4', '#a855d4', '#8b3fc4', '#c832d4', '#a855d4', '#8b3fc4'];
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: 32, borderRadius: 20,
        border: `1px solid ${hov ? 'rgba(200,50,212,0.25)' : 'rgba(232,180,248,0.08)'}`,
        background: hov ? 'rgba(34,13,56,0.7)' : 'rgba(34,13,56,0.3)',
        transition: 'all 0.3s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        opacity: 0,
      }}
    >
      <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${colors[index % colors.length]}, ${colors[(index + 1) % colors.length]}80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 20, boxShadow: hov ? `0 0 24px ${colors[index % colors.length]}40` : 'none', transition: 'box-shadow 0.3s' }}>{member.initials}</div>
      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17, color: '#f0e4ff', marginBottom: 4 }}>{member.name}</h3>
      <p style={{ color: '#cc44dd', fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: '0.04em', marginBottom: 14 }}>{member.role}</p>
      <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{member.bio}</p>
    </div>
  );
}

export default function AboutPage({ navigate }) {
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
      <section style={{ padding: '160px 40px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(200,50,212,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <Tag>About Us</Tag>
            <h1 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(44px, 5.5vw, 68px)', lineHeight: 1.1, color: '#f0e4ff', letterSpacing: '-0.03em' }}>
              A team that<br />makes stories<br /><em style={{ color: '#cc44dd' }}>Magical</em>
            </h1>
          </div>
          <div>
            <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.8, marginBottom: 24 }}>MagicTeam is a boutique creative and marketing agency founded on a simple belief: every brand has a story worth telling brilliantly.</p>
            <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.8 }}>We're a lean team of strategists, creatives, and marketers who care deeply about the work — and even more about the results it drives.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 100px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ height: 400, borderRadius: 24, background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.025) 0px, rgba(232,180,248,0.025) 1px, transparent 1px, transparent 36px), #1a0926', border: '1px solid rgba(232,180,248,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(200,50,212,0.1) 0%, transparent 50%)' }} />
          <span style={{ color: '#3d1d55', fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.08em' }}>[ team / studio photography ]</span>
        </div>
      </section>

      <section style={{ padding: '80px 40px 100px', background: '#0f0619', borderTop: '1px solid rgba(232,180,248,0.06)', borderBottom: '1px solid rgba(232,180,248,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <Tag>Mission</Tag>
              <h2 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#f0e4ff', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                To make every brand we touch<br /><em style={{ color: '#cc44dd' }}>impossible to ignore</em>
              </h2>
              <p style={{ marginTop: 24, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8 }}>We exist to close the gap between ambitious brands and the creative execution they deserve. We do it with honesty, craft, and an obsession for results that compound over time.</p>
            </div>
            <div>
              <Tag>Our Values</Tag>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 20 }}>
                {VALUES.map((v, i) => (
                  <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid rgba(232,180,248,0.08)' }}>
                    <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#e8b4f8', marginBottom: 8 }}>{v.title}</h4>
                    <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="Our Journey" title={"Built with intention,\none chapter at a time."} center />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: 71, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(200,50,212,0.3) 10%, rgba(200,50,212,0.3) 90%, transparent)' }} />
          {TIMELINE.map((item, i) => (
            <div key={i} className="reveal" style={{ display: 'flex', gap: 32, marginBottom: 48, opacity: 0, transform: 'translateX(-20px)', transition: `all 0.6s ease ${i * 0.1}s` }}>
              <div style={{ textAlign: 'right', minWidth: 56 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, color: '#cc44dd', letterSpacing: '0.04em' }}>{item.year}</span>
              </div>
              <div style={{ position: 'relative', paddingTop: 2 }}>
                <div style={{ position: 'absolute', left: -36, top: 5, width: 10, height: 10, borderRadius: '50%', background: '#cc44dd', boxShadow: '0 0 12px rgba(200,50,212,0.5)' }} />
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#f0e4ff', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 40px 120px', maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="The Team" title={"The people behind\nthe magic."} center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {TEAM.map((member, i) => <TeamCard key={i} member={member} index={i} />)}
        </div>
      </section>

    </div>
  );
}
