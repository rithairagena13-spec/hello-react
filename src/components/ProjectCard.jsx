function ProjectCard({ title, description, technologies, number }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-violet-600">
          PROJECT {number}
        </span>

        <span className="text-2xl text-slate-400 transition group-hover:text-violet-600">
          ↗
        </span>
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mb-6 leading-7 text-slate-600">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard