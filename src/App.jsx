import Navbar from './components/Navbar'
import ProfileHeader from './components/ProfileHeader'
import SkillList from './components/SkillList'
import ProjectCard from './components/ProjectCard'

function App() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Git & GitHub',
  ]

  const projects = [
    {
      number: '01',
      title: 'TaskFlow',
      description: 'A productivity application that helps users organize tasks and manage their daily activities.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
      number: '02',
      title: 'Explore Rwanda',
      description: 'A travel discovery website showcasing beautiful destinations and experiences across Rwanda.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <Navbar />

        <ProfileHeader
          name="Ritha Spec"
          role="Frontend Developer"
          city="Kigali, Rwanda"
          bio="I am a passionate frontend developer who loves turning creative ideas into beautiful, accessible and user-friendly digital experiences."
        />

        <SkillList skills={skills} />

        <section id="projects" className="py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            My recent work
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                number={project.number}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App