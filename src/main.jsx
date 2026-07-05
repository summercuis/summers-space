import React, { useEffect, useRef, useState } from "react";
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
const currentPath = window.location.pathname.replace(basePath.replace(/\/$/, ""), "").replace(/\/$/, "") || "/";

const publications = [
  {
    text: "Cui, S. (2026). The predicament of saying: Writing the unsayable in interpretivist qualitative educational research. International Journal of Qualitative Studies in Education.",
    doi: "https://doi.org/10.1080/09518398.2026.2698452",
  },
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
    subtitle: "My interests",
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

const whatIDoMenu = [
  ["Research Interests", page("research-interests")],
  ["Projects", page("projects")],
  ["Teaching & Service", page("teaching-service")],
];

const researchEssay = [
  "As an only child, I grew up immersed in a quiet no one ever interrupted, turning over whatever lay within reach, curious about everything around me. My father’s anatomy textbooks, my mother’s art books, and my comics were always tangled up together. There was a map of the world in the study, and I once drew a butterfly on it. The butterfly was not a metaphor for anything — in a childhood in the nineties, butterflies were simply everywhere, and a butterfly is easier to draw than a mantis or a snail. To everyone else I seemed a quiet child; I was always thinking, always watching. Though of course, like any child, I also draped a blanket over my head and played at being someone off the television.",
  "So what does experience mean? I have made butterfly specimens; I have seen caterpillars; but the moment of transformation itself I have never actually seen. Once, in Melbourne, thinking about questions like these, a curtain suddenly came down. I stood watching it, unbearably on edge. The curtain was meant to be where it had always been — and it had fallen, and I did not know how to fix it. Why had it come down? What was wrong with it? I couldn’t bear it. For the first time I walked into a Bunnings, bought a few tools, and went home to mend it myself. Why had I never run into anything like this before? In all the days I once spent alone at home, none of it had ever happened — or was it simply that I had grown up?",
  "I never saw it happen — not the butterfly, not the curtain, not whatever it is that turns a child who waits to be looked after into someone who buys her own tools. Only the before, and the after, and me somewhere in the middle of it, holding a screwdriver I hadn’t known I owned.",
  "All of this, I suspect, is what shaped what I now study. I feel a closeness to Heidegger’s phenomenology — to the way a curtain, like a hammer, only announces itself when it stops working; to Dewey’s pragmatism, in which we come to know a thing by doing it, tools in hand; to Hans Jonas’s philosophy of life, which takes seriously the caterpillar, the organism, the sheer strangeness of a being that remakes itself; and, past all of these, to whatever room philosophy keeps for questions that refuse to close.",
  "In what we now call the digital — or, as some prefer, the postdigital — age, the old question only sharpens: what does experience mean, when so much of the doing can be done for us? Had I never walked into that shop, had the curtain been quietly mended before I noticed it had fallen, would I have grown up at all? That, more or less, is what I study — what becomes of experience, and of the one who undergoes it, when the moment of transformation is not only unseen, as it always was, but increasingly carried out somewhere else.",
];

const blogPosts = [
  {
    slug: "zoo-as-screen",
    date: "01 May 2026",
    title: "Zoo as screen",
    excerpt: "when the closeness is delivered entirely by machines, what do the machines actually make?",
    image: asset("media/blog-zoo-as-screen.png"),
    figures: [
      {
        src: asset("media/blog-zoo-figure-01.png"),
        label: "Figure 1",
        caption: "Werribee safari bus and the giraffe through the phone.",
      },
      {
        src: asset("media/blog-zoo-figure-02.png"),
        label: "Figure 2",
        caption: "The animal collage after the zoo.",
      },
      {
        src: asset("media/blog-zoo-figure-03.png"),
        label: "Figure 3",
        caption: "The same afternoon as a comic panel.",
      },
      {
        src: asset("media/blog-zoo-figure-04.png"),
        label: "Figure 4",
        caption: "Sailor warriors on drink cans.",
      },
      {
        src: asset("media/blog-zoo-figure-05.png"),
        label: "Figure 5",
        caption: "Ultraman and Goku on the shelf.",
      },
    ],
    paragraphs: [
      "A zoo is a place people go to be near animals. Everything that arranges the nearness, the bus, the fence, the raised path, the phone in my hand, the editing app on the phone, the cartoon drink can in the grocery, is a piece of technology. So here is the question: when the closeness is delivered entirely by machines, what do the machines actually make? The animal? Me? Or some relation between us that neither of us asked for?",
      "I am on the safari bus at Werribee and a giraffe stands a few metres off, out in the open, and I am watching it through my phone. The giraffe is right there. In my hand is a small bright rectangle of the giraffe, and that is what I am looking at. Almost everyone on the bus is holding up the same rectangle. It would be easy to make this a story about distraction, about how we have forgotten how to just look. I want to resist that story, because the story is too flattering. It assumes there was a direct giraffe available to me, and that I chose the screen over it out of some modern weakness. The truth is quieter and stranger. The available giraffe was already a managed one. The bus, the open range, the measured distance, the whole design had arranged how the animal was allowed to appear before I lifted my phone. I was going to receive the giraffe as a sight either way. The phone made the arrangement plain by adding one more sheet of glass to the glass already there.",
      "This is the thing about the apparatus. It presents itself as a way of bringing you close, and closeness is exactly what it manages, meters, and holds one step short of happening. In Guangzhou I grew up going to Chimelong, the safari park where a small sightseeing train carries you through the enclosures while the animals stand or sleep a careful distance from the rail. For years I thought of that train as a private childhood detail, something belonging to one city and one girl. The train belongs to no city in particular. Werribee has its bus, Chimelong has its train, and the sameness is the point. Both are machines for moving a human body past an animal body along a fixed path, close enough to see, arranged to stay beyond touch. The form travels. What it produces is a reliable, repeatable, safe encounter with something that is supposed to be wild.",
      "Look at what the encounter becomes once I take it home. Here is the collage I assembled that evening. Ostrich, zebra, rhino, gorilla, a lion asleep in the bark, and along the bottom in soft gold script, a line I added: you are backlit with all the good things in this world. Read who that sentence is about. The rhino has no idea it is backlit with anything. The line faces me. I drove to the edge of the city to see a rhinoceros and I came back with a sentence about my own life, and somewhere in the editing the rhino slid into place as the lighting for it. Then the same afternoon became a comic. BOOM. POW. SUPER FUN. A speech bubble where I tell my friends I love them and the day is saved. The hand painted signs inside the park had already turned a lion into a cheerful yellow shape with an arrow, a cartoon before I arrived, and my hands carried the cartoon one step further, until the visit was a panel in a story where I play the happy hero.",
      "A few days later the fridge in the Asian grocery is full of the identical operation. Sailor warriors named for the planets and the moon. Goku frozen at the peak of a transformation. Ultraman, whose whole existence is to fight the giant monsters, shrunk to a smiling figure on a can of pear soda for two dollars ninety nine. These are beings of force and metamorphosis, the kind of thing meant to be too large or too fierce to hold in the hand, and here they are, sized to fit the hand, sweet, drinkable. I buy the pear one. I want to be exact about where I stand in this. I am one more pair of hands reaching into the fridge, doing to Goku what the bus did to the giraffe.",
      "Now I can say what the machines make, and it is why mirror is the wrong word. A mirror returns a self that already stood there. These devices go further. The bus, the phone, the filter, the caption, the can, they manufacture a particular me and a particular animal in one motion and hand me both as a discovery. The me they produce is the feeling one, the moved and grateful tourist, backlit with good things. The animal they produce is the one that fits inside that feeling, cute, cooperative, available, complete. The giraffe as image and I as its warm spectator come off the same press.",
      "This also names the single thing the circuit is built to withhold. To really see an animal would be to stand where it could see me back, where its look could land on me and find me wanting, or find me beside the point, or pass over me the way it passes a fence post. Sight that is bodily and mutual exposes the one who looks. Glass and a lens keep that exposure away. On the bus I watch the giraffe in complete safety, because the giraffe watches nothing, and its indifference stays sealed behind the frame. Cuteness is my name for this whole arrangement. A cute thing is an other with its power to unsettle switched off. Goku on the can, the lion on the sign, the rhino in the gold light, the giraffe in the rectangle, each has had the same faculty removed, the faculty to look back and disturb.",
      "At the start I asked what the machines make. The animal, me, or some relation neither of us asked for. Here is the answer. They make a me, a satisfied and well lit visitor, and they make an animal, cute and cooperative and ready for the camera, and both come off the same press in a single motion. The apparatus was mine, the wanting was mine, the bright rectangle was mine, and all of it worked to hand the afternoon back to me as something warm. Werribee runs a bus that carries you past the animals along a fixed line, Chimelong in Guangzhou runs a small sightseeing train that does the same, and the sameness is the whole point, a human body moved past an animal body close enough to see and arranged to stay beyond its reach. The giraffe stood three metres off in the open, complete in itself, its attention somewhere else entirely. That indifference was the one genuinely other thing in the whole afternoon, and it was the one thing the screen let pass, the filter left plain, the can left on the shelf. The giraffe was there. I held a screen up to my face and watched it the whole way.",
    ],
  },
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

function DecryptedText({
  text,
  tag: Tag = "span",
  className = "",
  speed = 48,
  maxIterations = 16,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?*",
}) {
  const ref = useRef(null);
  const startedRef = useRef(false);
  const [displayText, setDisplayText] = useState(text);
  const [encrypted, setEncrypted] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayText(text);
      setEncrypted(false);
      return undefined;
    }

    let intervalId;
    const runAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      let iteration = 0;

      intervalId = window.setInterval(() => {
        iteration += 1;
        const revealedCount = Math.ceil((iteration / maxIterations) * text.length);
        const nextText = text
          .split("")
          .map((character, index) => {
            if (character === " " || character === "," || character === "." || character === "&") {
              return character;
            }
            if (index < revealedCount) return character;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");

        setDisplayText(nextText);

        if (iteration >= maxIterations) {
          window.clearInterval(intervalId);
          setDisplayText(text);
          setEncrypted(false);
        }
      }, speed);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [characters, maxIterations, speed, text]);

  return (
    <Tag
      ref={ref}
      className={`decrypted-text ${encrypted ? "is-encrypted" : "is-revealed"} ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">{displayText}</span>
    </Tag>
  );
}

function ButterflyBurst() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    let cleanupTimer;

    const releaseButterflies = (event) => {
      const burstId = `${Date.now()}-${Math.random()}`;
      const nextButterflies = Array.from({ length: 6 }, (_, index) => {
        const angle = -150 + index * 58 + Math.random() * 24;
        const distance = 54 + Math.random() * 78;
        const radians = (angle * Math.PI) / 180;
        return {
          id: `${burstId}-${index}`,
          x: event.clientX,
          y: event.clientY,
          dx: Math.cos(radians) * distance,
          dy: Math.sin(radians) * distance - 48 - Math.random() * 42,
          delay: index * 22,
          scale: 0.72 + Math.random() * 0.58,
          rotate: -28 + Math.random() * 56,
        };
      });

      setButterflies((current) => [...current, ...nextButterflies].slice(-36));
      cleanupTimer = window.setTimeout(() => {
        setButterflies((current) => current.filter((butterfly) => !butterfly.id.startsWith(burstId)));
      }, 1280);
    };

    window.addEventListener("pointerdown", releaseButterflies);
    return () => {
      window.removeEventListener("pointerdown", releaseButterflies);
      if (cleanupTimer) window.clearTimeout(cleanupTimer);
    };
  }, []);

  return (
    <div className="butterfly-burst-layer" aria-hidden="true">
      {butterflies.map((butterfly) => (
        <span
          className="cursor-butterfly"
          key={butterfly.id}
          style={{
            left: `${butterfly.x}px`,
            top: `${butterfly.y}px`,
            "--dx": `${butterfly.dx}px`,
            "--dy": `${butterfly.dy}px`,
            "--delay": `${butterfly.delay}ms`,
            "--scale": butterfly.scale,
            "--rotate": `${butterfly.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}

function Nav({ compact = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);
  const handleMenuKeyDown = (event) => {
    const isTrigger = event.target.classList.contains("nav-dropdown-trigger");
    if (isTrigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      toggleMenu();
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <header className={`site-nav ${compact ? "site-nav--solid" : ""}`}>
      <a className="brand" href={page()}>
        <span className="brand-mark">SC</span>
        <span>Let's find the treasure</span>
      </a>
      <nav aria-label="Primary navigation">
        <div
          className={`nav-dropdown ${menuOpen ? "is-open" : ""}`}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={closeMenu}
          onKeyDown={handleMenuKeyDown}
        >
          <button
            type="button"
            className="nav-dropdown-trigger"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            What I do
          </button>
          <div className="nav-dropdown-menu" role="menu" aria-label="What I do">
            {whatIDoMenu.map(([label, href]) => (
              <a href={href} role="menuitem" onClick={closeMenu} key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
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
        <p className="eyebrow">Philosophy of education x digital life</p>
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
      <WhatIDoContent />
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

function WhatIDoContent() {
  return (
    <>
      <div className="section-kicker">
        <Sparkles size={18} />
        Summer Cui
      </div>
      <div className="intro-grid">
        <div>
          <h2>
            <ShinyText text="Researching the being of education in technological life." />
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
    </>
  );
}

function WaterHeaderImage({ src, alt }) {
  return (
    <figure className="water-header">
      <svg className="water-filter" aria-hidden="true" focusable="false">
        <filter id="water-ripple-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.034" numOctaves="2" seed="7">
            <animate attributeName="baseFrequency" dur="18s" values="0.012 0.034;0.018 0.028;0.012 0.034" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="9" />
        </filter>
      </svg>
      <img src={src} alt={alt} />
    </figure>
  );
}

function GlowCard({ children, className = "" }) {
  const [clicked, setClicked] = useState(false);

  const moveGlow = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const pulseGlow = () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 520);
  };

  return (
    <article className={`magic-card glass ${clicked ? "is-clicked" : ""} ${className}`} onPointerMove={moveGlow} onPointerDown={pulseGlow}>
      <span className="magic-stars" aria-hidden="true" />
      {children}
    </article>
  );
}

function SparkleImageHeader({ src, children, className = "" }) {
  const [sparked, setSparked] = useState(false);

  const moveSpark = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const clickSpark = () => {
    setSparked(true);
    window.setTimeout(() => setSparked(false), 560);
  };

  return (
    <section className={`page-visual-header project-visual-header ${className} ${sparked ? "is-sparked" : ""}`} onPointerMove={moveSpark} onPointerDown={clickSpark}>
      <img src={src} alt="" />
      <span className="project-sparkle" aria-hidden="true" />
      {children}
    </section>
  );
}

function ResearchInterestsPage() {
  return (
    <>
      <Nav compact />
      <main className="subpage research-page">
        <WaterHeaderImage src={asset("media/research-interests-header.jpeg")} alt="Water and sky reflected in a quiet research landscape" />
        <section className="section research-copy">
          <span className="butterfly butterfly--one" aria-hidden="true" />
          <span className="butterfly butterfly--two" aria-hidden="true" />
          <span className="butterfly butterfly--three" aria-hidden="true" />
          <span className="butterfly butterfly--four butterfly--soft" aria-hidden="true" />
          <span className="butterfly butterfly--five butterfly--soft" aria-hidden="true" />
          <span className="butterfly butterfly--six butterfly--soft" aria-hidden="true" />
          <article className="essay-panel">
            {researchEssay.map((paragraph, index) => (
              <p className={index === 0 ? "dropcap" : ""} key={paragraph}>
                {paragraph}
              </p>
            ))}
            <figure className="essay-illustration">
              <img src={asset("media/about-childhood-photo.png")} alt="Illustration based on Summer's childhood photo" />
              <figcaption>(drawn by Nicole, based on Summer's childhood photo)</figcaption>
            </figure>
          </article>
        </section>
        <section className="section intro research-about" aria-label="Research interests overview">
          <WhatIDoContent />
          <div className="figure-ribbon" aria-label="Summer research figures">
            {figurePanels.map((panel, index) => (
              <figure className={`figure-panel figure-panel--${index + 1}`} key={panel.src}>
                <img src={panel.src} alt="" />
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Nav compact />
      <main className="subpage projects-page">
        <SparkleImageHeader src={asset("media/projects-header.png")}>
          <div>
            <TextType
              tag="p"
              className="eyebrow project-kicker"
              text={["Projects"]}
              typingSpeed={90}
              showCursor
              cursorCharacter="_"
              cursorBlinkDuration={0.55}
            />
          </div>
        </SparkleImageHeader>
        <section className="section project-section">
          <GlowCard className="project-feature">
            <span>PhD project</span>
            <h2>The Generative AI Dilemma As An Ontological Issue</h2>
            <p>
              Investigating Ways of Being-Doing-Knowing Of Chinese International Students in
              Australian Higher Education.
            </p>
          </GlowCard>
        </section>
      </main>
    </>
  );
}

function TeachingServicePage() {
  const teaching = [
    ["Faculty of Education, University of Melbourne", "Education policy in context; Environmental education; Digital transformations in education"],
    ["Monash College", "English language teacher"],
    ["Swinburne College", "English language teacher"],
  ];
  const service = [
    ["Faculty of Education, University of Melbourne", "Diversity & Inclusion Committee representative, Graduate Researcher Committee"],
    ["Philosophy of Education Society of Australasia", "Committee member"],
  ];

  return (
    <>
      <Nav compact />
      <main className="subpage teaching-page">
        <section className="section teaching-hero">
          <div>
            <p className="eyebrow">Teaching & Service</p>
            <DecryptedText
              tag="h1"
              text="Teaching, language, and scholarly community."
              speed={46}
              maxIterations={18}
            />
          </div>
          <figure>
            <img src={asset("media/teaching-service-header.png")} alt="" />
          </figure>
        </section>
        <section className="section service-grid">
          <div>
            <p className="eyebrow">Teaching</p>
            <div className="timeline-list">
              {teaching.map(([placeName, role]) => (
                <GlowCard className="timeline-item" key={placeName}>
                  <span>{placeName}</span>
                  <p>{role}</p>
                </GlowCard>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Service</p>
            <div className="timeline-list">
              {service.map(([placeName, role]) => (
                <GlowCard className="timeline-item" key={placeName}>
                  <span>{placeName}</span>
                  <p>{role}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
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
        <h2>Always glad to talk research, collaborations, or possible talks.</h2>
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
          <h1>A place to write things that aren't papers.</h1>
          <p>
            A writing room for essays, notes, and daydreaming on the page.
          </p>
        </section>
        <section className="blog-grid">
          {blogPosts.map((post) => {
            const cardStyle = post.image ? { "--blog-card-image": `url(${post.image})` } : undefined;
            const cardClass = `blog-card glass ${post.image ? "blog-card--image" : ""}`;

            if (post.slug) {
              return (
                <a className={cardClass} href={page(`blog/${post.slug}`)} key={post.title} style={cardStyle}>
                  <span>{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <small>
                    Read essay
                    <ArrowUpRight size={15} />
                  </small>
                </a>
              );
            }

            return (
              <article className={cardClass} key={post.title} style={cardStyle}>
                <span>{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

function BlogArticlePage({ post }) {
  const renderFigure = (figure, className = "") => (
    <figure className={`article-figure ${className}`} key={figure.label}>
      <img src={figure.src} alt={figure.caption} />
      <figcaption>
        <span>{figure.label}</span>
        {figure.caption}
      </figcaption>
    </figure>
  );

  return (
    <>
      <Nav compact />
      <main className="blog-article-page">
        <SparkleImageHeader src={post.image} className="blog-article-visual">
          <div>
            <p className="eyebrow">{post.date}</p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </SparkleImageHeader>
        <article className="blog-article-body">
          <p className="dropcap">{post.paragraphs[0]}</p>
          {renderFigure(post.figures[0], "article-figure--float")}
          <p>{post.paragraphs[1]}</p>
          <p>{post.paragraphs[2]}</p>
          <div className="article-clear" aria-hidden="true" />
          <p>{post.paragraphs[3]}</p>
          <div className="article-figure-grid article-figure-grid--two">
            {renderFigure(post.figures[1])}
            {renderFigure(post.figures[2])}
          </div>
          <p>{post.paragraphs[4]}</p>
          <div className="article-figure-grid article-figure-grid--two">
            {renderFigure(post.figures[3])}
            {renderFigure(post.figures[4])}
          </div>
          {post.paragraphs.slice(5).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <footer className="article-footer">
            <a className="glass-button" href={page("blog")}>
              Back to Blog
              <ArrowUpRight size={17} />
            </a>
          </footer>
        </article>
      </main>
    </>
  );
}

function App() {
  let pageContent = <HomePage />;
  if (currentPath === "/blog") pageContent = <BlogPage />;
  if (currentPath === "/blog/zoo-as-screen") pageContent = <BlogArticlePage post={blogPosts[0]} />;
  if (currentPath === "/research-interests") pageContent = <ResearchInterestsPage />;
  if (currentPath === "/projects") pageContent = <ProjectsPage />;
  if (currentPath === "/teaching-service") pageContent = <TeachingServicePage />;

  return (
    <>
      <ButterflyBurst />
      {pageContent}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
