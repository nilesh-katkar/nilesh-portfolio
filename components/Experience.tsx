// ✅ ADD / EDIT JOBS HERE
const JOBS = [
  {
    date: 'Nov 2024\nPresent',
    role: 'Software Engineer I',
    company: 'Wizz Cross Border (Xpress Money) · Pune',
    bullets: [
      'Integrated REST/SOAP APIs of multiple banks across countries for transaction processing using Factory Design Pattern.',
      'Built Azure Service Bus Queue Triggers and Hangfire jobs for async processing and auto-retries, improving fault tolerance.',
      'Automated email alerts for transaction statuses using Azure Blob Trigger Functions with SendGrid.',
      'Designed MongoDB collections and branch-mapping APIs for dynamic configuration and status tracking.',
      'Implemented Webhook callbacks via Azure HTTP Trigger Functions for real-time payout synchronisation.',
      'Deployed on Azure Functions & App Service with AppInsights observability; provided production support.',
    ],
  },
  {
    date: 'Oct 2024\nNov 2024',
    role: 'Java Trainee',
    company: 'Krios Info Solutions Pvt. Ltd. · Pune',
    bullets: [
      'Built API-driven features using Java, J2EE, Spring Boot, and AngularJS within MVC/REST frameworks.',
    ],
  },
  {
    date: 'May 2024\nSep 2024',
    role: 'Software Developer Intern',
    company: 'Cognizant Technology Solutions · Pune',
    bullets: [
      'Completed .NET Core, C#, Azure, and SQL training; contributed to internal tooling.',
    ],
  },
  {
    date: 'Feb 2023\nMay 2023',
    role: 'Full Stack Developer Intern',
    company: 'Pixaflip Technology · Pune',
    bullets: [
      'Developed a full-stack MERN application with REST endpoints, React UI, and MySQL persistence.',
    ],
  },
];

const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-label reveal">03 — Where I&apos;ve worked</p>
      <h2 className="section-title reveal">Experience</h2>
      <div className="timeline">
        {JOBS.map((job, i) => (
          <div key={job.role + job.company} className={`timeline-item reveal ${DELAYS[i]}`}>
            <div className="timeline-date" style={{ whiteSpace: 'pre-line' }}>{job.date}</div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-role">{job.role}</p>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
