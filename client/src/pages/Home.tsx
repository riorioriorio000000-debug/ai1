import { ArrowDown, ArrowUpRight, ChevronDown, Download, Github, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Products", "Community", "Resources"];

const sections = [
  {
    id: "operate",
    eyebrow: "Operate",
    title: "Your agents, working around the clock.",
    body: "Hires, schedules, and reports on your entire AI team.",
    items: ["More productivity. Fewer tools", "IM Gateway"],
    art: "operate",
  },
  {
    id: "create",
    eyebrow: "Create",
    title: "Build your AI team in one sentence.",
    body: "Describe what you need once, and the agent setup starts right away.",
    items: ["Unified Intelligence", "10,000+ Skills"],
    art: "create",
  },
  {
    id: "collaborate",
    eyebrow: "Collaborate",
    title: "Scale new forms of collaboration.",
    body: "Agent Groups let you work with agents like real teammates.",
    items: ["Pages", "Schedule", "Project", "Workspace"],
    art: "collaborate",
  },
  {
    id: "evolve",
    eyebrow: "Evolve",
    title: "The more you work, the more they know.",
    body: "Personal Memory builds a clear understanding of your needs.",
    items: ["Continual Learning", "White-Box Memory"],
    art: "evolve",
  },
];

function ProductArt({ type }: { type: string }) {
  return (
    <div className={`product-art ${type}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-topbar"><i /><i /><i /><span>LobeHub</span></div>
        <div className="art-body">
          <div className="art-sidebar"><b /><b /><b /><b /><b /><b /></div>
          <div className="art-content">
            <div className="art-line wide" /><div className="art-line" />
            <div className="art-card"><div className="art-avatar" /><div><div className="art-line small" /><div className="art-line tiny" /></div></div>
            <div className="art-card second"><div className="art-dot" /><div><div className="art-line medium" /><div className="art-line tiny" /></div></div>
          </div>
        </div>
      </div>
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LobeHub">
          <span className="brand-mark"><span>✦</span></span><span>LobeHub</span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ChevronDown size={13} /></a>)}
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="https://github.com/lobehub/lobehub" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}><Github size={14} />GitHub</a>
          <a className="header-cta" href="https://app.lobehub.com/?utm_source=landing&utm_content=hero_get_started&utm_medium=home_hero">Get started</a>
        </nav>
        <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="hero-copy reveal">
            <h1>Your Chief Agent <em>Operator</em></h1>
            <p>LobeHub organizes your agents into 7×24 operation. It hires, schedules, reports on your entire AI team. You stay in charge — without staying online.</p>
            <div className="hero-actions"><a className="button dark" href="https://app.lobehub.com/?utm_source=landing&utm_content=hero_get_started&utm_medium=home_hero">Get started for free <ArrowUpRight size={16} /></a><a className="button light" href="/downloads">Download <Download size={16} /></a></div>
          </div>
          <div className="hero-product reveal delay-one"><img src="https://lobehub.com/img/hub/images/home/overview-cao-light.webp" alt="LobeHub Overview" /></div>
        </section>

        <section className="trust-strip"><span>Trusted by teams worldwide</span><div className="trust-dots"><i /><i /><i /><i /><i /></div></section>

        <section className="intro-section" id="products"><span className="section-kicker">One space for your AI team</span><h2>From one-off tasks to <span>entire operations.</span></h2><p>Today’s agents are one-off, task-driven tools. LobeHub changes everything.</p></section>

        <div className="feature-sections">
          {sections.map((section, index) => <section className={`feature-row ${index % 2 ? "reverse" : ""}`} id={section.id} key={section.id}>
            <div className="feature-copy"><span className="section-kicker">{section.eyebrow}</span><h2>{section.title}</h2><p>{section.body}</p><div className="feature-list">{section.items.map(item => <span key={item}><b>✦</b>{item}</span>)}</div></div><ProductArt type={section.art} />
          </section>)}
        </div>

        <section className="market-section" id="community"><div className="market-copy"><span className="section-kicker">Community</span><h2>Everything your agents need to get work done.</h2><p>Connect your agents to the skills you use every day with a library of tools and MCP-compatible plugins.</p><a className="text-link" href="https://lobehub.com/market">Skills Marketplace <ArrowUpRight size={16} /></a></div><div className="market-card"><div className="market-header"><span>Skills Marketplace</span><span className="live-dot">● Live</span></div><div className="market-search">⌕&nbsp; Search skills</div><div className="skill-grid"><span>Research</span><span>Writing</span><span>Browser</span><span>Data</span><span>Design</span><span>Code</span></div><strong>100,243+ MCP Servers</strong></div></section>

        <section className="final-cta" id="resources"><div className="final-orb" /><span className="section-kicker">LobeHub</span><h2>You stay in charge —<br /><em>without staying online.</em></h2><a className="button dark" href="https://app.lobehub.com/?utm_source=landing&utm_content=hero_get_started&utm_medium=home_hero">Get started for free <ArrowUpRight size={16} /></a><a className="button light" href="/downloads">Download <Download size={16} /></a></section>
      </main>

      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark"><span>✦</span></span><span>LobeHub</span></a><div className="footer-links"><a href="https://lobehub.com/docs/usage/start">Documents</a><a href="https://lobehub.com/blog">Blog</a><a href="https://github.com/lobehub/lobehub/issues">Feedback</a><a href="https://discord.gg/AYFPHvv2jT">Join Discord</a></div><span className="footer-note">Open source AI Agent playground</span></footer>
    </div>
  );
}

void ArrowDown;
