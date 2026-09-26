import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="space-y-4">
        <h1 className="text-xl md:text-2xl font-mono text-textHeading">
          Projects
        </h1>
        <p className="text-md md:text-md font-mono text-textBody">
          Here are a few projects I've built
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((repo) => (
            <Link
              key={repo.slug}
              href={`/projects/${repo.slug}`}
              className="block p-5 md:p-6 bg-surface rounded-xl hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-textHeading font-semibold text-lg transition-colors">{repo.name}</h3>
                <div className="p-1.5 bg-[#222] rounded-md text-gray-400 group-hover:text-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-2 line-clamp-2 h-10">
                {Array.isArray(repo.description) ? repo.description.join(', ') : repo.description}
              </p>
              {repo.tagline && (
                <p className="text-gray-500 text-xs font-mono line-clamp-1 mb-3">{repo.tagline}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
