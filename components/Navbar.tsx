'use client';
import Link from 'next/link';

// ✅ ADD NEW NAV LINKS HERE — just add an object to this array
const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#education',  label: 'Education' },
  // { href: '/blog',    label: 'Blog' },   ← example: add a new page route
];

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        nileshkatkar<span>-dev</span>
      </Link>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a href="mailto:katkarnilesh23@gmail.com" className="nav-cta">
        Hire me
      </a>
    </nav>
  );
}
