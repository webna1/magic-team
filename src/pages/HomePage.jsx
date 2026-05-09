import { useState, useEffect } from 'react';
import { PrimaryBtn, SecondaryBtn, Tag, SectionHeading } from '../components/shared';
import awjiLogo from '../assets/awji-t.png';
import dogoLogo from '../assets/dogo-t.png';
import twistedLogo from '../assets/twisted-t.png';
import modernLogo from '../assets/modern-t.png';

const SERVICES_PREVIEW = [
  { num: '01', title: 'Brand Strategy', desc: 'We build distinctive identities that resonate, convert, and endure in a noisy market.' },
  { num: '02', title: 'Content Creation', desc: 'Scroll-stopping visuals and copy engineered to drive engagement and brand recall.' },
  { num: '03', title: 'Digital Marketing', desc: 'Data-led campaigns across every channel — performance meets creativity.' },
  { num: '04', title: 'Web Design', desc: 'Conversion-first websites and landing pages that look exceptional and perform harder.' },
];

const STATS = [
  { value: '180+', label: 'Projects Delivered' },
  { value: '94%', label: 'Client Retention' },
  { value: '3.2×', label: 'Avg. ROI Delivered' },
  { value: '7+', label: 'Years of Magic' },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Discover', desc: 'Deep-dive into your brand, audience, and goals to uncover real opportunities.' },
  { n: '02', title: 'Strategise', desc: 'We map a clear creative and growth roadmap tailored to your market position.' },
  { n: '03', title: 'Create', desc: 'Our team executes with precision — every asset built to the brief, on time.' },
  { n: '04', title: 'Launch & Scale', desc: 'We go live, measure everything, and optimise relentlessly for compounding results.' },
];

const TESTIMONIALS = [
  { quote: "MagicTeam completely transformed how we show up online. Our pipeline doubled in six months. They don't just deliver — they over-deliver.", name: 'Sarah Al-Rashid', role: 'CEO, Luminary Ventures', initials: 'SA' },
  { quote: "The brand identity they built for us has become our biggest competitive asset. Premium, distinctive, and entirely us.", name: 'James Whitfield', role: 'Founder, Archform Studio', initials: 'JW' },
  { quote: "From strategy to execution, the team moves fast without losing quality. That balance is rare and it's why we keep coming back.", name: 'Nour Khalil', role: 'CMO, Forta Group', initials: 'NK' },
];

