import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BookOpenText,
  Mail,
  Orbit,
  Sparkles,
} from "lucide-react";
import TextType from "./TextType";
import "./styles.css";

const basePath = import.meta.env.BASE_URL;
const asset = (path) => `${basePath}${path.replace(/^\//, "")}`;
const page = (path = "") => `${basePath}${path.replace(/^\//, "")}`;
const sectionLink = (hash) => `${basePath}${hash}`;
const currentPath = window.location.pathname.replace(basePath.replace(/\/$/, ""), "") || "/";

const publications = [
  {
    text: "Cui, S. (2026). Language and time in education: Thinking in the age of generative artificial intelligence. AI & Society.",
    doi: "https://doi.org/10.1007/s00146-026-03148-w",
  },
  {
    text: "Cui, S. (2026). Postdigital education and the GenAI-human relation: Orientalism, paternalism, extractivism. Postdigital Science and Education.",
    doi: "https://doi.org/10.1007/s42438-026-00653-5",
  },
  {
    text: "Cui, S. (2026). From object to home: Rethinking the ontological orientation of Environmental Education. Environmental Education Research.",
    doi: "https://doi.org/10.1080/13504622.2026.2687666",
  },
  {
    text: "Cui, S. (2026). Manufacturing complicity: An analytic autoethnography of emotional labour and moral injury in VET-TESOL education. Journal of Vocational Education & Training.",
    doi: "https://doi.org/10.1080/13636820.2026.2642246",
  },
];

const navCards = [
  {
    title: "Summer",
    subtitle: "Research identity",
    href: sectionLink("#what-i-do"),
    image: asset("media/portrait-01.png"),
    tone: "gold",
  },
  {
    title: "What I do",
    subtitle: "Philosophy x EdTech",
    href: sectionLink("#what-i-do"),
    image: asset("media/portrait-02.png"),
    tone: "sunset",
  },
  {
    title: "Publications",
    subtitle: "APA7 research archive",
    href: sectionLink("#publications"),
    image: asset("media/portrait-03.png"),
    tone: "aqua",
  },
  {
    title: "Blog",
    subtitle: "Essays and notes",
    href: page("blog"),
    image: asset("media/portrait-04.png"),
    tone: "coral",
  },
];

const researchDirections = [
  "Technology and education",
  "Philosophy of education",
  "Higher/vocational education",
];

const figurePanels = [
  { src: asset("media/figure-summer-05.png") },
  { src: asset("media/portrait-02.png") },
  { src: asset("media/portrait-03.png") },
  { src: asset("media/portrait-04.png") },
];

function ShinyText({ text, className = "" }) {
  return <span className={`shiny-text ${className}`}>{text}</span>;
}

