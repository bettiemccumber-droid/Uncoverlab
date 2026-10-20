import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { products } from '../data/products';
import { platforms } from '../data/platforms';

/**
 * 产品目录与平台推荐。两者使用不同的列表形态。
 * @returns {JSX.Element}
 */
export default function Products() {
  usePageTitle('Products');

  return (
    <>
      <header className="catalog-mast">
        <div className="wrap">
          <p className="kicker">The bench</p>
          <h1>Products we would buy again.</h1>
          <p>A catalog, not a shop. Each row is a pick we kept, with the test linked beside it.</p>
        </div>
      </header>
      <section className="section">
        <div className="wrap catalog">
          {products.map((product) => (
            <article key={product.slug} className="catalog-row">
              <Link to={`/products/${product.slug}`} className="catalog-photo">
                <img src={product.image} alt={product.imageAlt} />
              </Link>
              <div>
                <p className="category">{product.category}</p>
                <h2>
                  <Link to={`/products/${product.slug}`}>{product.name}</Link>
                </h2>
                <p>{product.summary}</p>
              </div>
              <div className="catalog-meta">
                <strong>{product.score.toFixed(1)}</strong>
                <span>{product.price}</span>
                <Link to={`/blog/${product.articleSlug}`}>Read the test</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-moss" id="platforms">
        <div className="wrap">
          <div className="section-head light">
            <h2>Software that survived the trial.</h2>
          </div>
          <div className="platform-mosaic">
            {platforms.map((platform, index) => (
              <article key={platform.slug} className={index === 0 ? 'is-lead' : ''}>
                <img src={platform.image} alt={platform.imageAlt} />
                <div>
                  <p>{platform.score.toFixed(1)} / 5 · {platform.bestFor}</p>
                  <h3>{platform.name}</h3>
                  <p>{platform.summary}</p>
                  <Link to={`/blog/${platform.articleSlug}`}>Read the comparison</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
