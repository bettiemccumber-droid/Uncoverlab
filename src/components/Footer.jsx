import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialWidget from './SocialWidget';
import { nav, studio } from '../data/site';

/**
 * 页脚：简介、导航、工作室地址与社交图标。
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="logo-link" aria-label="UncoverLab home">
            <Logo />
          </Link>
          <p className="footer-lede">
            An independent journal of products and platforms worth keeping. Tested slowly in Portland, published when we would buy them again.
          </p>
        </div>
        <div>
          <h2 className="footer-label">Explore</h2>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-label">Studio</h2>
          <address>
            {studio.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
            <a href={`tel:${studio.phone.replace(/[^\d+]/g, '')}`}>{studio.phone}</a>
          </address>
        </div>
        <SocialWidget variant="labeled" title="Elsewhere" />
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} UncoverLab. All rights reserved.</p>
        <p>Photographs via Unsplash.</p>
      </div>
    </footer>
  );
}
