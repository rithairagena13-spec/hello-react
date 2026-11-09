function SkillList({ skills }) {
  return (
    <section id="skills" className="py-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
        My expertise
      </p>

      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-violet-100 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-400 hover:text-violet-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillList