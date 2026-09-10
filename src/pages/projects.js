import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import { poppinsProjects, dmMono } from "@/styles/projectFonts";
import styles from "@/styles/ProjectsIndex.module.css";
import {
  PROJECTS,
  EARLIER,
  FEATURED,
  ProjectsImage,
  daysSinceHelloWorld,
  cardFill,
} from "@/data/projects";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener");
};

const RailCard = ({ project, index, basePath }) => {
  const fill = cardFill(index);
  const n = "0" + (index + 1);
  const detailHref = `${basePath}/projects/${project.slug}`;

  const handleActivate = () => openInNewTab(detailHref);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  };
  const stop = (e) => e.stopPropagation();

  return (
    <article
      className={styles.railCard}
      style={{ background: fill.bg, color: fill.fg }}
      role="link"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.railCardTop}>
        <p className={`${styles.railCardKicker} ${dmMono.className}`}>
          {project.kicker}
        </p>
        <span className={styles.railCardIndex}>{n}</span>
      </div>
      <h3 className={styles.railCardTitle}>{project.name}</h3>
      <p className={styles.railCardTagline}>{project.tagline}</p>
      <div className={styles.cardChips}>
        {project.stack.map((s) => (
          <span
            key={s}
            className={`${styles.cardChip} ${dmMono.className}`}
            style={{ borderColor: fill.rule }}
          >
            {s}
          </span>
        ))}
      </div>
      <div
        className={`${styles.cardFooter} ${dmMono.className}`}
        style={{ borderTopColor: fill.rule }}
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
            className={styles.cardLink}
            style={{ borderBottomColor: fill.rule }}
          >
            GitHub ↗
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
            className={styles.cardLink}
            style={{ borderBottomColor: fill.rule }}
          >
            Demo ↗
          </a>
        )}
        <span className={styles.cardDetails}>Details →</span>
      </div>
    </article>
  );
};

