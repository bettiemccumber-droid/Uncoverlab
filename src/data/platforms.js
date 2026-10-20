/**
 * @typedef {Object} Platform
 * @property {string} slug
 * @property {string} name
 * @property {string} summary
 * @property {string} bestFor
 * @property {number} score
 * @property {string} image
 * @property {string} imageAlt
 * @property {string} articleSlug
 */

/** 平台推荐，详情在对应的测评文章里。 */
export const platforms = [
  {
    slug: 'notion',
    name: 'Notion',
    summary: 'The shared desk for a small team: docs, light databases, and a homepage people actually open.',
    bestFor: 'Teams who write together',
    score: 4.4,
    image: '/images/article-notes.jpg',
    imageAlt: 'A hand checking off items in an open notebook.',
    articleSlug: 'note-apps-we-opened-in-2026',
  },
  {
    slug: 'obsidian',
    name: 'Obsidian',
    summary: 'Local notes that turn into a private library. The pick when the work is yours before it is the team’s.',
    bestFor: 'Personal research',
    score: 4.6,
    image: '/images/article-notes.jpg',
    imageAlt: 'Close view of a handwritten checklist in a grid notebook.',
    articleSlug: 'note-apps-we-opened-in-2026',
  },
  {
    slug: 'linear',
    name: 'Linear',
    summary: 'Issue tracking that stays fast when the team is five people around one table, not a department.',
    bestFor: 'Small product teams',
    score: 4.7,
    image: '/images/article-team.jpg',
    imageAlt: 'A small team working on laptops around a wooden table.',
    articleSlug: 'where-small-teams-track-work',
  },
  {
    slug: 'ghost',
    name: 'Ghost',
    summary: 'A publishing platform with memberships built in, and without a feed competing for the reader’s attention.',
    bestFor: 'Independent writers',
    score: 4.5,
    image: '/images/article-writing.jpg',
    imageAlt: 'A fountain pen writing on lined paper.',
    articleSlug: 'newsletters-without-the-noise',
  },
  {
    slug: 'figma',
    name: 'Figma',
    summary: 'Still the design room we hand work off from. Multiplayer editing remains the reason the files live here.',
    bestFor: 'Product design teams',
    score: 4.6,
    image: '/images/article-design.jpg',
    imageAlt: 'Color swatches, a printed palette book, and a tablet of interface sketches on a dark desk.',
    articleSlug: 'design-stack-after-the-handoff',
  },
];

/**
 * 按 slug 查找平台。
 * @param {string} slug
 * @returns {Platform | undefined}
 */
export function getPlatformBySlug(slug) {
  return platforms.find((platform) => platform.slug === slug);
}
