import { Link } from 'react-router-dom';
import { formatDate, formatReadTime } from '../utils/format';

/**
 * 文章条目。row 是博客横条，tile 是方图卡片。
 * @param {{ article: import('../data/articles').Article, variant?: 'row' | 'tile' }} props
 * @returns {JSX.Element}
 */
export default function ArticleCard({ article, variant = 'tile' }) {
  if (variant === 'row') {
    return (
      <article className="story-row">
        <Link to={`/blog/${article.slug}`} className="story-row-media">
          <img src={article.image} alt={article.imageAlt} />
        </Link>
        <div className="story-row-copy">
          <p className="meta-row">
            <span className="category">{article.category}</span>
            <span>{formatReadTime(article.readMinutes)}</span>
          </p>
          <h3>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="excerpt">{article.excerpt}</p>
        </div>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </article>
    );
  }

  return (
    <article className="story-card">
      <Link to={`/blog/${article.slug}`} className="story-media">
        <img src={article.image} alt={article.imageAlt} />
      </Link>
      <div className="story-body">
        <p className="meta-row">
          <span className="category">{article.category}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        <h3>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="excerpt">{article.excerpt}</p>
        <p className="byline">
          <span>{article.author.name}</span>
          <span>{formatReadTime(article.readMinutes)}</span>
        </p>
      </div>
    </article>
  );
}
