import { useEffect } from 'react';

/**
 * 设置文档标题。
 * @param {string} title 页面名称，空字符串时只用站点名
 */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · UncoverLab` : 'UncoverLab — Products and platforms worth keeping';
  }, [title]);
}
