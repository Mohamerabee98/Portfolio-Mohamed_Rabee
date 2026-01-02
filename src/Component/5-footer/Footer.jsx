import './Footer.css';
import { memo } from 'react';

const Footer = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#Projects', label: 'Projects' },
    { href: '#Skills', label: 'Skills' },
    { href: '#Experience', label: 'Experience' },
    { href: '#Contact', label: 'Contact' },
  ];

  return (
    <footer className="flex">
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <p>
        &copy; Created By <span>Mohamed Rabee</span>
      </p>
    </footer>
  );
};

export default memo(Footer);
