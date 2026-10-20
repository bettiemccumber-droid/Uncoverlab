/**
 * 内页顶部横幅，使用图片作为背景。
 * @param {{ eyebrow: string, title: string, lede: string, image: string }} props
 * @returns {JSX.Element}
 */
export default function PageBanner({ eyebrow, title, lede, image }) {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(18, 15, 12, 0.42), rgba(18, 15, 12, 0.62)), url(${image})`,
      }}
    >
      <div className="wrap banner-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