const Projects = () => {
  const { basePath } = useRouter();
  const railRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrowState = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrowState();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);
    return () => {
      el.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, [updateArrowState]);

  const scrollRail = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width : el.clientWidth * 0.8;
    el.scrollBy({
      left: dir * step,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const days = daysSinceHelloWorld();

  return (
    <>
      <Head>
        <title>Tapiwa&apos;s Portfolio | Projects</title>
        <meta name="description" content="Selected work by Tapiwa Pawandiwa — AI products, full stack mobile apps and research." />
      </Head>
      <TransitionEffect />
      <main className={`${styles.page} ${poppinsProjects.className} pt-24 md:pt-24 sm:pt-20`}>
        <div className={styles.frame}>
          {/* Masthead */}
          <section className={styles.masthead}>
            <div className={styles.mastheadCell}>
              <p className={`${styles.eyebrow} ${dmMono.className}`}>
                Issue 01 · Selected work
              </p>
              <AnimatedText
                text="Projects"
                className="!text-left !text-[clamp(44px,11cqi,118px)] !leading-[0.9] !tracking-[-0.045em] !font-extrabold !uppercase !text-[#111111] !mb-0 !mx-0 !p-0 !w-auto"
              />
            </div>
            <div className={styles.mastheadImageCell}>
              <Image
                src={ProjectsImage}
                alt="Retro computer illustration"
                className={styles.mastheadImage}
                priority
              />
            </div>
          </section>

          {/* Featured band */}
          <section className={styles.featuredSection}>
            <div className={styles.featuredBar}>
              <span className={`${styles.featuredBarLabel} ${dmMono.className}`}>
                Featured
              </span>
              <span className={`${styles.featuredBarCount} ${dmMono.className}`}>
                01 / 0{PROJECTS.length}
              </span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMedia}>
                {FEATURED.mediaKind === "phones" ? (
                  <>
                    <span className={styles.phoneMock}>
                      <Image
                        src={FEATURED.phoneMocks[0].src}
                        alt={FEATURED.phoneMocks[0].alt}
                        className="w-full h-auto"
                      />
                    </span>
                    <span className={styles.phoneMockOffset}>
                      <Image
                        src={FEATURED.phoneMocks[1].src}
                        alt={FEATURED.phoneMocks[1].alt}
                        className="w-full h-auto"
                      />
                    </span>
                  </>
                ) : (
                  <span className={styles.browserFrame}>
                    <span className={styles.browserBar}>
                      <span className={styles.browserDot} />
                      <span className={styles.browserDot} />
                      <span className={styles.browserDot} />
                      <span className={`${styles.browserUrl} ${dmMono.className}`}>
                        {FEATURED.browserUrl}
                      </span>
                    </span>
                    {FEATURED.browserShot ? (
                      <Image
                        src={FEATURED.browserShot}
                        alt={`${FEATURED.nameLines.join(" ")} screenshot`}
                        className={styles.browserShot}
                      />
                    ) : (
                      <span className={`${styles.browserPlaceholder} ${dmMono.className}`}>
                        {FEATURED.mediaPlaceholderCaption}
                      </span>
                    )}
                  </span>
                )}
              </div>
              <div className={styles.featuredContent}>
                <p className={`${styles.featuredKicker} ${dmMono.className}`}>
                  {FEATURED.kicker}
                </p>
                <h2 className={styles.featuredTitle}>
                  {FEATURED.nameLines.map((line, i) => (
                    <React.Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h2>
                <p className={styles.featuredDesc}>{FEATURED.description}</p>
                <div className={styles.chipRow}>
                  {FEATURED.stack.map((s) => (
                    <span key={s} className={`${styles.chip} ${dmMono.className}`}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className={styles.actionRow}>
                  <Link
                    href={`/projects/${FEATURED.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.btnPrimary} ${dmMono.className}`}
                  >
                    Read case study →
                  </Link>
                  {FEATURED.secondaryCta && (
                    <a
                      href={FEATURED.secondaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.btnOutline} ${dmMono.className}`}
                    >
                      {FEATURED.secondaryCta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* All projects rail */}
          <section className={styles.railSection}>
            <div className={styles.railHeader}>
              <h2 className={`${styles.railHeaderTitle} ${dmMono.className}`}>
                All projects — swipe
              </h2>
              <div className={styles.railArrows}>
                <button
                  type="button"
                  aria-label="Previous"
                  className={styles.arrowBtn}
                  onClick={() => scrollRail(-1)}
                  disabled={!canScrollLeft}
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className={styles.arrowBtn}
                  onClick={() => scrollRail(1)}
                  disabled={!canScrollRight}
                >
                  →
                </button>
              </div>
            </div>
            <div className={styles.rail} ref={railRef}>
              {PROJECTS.map((project, i) => (
                <RailCard
                  key={project.slug}
                  project={project}
                  index={i}
                  basePath={basePath}
                />
              ))}
            </div>
          </section>

          {/* Earlier projects */}
          <section className={styles.earlierSection}>
            <h2 className={styles.earlierHeading}>Earlier Projects</h2>
            <p className={`${styles.earlierSubLabel} ${dmMono.className}`}>
              Learning builds · code only
            </p>
            <div>
              {EARLIER.map((e, i) => (
                <a
                  key={e.name}
                  href={e.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.earlierRow}
                >
                  <span className={`${styles.earlierIndex} ${dmMono.className}`}>
                    {"0" + (i + 1)}
                  </span>
                  <span className={styles.earlierName}>{e.name}</span>
                  <span className={styles.earlierLeader} />
                  <span className={styles.earlierTagline}>{e.tagline}</span>
                  <span className={`${styles.earlierGh} ${dmMono.className}`}>
                    GH ↗
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Footer line */}
          <footer className={`${styles.footerLine} ${dmMono.className}`}>
            <span>
              <span className={styles.footerDaysNumber}>{days}</span> days since first
              &ldquo;Hello World&rdquo;
            </span>
            <span className={styles.footerRight}>Berlin · Available for work</span>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Projects;
