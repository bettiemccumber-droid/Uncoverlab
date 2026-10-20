import { Link, useParams } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { getProductBySlug, products } from '../data/products';
import { getArticleBySlug } from '../data/articles';

/**
 * 单个产品的图片、描述、规格与测评结论。
 * @returns {JSX.Element}
 */
export default function ProductDetail() {
  const { slug = '' } = useParams();
  const product = getProductBySlug(slug);
  usePageTitle(product ? product.name : 'Product not found');

  if (!product) {
    return (
      <section className="section">
        <div className="wrap narrow empty-state">
          <p className="eyebrow">Missing page</p>
          <h1>That product is not on the bench.</h1>
          <Link className="btn btn-dark" to="/products">
            Browse products
          </Link>
        </div>
      </section>
    );
  }

  const review = getArticleBySlug(product.articleSlug);
  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <article className="section product-detail">
      <div className="wrap">
        <p className="breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span aria-hidden="true">/</span>
          <span>{product.name}</span>
        </p>
        <div className="detail-grid">
          <figure className="detail-photo">
            <img src={product.image} alt={product.imageAlt} />
          </figure>
          <div>
            <p className="meta-row">
              <span className="category">{product.category}</span>
              <span>{product.price}</span>
            </p>
            <h1>{product.name}</h1>
            <p className="lede">{product.summary}</p>
            <div className="score" aria-label={`Editorial score ${product.score} out of 5`}>
              <strong>{product.score.toFixed(1)}</strong>
              <div>
                <span>Editorial score</span>
                <div className="score-track">
                  <div style={{ width: `${(product.score / 5) * 100}%` }} />
                </div>
              </div>
            </div>
            {review ? (
              <Link className="btn btn-dark" to={`/blog/${review.slug}`}>
                Read the full test
              </Link>
            ) : null}
          </div>
        </div>
        <div className="detail-copy">
          {product.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="detail-columns">
          <section>
            <h2>On the bench</h2>
            <dl className="spec-list">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section>
            <h2>What held up</h2>
            <ul className="check-list">
              {product.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>What did not</h2>
            <ul className="cross-list">
              {product.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <blockquote className="verdict">
          <p className="eyebrow">Verdict</p>
          <p>{product.verdict}</p>
        </blockquote>
        <div className="section-head">
          <h2>Also on the bench</h2>
        </div>
        <div className="product-grid">
          {others.map((item) => (
            <article key={item.slug} className="product-card">
              <Link to={`/products/${item.slug}`} className="product-media">
                <img src={item.image} alt={item.imageAlt} />
              </Link>
              <div className="product-copy">
                <h3>
                  <Link to={`/products/${item.slug}`}>{item.name}</Link>
                </h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
