/** @typedef {{ to: string, label: string }} NavItem */
/** @typedef {{ id: string, label: string, href: string }} SocialLink */

/** 主导航。 */
export const nav = [
  { to: '/blog', label: 'Blog' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

/** 文章分类，顺序即筛选条的展示顺序。 */
export const categories = ['Product Reviews', 'Platform Picks', 'Lab Notes'];

/** 列表页每页文章数。 */
export const PAGE_SIZE = 6;

/**
 * 可跳转的社交链接。
 * 图标组件按 id 匹配。
 */
export const socials = [
  { id: 'x', label: 'X', href: 'https://x.com/uncoverlab' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/uncoverlab' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/uncoverlab' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@uncoverlab' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/uncoverlab' },
];

/** 工作室联系信息。 */
export const studio = {
  name: 'UncoverLab',
  lines: ['214 Harbor Street, Studio 4', 'Portland, Oregon 97214'],
  email: 'hello@uncoverlab.com',
  phone: '+1 (503) 555-0148',
};

/** 首页与关于页使用的编辑原则。 */
export const principles = [
  {
    title: 'Live with it',
    text: 'A weekend unboxing is not a review. We keep an object or a platform in ordinary work before we recommend it.',
  },
  {
    title: 'Name the tradeoff',
    text: 'Every pick gives something up. We write the compromise in the same paragraph as the praise.',
  },
  {
    title: 'Leave a paper trail',
    text: 'Dates stay on the piece. When our mind changes, we add a note instead of quietly rewriting the past.',
  },
];
