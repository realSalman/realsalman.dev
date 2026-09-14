export default function Home() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="space-y-4">
        <p className="text-xl md:text-2xl font-mono text-textHeading">
          What I do
        </p>
        <p className="text-md md:text-md font-mono text-textBody">
          I take products from zero to production, handling frontend, backend, DevOps, and AI integrations end-to-end.
        </p>
      </section>

      <section>
        <p className="text-xl md:text-2xl font-mono text-textHeading mb-8">
          How I do
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 bg-surface md:bg-transparent border border-border md:border-none rounded-xl md:rounded-none divide-y divide-border/50 md:divide-none">
          {/* Backend & APIs */}
          <div className="p-5 md:p-6 md:bg-surface md:border md:border-border md:rounded-xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-2 bg-[#222] rounded-lg text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-textHeading font-semibold text-base md:text-lg">Backend & APIs</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              I build backend systems primarily with the <span className="font-bold text-gray-200">MERN</span> stack, written in <span className="font-bold text-gray-200">TypeScript</span>. I care about clean architecture and APIs so that anyone can come back to the codebase years later and still understand it.
            </p>
          </div>

          {/* Infrastructure */}
          <div className="p-5 md:p-6 md:bg-surface md:border md:border-border md:rounded-xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-2 bg-[#222] rounded-lg text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-textHeading font-semibold text-base md:text-lg">Infrastructure</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm a big fan of <span className="font-bold text-gray-200">Docker</span>, <span className="font-bold text-gray-200">Ansible</span> for automation, and <span className="font-bold text-gray-200">Traefik</span> for routing. <span className="font-bold text-gray-200">CI/CD</span> pipelines that just work and infrastructure you can rely on—that's the goal.
            </p>
          </div>

          {/* Performance */}
          <div className="p-5 md:p-6 md:bg-surface md:border md:border-border md:rounded-xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-2 bg-[#222] rounded-lg text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-textHeading font-semibold text-base md:text-lg">Performance</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              I use <span className="font-bold text-gray-200">Locust</span> for load testing and enjoy fine-tuning <span className="font-bold text-gray-200">Nginx</span>, <span className="font-bold text-gray-200">MongoDB</span>, and other systems. If it's slow, I'll find out why—and fix it before users notice.
            </p>
          </div>

          {/* Tooling */}
          <div className="p-5 md:p-6 md:bg-surface md:border md:border-border md:rounded-xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-2 bg-[#222] rounded-lg text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-textHeading font-semibold text-base md:text-lg">Tooling</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Testing, linting, refactoring—I enjoy finding tools that make these seamless. When nothing fits, I build my own to improve <span className="font-bold text-gray-200">DevEx</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xl md:text-2xl font-mono text-textHeading mb-6">
          Tech Stack I use
        </p>

        <div className="bg-surface border border-border rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 border-b border-border/50 even:bg-white/5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Languages
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Typescript · Python
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 border-b border-border/50 even:bg-white/5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Frontend
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              React · Nextjs · Tailwind CSS
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 border-b border-border/50 even:bg-white/5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Backend
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Nodejs · Express · Firebase
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 border-b border-border/50 even:bg-white/5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Infrastructure
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Docker · Ansible · Nginx · Prometheus · Grafana
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 border-b border-border/50 even:bg-white/5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Databases
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              MongoDB · PostgreSQL
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 border-b border-border/50 even:bg-white/5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Cache
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Redis
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-6 md:px-8 py-5 hover:bg-[#222] transition-colors">
            <div className="w-48 shrink-0 text-textHeading font-semibold text-base mb-1 md:mb-0">
              Deployment
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              AWS · Cloudflare
            </div>
          </div>
        </div>
      </section>

      <p className="text-md md:text-md font-mono text-textBody pb-4 mt-12">
        And I love to keep things simple - just like this website.
      </p>
    </div>
  );
}
