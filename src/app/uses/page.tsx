export default function UsesPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="max-w-3xl">
        <p className="text-xl md:text-2xl font-mono text-textHeading flex items-center gap-2 mb-8">
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
    </div>
  );
}
