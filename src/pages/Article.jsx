import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleBody from '../components/ArticleBody';
import ArticleCard from '../components/ArticleCard';
import SocialWidget from '../components/SocialWidget';
import { usePageTitle } from '../hooks/usePageTitle';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { fetchPublishedArticle } from '../lib/published';
import { formatDate, formatReadTime } from '../utils/format';

/**
 * 文章详情页。
 * @returns {JSX.Element}
 */
export default function Article() {
  const { slug = '' } = useParams();
  const local = getArticleBySlug(slug);
  const [remote, setRemote] = useState(null);
  const [checked, setChecked] = useState(Boolean(local));

  useEffect(() => {
    if (local) return undefined;
    let cancel = false;
    fetchPublishedArticle(slug).then((post) => {
      if (cancel) return;
      setRemote(post);
      setChecked(true);
    });
    return () => {
      cancel = true;
    };
  }, [local, slug]);

  usePageTitle(local ? local.title : remote?.title || 'Story not found');

  if (!local && !checked) return null;
  if (!local && remote) {
    return (
      <article className="article-page">
        <header className="article-hero">
          <div className="wrap article-intro">
            <h1>{remote.title}</h1>
            <p className="lede">{remote.excerpt}</p>
          </div>
        </header>
        <div className="wrap article-read">
          <div className="prose" dangerouslySetInnerHTML={{ __html: remote.bodyHtml || '' }} />
        </div>
      </article>
    );
  }
  const article = local;
  if (!article) {
    return (
      <section className="section">
        <div className="wrap narrow empty-state">
          <p className="eyebrow">Missing page</p>
          <h1>That story is not on the bench.</h1>
          <Link className="btn btn-dark" to="/blog">
            Back to the journal
          </Link>
        </div>
      </section>
    );
  }

  const related = getRelatedArticles(article.slug);

  return (
    <article className="article-page">
      <header className="article-hero">
        <div className="wrap article-intro">
          <p className="breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </p>
          <div className="article-intro-grid">
            <div>
              <p className="meta-row">
                <span className="category">{article.category}</span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>{formatReadTime(article.readMinutes)}</span>
              </p>
              <h1>{article.title}</h1>
            </div>
            <div className="article-intro-side">
              <p className="lede">{article.excerpt}</p>
              <div className="article-meta">
                <p className="byline">
                  <span>
                    {article.author.name}
                    <small>{article.author.role}</small>
                  </span>
                </p>
                <SocialWidget variant="icons" title="Share" />
              </div>
            </div>
          </div>
        </div>
        <figure className="article-cover wrap">
          <img src={article.image} alt={article.imageAlt} />
        </figure>
      </header>
      <div className="wrap article-read">
        <ArticleBody sections={article.sections} />
        <div className="article-tags">
          <p className="eyebrow">Filed under</p>
          <ul className="tag-list">
            {article.tags.map((tag) => (
              <li key={tag}>
                <Link to={`/blog?q=${encodeURIComponent(tag)}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="section related-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Related reading</h2>
            <Link className="text-link" to="/blog">All stories</Link>
          </div>
          <div className="card-grid">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
