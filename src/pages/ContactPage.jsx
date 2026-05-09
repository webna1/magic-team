import { useState } from 'react';
import { PrimaryBtn, Tag } from '../components/shared';

const SERVICES_LIST = ['Brand Strategy', 'Content Creation', 'Digital Marketing', 'Web Design', 'Social Media', 'Creative Direction', 'Other'];
const BUDGETS = ['Under $5K', '$5K – $15K', '$15K – $50K', '$50K+', 'Not sure yet'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Tell us a bit about your project';
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (key) => ({
    width: '100%',
    background: focused === key ? 'rgba(34,13,56,0.8)' : 'rgba(26,9,38,0.6)',
    border: `1.5px solid ${errors[key] ? '#cc44dd' : focused === key ? 'rgba(200,50,212,0.5)' : 'rgba(232,180,248,0.12)'}`,
    borderRadius: 12, padding: '16px 20px',
    fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#f0e4ff',
    outline: 'none', transition: 'all 0.2s ease', boxSizing: 'border-box',
  });

  const labelStyle = { fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: '#a07ab8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'block' };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #c832d4, #8b1fa8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', boxShadow: '0 0 40px rgba(200,50,212,0.4)', fontSize: 32 }}>✓</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 48, color: '#f0e4ff', letterSpacing: '-0.02em', marginBottom: 20 }}>Message received.</h2>
          <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>We'll review your brief and be in touch within one business day. Something worth doing is worth doing quickly.</p>
          <PrimaryBtn onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '', newsletter: false }); }}>Send Another Message</PrimaryBtn>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section style={{ padding: '160px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse at 50% 0%, rgba(200,50,212,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Tag>Contact</Tag>
            <h1 style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(44px, 5.5vw, 68px)', lineHeight: 1.1, color: '#f0e4ff', letterSpacing: '-0.03em' }}>
              Let's make<br />something<br /><em style={{ color: '#cc44dd' }}>great</em>
            </h1>
            <p style={{ marginTop: 24, color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, maxWidth: 400 }}>Tell us about your brand and what you're looking to achieve. We'll come back with a clear plan — no fluff, no vague promises.</p>

            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { label: 'Email', value: 'hello@magicteam.co' },
                { label: 'Phone', value: '+1 555 000 0000' },
                { label: 'Location', value: 'Baghdad, Iraq' },
                { label: 'Hours', value: 'Mon–Fri, 9am–6pm' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 80, color: '#5c4470', fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', paddingTop: 2 }}>{item.label}</div>
                  <div style={{ color: '#c4a4d8', fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, height: 200, borderRadius: 16, background: 'repeating-linear-gradient(135deg, rgba(232,180,248,0.02) 0px, rgba(232,180,248,0.02) 1px, transparent 1px, transparent 28px), #1a0926', border: '1px solid rgba(232,180,248,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(200,50,212,0.06) 0%, transparent 60%)' }} />
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ color: '#cc44dd', fontSize: 20, marginBottom: 6 }}>◎</div>
                <span style={{ color: '#3d1d55', fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.08em' }}>[ map placeholder ]</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={submit} style={{ background: 'rgba(26,9,38,0.6)', borderRadius: 24, border: '1px solid rgba(232,180,248,0.1)', padding: '48px 44px' }}>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 28, color: '#f0e4ff', marginBottom: 8 }}>Start a conversation</h3>
              <p style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.6, marginBottom: 36 }}>We reply within one business day.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input value={form.name} onChange={e => set('name', e.target.value)} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="Your name" style={inputStyle('name')} />
                  {errors.name && <span style={{ color: '#cc44dd', fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 4, display: 'block' }}>{errors.name}</span>}
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input value={form.email} onChange={e => set('email', e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="you@company.com" type="email" style={inputStyle('email')} />
                  {errors.email && <span style={{ color: '#cc44dd', fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 4, display: 'block' }}>{errors.email}</span>}
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Company / Brand</label>
                <input value={form.company} onChange={e => set('company', e.target.value)} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} placeholder="Your brand name" style={inputStyle('company')} />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Service of Interest</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {SERVICES_LIST.map(s => (
                    <button key={s} type="button" onClick={() => set('service', s)} style={{ background: form.service === s ? 'linear-gradient(135deg, #c832d4, #8b1fa8)' : 'transparent', border: `1px solid ${form.service === s ? 'transparent' : 'rgba(232,180,248,0.15)'}`, borderRadius: 100, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13, color: form.service === s ? '#fff' : '#a07ab8', padding: '8px 16px', transition: 'all 0.2s' }}>{s}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Budget Range</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {BUDGETS.map(b => (
                    <button key={b} type="button" onClick={() => set('budget', b)} style={{ background: form.budget === b ? 'rgba(200,50,212,0.15)' : 'transparent', border: `1px solid ${form.budget === b ? 'rgba(200,50,212,0.4)' : 'rgba(232,180,248,0.12)'}`, borderRadius: 100, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13, color: form.budget === b ? '#cc44dd' : '#a07ab8', padding: '8px 16px', transition: 'all 0.2s' }}>{b}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Tell Us About Your Project *</label>
                <textarea value={form.message} onChange={e => set('message', e.target.value)} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} placeholder="What are you working on? What does success look like for you?" rows={5} style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }} />
                {errors.message && <span style={{ color: '#cc44dd', fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 4, display: 'block' }}>{errors.message}</span>}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <button type="button" onClick={() => set('newsletter', !form.newsletter)} style={{ width: 44, height: 24, borderRadius: 12, background: form.newsletter ? 'linear-gradient(135deg, #c832d4, #8b1fa8)' : 'rgba(232,180,248,0.1)', border: '1px solid rgba(232,180,248,0.2)', cursor: 'pointer', position: 'relative', transition: 'all 0.3s', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: 3, left: form.newsletter ? 22 : 3, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left 0.3s' }} />
                </button>
                <label style={{ color: '#a07ab8', fontFamily: "'DM Sans', sans-serif", fontSize: 13, cursor: 'pointer' }} onClick={() => set('newsletter', !form.newsletter)}>Subscribe to our occasional insights newsletter</label>
              </div>

              <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #c832d4, #8b1fa8)', border: 'none', borderRadius: 12, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#fff', padding: '18px 32px', boxShadow: '0 0 32px rgba(200,50,212,0.25)', transition: 'all 0.25s ease', letterSpacing: '0.01em' }}
                onMouseEnter={e => { e.target.style.boxShadow = '0 8px 40px rgba(200,50,212,0.45)'; e.target.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.target.style.boxShadow = '0 0 32px rgba(200,50,212,0.25)'; e.target.style.transform = 'none'; }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
