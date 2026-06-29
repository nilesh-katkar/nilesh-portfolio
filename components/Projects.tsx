// ✅ ADD / EDIT PROJECTS HERE
const PROJECTS = [
  {
    title: 'Limit Management System',
    link: null,
    desc: 'Full-stack app with Angular + AG Grid for dynamic data display, ASP.NET Core APIs with validation and pagination, and rich edit workflows with modal forms.',
    stack: ['Angular', 'AG Grid', 'ASP.NET Core', 'REST API'],
  },
  {
    title: 'JustCabs — Online Cab Booking',
    link: 'https://github.com/kd2-80085/online-cab-booking',
    desc: 'End-to-end cab booking system where customers book rides, make payments, and rate drivers. Owners register drivers; admins approve registrations.',
    stack: ['J2EE', 'MySQL', 'React'],
  },
  {
    title: 'Event Management System',
    link: null,
    desc: 'Role-based system to manage events, facilities, and inventory with full CRUD operations across different user roles.',
    stack: ['Java', 'MySQL', 'JSP'],
  },
];

const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label reveal">04 — What I&apos;ve built</p>
      <h2 className="section-title reveal">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div key={p.title} className={`project-card reveal ${DELAYS[i]}`}>
            <div className="project-card-header">
              <p className="project-title">{p.title}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">↗</a>
              )}
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
