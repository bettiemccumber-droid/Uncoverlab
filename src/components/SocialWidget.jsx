import { socials } from '../data/site';

/**
 * 单个社交平台图标。
 * @param {{ id: string }} props
 * @returns {JSX.Element | null}
 */
function SocialIcon({ id }) {
  const common = {
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    className: 'social-icon',
  };

  if (id === 'x') {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M14.7 10.3 22.4 1.5h-1.8l-6.7 7.6L8.4 1.5H1.6l8.1 11.5L1.6 22.5h1.8l7.1-8.1 5.7 8.1h6.8l-8.3-12.2Zm-2.5 2.8-.8-1.2L4.1 2.9h2.8l5.3 7.4.8 1.2 6.9 9.7h-2.8l-5.9-8.1Z"
        />
      </svg>
    );
  }

  if (id === 'instagram') {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1Zm6.3-8.1a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM21.3 7.1a6.3 6.3 0 0 0-1.7-4.5 6.4 6.4 0 0 0-4.5-1.7c-1.8-.1-7.1-.1-8.9 0A6.4 6.4 0 0 0 1.7 2.6 6.3 6.3 0 0 0 0 7.1c-.1 1.8-.1 7.1 0 8.9a6.3 6.3 0 0 0 1.7 4.5 6.4 6.4 0 0 0 4.5 1.7c1.8.1 7.1.1 8.9 0a6.4 6.4 0 0 0 4.5-1.7 6.3 6.3 0 0 0 1.7-4.5c.1-1.8.1-7.1 0-8.9Zm-1.6 10.8a3.6 3.6 0 0 1-2 2c-1.4.6-4.7.4-6.2.4s-4.8.1-6.2-.4a3.6 3.6 0 0 1-2-2c-.6-1.4-.4-4.7-.4-6.2s-.2-4.8.4-6.2a3.6 3.6 0 0 1 2-2c1.4-.6 4.7-.4 6.2-.4s4.8-.2 6.2.4a3.6 3.6 0 0 1 2 2c.6 1.4.4 4.7.4 6.2s.2 4.8-.4 6.2Z"
        />
      </svg>
    );
  }

  if (id === 'linkedin') {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M4.7 3.3A2.2 2.2 0 1 1 2.5 5.5a2.2 2.2 0 0 1 2.2-2.2ZM2.6 8.6h4.2V21.5H2.6Zm6.6 0h4v1.8h.1a4.4 4.4 0 0 1 4-2.2c4.2 0 5 2.8 5 6.4v7h-4.2v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.3H9.2Z"
        />
      </svg>
    );
  }

  if (id === 'youtube') {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5Z"
        />
      </svg>
    );
  }

  if (id === 'github') {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C16.7 4.7 17.7 5 17.7 5a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"
        />
      </svg>
    );
  }

  return null;
}

/**
 * 带外链的社交媒体组件。variant 控制图标、竖排或带文字的横排。
 * @param {{ title?: string, variant?: 'icons' | 'stack' | 'labeled' }} props
 * @returns {JSX.Element}
 */
export default function SocialWidget({ title = 'Follow the lab', variant = 'icons' }) {
  return (
    <section className={`social-widget is-${variant}`} aria-label={title}>
      {title ? <h2 className="social-title">{title}</h2> : null}
      <ul className="social-list">
        {socials.map((item) => (
          <li key={item.id}>
            <a href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.label}>
              <SocialIcon id={item.id} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
