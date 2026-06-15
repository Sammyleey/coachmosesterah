import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  School,
  Home,
  User,
  Trophy,
  Calendar,
  Sparkles,
  Star,
  Quote,
  X,
  Menu,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import heroCoach from "@/assets/hero-coach.jpeg";
import aboutClassroom from "@/assets/about-classroom.jpeg";
import serviceSchool from "@/assets/service-school.jpeg";
import serviceHomeschool from "@/assets/gallery-5.jpeg";
import servicePrivate from "@/assets/service-private.jpeg";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import poster1 from "@/assets/poster1.jpeg";
import poster2 from "@/assets/poster2.jpeg";
import poster3 from "@/assets/poster3.jpeg";
import poster4 from "@/assets/poster4.jpeg";
import poster5 from "@/assets/poster5.jpeg";
import raul from "@/assets/raul.jpeg";

const serviceTournament = gallery1;

const REGISTRATION_URL = "https://forms.gle/ks1ihCYzyjUPRKVX9";

/* ---------- REGISTER MODAL CONTEXT (lightweight) ---------- */
let openModalFn: (() => void) | null = null;
const openRegister = () => openModalFn?.();

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coach Moses Terah — Certified Chess Trainer & Tournament Organizer | Nairobi" },
      {
        name: "description",
        content:
          "Professional chess training for schools, homeschoolers, and private students in Kenya. Founder of Elite Minds Chess Academy. Register for training in Karen & Ongata Rongai.",
      },
      { property: "og:title", content: "Coach Moses Terah — Developing Strategic Thinkers" },
      {
        property: "og:description",
        content:
          "Certified CKF chess trainer offering school programs, homeschool coaching, private one-on-one and tournament prep across Nairobi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroCoach },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroCoach },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    openModalFn = () => setModalOpen(true);
    return () => {
      openModalFn = null;
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Credentials />
      <About />
      <Services />
      <Schedule />
      <Posters />
      <Gallery />
      <Testimonials />
      <RegisterBanner />
      <Footer />
      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#schedule", label: "Schedule" },
    { href: "#posters", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(1,31,19,0.75)] border-b border-[rgba(34,197,94,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "backdrop-blur-md bg-[rgba(1,31,19,0.45)] border-b border-[rgba(34,197,94,0.1)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 md:h-18 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#top");
          }}
          className="font-serif text-base md:text-lg tracking-wide text-white shrink-0"
        >
          Coach <span className="italic text-[#fde047]">Moses</span> Terah
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="text-[0.72rem] tracking-[0.22em] uppercase text-[#cbd5d1] hover:text-[#fde047] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openRegister}
            className="hidden sm:inline-flex btn-outline-gold !py-2 !px-4 !text-[0.68rem]"
          >
            Register Now <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-10 w-10 grid place-items-center border border-[#22c55e]/30 rounded-sm text-[#fde047]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-[rgba(1,31,19,0.96)] backdrop-blur-xl border-t border-[#22c55e]/15`}
      >
        <nav className="px-6 py-6 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="py-3 border-b border-[#22c55e]/10 text-[0.78rem] tracking-[0.22em] uppercase text-[#e2e8e3] hover:text-[#fde047] transition"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openRegister();
            }}
            className="btn-gold btn-gold-hover mt-6 justify-center w-full"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}

