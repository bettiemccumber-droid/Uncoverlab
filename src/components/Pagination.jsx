/**
 * 文章列表分页。
 * @param {{ page: number, pageCount: number, onPage: (page: number) => void }} props
 * @returns {JSX.Element | null}
 */
export default function Pagination({ page, pageCount, onPage }) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button type="button" onClick={() => onPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <ol>
        {pages.map((number) => (
          <li key={number}>
            <button
              type="button"
              className={number === page ? 'is-current' : ''}
              aria-current={number === page ? 'page' : undefined}
              onClick={() => onPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" onClick={() => onPage(page + 1)} disabled={page === pageCount}>
        Next
      </button>
    </nav>
  );
}
