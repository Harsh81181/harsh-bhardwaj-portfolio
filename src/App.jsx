import { useEffect, useRef, useState } from 'react';
import cvUrl from '../Harsh_Bhardwaj_cv.pdf';

const socials = [
  ['LinkedIn', 'https://www.linkedin.com/in/harsh-bhardwaj-9ba233232/'],
  ['GitHub', 'https://github.com/Harsh81181/'],
  ['LeetCode', 'https://leetcode.com/u/qvavpHZDuB/'],
];

const SocialIcon = ({ label }) => {
  if (label === 'GitHub') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.68c-2.69.58-3.26-1.14-3.26-1.14-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .86 1.47 2.27 1.05 2.83.8.09-.63.34-1.05.62-1.29-2.15-.24-4.41-1.08-4.41-4.79 0-1.06.38-1.92 1-2.6-.1-.25-.43-1.23.1-2.56 0 0 .82-.26 2.62.99A9.1 9.1 0 0 1 12 8.96c.82 0 1.64.11 2.4.33 1.8-1.25 2.62-.99 2.62-.99.53 1.33.2 2.31.1 2.56.62.68 1 1.54 1 2.6 0 3.72-2.26 4.55-4.42 4.79.35.3.66.88.66 1.78v2.64c0 .25.17.55.67.46A9.5 9.5 0 0 0 12 2.5Z" /></svg>;
  if (label === 'LinkedIn') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.15 7.1A1.55 1.55 0 1 0 5.15 4a1.55 1.55 0 0 0 0 3.1ZM3.8 8.35h2.7v8.7H3.8v-8.7ZM8.2 8.35h2.59v1.19h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.24 1.8 3.24 4.14v4.77h-2.7v-4.23c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.24v4.3H8.2v-8.7Z" /></svg>;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
};

const projects = [
  { tone: 'lime', number: '01 / 03', title: <>Fault-Tolerant<br />Rate Limiter</>, description: 'A production-grade traffic gate built for atomic decisions, high concurrency and graceful degradation when Redis disappears.', tags: ['Spring Boot', 'Redis', 'Lua', 'Docker'], visual: <div className="pulse-diagram"><span /><span /><span /><span /><b>REQUEST<br />FLOW</b></div>, note: <>FILTER-BASED<br />ENFORCEMENT</> },
  { tone: 'teal', number: '02 / 03', title: <>Idempotent<br />Transaction Engine</>, description: 'A double-entry ledger that guarantees exactly-once processing, strict state transitions and balance correctness under concurrency.', tags: ['Spring Boot', 'MySQL', 'Jakarta', 'Locking'], visual: <div className="ledger-diagram"><span>INITIATED</span><i>→</i><span>PROCESSING</span><i>→</i><b>SUCCESS</b></div>, note: <>EXACTLY-ONCE<br />PROCESSING</> },
  { tone: 'cyan', number: '03 / 03', title: <>RAG-Powered<br />Support Assistant</>, description: 'A functional retrieval-augmented generation system that grounds Spring AI answers in internal documents, making support knowledge searchable and explainable.', tags: ['Spring AI', 'RAG', 'LLMs', 'Document Search'], visual: <div className="rag-diagram"><span>DOCS</span><i>→</i><span>RETRIEVE</span><i>→</i><b>ANSWER</b></div>, note: <>15 MIN → UNDER 1 MIN<br />DOCUMENT SEARCH</> },
];

