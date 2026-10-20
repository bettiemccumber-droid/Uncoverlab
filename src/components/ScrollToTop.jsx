import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 路径变化时回到页面顶部。筛选参数变化不触发。
 * @returns {null}
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
