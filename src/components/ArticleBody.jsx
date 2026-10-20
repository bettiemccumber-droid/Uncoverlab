import { Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';

/**
 * 渲染文章正文块：段落、标题、引用、列表、图片和产品卡片。
 * @param {{ sections: import('../data/articles').ArticleSection[] }} props
 * @returns {JSX.Element}
 */
export default function ArticleBody({ sections }) {
  return (
    <div className="prose">
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;
        if (section.type === 'p') return <p key={key}>{section.text}</p>;
        if (section.type === 'h2') return <h2 key={key}>{section.text}</h2>;
        if (section.type === 'quote') {
          return (
            <blockquote key={key} className="pullquote">
              <p>{section.text}</p>
              {section.cite ? <footer>{section.cite}</footer> : null}
            </blockquote>
          );
        }
        if (section.type === 'list') {
          return (
            <ul key={key}>
              {section.items?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (section.type === 'image') {
          return (
            <figure key={key} className="prose-figure">
              <img src={section.src} alt={section.alt || ''} />
              {section.caption ? <figcaption>{section.caption}</figcaption> : null}
            </figure>
          );
        }
        if (section.type === 'product') {
          const product = getProductBySlug(section.id || '');
          if (!product) return null;
          return (
            <aside key={key} className="product-embed">
              <Link to={`/products/${product.slug}`} className="product-embed-media">
                <img src={product.image} alt={product.imageAlt} />
              </Link>
              <div>
                <p className="eyebrow">Product on the bench</p>
                <h3>
                  <Link to={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
                <p>{product.summary}</p>
                <p className="embed-meta">
                  <span>{product.score.toFixed(1)} / 5</span>
                  <span>{product.price}</span>
                </p>
                <Link className="text-link" to={`/products/${product.slug}`}>
                  View the product
                </Link>
              </div>
            </aside>
          );
        }
        return null;
      })}
    </div>
  );
}
