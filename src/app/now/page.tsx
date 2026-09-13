export default function NowPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="max-w-3xl">
        <p className="text-xl md:text-2xl font-mono text-textHeading flex items-center gap-2 mb-8">
          What I'm doing now
        </p>

        <div className="bg-surface border border-border rounded-lg p-6 md:p-8">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Currently exploring <span className="font-semibold text-gray-300">Python</span>, <span className="font-semibold text-gray-300">Go</span> and <span className="font-semibold text-gray-300">Rust</span> plus <span className="font-semibold text-gray-300">Machine Learning</span>.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 mt-6">
          <h3 className="text-lg font-bold text-textHeading mb-4">This Website</h3>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Finally got around to my new website, minimal than before.
          </p>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3 text-gray-300">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-500 shrink-0"></span>
              Add Projects page
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-500 shrink-0"></span>
              SEO: structured data, rich meta descriptions
            </li>
            <li className="text-gray-500 line-through">
              Add Navigation for /Profile, /uses, /now
            </li>
            <li className="text-gray-500 line-through">
              Mobile responsive layout
            </li>
            <li className="text-gray-500 line-through">
              Bio Section
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
