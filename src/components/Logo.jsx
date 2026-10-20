/**
 * UncoverLab 标志：取景框与字标。
 * @param {{ className?: string }} props
 * @returns {JSX.Element}
 */
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="logo-word">
        Uncover<em>Lab</em>
      </span>
    </span>
  );
}
