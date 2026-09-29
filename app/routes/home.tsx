const projects = [
  { title: 'Joyco Jam', type: 'Games, WebGL, Multiplayer', year: '2026', tone: 'bg-[#d9ff00]', mark: 'JAM' },
  { title: 'Sazabi', type: 'Branding, Design engineering', year: '2026', tone: 'bg-[#c7c7ff]', mark: 'SAZABI' },
  { title: 'Anomaly', type: 'Visual identity, Motion design', year: '2026', tone: 'bg-[#ff5a36]', mark: 'ANOMALY' },
  { title: 'Mistral', type: 'Documentation, Video production', year: 'Ongoing', tone: 'bg-[#b8eeff]', mark: 'MISTRAL' },
]

export default function Home() {
  return (
    <div className="joyco-page selection:bg-[#1717ff] selection:text-white">
      <section className="hero-grid min-h-[calc(100svh-44px)] px-3 pb-10 pt-20 md:px-12 md:pt-28">
        <div className="hero-wordmark" aria-label="JOYCO">JOYCO</div>
        <div className="hero-copy">
          A group of crazy <button className="underline decoration-2 underline-offset-4">rebels</button><br />
          ready to kill for the chance<br className="hidden md:block" /> to create something disruptive.
        </div>
        <div className="hero-warning">▲ Hero under construction</div>
      </section>

      <section id="showcase" className="showcase border-t-2 border-black px-3 py-10 md:px-12 md:py-16">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div><h2 className="text-4xl font-black uppercase tracking-[-0.07em] md:text-7xl">Featured Work</h2><p className="mono mt-2">[ 4 PROJECTS ]</p></div>
          <p className="max-w-sm text-sm font-bold uppercase leading-tight">© Joyco is a multidisciplinary design studio focused on building brands, digital products, and web experiences through structured systems, visual clarity, and purposeful execution.</p>
        </div>
        <div className="grid gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-24">
          {projects.map((project, index) => <a href="#contact" className="project-card group" key={project.title}>
            <div className={`project-art ${project.tone}`}><span>{project.mark}</span><b>0{index + 1}</b></div>
            <div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="text-3xl font-black uppercase tracking-[-0.06em]">{project.title}</h3><p className="mt-2 max-w-md text-sm font-bold uppercase leading-tight">{['A mobile-first universe for original games, chat, and competition.', 'A clear, distinctive visual system built for engineers.', 'Hand-drawn lettering, spray-paint marks and 3D props.', 'Clear, useful formats for fast-moving product teams.'][index]}</p></div><span className="mono shrink-0 text-right">{project.type}<br />{project.year}</span></div>
          </a>)}
        </div>
      </section>
      <section id="contact" className="border-t-2 border-black bg-[#1717ff] px-3 py-16 text-white md:px-12 md:py-28"><p className="mono">[ LET&apos;S MAKE NOISE ]</p><h2 className="mt-10 max-w-5xl text-6xl font-black uppercase leading-[.8] tracking-[-0.08em] md:text-[11rem]">Reach out<br />now ↗</h2><p className="mono mt-12">0800-333-JOYCO · BUENOS AIRES / EVERYWHERE</p></section>
    </div>
  )
}