const skillGroups = [
  ['LANGUAGES', [['J', 'Java'], ['Py', 'Python'], ['SQL', 'SQL'], ['</>', 'HTML'], ['JS', 'JavaScript']]],
  ['BACKEND TECHNOLOGIES', [['S', 'Spring Boot'], ['AI', 'Spring AI'], ['R', 'RAG'], ['盾', 'Spring Security'], ['JWT', 'JWT'], ['◈', 'Redis'], ['H', 'Hibernate'], ['JPA', 'JPA'], ['API', 'REST APIs']]],
  ['TOOLS & PLATFORMS', [['MY', 'MySQL'], ['↗', 'Postman'], ['EX', 'Eclipse'], ['VS', 'VS Code'], ['STS', 'STS']]],
  ['CORE CS / DEVOPS', [['OOP', 'OOP'], ['DB', 'DBMS'], ['DSA', 'DSA'], ['TX', 'Transactions'], ['◎', 'Concurrency'], ['SYS', 'System Design'], ['⬡', 'Docker'], ['⌘', 'Git'], ['J', 'Jenkins']]],
  ['FAMILIAR WITH', [['O2', 'OAuth 2.0'], ['⚛', 'React.js'], ['LLM', 'LLMs']],],
];

function useReveal() {
  const [visible, setVisible] = useState(new Set());
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => setVisible((current) => {
      const next = new Set(current);
      entries.forEach((entry) => entry.isIntersecting && next.add(entry.target.dataset.reveal));
      return next;
    }), { threshold: 0.14, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (name, className = '') => `${className} reveal ${visible.has(name) ? 'is-visible' : ''}`;
}

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1200, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);
  return <span ref={counterRef}>{count.toLocaleString()}<span>{suffix}</span></span>;
}

