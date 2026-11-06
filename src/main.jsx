import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, ArrowRight, Github, Linkedin, Mail,
  Phone, Menu, X, Sparkles, BrainCircuit, Workflow, Code2, ExternalLink,
  ChevronDown, Terminal, Layers3, Bot, MonitorSmartphone, Send, MapPin
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    id: "01",
    category: "AGENTIC AI · SOCIAL MEDIA",
    title: "Social Media Growth AI",
    subtitle: "An agentic system for multi-client social media workflows.",
    description: "A multi-client dashboard designed to bring social media planning, AI-assisted content drafting and client activity monitoring into one workflow.",
    challenge: "Managing social media work across multiple clients can fragment planning, drafting and performance visibility across separate tools.",
    approach: [
      "Built a multi-client dashboard for social media planning, content drafting and client activity monitoring.",
      "Developed Python and LangGraph agentic workflows for LLM-assisted content planning and generation.",
      "Added a human-in-the-loop review and approval step before content is published.",
      "Included client-wise growth tracking and workflow visibility for performance monitoring."
    ],
    stack: ["Python", "LangGraph", "LLMs", "React.js", "API Integration"],
    outcome: "A unified workflow concept that combines AI-assisted planning with human review and client-level visibility.",
    link: "https://brain-growth-dashboard.vercel.app/",
    linkLabel: "Open live demo",
    number: "01",
    visual: "orbit"
  },
  {
    id: "02",
    category: "CONVERSATIONAL AI · HOSPITALITY",
    title: "Restaurant / Cafe AI Assistant",
    subtitle: "Conversational booking support for hospitality businesses.",
    description: "A conversational AI assistant designed to handle natural-language restaurant and cafe reservation requests through customer-facing and admin workflows.",
    challenge: "Reservation requests need to be captured clearly while giving customers a natural way to explain what they need.",
    approach: [
      "Developed a conversational AI assistant for natural-language restaurant and cafe reservation requests.",
      "Implemented customer-facing booking conversations and reservation-request capture.",
      "Created admin workflows to review and manage booking conversations and requests."
    ],
    stack: ["Conversational AI", "LLM Integration", "API Integration"],
    outcome: "A customer-facing conversational flow paired with admin-side review and request management.",
    link: "https://frontend-nu-seven-99.vercel.app/",
    linkLabel: "Open live demo",
    number: "02",
    visual: "chat"
  },
  {
    id: "03",
    category: "FULL-STACK · AUTOMATION",
    title: "Email Automation System",
    subtitle: "A full-stack workflow for scheduled outreach and follow-ups.",
    description: "A web application built to organize email outreach, recurring message scheduling and follow-up workflows with SMTP-based delivery.",
    challenge: "Outreach sequences require consistent scheduling and follow-up management rather than disconnected, manually triggered messages.",
    approach: [
      "Built a full-stack email outreach system with recurring scheduling and automated follow-ups.",
      "Integrated SMTP delivery for sending email messages.",
      "Created a centralized workflow for managing email outreach activities."
    ],
    stack: ["React.js", "Node.js", "MongoDB", "SMTP"],
    outcome: "A centralized email outreach workflow with recurring scheduling and follow-up support.",
    link: "https://email-automation-system-phi.vercel.app/",
    linkLabel: "Open live demo",
    number: "03",
    visual: "mail"
  },
  {
    id: "04",
    category: "PRODUCT DESIGN · ENTERPRISE SAAS",
    title: "Customer Care Portal",
    subtitle: "A unified enterprise dashboard experience for customer operations.",
    description: "A UI/UX design concept for user and admin experiences spanning enquiries, CRM, fulfilment, logistics and after-sales support workflows.",
    challenge: "Customer operations can span several connected functions, making it important to give users and administrators a clear place to manage each workflow.",
    approach: [
      "Designed user and admin dashboards for customer enquiries and lead management (CRM).",
      "Designed order fulfilment and logistics tracking interfaces.",
      "Incorporated complaint management and warranty / claims workflows."
    ],
    stack: ["UI/UX Design", "Enterprise Dashboard", "CRM Workflows"],
    outcome: "A connected dashboard experience covering key customer-care and order-support touchpoints.",
    link: "",
    linkLabel: "",
    number: "04",
    visual: "dashboard"
  }
];

const skillGroups = [
  { title: "Generative AI & Automation", icon: BrainCircuit, items: ["Generative AI", "LLMs", "Prompt Engineering", "LangGraph", "LangChain", "Conversational AI", "AI Automation", "Human-in-the-Loop", "OpenAI / Anthropic API"] },
  { title: "Programming", icon: Code2, items: ["Python", "JavaScript", "PHP", "C++"] },
  { title: "Full-Stack Development", icon: Layers3, items: ["React.js", "Node.js", "REST APIs", "MongoDB", "MySQL", "SMTP", "HTML", "CSS", "WordPress"] },
  { title: "Tools", icon: Terminal, items: ["Git / GitHub", "Playwright", "Puppeteer", "OpenCV", "FFmpeg", "VS Code"] }
];

