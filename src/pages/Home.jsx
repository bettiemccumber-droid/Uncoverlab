import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { usePageTitle } from '../hooks/usePageTitle';
import { filterArticles } from '../data/articles';
import { products } from '../data/products';
import { platforms } from '../data/platforms';
import { categories, principles } from '../data/site';
import { formatDate } from '../utils/format';

/**
 * 首页落地页。版式按区块切换，不重复同一种卡片。
 * @returns {JSX.Element}
 */
export default function Home() {
  usePageTitle('');
  const stories = filterArticles({ sort: 'newest' });
  const [featured, ...rest] = stories;
  const latest = rest.slice(0, 3);
  const [note, setNote] = useState('');
  const [joined, setJoined] = useState(false);

  /**
   * 处理首页简报订阅，仅在前端确认。
   * @param {import('react').FormEvent<HTMLFormElement>} event
   */
  const onJoin = (event) => {
    event.preventDefault();
    if (!note.trim()) return;
    setJoined(true);
  };

  return (
    <>
      <section className="hero-split">
        <div className="hero-panel">
          <p className="kicker">Field journal · Portland</p>
          <h1>
            Uncover what is <em>worth keeping.</em>
          </h1>
          <p>
            UncoverLab tests products and platforms the long way — after the unboxing, during ordinary work, and only until we know what we would buy again.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-lime" to="/blog">
              Read the journal
            </Link>
            <Link className="btn btn-line" to="/products">
              Browse the bench
            </Link>
          </div>
        </div>
        <div
          className="hero-photo"
          role="img"
          aria-label="A long studio corridor with glass rooms and a dark kitchen"
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        />
      </section>

      <section className="stat-strip" aria-label="Lab figures">
        <div className="wrap stat-row">
          <p><strong>10</strong> field reports</p>
          <p><strong>06</strong> picks on the bench</p>
          <p><strong>2025–26</strong> on the record</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap lead-layout">
          <Reveal>
            <article className="lead-story">
              <Link to={`/blog/${featured.slug}`}>
                <img src={featured.image} alt={featured.imageAlt} />
              </Link>
              <div>
                <p className="kicker">{featured.category}</p>
                <h2>
                  <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.excerpt}</p>
                <p className="meta-row">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span>{featured.author.name}</span>
                </p>
              </div>
            </article>
          </Reveal>
          <ol className="story-index">
            {latest.map((article, index) => (
              <li key={article.slug}>
                <span>0{index + 1}</span>
                <div>
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  <small>
                    {formatDate(article.date)} · {article.category}
                  </small>
                </div>
              </li>
            ))}
            <li className="story-index-more">
              <Link to="/blog">All stories</Link>
            </li>
          </ol>
        </div>
      </section>

      <section className="shelf-bento" aria-label="Categories">
        {categories.map((category, index) => {
          const count = stories.filter((article) => article.category === category).length;
          const copy = {
            'Product Reviews': 'Objects we lived with long enough to recommend, or to send back.',
            'Platform Picks': 'The software a small team still opens after the trial ends.',
            'Lab Notes': 'How a piece earns a place in the journal.',
          }[category];
          return (
            <Link key={category} className={`shelf-tile shelf-tile-${index}`} to={`/blog?category=${encodeURIComponent(category)}`}>
              <span>{String(count).padStart(2, '0')}</span>
              <h2>{category}</h2>
              <p>{copy}</p>
            </Link>
          );
        })}
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>On the bench</h2>
            <Link className="text-link" to="/products">Open the catalog</Link>
          </div>
          <div className="filmstrip">
            {products.map((product) => (
              <article key={product.slug} className="film-card">
                <Link to={`/products/${product.slug}`}>
                  <img src={product.image} alt={product.imageAlt} />
                </Link>
                <p className="category">{product.category}</p>
                <h3>
                  <Link to={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="price">{product.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="wrap">
          <div className="section-head light">
            <h2>Platforms still open on a Tuesday</h2>
            <Link className="text-link" to="/products#platforms">See the set</Link>
          </div>
          <div className="platform-rows">
            {platforms.slice(0, 4).map((platform) => (
              <article key={platform.slug}>
                <strong>{platform.score.toFixed(1)}</strong>
                <div>
                  <h3>{platform.name}</h3>
                  <p>{platform.summary}</p>
                </div>
                <Link to={`/blog/${platform.articleSlug}`}>Comparison</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap method-row">
          {principles.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <Link className="btn btn-dark" to="/about">About the lab</Link>
        </div>
      </section>

      <section className="note-band">
        <div className="wrap note-inner">
          <div>
            <p className="kicker">The lab note</p>
            <h2>A letter when a new test goes up.</h2>
          </div>
          {joined ? (
            <p className="note-success" role="status">You are on the list.</p>
          ) : (
            <form className="underline-form" onSubmit={onJoin}>
              <label className="sr-only" htmlFor="lab-note">Email address</label>
              <input
                id="lab-note"
                type="email"
                required
                placeholder="you@studio.com"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