/* ---------- REGISTER MODAL ---------- */
function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setConfirmed(false);
  }, [open]);

  if (!open) return null;

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-4 animate-float-up"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg panel-lime-glow p-7 md:p-10 rounded-sm">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 grid place-items-center text-[#cbd5d1] hover:text-[#fde047] border border-[#22c55e]/25 hover:border-[#fde047]/60 rounded-sm transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="h-14 w-14 rounded-full border border-[#eab308] grid place-items-center mb-5 bg-gradient-to-br from-[#eab308]/25 to-transparent">
          {confirmed ? (
            <CheckCircle2 className="h-6 w-6 text-[#fde047]" />
          ) : (
            <Sparkles className="h-6 w-6 text-[#fde047]" />
          )}
        </div>

        <p className="kicker mb-3">
          {confirmed ? "— Redirecting" : "— Confirm Registration"}
        </p>

        <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
          {confirmed ? (
            <>
              Opening the official <span className="italic text-gold-gradient">form</span>…
            </>
          ) : (
            <>
              Ready to join{" "}
              <span className="italic text-gold-gradient">Elite Minds</span>?
            </>
          )}
        </h3>

        {!confirmed ? (
          <>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              You'll be redirected to our official Google Form in a new tab to complete your
              registration. Please have your <span className="text-white">student details, preferred
              venue,</span> and <span className="text-white">contact information</span> ready.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#cbd5d1]">
              {[
                "Choose your training program",
                "Pick a venue (Karen or Ongata Rongai)",
                "Submit and receive a confirmation reply",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#22c55e] mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleConfirm}
                className="btn-gold btn-gold-hover flex-1 justify-center"
              >
                Register Now <ExternalLink className="h-4 w-4" />
              </button>
              <button onClick={onClose} className="btn-outline-gold flex-1 justify-center">
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              A new tab is opening with the registration form. If it didn't open, click the button
              below.
            </p>
            <div className="mt-7">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-gold-hover w-full justify-center"
              >
                Open Form Again <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#22c55e]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#eab308]/10 blur-[140px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-float-up">
          <p className="kicker mb-6">— Certified Chess Trainer · CKF Licensed</p>
          <h1 className="font-serif text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white">
            Developing
            <br />
            Strategic <span className="italic text-gold-gradient">Thinkers.</span>
          </h1>
          <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Professional chess training for schools, homeschooling communities, and private
            individuals in Kenya — led by Certified Trainer Coach Moses Terah.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button onClick={openRegister} className="btn-gold btn-gold-hover">
              Register Now <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#services" className="btn-outline-gold">
              View Services
            </a>
          </div>
        </div>

        <div className="relative animate-float-up">
          <div className="relative aspect-[9/16] sm:aspect-[3/4] overflow-hidden rounded-sm border border-[#22c55e]/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
            <img
              src={heroCoach}
              alt="Coach Moses Terah analyzing a chessboard outdoors"
              width={720}
              height={1280}
              className="h-full w-full object-cover object-top sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011f13]/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 panel-lime-glow px-5 py-4 max-w-[200px] hidden md:block">
            <p className="kicker mb-1 text-[0.6rem]">Founder</p>
            <p className="font-serif text-white text-sm leading-tight">
              Elite Minds <span className="italic text-[#fde047]">Chess</span> Academy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CREDENTIALS ---------- */
function Credentials() {
  const items = [
    "Licensed CKF Trainer",
    "5 National Championship Fields",
    "3 International Events Represented",
    "Founder, Elite Minds Chess Academy",
  ];
  return (
    <section className="relative py-6 border-y border-[#eab308]/40 bg-gradient-to-r from-[#1a1305] via-[#3a2a05] to-[#1a1305]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <Sparkles className="h-3.5 w-3.5 text-[#fde047] shrink-0" />
              <span className="text-[0.78rem] tracking-[0.18em] uppercase text-[#fef3c7] font-medium text-center md:text-left">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="relative lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#22c55e]/30">
            <img
              src={aboutClassroom}
              alt="Coach Moses teaching students at a demonstration board"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 panel-forest px-5 py-3 hidden md:block">
            <p className="kicker text-[0.6rem]">Since 2024</p>
            <p className="font-serif text-white text-sm">Elite Minds Academy</p>
          </div>
        </div>
        <div>
          <p className="kicker mb-5">— About The Coach</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white tracking-tight">
            A dedicated educator <span className="italic text-[#fde047]">shaping</span> young
            strategic minds.
          </h2>
          <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Coach Moses Terah is a certified chess trainer licensed by the Chess Kenya Federation
              and the Founder and Lead Trainer of Elite Minds Chess Academy/Club. He is a dedicated
              chess educator and tournament organizer committed to developing young minds through
              the game of chess.
            </p>
            <p>
              With extensive experience in chess instruction, Coach Moses provides chess training in
              schools, homeschooling communities, chess clubs, and through private one-on-one
              coaching programs. His training methodology focuses on building strong foundational
              skills, strategic thinking, problem-solving abilities, concentration, discipline,
              confidence, and competitive excellence.
            </p>
          </div>

          <blockquote className="mt-12 panel-lime-glow p-8 md:p-10 relative">
            <span className="absolute top-3 left-5 font-serif text-7xl leading-none text-[#22c55e]/30">
              “
            </span>
            <p className="font-serif italic text-2xl md:text-3xl text-white leading-snug pl-6">
              Developing Strategic Thinkers <br />
              Through <span className="text-gold-gradient not-italic">Chess.</span>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    {
      icon: School,
      title: "School Chess Programs",
      desc: "Integration into school curriculums & structured after-school clubs.",
      img: serviceSchool,
    },
    {
      icon: Home,
      title: "Homeschool Chess Coaching",
      desc: "Specialized group learning cohorts tailored for homeschooling communities.",
      img: serviceHomeschool,
    },
    {
      icon: User,
      title: "Private One-on-One",
      desc: "Tailored, high-level skill acceleration for dedicated competitive players.",
      img: servicePrivate,
    },
    {
      icon: Trophy,
      title: "Tournament Prep & Org",
      desc: "Expert coordination, coaching, and support for scholastic and community chess events.",
      img: serviceTournament,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 border-t border-[#22c55e]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="kicker mb-5">— Services & Expertise</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              Four ways to <span className="italic text-gold-gradient">train</span> with us.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            From in-school curriculums to elite one-on-one coaching, every program is built around
            measurable strategic growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={i}
              className="panel-forest group p-6 flex flex-col hover:border-[#22c55e]/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="hover-zoom relative aspect-[4/3] -mx-6 -mt-6 mb-6 overflow-hidden border-b border-[#22c55e]/20">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011f13] via-transparent to-transparent" />
              </div>
              <div className="h-12 w-12 rounded-full border border-[#eab308] grid place-items-center mb-5 bg-gradient-to-br from-[#eab308]/20 to-transparent">
                <s.icon className="h-5 w-5 text-[#fde047]" />
              </div>
              <h3 className="font-serif text-xl text-white leading-snug mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <button
                onClick={openRegister}
                className="mt-6 inline-flex items-center gap-2 text-[#fde047] text-[0.72rem] tracking-[0.2em] uppercase font-medium border-t border-[#22c55e]/20 pt-4 group-hover:gap-3 transition-all text-left"
              >
                Enroll <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SCHEDULE ---------- */
function Schedule() {
  const items = [
    {
      day: "Saturdays",
      time: "10:00 AM — 12:00 PM",
      venue: "Nairobi Chapel — Ongata Rongai",
    },
    {
      day: "Sundays",
      time: "2:00 PM — 4:00 PM",
      venue: "Karen Don Bosco Utume (Next to The Karen Hospital)",
    },
    {
      day: "School Holidays",
      time: "Intensive Camps",
      venue: "Structured multi-day immersion programs",
    },
    {
      day: "House Calls",
      time: "By Booking",
      venue: "Premium personalized training after consultation",
    },
  ];

  return (
    <section id="schedule" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="kicker mb-5">— Weekly Training Schedule</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
            When & where we <span className="italic text-gold-gradient">train.</span>
          </h2>
        </div>

        <div className="panel-lime-glow p-6 md:p-10 lg:p-14">
          <div className="grid md:grid-cols-2 gap-px bg-[#22c55e]/15">
            {items.map((it, i) => (
              <div
                key={i}
                className="bg-[#011f13]/95 p-7 md:p-8 flex flex-col gap-3 hover:bg-[#022c22] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-[#22c55e]" />
                  <span className="kicker text-[0.65rem]">{it.day}</span>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-white">
                  <span className="text-gold-gradient">{it.time}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.venue}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={openRegister}
              className="btn-gold btn-gold-hover animate-pulse-gold"
            >
              Secure Your Slot — Register Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- POSTERS ---------- */
function Posters() {
  const posters = [
    {
      src: poster1,
      title: "Think Deeper. Play Smarter. Win Bigger.",
      desc: "Our flagship recruitment poster — structured sessions for every level, from first moves to rated competition at Karen Don Bosco Utume.",
      tag: "Enroll Now",
      accent: "from-[#22c55e]/20",
    },
    {
      src: poster2,
      title: "Shaping Minds. Building Champions.",
      desc: "Ten core values at the heart of Elite Minds — discipline, analytical thinking, sportsmanship, and the pursuit of mastery in every lesson.",
      tag: "Our Values",
      accent: "from-[#eab308]/20",
    },
    {
      src: poster3,
      title: "Chess Training for Home Schoolers",
      desc: "Flexible in-person and online programs tailored to homeschool families — ages 5+ in person, ages 10+ online, with ongoing enrollment.",
      tag: "Homeschool",
      accent: "from-[#3b82f6]/20",
    },
    {
      src: poster4,
      title: "More Than a Game. A Path to Greatness.",
      desc: "Five pillars of growth — expert lessons, live practice, one-on-one coaching, tournament readiness, and mental strength on and off the board.",
      tag: "Programs",
      accent: "from-[#22c55e]/20",
    },
    {
      src: poster5,
      title: "Think. Plan. Move. Win.",
      desc: "The complete Elite Minds curriculum — theory, tactics, strategy, competitive play, and life skills for beginners through advanced players.",
      tag: "Curriculum",
      accent: "from-[#eab308]/20",
    },
  ];

  return (
    <section id="posters" className="py-24 lg:py-32 border-t border-[#22c55e]/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#eab308]/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="kicker mb-5">— Academy Programs</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              Official posters. <span className="italic text-gold-gradient">Real programs.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
            Everything Elite Minds offers — in one place. Browse our program flyers, then register
            for the track that fits your player.
          </p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {posters.map((p, i) => (
            <article
              key={i}
              className="panel-forest group shrink-0 w-[min(78vw,280px)] lg:w-auto snap-center flex flex-col hover:border-[#fde047]/50 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(234,179,8,0.25)]"
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden border-b border-[#22c55e]/20 bg-gradient-to-b ${p.accent} to-[#011f13]`}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011f13]/90 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[0.58rem] tracking-[0.2em] uppercase text-[#1a1500] bg-gradient-to-r from-[#fde047] to-[#eab308] px-2.5 py-1 rounded-sm font-semibold shadow-md">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-base text-white leading-snug">{p.title}</h3>
                <p className="mt-2 text-[0.78rem] text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>
                <button
                  onClick={openRegister}
                  className="mt-4 inline-flex items-center gap-2 text-[#fde047] text-[0.65rem] tracking-[0.18em] uppercase font-medium group-hover:gap-3 transition-all text-left"
                >
                  Register <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const photos = [
    {
      src: gallery1,
      title: "Tournament Day — Outdoor Arena",
      desc: "Students locked in deep calculation during a weekend rated event.",
      tag: "Tournament",
    },
    {
      src: gallery2,
      title: "Simultaneous Exhibition",
      desc: "Coach Moses guiding multiple young players across parallel boards.",
      tag: "Simul",
    },
    {
      src: gallery4,
      title: "Demo Board Lecture",
      desc: "Breaking down openings on the large demonstration board outdoors.",
      tag: "Training",
    },
    {
      src: gallery5,
      title: "Pairings & Pre-Game Briefing",
      desc: "Reviewing the pairings sheet before round one begins.",
      tag: "Events",
    },
    {
      src: gallery6,
      title: "Junior Squad — Small Group",
      desc: "Hands-on coaching with the youngest cohort of Elite Minds.",
      tag: "Juniors",
    },
    {
      src: gallery7,
      title: "Correction Mid-Game",
      desc: "Showing a missed tactic during a live training game.",
      tag: "Coaching",
    },
    {
      src: gallery8,
      title: "Field Tournament Setup",
      desc: "Multi-board play under the open sky with sharp focus.",
      tag: "Tournament",
    },
    {
      src: gallery10,
      title: "Attacking in Chess — Tent Class",
      desc: "Theme lesson covering attacking principles with the kids' cohort.",
      tag: "Training",
    },
    {
      src: gallery11,
      title: "Long Table Match Day",
      desc: "Full-house weekend session with the Elite Minds family.",
      tag: "Match Play",
    },
    {
      src: gallery12,
      title: "Chalkboard Strategy",
      desc: "Walking through positional ideas on the demo wall board.",
      tag: "Lecture",
    },
    {
      src: raul,
      title: "Raul — Focused & Ready",
      desc: "An Elite Minds player locked in before the next move — concentration built session by session.",
      tag: "Academy Life",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 border-t border-[#22c55e]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="kicker mb-5">— Gallery</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              From classroom to <span className="italic text-gold-gradient">continent.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base">
            Moments from training halls, school clubs, and international scholastic events across
            Uganda, South Africa, and Zimbabwe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {photos.map((p, i) => (
            <article
              key={i}
              className="panel-forest group overflow-hidden flex flex-col hover:border-[#22c55e]/60 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="hover-zoom relative aspect-[4/3] overflow-hidden border-b border-[#22c55e]/20">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011f13]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[0.6rem] tracking-[0.2em] uppercase text-[#1a1500] bg-gradient-to-r from-[#fde047] to-[#eab308] px-2.5 py-1 rounded-sm font-semibold shadow-md">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-white leading-snug">{p.title}</h3>
                <p className="mt-2 text-[0.82rem] text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [
    {
      name: "Wanjiru K.",
      role: "Parent · Karen",
      stars: 5,
      text:
        "Within one term, my son went from barely knowing the pieces to winning his first school tournament. Coach Moses is patient, structured, and genuinely loves teaching.",
    },
    {
      name: "Brian M.",
      role: "Student · Age 12",
      stars: 5,
      text:
        "I used to lose every game. Now I think two and three moves ahead. Coach makes chess feel like a puzzle I actually want to solve.",
    },
    {
      name: "Dr. Achieng O.",
      role: "Parent · Ongata Rongai",
      stars: 5,
      text:
        "His coaching has improved my daughter's focus far beyond chess — schoolwork, music, everything. The Sunday Karen sessions are the highlight of her week.",
    },
    {
      name: "Headteacher · Riverside Prep",
      role: "School Partner",
      stars: 5,
      text:
        "Coach Moses set up our entire scholastic chess club from scratch. Professional, reliable, and brilliant with children of every level.",
    },
    {
      name: "Liam W.",
      role: "Homeschool Parent",
      stars: 4,
      text:
        "The homeschool cohort gave my kids real community and real competition. The methodology is rigorous without ever feeling heavy.",
    },
    {
      name: "Chess Kenya Federation",
      role: "Affiliate Trainer Network",
      stars: 5,
      text:
        "A certified trainer who consistently delivers tournament-ready students. Elite Minds is a model scholastic chess program.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 border-t border-[#22c55e]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="kicker mb-5">— Trusted by Parents, Students & Schools</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
            Voices from the <span className="italic text-gold-gradient">board.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="panel-forest p-7 md:p-8 flex flex-col relative hover:border-[#eab308]/50 hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="absolute top-5 right-5 h-6 w-6 text-[#eab308]/40" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < q.stars
                        ? "fill-[#fde047] text-[#fde047] drop-shadow-[0_0_6px_rgba(253,224,71,0.5)]"
                        : "text-[#22c55e]/30"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="font-serif italic text-[1.05rem] md:text-lg text-white leading-relaxed flex-1">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[#22c55e]/15">
                <p className="text-white font-medium text-sm">{q.name}</p>
                <p className="kicker text-[0.6rem] mt-1">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REGISTER BANNER ---------- */
function RegisterBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#011f13] to-[#050505] border-y border-[#22c55e]/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#eab308]/8 blur-[120px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="kicker mb-6">— Begin Your Journey</p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.03] tracking-tight">
          Take the first step toward
          <br />
          <span className="italic text-gold-gradient">strategic excellence.</span>
        </h2>
        <p className="mt-7 text-muted-foreground max-w-xl mx-auto">
          Limited slots per cohort. Secure your place through the official registration form.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            onClick={openRegister}
            className="btn-gold btn-gold-hover animate-pulse-gold !text-sm !py-5 !px-8"
          >
            Register Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER / CONTACT ---------- */
function Footer() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:elitemindschessclub2024m@gmail.com?subject=Inquiry from ${encodeURIComponent(
      form.name || "Website",
    )}&body=${body}`;
    setSent(true);
  };

  const waLink = (num: string) =>
    `https://wa.me/254${num.replace(/^0/, "")}?text=${encodeURIComponent(
      "Hello Coach Moses, I'd like to inquire about chess training.",
    )}`;

  return (
    <footer id="contact" className="bg-[#030303] border-t border-[#22c55e]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14">
          <div>
            <p className="kicker mb-5">— Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] tracking-tight">
              Custom inquiries, <span className="italic text-[#fde047]">welcomed.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Reach out directly via phone, WhatsApp, or email — or send a message using the form.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Phone} label="Phone Lines">
                <div className="flex flex-wrap gap-2">
                  {["0728793634", "0733127696"].map((n) => (
                    <div key={n} className="flex items-center gap-2">
                      <a href={`tel:${n}`} className="text-white hover:text-[#fde047] transition">
                        {n}
                      </a>
                      <a
                        href={waLink(n)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-[#22c55e] border border-[#22c55e]/40 px-2 py-1 hover:bg-[#22c55e]/10 transition"
                      >
                        <MessageCircle className="h-3 w-3" /> WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </ContactRow>

              <ContactRow icon={Mail} label="Email">
                <a
                  href="mailto:elitemindschessclub2024m@gmail.com"
                  className="text-white hover:text-[#fde047] transition break-all"
                >
                  elitemindschessclub2024m@gmail.com
                </a>
              </ContactRow>

              <ContactRow icon={MapPin} label="Main Venues">
                <span className="text-white">
                  Don Bosco Utume (Karen) · Nairobi Chapel (Ongata Rongai)
                </span>
              </ContactRow>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="panel-forest p-7 md:p-9 space-y-4">
            <p className="kicker mb-2">— Send A Message</p>
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                type="tel"
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                type="email"
                required
              />
            </div>
            <div>
              <label className="block kicker mb-2 text-[0.6rem]">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                maxLength={1500}
                className="w-full bg-[#011f13]/70 border border-[#22c55e]/25 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#22c55e] focus:shadow-[0_0_0_3px_rgba(34,197,94,0.15)] transition rounded-sm resize-none"
                placeholder="How can Coach Moses help?"
              />
            </div>
            <button type="submit" className="btn-gold btn-gold-hover w-full justify-center">
              {sent ? "Opening Mail…" : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="hairline mt-16 pt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="font-serif text-white text-sm">
            Coach <span className="italic text-[#fde047]">Moses</span> Terah
            <span className="text-muted-foreground"> · Elite Minds Chess Academy</span>
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 items-start">
      <div className="h-10 w-10 rounded-full border border-[#22c55e]/40 grid place-items-center shrink-0 bg-[#022c22]">
        <Icon className="h-4 w-4 text-[#22c55e]" />
      </div>
      <div className="min-w-0">
        <p className="kicker text-[0.6rem] mb-1">{label}</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block kicker mb-2 text-[0.6rem]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={200}
        className="w-full bg-[#011f13]/70 border border-[#22c55e]/25 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#22c55e] focus:shadow-[0_0_0_3px_rgba(34,197,94,0.15)] transition rounded-sm"
      />
    </div>
  );
}
