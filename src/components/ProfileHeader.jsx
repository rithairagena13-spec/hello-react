function ProfileHeader({ name, role, city, bio }) {
  return (
    <section id="about" className="py-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
        Hello, I'm
      </p>

      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
        {name}
        <span className="text-violet-600">.</span>
      </h1>

      <h2 className="mt-5 text-2xl font-semibold text-slate-700 md:text-3xl">
        {role}
      </h2>

      <p className="mt-3 text-sm font-medium text-slate-500">
        <span>📍 {city}</span>
      </p>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
        {bio}
      </p>

      <a
        href="#projects"
        className="mt-8 inline-block rounded-full bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        Explore my work →
      </a>
    </section>
  )
}

export default ProfileHeader