// ✅ ADD / EDIT SKILLS HERE — no need to touch JSX
const SKILL_GROUPS = [
  {
    icon: '⚙️',
    title: 'Backend',
    skills: [
      { name: '.NET Core / C#', pct: 90 },
      { name: 'ASP.NET Web API', pct: 88 },
      { name: 'Java / Spring Boot', pct: 70 },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & Async',
    skills: [
      { name: 'Azure Functions', pct: 85 },
      { name: 'Azure Service Bus', pct: 80 },
      { name: 'Hangfire / SendGrid', pct: 75 },
    ],
  },
  {
    icon: '🖥️',
    title: 'Frontend',
    skills: [
      { name: 'Angular', pct: 80 },
      { name: 'React', pct: 70 },
      { name: 'JS / HTML / CSS', pct: 75 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Data & APIs',
    skills: [
      { name: 'MySQL', pct: 82 },
      { name: 'MongoDB', pct: 78 },
      { name: 'REST / SOAP APIs', pct: 90 },
    ],
  },
];

const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label reveal">02 — What I work with</p>
      <h2 className="section-title reveal">Tech stack</h2>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <div key={group.title} className={`skill-group reveal ${DELAYS[i]}`}>
            <div className="skill-group-header">
              <div className="skill-group-icon">{group.icon}</div>
              <p className="skill-group-title">{group.title}</p>
            </div>
            <div className="skill-bars">
              {group.skills.map((s) => (
                <div key={s.name} className="skill-bar-row">
                  <div className="skill-bar-label">
                    <span>{s.name}</span><span>{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" data-width={s.pct} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
