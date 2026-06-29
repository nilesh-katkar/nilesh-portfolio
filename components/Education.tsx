// ✅ ADD / EDIT EDUCATION HERE
const EDUCATION = [
  {
    degree: 'PG Diploma in Advanced Computing (CDAC)',
    school: 'SunBeam Institute of Information Technology, Pune–Karad',
    year: '2023–2024',
    score: '66%',
  },
  {
    degree: 'B.E. — Computer Engineering',
    school: 'Dr. D. Y. Patil Institute of Engg, Mgmt and Research, Pune',
    year: '2018–2022',
    score: 'CGPA 8.48',
  },
  {
    degree: 'HSC',
    school: 'Residential Junior College, Ahmednagar',
    year: '2018',
    score: '74.62%',
  },
  {
    degree: 'SSC',
    school: 'Residential High School, Ahmednagar',
    year: '2016',
    score: '93%',
  },
];

const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

export default function Education() {
  return (
    <section id="education">
      <p className="section-label reveal">05 — My background</p>
      <h2 className="section-title reveal">Education</h2>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <div key={e.degree} className={`edu-card reveal ${DELAYS[i]}`}>
            <div>
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-school">{e.school}</p>
            </div>
            <div className="edu-year">
              {e.year}
              <p className="edu-score">{e.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
