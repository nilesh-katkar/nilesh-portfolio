'use client';
import { useEffect, useRef } from 'react';

const ROLES = ['Full Stack Developer', 'Backend Engineer', '.NET & Azure Specialist', 'Fintech Developer'];

export default function Hero() {
  const twRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const role = ROLES[ri];
      if (!deleting) {
        if (twRef.current) twRef.current.innerHTML = role.slice(0, ci + 1) + '<span class="cursor"></span>';
        ci++;
        if (ci === role.length) { deleting = true; timer = setTimeout(type, 1800); return; }
      } else {
        if (twRef.current) twRef.current.innerHTML = role.slice(0, ci - 1) + '<span class="cursor"></span>';
        ci--;
        if (ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; timer = setTimeout(type, 400); return; }
      }
      timer = setTimeout(type, deleting ? 45 : 75);
    }
    timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="about">
      <div className="hero-top reveal">
        <div className="hero-avatar">NK</div>
        <div className="hero-text">
          <p className="hero-eyebrow">available for full-time roles</p>
          <h1>Nilesh Katkar</h1>
          <p className="hero-role" ref={twRef}><span className="cursor"></span></p>
        </div>
      </div>
      <p className="hero-sub reveal reveal-delay-1">
        Software engineer with nearly 2 years of experience building backend APIs, cloud functions,
        and fintech integrations. Specialised in .NET Core, Azure, and Angular — with a strong focus
        on reliability, scalability, and clean system design.
      </p>
      <div className="hero-actions reveal reveal-delay-2">
        <a href="mailto:katkarnilesh23@gmail.com" className="btn-primary">Get in touch</a>
        <a href="https://linkedin.com/in/nilesh-katkar-971155186" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn ↗</a>
        <a href="https://github.com/kd2-80090" target="_blank" rel="noreferrer" className="btn-secondary">GitHub ↗</a>
      </div>
      <div className="hero-meta reveal reveal-delay-3">
        <span className="hero-meta-item">📍 <strong>Pune, India</strong></span>
        <span className="hero-meta-item">⚡ <strong>Immediate joiner</strong></span>
        <span className="hero-meta-item">🏢 <strong>Open to remote &amp; on-site</strong></span>
      </div>
    </section>
  );
}
