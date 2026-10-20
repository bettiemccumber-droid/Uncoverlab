import { useEffect, useState } from 'react';

/**
 * 滚动一段距离后出现的返回顶部按钮。
 * @returns {JSX.Element}
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /**
     * 超过阈值后显示按钮。
     */
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * 平滑滚回页面顶部。
   */
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollUp}
      aria-label="Back to top"
    >
      <span>Top</span>
    </button>
  );
}