const CLIENT_LOGOS = [
  { name: 'Awji Burger', src: awjiLogo },
  { name: 'Dogo', src: dogoLogo },
  { name: 'Twisted', src: twistedLogo },
  { name: 'Modern', src: modernLogo },
  { name: 'Georges', wordmark: 'Georges' },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function ServiceRow({ s, navigate }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => navigate('services')}
      style={{
        display: 'flex', gap: 24, alignItems: 'flex-start',
        padding: '28px 0', cursor: 'pointer',
        borderBottom: '1px solid rgba(232,180,248,0.08)',
        transition: 'padding-left 0.2s ease',
        paddingLeft: hov ? 12 : 0,
      }}
    >
      <span style={{ color: '#cc44dd', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', minWidth: 28, paddingTop: 3 }}>{s.num}</span>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 18, color: hov ? '#e8b4f8' : '#f0e4ff', transition: 'color 0.2s', marginBottom: 6 }}>{s.title}</h3>
        <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
      </div>
      <span style={{ color: hov ? '#cc44dd' : '#5c4470', transition: 'color 0.2s, transform 0.2s', transform: hov ? 'translateX(4px)' : 'none', paddingTop: 3 }}>→</span>
    </div>
  );
}

function LogoMarquee({ logos }) {
  const seq = [...logos, ...logos, ...logos];
  return (
    <section style={{
      width: '100vw', marginLeft: 'calc(50% - 50vw)', marginTop: 96,
      padding: '56px 0 64px',
      borderTop: '1px solid rgba(232,180,248,0.06)',
      borderBottom: '1px solid rgba(232,180,248,0.06)',
      background: 'rgba(15,6,25,0.5)', position: 'relative', overflow: 'hidden',
    }}>
      <p style={{ textAlign: 'center', color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 36 }}>Brands We've Worked With</p>
      <div className="marquee-viewport" style={{
        position: 'relative', width: '100%',
        maskImage: 'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
      }}>
        <div className="marquee-track">
          {seq.map((l, i) => (
            <div key={i} className="marquee-item" style={{ flex: '0 0 auto', padding: '0 56px', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {l.src ? (
                <img src={l.src} alt={l.name} style={{ maxHeight: 64, maxWidth: 180, objectFit: 'contain', display: 'block' }} />
              ) : (
                <span className="wordmark" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 38, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>{l.wordmark}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ navigate }) {
  useScrollReveal();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '120px 40px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,50,212,0.18) 0%, transparent 70%)', top: '10%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,31,168,0.14) 0%, transparent 70%)', bottom: '15%', right: '10%', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
          <Tag>Creative · Strategic · Magical</Tag>
          <h1 style={{ marginTop: 24, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 1.06, color: '#f0e4ff', letterSpacing: '-0.03em' }}>
            We Made Every<br />
            Story <em style={{ color: '#cc44dd', fontStyle: 'italic' }}>Magical</em>
          </h1>
          <p style={{ marginTop: 28, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, maxWidth: 560, margin: '28px auto 0' }}>
            A creative agency that turns ambitious brands into category leaders — through strategy, storytelling, and execution that converts.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap' }}>
            <PrimaryBtn large onClick={() => navigate('contact')}>Start Your Story →</PrimaryBtn>
            <SecondaryBtn large onClick={() => navigate('work')}>View Our Work</SecondaryBtn>
          </div>

          <div style={{ display: 'flex', gap: 0, marginTop: 80, justifyContent: 'center', borderTop: '1px solid rgba(232,180,248,0.1)', paddingTop: 48, flexWrap: 'wrap' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '0 40px', textAlign: 'center', borderRight: i < STATS.length - 1 ? '1px solid rgba(232,180,248,0.1)' : 'none' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#e8b4f8', fontWeight: 400 }}>{s.value}</div>
                <div style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 72, width: '100%', maxWidth: 1100, height: 480, borderRadius: 24, background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.03) 0px, rgba(232,180,248,0.03) 1px, transparent 1px, transparent 40px), rgba(34,13,56,0.8)', border: '1px solid rgba(232,180,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(200,50,212,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 40%, rgba(139,31,168,0.08) 0%, transparent 50%)' }} />
          <span style={{ color: '#5c4470', fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.08em', zIndex: 1 }}>[ hero reel / brand film ]</span>
        </div>

        <LogoMarquee logos={CLIENT_LOGOS} />
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: '120px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <SectionHeading tag="What We Do" title={"Craft that converts.\nStrategy that scales."} subtitle="From positioning to production — we handle every layer of your brand's presence." />
            <SecondaryBtn onClick={() => navigate('services')}>Explore All Services →</SecondaryBtn>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SERVICES_PREVIEW.map((s, i) => <ServiceRow key={i} s={s} navigate={navigate} />)}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section style={{ padding: '80px 40px', background: '#0f0619', borderTop: '1px solid rgba(232,180,248,0.06)', borderBottom: '1px solid rgba(232,180,248,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading tag="Featured Work" title="Results that speak." center />
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(232,180,248,0.1)', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
            <div style={{ background: 'repeating-linear-gradient(45deg, rgba(232,180,248,0.02) 0px, rgba(232,180,248,0.02) 1px, transparent 1px, transparent 30px), #1a0926', minHeight: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 40% 50%, rgba(200,50,212,0.15) 0%, transparent 60%)' }} />
              <span style={{ color: '#5c4470', fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.08em' }}>[ campaign imagery ]</span>
            </div>
            <div style={{ padding: '56px 56px', background: '#13082a', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Tag>Brand Strategy + Campaign</Tag>
              <h3 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 36, color: '#f0e4ff', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Luminary Ventures — Redefining a Category</h3>
              <p style={{ marginTop: 20, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.7 }}>A full brand repositioning and 90-day campaign that drove a 2.8× increase in qualified leads and cemented their place as the market's premium choice.</p>
              <div style={{ display: 'flex', gap: 40, marginTop: 36 }}>
                {[['2.8×', 'Lead Growth'], ['68%', 'Brand Recall'], ['3 Months', 'Delivery']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: '#cc44dd' }}>{v}</div>
                    <div style={{ color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <PrimaryBtn onClick={() => navigate('work')}>View Case Study →</PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '120px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="How We Work" title={"Simple process.\nExceptional results."} center subtitle="We remove the complexity so you can focus on growing your business." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="reveal" style={{ padding: 32, borderRadius: 20, border: '1px solid rgba(232,180,248,0.1)', background: 'rgba(34,13,56,0.4)', position: 'relative', overflow: 'hidden', opacity: 0, transform: 'translateY(24px)', transition: `all 0.6s ease ${i * 0.1}s` }}>
              <div style={{ position: 'absolute', top: -20, right: -10, fontFamily: "'DM Serif Display', serif", fontSize: 80, color: 'rgba(232,180,248,0.05)', fontWeight: 400, lineHeight: 1, userSelect: 'none' }}>{step.n}</div>
              <div style={{ color: '#cc44dd', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', marginBottom: 16 }}>{step.n}</div>
              <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: '#f0e4ff', fontWeight: 400, marginBottom: 12 }}>{step.title}</h4>
              <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 40px 120px', background: '#0f0619', borderTop: '1px solid rgba(232,180,248,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading tag="Clients" title={"Stories from those\nwho made the leap."} center />
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ padding: '48px 56px', borderRadius: 24, border: '1px solid rgba(232,180,248,0.12)', background: 'rgba(34,13,56,0.6)', textAlign: 'center', minHeight: 240, transition: 'all 0.4s ease' }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#e8b4f8', lineHeight: 1.6, fontStyle: 'italic', fontWeight: 400 }}>"{TESTIMONIALS[activeTestimonial].quote}"</p>
              <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #c832d4, #8b1fa8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#fff' }}>{TESTIMONIALS[activeTestimonial].initials}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: '#f0e4ff' }}>{TESTIMONIALS[activeTestimonial].name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#5c4470' }}>{TESTIMONIALS[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 24 : 8, height: 8, borderRadius: 4, background: i === activeTestimonial ? '#cc44dd' : 'rgba(232,180,248,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '120px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(200,50,212,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Tag>Let's Work Together</Tag>
          <h2 style={{ marginTop: 24, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 1.1, color: '#f0e4ff', letterSpacing: '-0.03em' }}>
            Ready to make your<br />story <em style={{ color: '#cc44dd' }}>Magical</em>?
          </h2>
          <p style={{ marginTop: 24, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.7, maxWidth: 480, margin: '24px auto 0' }}>No long commitments. Just a conversation about where you want to go — and how we'll get you there.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap' }}>
            <PrimaryBtn large onClick={() => navigate('contact')}>Book a Free Strategy Call →</PrimaryBtn>
            <SecondaryBtn large onClick={() => navigate('work')}>See Our Work</SecondaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
