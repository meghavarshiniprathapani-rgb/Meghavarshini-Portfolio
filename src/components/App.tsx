'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS, EXPERIENCE, NAV, PROFILE, PROJECTS, SKILL_GROUPS } from '../lib/data';

const initials = PROFILE.name.split(' ').map((part) => part[0]).join('').slice(0, 2);
const skillItems = SKILL_GROUPS.flatMap(([family, skills]) => skills.map((name, index) => ({ family, name, no: index + 1 })));

export default function App() {
  const [active, setActive] = useState('about');
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(skillItems[0]);
  const [project, setProject] = useState(0);
  const [copied, setCopied] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const onScroll = () => setProgress((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    NAV.forEach(([id]) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    document.querySelectorAll('.rv').forEach((element) => new IntersectionObserver((entries, ob) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-in'); ob.unobserve(entry.target); } }), { threshold: .12 }).observe(element));
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => { document.body.style.overflow = menu ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [menu]);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenu(false); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  useEffect(() => {
    const hero = document.getElementById('hero'); if (!hero || !video.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (!video.current) return; entry.intersectionRatio >= .35 ? video.current.play().catch(() => {}) : video.current.pause(); }, { threshold: [.35] });
    observer.observe(hero); return () => observer.disconnect();
  }, []);
  const filters = useMemo(() => ['All', ...SKILL_GROUPS.map(([name]) => name)], []);
  const scroll = (id: string) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const toggleSound = () => { if (!video.current) return; video.current.muted = sound; setSound(!sound); video.current.play().catch(() => {}); };
  const copy = async () => { await navigator.clipboard.writeText(PROFILE.email); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  return <main>
    <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
    <header className="nav" aria-label="Primary navigation">
      <button className="brand" onClick={() => scroll('hero')} aria-label="Back to top"><span>{initials}</span><b>{PROFILE.name}</b></button>
      <nav className="navlinks">{NAV.map(([id, label]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => scroll(id)}>{label}</button>)}</nav>
      <button className="menu" onClick={() => setMenu(true)}>Menu</button>
    </header>
    <div className={`mobile-menu ${menu ? 'open' : ''}`}><button className="close" onClick={() => setMenu(false)}>Close ×</button>{NAV.map(([id, label], i) => <button key={id} style={{ transitionDelay: `${i * 65}ms` }} onClick={() => scroll(id)}><small>0{i + 1}</small>{label}</button>)}</div>

    <section id="hero" className="hero" aria-label="Introduction">
      <div className="ghost">{PROFILE.firstName}</div><p className="eyebrow">Portfolio / 2026</p>
      <div className="hero-copy rv"><h1>{PROFILE.role}<i>.</i></h1><p>Backend development, real-time systems, and reliable software delivery.</p><div className="actions"><button className="button dark" onClick={() => scroll('work')}>Explore work <span>↓</span></button><button className="button" onClick={() => scroll('contact')}>Let&apos;s talk</button><a className="text-link" href={PROFILE.resume} download>Résumé ↓</a></div></div>
      <div className="video-wrap"><video ref={video} muted loop playsInline preload="auto" autoPlay aria-label="Video introduction of Satya Meghavarshini Prathapani"><source src="/hero/hero.mp4" type="video/mp4" /></video><button className="sound" onClick={toggleSound} aria-label={sound ? 'Mute introduction video' : 'Play introduction video sound'}>{sound ? 'Ⅱ' : '▶'}</button></div>
      <p className="hero-note">Scroll to explore <span>↓</span></p>
    </section>

    <section id="about" className="section"><Tag n="01" label="About me" /><h2 className="rv">An engineer who builds <em>reliable systems.</em></h2><div className="about-grid">
      <article className="about-copy rv"><p className="lead">Hi, I&apos;m Satya.</p><p>{PROFILE.summary}</p><div className="actions"><a className="button dark" href={PROFILE.resume} download>Résumé ↓</a><a className="button" href={PROFILE.github} target="_blank">GitHub ↗</a><a className="button" href={PROFILE.linkedin} target="_blank">LinkedIn ↗</a></div></article>
      <button className="id-card rv" aria-label="Developer ID card. Click to flip." onClick={(e) => e.currentTarget.classList.toggle('flipped')}><div className="card-inner"><div className="card-front"><b>DEVELOPER ID</b><div className="monogram">SM</div><h3>Satya Meghavarshini<br />Prathapani</h3><p>{PROFILE.role}</p><dl><div><dt>DEPT.</dt><dd>Computer Science</dd></div><div><dt>VALID TILL</dt><dd>2027</dd></div></dl><div className="barcode" /></div><div className="card-back"><b>WHAT I AM</b><p>Backend development<br />REST APIs & SQL databases<br />Containerization & Kubernetes<br />Real-time systems<br />Software engineering practices</p><small>If found, say hello.</small></div></div></button>
      <aside className="facts rv"><p className="lead">Quick facts</p><dl><div><dt>Education</dt><dd>B.Tech CSE · 2027</dd></div><div><dt>CGPA</dt><dd>8.85</dd></div><div><dt>Current role</dt><dd>Technical Member · KL Radio</dd></div><div><dt>Email</dt><dd>{PROFILE.email}</dd></div></dl><blockquote>Focused on building and testing maintainable backend services.</blockquote></aside>
    </div></section>

    <section id="skills" className="section skills"><Tag n="02" label="Technical skills" /><h2 className="rv">The stack behind the <em>systems.</em></h2><div className="filters">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'on' : ''}>{item}</button>)}</div><div className="skills-layout"><div className="element-grid">{skillItems.map((skill, i) => <button key={skill.name} onMouseEnter={() => setSelected(skill)} onFocus={() => setSelected(skill)} className={`element ${filter !== 'All' && filter !== skill.family ? 'dim' : ''}`} style={{ transitionDelay: `${(Math.floor(i / 8) + i % 8) * 35}ms` }}><small>{String(i + 1).padStart(2, '0')}</small><b>{skill.name.slice(0, 2)}</b><span>{skill.name}</span></button>)}</div><aside className="inspector"><small>STACK INSPECTOR</small><div className="inspector-mark">{selected.name.slice(0, 2)}</div><h3>{selected.name}</h3><p>{selected.family}</p><hr /><p>Included in the technical skills listed on the résumé.</p></aside></div></section>

    <section id="work" className="section"><Tag n="03" label="Selected work" /><h2 className="rv">Things I&apos;ve <em>built.</em></h2><div className="work">{PROJECTS.map((item, index) => <article key={item.id} className={`project ${project === index ? 'open' : ''}`} onMouseEnter={() => setProject(index)}><button className="project-toggle" onClick={() => setProject(index)} aria-label={`Open ${item.title}`}><span>{item.index}</span><b>{item.title}</b><i>+</i></button><div className="project-content"><div><p className="eyebrow">{item.index} / {item.kicker}</p><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.slice(0, 2).map((x) => <li key={x}>{x}</li>)}</ul><div className="chips">{item.tech.map((x) => <span key={x}>{x}</span>)}</div>{'github' in item && <a className="button dark" href={item.github} target="_blank">View on GitHub ↗</a>}{'live' in item && <a className="button dark" href={item.live} target="_blank">Visit KL Radio ↗</a>}</div><div className="illustration"><small>ILLUSTRATIVE UI</small><div /><div /><div /></div></div></article>)}</div></section>

    <section id="certifications" className="section certs"><Tag n="04" label="Certifications" /><div className="cert-grid"><div><h2 className="rv">Always <em>learning.</em></h2><p>{CERTIFICATIONS.length} certifications</p></div><ol>{CERTIFICATIONS.map((cert, index) => <li className="rv" key={cert}><span>{String(index + 1).padStart(2, '0')}</span><b>{cert}</b><i>↗</i></li>)}</ol></div></section>

    <section id="experience" className="section"><Tag n="05" label="Path so far" /><h2 className="rv">Learning by <em>doing.</em></h2><div className="timeline">{EXPERIENCE.map((item, index) => <article className="rv" key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.date}</small><h3>{item.title}</h3><b>{item.place}</b><p>{item.detail}</p></div></article>)}<div className="next">Next — Your team?</div></div></section>

    <section id="achievements" className="section achievements"><Tag n="06" label="Achievements" /><h2 className="rv">Small milestones, <em>real momentum.</em></h2><div className="achievement-track">{ACHIEVEMENTS.map((item, index) => <article className="rv" key={item.label}><span>{String(index + 1).padStart(2, '0')} / 04</span><div className="achievement-icon">✦</div><h3>{item.label}</h3><p>{item.text}</p><strong>{item.value}</strong></article>)}</div></section>

    <section id="contact" className="section contact"><Tag n="07" label="Contact" /><h2>Let&apos;s build<br /><em>something together.</em></h2><a className="email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a><button className="copy" onClick={copy}>{copied ? 'Copied ✓' : 'Copy email'}</button><div className="contact-links"><a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a><a href={PROFILE.github} target="_blank">GitHub ↗</a><a href={PROFILE.linkedin} target="_blank">LinkedIn ↗</a></div></section>
    <footer><span>© {new Date().getFullYear()} {PROFILE.name}</span><button onClick={() => scroll('hero')}>Back to top ↑</button><span>Built with Next.js</span></footer>
  </main>;
}

function Tag({ n, label }: { n: string; label: string }) { return <p className="tag"><span>{n}</span> — {label}</p>; }
