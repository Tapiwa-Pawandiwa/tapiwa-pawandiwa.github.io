import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import { poppinsProjects, dmMono } from "@/styles/projectFonts";
import styles from "@/styles/ProjectDetail.module.css";
import { PROJECTS } from "@/data/projects";

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const index = PROJECTS.findIndex((p) => p.slug === params.slug);
  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return { props: { project, nextSlug: next.slug, nextName: next.name } };
}

const yearFact = (project) =>
  project.facts.find((f) => f.label === "Year")?.value ?? "";

const ProjectDetail = ({ project, nextSlug, nextName }) => {
  return (
    <>
      <Head>
        <title>{`${project.name} | Tapiwa Pawandiwa`}</title>
        <meta name="description" content={project.tagline} />
      </Head>
      <TransitionEffect />
      <main className={`${styles.page} ${poppinsProjects.className} pt-24 md:pt-24 sm:pt-20`}>
        <div className={styles.frame}>
          {/* Context bar */}
          <div className={`${styles.contextBar} ${dmMono.className}`}>
            <Link href="/projects" className={styles.backLink}>
              ← All projects
            </Link>
            <span className={styles.contextYear}>{yearFact(project)}</span>
          </div>

          {/* Title block */}
          <section className={styles.titleBlock}>
            <p className={`${styles.kicker} ${dmMono.className}`}>{project.kicker}</p>
            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.tagline}>{project.tagline}</p>
            <div className={styles.actionRow}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnPrimary} ${dmMono.className}`}
                >
                  View code ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnOutline} ${dmMono.className}`}
                >
                  Live demo ↗
                </a>
              )}
            </div>
          </section>

          {/* Facts strip */}
          <section className={styles.factsStrip}>
            {project.facts.map((f) => (
              <div key={f.label} className={styles.factCell}>
                <p className={`${styles.factLabel} ${dmMono.className}`}>{f.label}</p>
                <p className={styles.factValue}>{f.value}</p>
              </div>
            ))}
          </section>

          {/* Body */}
          <section className={styles.body}>
            <div className={styles.bodyLeft}>
              <div>
                <h2 className={`${styles.sectionLabel} ${dmMono.className}`}>
                  Overview
                </h2>
                {project.overview.map((para, i) => (
                  <p key={i} className={styles.overviewPara}>
                    {para}
                  </p>
                ))}
              </div>
              <div>
                <h2 className={`${styles.sectionLabelTight} ${dmMono.className}`}>
                  What I built
                </h2>
                {project.highlights.map((text, i) => (
                  <div key={i} className={styles.highlightRow}>
                    <span className={`${styles.highlightIndex} ${dmMono.className}`}>
                      {"0" + (i + 1)}
                    </span>
                    <p className={styles.highlightText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.aside}>
              <div className={styles.mediaPanel}>
                <div className={styles.mediaInner}>
                  {project.mediaType === "video" && (
                    <span className={styles.mediaVideoFrame}>
                      <video
                        src={project.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className={styles.mediaVideo}
                      />
                    </span>
                  )}
                  {project.mediaType === "image" && (
                    <Image
                      src={project.media}
                      alt={project.name}
                      className={styles.mediaImage}
                    />
                  )}
                  {project.mediaType === "placeholder" && (
                    <span className={`${styles.mediaPlaceholder} ${dmMono.className}`}>
                      {project.mediaCaption}
                    </span>
                  )}
                </div>
                {project.mediaType !== "placeholder" && (
                  <p className={`${styles.mediaCaption} ${dmMono.className}`}>
                    {project.mediaCaption}
                  </p>
                )}
              </div>
              <div>
                <h2 className={`${styles.sectionLabel} ${dmMono.className}`}>Stack</h2>
                <div className={styles.stackChips}>
                  {project.stackFull.map((s) => (
                    <span key={s} className={`${styles.stackChip} ${dmMono.className}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* Next band */}
          <section className={styles.nextBand}>
            <Link href={`/projects/${nextSlug}`} className={styles.nextLink}>
              Next — {nextName} →
            </Link>
            <Link href="/projects" className={`${styles.allProjectsBtn} ${dmMono.className}`}>
              All projects
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
