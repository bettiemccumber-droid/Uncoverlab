import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ScrollToTop from './ScrollToTop';

/**
 * 全站骨架：顶栏、主内容、页脚与返回顶部。
 * @returns {JSX.Element}
 */
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="page-fade has-offset">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
