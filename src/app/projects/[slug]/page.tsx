import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import DecisionCard from "./DecisionCard";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-12">
      {/* Header & Image */}
      <section className="space-y-8">
        {/* Image section commented out
        {(project.image || true) && (
          <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-surface border border-white/5 flex items-center justify-center group">
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full max-h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none opacity-80" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface/50">
                <span className="text-3xl md:text-5xl font-black text-textBody/30 uppercase tracking-tighter">
                  {project.name}
                </span>
              </div>
            )}
          </div>
        )}
        */}

        <div>
          <h1 className="text-3xl md:text-5xl font-mono text-textHeading font-black mb-4 tracking-tight">
            {project.name}
          </h1>

          {/* Tagline */}
          {project.tagline && (
            <p className="text-lg md:text-xl font-mono text-sky mb-6 leading-relaxed">
              {project.tagline}
            </p>
          )}

          <div className="prose prose-invert max-w-none">
            <p className="text-lg font-mono text-textBody leading-relaxed whitespace-pre-wrap">
              {project.details}
            </p>
          </div>
        </div>
      </section>

{/* Metrics Bar */ }
{
  project.metrics && project.metrics.length > 0 && (
    <section>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {project.metrics.map((metric, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 bg-surface rounded-xl border border-white/5"
          >
            <span className="text-2xl font-black text-textHeading font-mono">{metric.value}</span>
            <span className="text-xs text-textBody uppercase tracking-widest font-semibold">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

{/* The Challenge */ }
{
  project.problem && (
    <section className="space-y-6">
      <h2 className="text-xl font-bold uppercase tracking-widest text-textHeading font-mono">
        The Challenge
      </h2>
      <div className="p-6 md:p-8 bg-surface/50 rounded-2xl border border-white/5">
        <p className="text-base font-mono text-textBody leading-relaxed">
          {project.problem}
        </p>
      </div>
    </section>
  )
}

{/* Tech Stack */ }
{
  project.tech && project.tech.length > 0 && (
    <section className="space-y-6">
      <h2 className="text-xl font-bold uppercase tracking-widest text-textHeading font-mono">
        Tech Stack
      </h2>
      <div className="flex flex-wrap items-center gap-4 mt-2">
        {project.tech.map((tech, i) => (
          <div key={i} className="relative group/icon cursor-help bg-surface/80 p-3 rounded-xl border border-white/5 shadow-sm hover:shadow-black/50 transition-all hover:-translate-y-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://skillicons.dev/icons?i=${tech}`}
              alt={tech}
              className="w-10 h-10"
            />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-textHeading text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none uppercase font-bold tracking-widest whitespace-nowrap z-50">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

{/* Architecture */ }
{
  project.architecture && project.architecture.length > 0 && (
    <section className="space-y-8">
      <h2 className="text-xl font-bold uppercase tracking-widest text-textHeading font-mono">
        System Architecture
      </h2>
      <div className="flex flex-col items-center gap-6 p-8 md:p-12 bg-surface/30 rounded-3xl border border-white/5 shadow-inner">
        {project.architecture.map((layer, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {layer.type === 'layer' && layer.items ? (
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {layer.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-surface border border-white/10 rounded-2xl p-6 min-w-[200px] text-center shadow-lg shadow-black/20 group hover:border-white/20 transition-colors animate-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${itemIdx * 100}ms`, animationFillMode: 'both' }}
                  >
                    <div className="text-lg font-bold text-textHeading mb-2 font-mono">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-textBody font-medium uppercase tracking-wider">{item.description}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center py-4 text-textBody/50">
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                {layer.label && (
                  <span className="text-[10px] font-black uppercase tracking-widest mt-2">{layer.label}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

{/* Engineering Decisions */ }
{
  project.decisions && project.decisions.length > 0 && (
    <section className="space-y-6">
      <h2 className="text-xl font-bold uppercase tracking-widest text-textHeading font-mono">
        Engineering Decisions
      </h2>
      <div className="space-y-3">
        {project.decisions.map((decision, i) => (
          <DecisionCard key={i} question={decision.question} answer={decision.answer} index={i} />
        ))}
      </div>
    </section>
  )
}

{/* Results */ }
{
  project.results && project.results.length > 0 && (
    <section className="space-y-6">
      <h2 className="text-xl font-bold uppercase tracking-widest text-textHeading font-mono">
        Results
      </h2>
      <div className="space-y-3">
        {project.results.map((result, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 md:p-5 bg-surface/50 rounded-xl border border-white/5 animate-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
          >
            <div className="shrink-0 w-7 h-7 rounded-lg bg-matcha/15 flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm md:text-base font-mono text-textBody leading-relaxed">{result}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

{/* Links */ }
<section className="flex flex-wrap gap-4 pt-4">
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-textHeading text-background hover:scale-105 active:scale-95 rounded-xl font-bold uppercase tracking-wider transition-all shadow-xl shadow-black/20"
    >
      {project.linkText || "View Project"}
    </a>
  )}
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-[#2a2a2a] rounded-xl text-textHeading font-medium transition-colors border border-white/5"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
    GitHub
  </a>
</section>
    </div >
  );
}
