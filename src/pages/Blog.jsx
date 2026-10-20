import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import { usePageTitle } from '../hooks/usePageTitle';
import { filterArticles } from '../data/articles';
import { PAGE_SIZE, categories } from '../data/site';

/**
 * 博客列表：侧栏分类、下划线搜索、横条文章和文字分页。
 * @returns {JSX.Element}
 */
export default function Blog() {
  usePageTitle('Blog');
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const category = params.get('category') || 'All';
  const sort = params.get('sort') === 'oldest' ? 'oldest' : 'newest';
  const requestedPage = Math.max(1, Number(params.get('page')) || 1);

  const filtered = useMemo(
    () => filterArticles({ query, category, sort }),
    [query, category, sort],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(requestedPage, pageCount);
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  /**
   * 更新地址栏中的筛选条件。
   * @param {{ q?: string, category?: string, sort?: string, page?: string }} next
   */
  const update = (next) => {
    const merged = {
      q: query,
      category,
      sort,
      page: '1',
      ...next,
    };
    const search = new URLSearchParams();
    if (merged.q) search.set('q', merged.q);
    if (merged.category && merged.category !== 'All') search.set('category', merged.category);
    if (merged.sort === 'oldest') search.set('sort', 'oldest');
    if (Number(merged.page) > 1) search.set('page', String(merged.page));
    setParams(search);
  };

  useEffect(() => {
    if (requestedPage !== page) update({ page: String(page) });
    // 仅在页码越界时纠正。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedPage, page]);

  /**
   * 翻页并滚到结果区。
   * @param {number} nextPage
   */
  const goToPage = (nextPage) => {
    update({ page: String(nextPage), q: query, category, sort });
    document.getElementById('journal-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="journal-mast">
        <div className="wrap journal-mast-row">
          <div>
            <p className="kicker">The journal</p>
            <h1>Notes from the bench.</h1>
          </div>
          <p className="journal-count" aria-hidden="true">{String(filtered.length).padStart(2, '0')}</p>
        </div>
      </header>
      <section className="section journal-section">
        <div className="wrap journal-layout">
          <aside className="filter-rail">
            <p className="rail-label">Category</p>
            <div className="filter-stack" role="tablist" aria-label="Categories">
              {['All', ...categories].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === category ? 'is-active' : ''}
                  aria-pressed={item === category}
                  onClick={() => update({ category: item })}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="rail-label">Date</p>
            <div className="sort-toggle" role="group" aria-label="Sort by date">
              <button type="button" className={sort === 'newest' ? 'is-on' : ''} onClick={() => update({ sort: 'newest' })}>
                Newest
              </button>
              <button type="button" className={sort === 'oldest' ? 'is-on' : ''} onClick={() => update({ sort: 'oldest' })}>
                Oldest
              </button>
            </div>
          </aside>
          <div>
            <form className="search-line" role="search" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="journal-search">Search articles</label>
              <input
                id="journal-search"
                type="search"
                placeholder="Search titles, tags, authors"
                value={query}
                onChange={(event) => update({ q: event.target.value })}
              />
            </form>
            <p className="result-count" id="journal-results">
              {filtered.length === 0
                ? 'No stories match.'
                : `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'} · ${sort === 'oldest' ? 'oldest first' : 'newest first'}`}
            </p>
            {visible.length > 0 ? (
              <div className="story-rows">
                {visible.map((article) => (
                  <ArticleCard key={article.slug} article={article} variant="row" />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Nothing on the bench matches that search.</p>
                <button type="button" className="btn btn-dark" onClick={() => update({ q: '', category: 'All' })}>
                  Clear filters
                </button>
              </div>
            )}
            <Pagination page={page} pageCount={filtered.length === 0 ? 1 : pageCount} onPage={goToPage} />
          </div>
        </div>
      </section>
    </>
  );
}