function ProjectVisual({ type }) {
  if (type === "orbit") return <div className="visual visual-orbit"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><div className="orbit-core"><BrainCircuit size={34}/></div><span className="orbit-node n1">PLAN</span><span className="orbit-node n2">DRAFT</span><span className="orbit-node n3">REVIEW</span><span className="orbit-node n4">GROW</span></div>;
  if (type === "chat") return <div className="visual visual-chat"><div className="chat-window"><div className="chat-top"><i/><i/><i/><span>booking-assistant</span></div><div className="bubble bot">Welcome! How can I help with your reservation?</div><div className="bubble user">A table for two this evening, please.</div><div className="bubble bot short">Of course — let's capture your request.</div><div className="chat-input">Type a message… <Send size={13}/></div></div></div>;
  if (type === "mail") return <div className="visual visual-mail"><div className="mail-card"><div className="mail-icon"><Mail size={27}/></div><div className="mail-line wide"/><div className="mail-line"/><div className="mail-line small"/><div className="mail-schedule"><span className="pulse"/> RECURRING SEQUENCE <ArrowRight size={14}/></div></div><div className="mail-stamp">AUTO<br/>FOLLOW-UP</div></div>;
  return <div className="visual visual-dashboard"><div className="dash-side"><b>CC.</b><span/><span/><span/><span/></div><div className="dash-main"><div className="dash-head">Customer overview</div><div className="dash-metrics"><i/><i/><i/></div><div className="dash-chart"><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="dash-rows"><i/><i/><i/></div></div></div>;
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("priyanshulohar18@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:priyanshulohar18@gmail.com";
    }
  };

  return <div className="site-shell">
    <div className="noise"/>
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">PL</span><span>PRIYANSHU LOHAR<span className="brand-sub">AI APPLICATION DEVELOPER</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
        <a href="#about" onClick={closeMenu}>About <span>02</span></a>
        <a href="#skills" onClick={closeMenu}>Skills <span>03</span></a>
        <a href="#experience" onClick={closeMenu}>Experience <span>04</span></a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero section-pad">
        <div className="hero-grid"/>
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR REMOTE OPPORTUNITIES <span className="eyebrow-line"/></div>
          <h1>Building intelligent<br/><em>digital experiences.</em></h1>
          <p className="hero-lead">I’m Priyanshu — an AI Application Developer exploring the space where <strong>Generative AI, automation and full-stack engineering</strong> come together.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="mailto:priyanshulohar18@gmail.com">Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> Ahmedabad / Rajasthan, India</span><span className="meta-sep"/> <span>REMOTE · INDIA</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract AI workflow illustration">
          <div className="art-label label-top">SYSTEMS / 001</div>
          <div className="art-grid"/>
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/><div className="art-orbit orbit-c"/>
          <div className="art-center"><Sparkles size={35}/><span>IDEAS → SYSTEMS</span></div>
          <div className="art-node node-a"><BrainCircuit size={17}/><span>LLM</span></div>
          <div className="art-node node-b"><Workflow size={17}/><span>AGENTS</span></div>
          <div className="art-node node-c"><Code2 size={17}/><span>BUILD</span></div>
          <div className="art-label label-bottom">THINK · BUILD · ITERATE</div>
          <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/></div>
      </section>

      <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">{["GENERATIVE AI","AGENTIC WORKFLOWS","FULL-STACK DEVELOPMENT","AI AUTOMATION","PRODUCT THINKING","GENERATIVE AI","AGENTIC WORKFLOWS","FULL-STACK DEVELOPMENT"].map((x,i)=><span key={i}>{x}<b>✳</b></span>)}</div></section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Projects with a<br/><em>purpose.</em></h2></div><p>A closer look at the products, workflows and interfaces I’ve been building — from agentic AI to full-stack automation.</p></div>
        <div className="project-list">
          {projects.map((p) => <article className="project-card" key={p.id}>
            <button className="project-open" onClick={() => setActiveProject(p)} aria-label={`View ${p.title} details`}>
              <div className="project-visual-wrap"><ProjectVisual type={p.visual}/><span className="project-index">{p.number} / 04</span></div>
              <div className="project-info"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.subtitle}</p><div className="project-bottom"><span>{p.link ? "VIEW CASE STUDY" : "VIEW DESIGN CASE STUDY"} <ArrowUpRight size={15}/></span><span className="project-arrow"><ArrowUpRight size={19}/></span></div></div>
            </button>
          </article>)}
        </div>
      </section>

      <section className="statement-section section-pad" aria-label="Design approach">
        <p>Useful technology starts with a clear idea.<br/><em>Thoughtful systems make it real.</em></p>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-heading"><div><div className="eyebrow">02 / A LITTLE ABOUT ME</div><h2>Curious by nature.<br/><em>Builder by choice.</em></h2></div></div>
        <div className="about-layout"><div className="about-statement"><span className="quote-mark">“</span><p>I enjoy turning complex ideas into practical digital experiences — especially when intelligent systems can make everyday workflows simpler.</p></div><div className="about-detail"><p>I’m a Computer Science graduate with experience across full-stack development, business operations and hands-on projects in Generative AI and workflow automation.</p><p>My work brings together Python, LangGraph, LLM integrations and web technologies. I’m interested in building useful AI-powered applications with thoughtful user experiences and clear human oversight.</p><div className="about-tags"><span>AI APPLICATIONS</span><span>WORKFLOW DESIGN</span><span>FULL-STACK</span></div></div></div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-heading"><div><div className="eyebrow">03 / TOOLKIT</div><h2>Tools of the<br/><em>trade.</em></h2></div><p>A practical toolkit for prototyping, integrating and shipping digital products.</p></div>
        <div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <div className="skill-card" key={group.title}><div className="skill-card-head"><Icon size={20}/><span>CAPABILITY</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></div>})}</div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-heading"><div><div className="eyebrow">04 / EXPERIENCE</div><h2>Where I’ve<br/><em>contributed.</em></h2></div><p>Professional experience spanning AI initiatives, digital operations and web application development.</p></div>
        <div className="timeline">
          <div className="timeline-item"><div className="timeline-date">JAN 2026 — PRESENT</div><div className="timeline-main"><h3>Junior Digital Marketing Associate</h3><div className="timeline-company">MP Consulting, LLC · Ahmedabad · On-site</div><ul><li>Contribute to AI application and workflow automation using Python, LLMs and API integrations.</li><li>Support B2B lead generation and digital marketing; prepare prospect databases and verified contact lists.</li><li>Manage social media and marketing activities; maintain daily PLM data updates.</li></ul></div></div>
          <div className="timeline-item"><div className="timeline-date">SEP 2025 — DEC 2025</div><div className="timeline-main"><h3>Full Stack Developer Intern</h3><div className="timeline-company">AppOrigo Technologies · Remote</div><ul><li>Contributed to web application development, including responsive interfaces, backend logic, API integration and databases.</li><li>Collaborated with teammates to debug issues, improve functionality and use version control.</li></ul></div></div>
          <div className="timeline-item"><div className="timeline-date">JAN 2023 — DEC 2024</div><div className="timeline-main"><h3>Web Development & Customer Engagement</h3><div className="timeline-company">Alankar Die Cast Private Limited</div><ul><li>Designed and developed responsive website UI/UX and supported customer engagement.</li><li>Supported workflow improvements across web, product design and 3D/CAD-CAM tasks.</li></ul></div></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-glow"/>
        <div className="eyebrow">05 / HAVE A PROJECT IN MIND?</div>
        <h2>Let’s build something<br/><em>meaningful.</em></h2>
        <p>Open to opportunities in AI application development, Generative AI and automation.</p>
        <div className="contact-actions"><a className="button button-primary" href="mailto:priyanshulohar18@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><button className="button button-outline" onClick={copyEmail}><Mail size={16}/>{copied ? "Email copied" : "Copy email"}</button></div>
        <div className="contact-details"><a href="mailto:priyanshulohar18@gmail.com"><Mail size={15}/> priyanshulohar18@gmail.com</a><a href="tel:+919672158903"><Phone size={15}/> +91 9672158903</a></div>
      </section>
    </main>

    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">PL</span><span>PRIYANSHU LOHAR<span className="brand-sub">AI APPLICATION DEVELOPER</span></span></a><span className="footer-note">DESIGNED & BUILT WITH INTENTION · 2026</span><div className="socials"><a href="https://github.com/priyanshulohar8233" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/priyanshu-lohar-82b7201a7" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:priyanshulohar18@gmail.com" aria-label="Email"><Mail size={17}/></a></div></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setActiveProject(null);}}>
      <section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button className="modal-close" onClick={()=>setActiveProject(null)} aria-label="Close project details"><X/></button>
        <div className="modal-kicker">CASE STUDY / {activeProject.id} <span>{activeProject.category}</span></div>
        <div className="modal-visual"><ProjectVisual type={activeProject.visual}/></div>
        <h2 id="case-title">{activeProject.title}</h2><p className="modal-subtitle">{activeProject.description}</p>
        <div className="case-block"><div className="case-label">THE CHALLENGE</div><p>{activeProject.challenge}</p></div>
        <div className="case-block"><div className="case-label">WHAT I BUILT</div><ul>{activeProject.approach.map((line,i)=><li key={i}>{line}</li>)}</ul></div>
        <div className="case-block"><div className="case-label">OUTCOME</div><p>{activeProject.outcome}</p></div>
        <div className="case-block"><div className="case-label">TECH / FOCUS</div><div className="modal-tags">{activeProject.stack.map(s=><span key={s}>{s}</span>)}</div></div>
        {activeProject.link && <a className="button button-primary modal-link" href={activeProject.link} target="_blank" rel="noreferrer">{activeProject.linkLabel} <ExternalLink size={16}/></a>}
        {!activeProject.link && <div className="modal-note">Design project · No public demo link listed</div>}
      </section>
    </div>}
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
