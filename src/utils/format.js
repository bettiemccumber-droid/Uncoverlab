/**
 * 将 ISO 日期格式化为英文长日期，避免时区把日期提前一天。
 * @param {string} iso 形如 2026-02-12 的日期
 * @returns {string}
 */
export function formatDate(iso) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}

/**
 * 阅读时间文案。
 * @param {number} minutes
 * @returns {string}
 */
export function formatReadTime(minutes) {
  return `${minutes} min read`;
}
