function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6">
      <a href="#" className="text-2xl font-bold tracking-tight text-slate-900">
        Ritha<span className="text-violet-600">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-violet-600 transition">About</a>
        <a href="#skills" className="hover:text-violet-600 transition">Skills</a>
        <a href="#projects" className="hover:text-violet-600 transition">Projects</a>
      </div>

      <a
        href="mailto:alex@example.com"
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 transition"
      >
        Contact me
      </a>
    </nav>
  )
}

export default Navbar