function Nav({ compact = false }) {
  return (
    <header className={`site-nav ${compact ? "site-nav--solid" : ""}`}>
      <a className="brand" href={page()}>
        <span className="brand-mark">SC</span>
        <span>Let's find the treasure</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href={sectionLink("#what-i-do")}>What I do</a>
        <a href={sectionLink("#publications")}>Publications</a>
        <a href={page("blog")}>Blog</a>
        <a href={sectionLink("#contact")}>Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  const revealRef = useRef(null);

  const moveReveal = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", `${x}px`);
      revealRef.current.style.setProperty("--my", `${y}px`);
    }
  };

  const hideReveal = () => {
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", "-9999px");
      revealRef.current.style.setProperty("--my", "-9999px");
    }
  };

  return (
    <section className="hero" id="top" onPointerMove={moveReveal} onPointerLeave={hideReveal}>
      <div className="hero-video" aria-hidden="true">
        <img src={asset("media/hero-01.png")} alt="" />
        <img src={asset("media/hero-02.png")} alt="" />
        <img src={asset("media/hero-03.png")} alt="" />
      </div>
      <div className="hero-reveal" ref={revealRef} aria-hidden="true">
        <img src={asset("media/hero-01.png")} alt="" />
        <img src={asset("media/hero-02.png")} alt="" />
        <img src={asset("media/hero-03.png")} alt="" />
      </div>
      <div className="hero-tint" />
      <Nav />
      <div className="hero-inner">
        <p className="eyebrow">Education philosophy x educational technology</p>
        <TextType
          tag="h1"
          text={["Summer's Space"]}
          typingSpeed={95}
          showCursor
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
        />
        <TextType
          tag="p"
          className="hero-copy"
          text={["You've found my secret base!"]}
          typingSpeed={48}
          showCursor
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
          startDelay={1550}
        />
        <div className="hero-actions">
          <a className="glass-button" href={sectionLink("#publications")}>
            <BookOpenText size={18} />
            Publications
          </a>
          <a className="text-button" href={page("blog")}>
            Read the blog
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="character-nav" aria-label="Featured site navigation">
        {navCards.map((card) => (
          <a className={`character-card character-card--${card.tone}`} href={card.href} key={card.title}>
            <img src={card.image} alt="" />
            <span>{card.title}</span>
            <small>{card.subtitle}</small>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="section intro" id="what-i-do">
      <div className="section-kicker">
        <Sparkles size={18} />
        Summer Cui
      </div>
      <div className="intro-grid">
        <div>
          <h2>
            <ShinyText text="Researching the philosophical conditions of education in technological life." />
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Summer's work sits at the intersection of philosophy of education, digital culture,
            and social theory. She is interested in how education, technology, work, and public
            life shape human lives and self-understanding, with particular interests in generative
            AI in education, postdigital education, international student experience, educational
            professionalism, work and occupation, and questions of death and finitude.
          </p>
          <div className="direction-card glass">
            <span>Research directions</span>
            <div>
              {researchDirections.map((direction) => (
                <strong key={direction}>{direction}</strong>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="figure-ribbon" aria-label="Summer research figures">
        {figurePanels.map((panel, index) => (
          <figure className={`figure-panel figure-panel--${index + 1}`} key={panel.src}>
            <img src={panel.src} alt="" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section className="section publications" id="publications" style={{ "--publications-image": `url(${asset("media/publications-bg.png")})` }}>
      <div className="publications-bg" aria-hidden="true" />
      <div className="lightfall" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="split-heading">
        <p className="eyebrow">Summer's publications</p>
      </div>
      <div className="publication-list">
        {publications.map((publication) => (
          <article className="publication" key={publication.doi}>
            <p>
              {publication.text}{" "}
              <a href={publication.doi} target="_blank" rel="noreferrer">
                {publication.doi}
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogPreview() {
  const revealRef = useRef(null);

  const moveReveal = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", `${x}px`);
      revealRef.current.style.setProperty("--my", `${y}px`);
    }
  };

  const hideReveal = () => {
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", "-9999px");
      revealRef.current.style.setProperty("--my", "-9999px");
    }
  };

  return (
    <section className="section blog-preview" onPointerMove={moveReveal} onPointerLeave={hideReveal}>
      <div className="blog-preview-media" aria-hidden="true">
        <img src={asset("media/blog-cycle-01.png")} alt="" />
        <img src={asset("media/blog-cycle-02.png")} alt="" />
      </div>
      <div className="blog-preview-reveal" ref={revealRef} aria-hidden="true">
        <img src={asset("media/blog-cycle-01.png")} alt="" />
        <img src={asset("media/blog-cycle-02.png")} alt="" />
      </div>
      <div>
        <p className="eyebrow">Blog</p>
        <h2>Essays, field notes, and fragments for slower thinking.</h2>
      </div>
      <a className="glass-button dark" href={page("blog")}>
        Open Blog
        <ArrowUpRight size={18} />
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>For research conversations, collaborations, and speaking invitations.</h2>
      </div>
      <div className="contact-card glass">
        <a href="mailto:summer.cui@unimelb.edu.au">
          <Mail size={19} />
          summer.cui@unimelb.edu.au
        </a>
        <a href="https://orcid.org/0009-0009-2463-1708" target="_blank" rel="noreferrer">
          <Orbit size={19} />
          ORCID 0009-0009-2463-1708
        </a>
        <a href="https://findanexpert.unimelb.edu.au/profile/1096383-summer-cui" target="_blank" rel="noreferrer">
          <BookOpenText size={19} />
          University of Melbourne profile
        </a>
        <a href="https://scholar.google.com.au/citations?user=VMSnLZMAAAAJ&hl=en" target="_blank" rel="noreferrer">
          <ArrowUpRight size={19} />
          Google Scholar
        </a>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <WhatIDo />
        <Publications />
        <BlogPreview />
        <Contact />
      </main>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Nav compact />
      <main className="blog-page">
        <div className="blog-motion" aria-hidden="true">
          <img src={asset("media/hero-01.png")} alt="" />
          <img src={asset("media/hero-02.png")} alt="" />
          <img src={asset("media/hero-03.png")} alt="" />
        </div>
        <section className="blog-hero">
          <p className="eyebrow">Summer's Blog</p>
          <h1>Notes toward a more answerable education.</h1>
          <p>
            A separate writing room for essays on GenAI, philosophy of education, language,
            environmental dwelling, and the lived textures of teaching.
          </p>
        </section>
        <section className="blog-grid">
          {[
            ["Coming soon", "Thinking after the prompt"],
            ["Coming soon", "What remains unautomated in education?"],
            ["Coming soon", "From object to home"],
          ].map(([date, title]) => (
            <article className="blog-card glass" key={title}>
              <span>{date}</span>
              <h2>{title}</h2>
              <p>
                Placeholder for Summer's upcoming essay. The structure is ready for long-form
                posts, reading notes, and research reflections.
              </p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

function App() {
  const isBlog = currentPath === "/blog";
  return isBlog ? <BlogPage /> : <HomePage />;
}

createRoot(document.getElementById("root")).render(<App />);