function App() {
  const reveal = useReveal();
  const [active, setActive] = useState('work');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return <>
    <div className="cursor-glow" aria-hidden="true" />
    <header className="site-header"><div className="header-identity"><a className="brand" href="#top"><span className="brand-mark">HB</span><span>HARSH / BHARDWAJ</span></a><div className="header-socials" aria-label="Social profiles">{socials.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} key={label}><SocialIcon label={label} /></a>)}</div></div><nav>{['work', 'technical-skills', 'about'].map((id) => <button className={active === id ? 'active' : ''} onClick={() => scrollTo(id)} key={id}>{id === 'technical-skills' ? 'Skills' : id}</button>)}</nav><button className="header-cta" onClick={() => scrollTo('contact')}>Let’s talk <span>↗</span></button></header>
    <main id="top">
      <section className="hero section-shell"><div className={reveal('hero-copy', 'hero-copy reveal-left')} data-reveal="hero-copy"><p className="eyebrow"><span className="status-dot" /> Backend engineer / Noida, IN</p><h1>Systems that stay <em>sharp</em><br />under pressure.</h1><p className="hero-intro">I’m Harsh, a backend engineer at TCS turning complex business logic into resilient, observable products.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('work')}>Explore my work <span>↓</span></button><a className="text-link" href={cvUrl} download="Harsh_Bhardwaj_cv.pdf">Download CV <span>↗</span></a></div></div><div className={reveal('hero-art', 'hero-art reveal-scale')} data-reveal="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="core-node"><strong>HB</strong><small>BUILD / DEBUG / REPEAT</small></div><span className="float-label label-java">JAVA <b>01</b></span><span className="float-label label-redis">REDIS <b>02</b></span><span className="float-label label-rag">RAG <b>03</b></span><div className="scan-line" /></div><div className={reveal('hero-foot', 'hero-foot reveal-up')} data-reveal="hero-foot"><span>01 — Selected portfolio</span><span>Scroll to inspect ↓</span></div></section>
      <section className="signal-strip"><div className="signal-inner"><span className="signal-label">RECENT SIGNALS</span><div className="signal-track"><span>65% FASTER QUERIES</span><i /><span>70% FEWER INCIDENTS</span><i /><span>40% LOWER LATENCY</span><i /><span>15 MIN → UNDER 1 MIN SEARCH</span></div></div></section>
      <section className={reveal('metrics', 'metrics section-shell reveal-up')} data-reveal="metrics"><div className="section-kicker"><span>01</span><span>IMPACT, MEASURED</span></div><div className="metric-grid"><div className="metric"><strong><Counter value={65} suffix="%" /></strong><p>SQL query performance uplift through smarter logic, indexing and ORM.</p></div><div className="metric"><strong><Counter value={70} suffix="%" /></strong><p>Reduction in production incidents through transactional consistency.</p></div><div className="metric"><strong><Counter value={1799} /></strong><p>Peak LeetCode rating, ranking in the top 8.69% globally.</p></div><div className="metric metric-note"><span className="mini-arrow">↗</span><p>Build systems people can trust, then make them faster.</p></div></div></section>
      <section id="work" className="work section-shell"><div className={reveal('work-heading', 'section-heading reveal-left')} data-reveal="work-heading"><div className="section-kicker"><span>02</span><span>SELECTED WORK</span></div><h2>Proof, not<br /><em>promises.</em></h2></div><div className="project-list">{projects.map((project, index) => <article className={`project-card project-${project.tone} ${reveal(`project-${index}`, 'reveal-right')}`} data-reveal={`project-${index}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-title-row"><h3>{project.title}</h3><span className="project-arrow">↗</span></div><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-aside">{project.visual}<span>{project.note}</span></div></article>)}</div></section>
      <section id="technical-skills" className="stack section-shell"><div className={reveal('skills-heading', 'section-heading reveal-up')} data-reveal="skills-heading"><div className="section-kicker"><span>03</span><span>TECHNICAL SKILLS</span></div><h2>The stack behind<br /><em>the signal.</em></h2></div><div className="stack-layout"><div className={reveal('skills-intro', 'stack-intro reveal-left')} data-reveal="skills-intro"><p>From first principles to production observability, I like understanding how the parts hold together.</p><span className="stack-line" /><span className="mono-note">JAVA IS THE ANCHOR.<br />CURIOSITY IS THE ENGINE.</span></div><div className={reveal('skill-groups', 'skill-groups reveal-scale')} data-reveal="skill-groups">{skillGroups.map(([name, skills]) => <div className="skill-group" key={name}><span className="skill-group-label">{name}</span><div className="skill-chips">{skills.map(([icon, label]) => <span className="skill-chip" key={label}><b>{icon}</b>{label}</span>)}</div></div>)}</div></div></section>
      <section id="about" className="about section-shell"><div className={reveal('about-stamp', 'about-stamp reveal-scale')} data-reveal="about-stamp"><span>EST.</span><strong>2020</strong><small>CS / BUILDER</small></div><div className={reveal('about-copy', 'about-copy reveal-right')} data-reveal="about-copy"><div className="section-kicker"><span>04</span><span>THE SHORT VERSION</span></div><h2>Reliable by<br /><em>design.</em></h2><p>I’m a backend engineer currently at Tata Consultancy Services, where I build Spring Boot services, tune data access and explore the practical edge of AI-assisted support.</p><p>My computer science foundation keeps me close to the fundamentals: data structures, transactions, concurrency and the quiet details that make systems dependable.</p><div className="about-meta"><span><b>EDUCATION</b>B.Tech Computer Science<br />CCS University / 2020—2024</span><span><b>RECOGNITION</b>Special Initiative Award<br />Star Team Award / TCS</span></div></div></section>
      <section id="contact" className={reveal('contact', 'contact section-shell reveal-up')} data-reveal="contact"><div className="contact-top"><div className="section-kicker"><span>05</span><span>OPEN CHANNEL</span></div><span className="contact-index">LET’S MAKE SOMETHING<br />DEPENDABLE.</span></div><h2>Have a hard problem?<br /><em>Good.</em> Say hello.</h2><a className="contact-email" href="mailto:harsh5bhardwaj2@gmail.com">harsh5bhardwaj2@gmail.com <span>↗</span></a><div className="contact-bottom"><span>Harsh Bhardwaj © 2025</span><div>{socials.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>)}</div></div></section>
    </main>
  </>;
}

export default App;