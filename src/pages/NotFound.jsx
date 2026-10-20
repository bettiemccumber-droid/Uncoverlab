import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * 未匹配路由的页面。
 * @returns {JSX.Element}
 */
export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="section">
      <div className="wrap narrow empty-state">
        <p className="eyebrow">404</p>
        <h1>This page never made the bench.</h1>
        <p>The link may be old, or the piece was never published.</p>
        <Link className="btn btn-dark" to="/">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
