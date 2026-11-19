# UncoverLab

English product-and-platform journal. Static stories live in `src/data`. AffiliAds can publish new pieces through `POST /api/posts`; those articles are stored in a private Vercel Blob file and show up on the blog without redeploying.

## Live site

- Site: https://www.uncoverlab.top
- Publish endpoint: `https://www.uncoverlab.top/api/posts`
- Article URL shape: `https://www.uncoverlab.top/blog/<slug>`

## Vercel environment

Set these in the Vercel project:

- `PUBLISH_TOKEN` — Bearer token AffiliAds sends as `Authorization: Bearer <PUBLISH_TOKEN>`
- Private Blob store connected to the project (`BLOB_READ_WRITE_TOKEN` / `BLOB_STORE_ID`)
- Optional: `SITE_ORIGIN=https://www.uncoverlab.top` so returned article URLs stay stable

Use a **private** Blob store. A public store can lag after overwrite, so a just-published story may not appear immediately.

## AffiliAds

In AffiliAds → 内容站:

| Field | Value |
| --- | --- |
| 名称 | uncoverlab |
| 域名 | www.uncoverlab.top |
| 发布地址 | https://www.uncoverlab.top/api/posts |
| 密钥 | same value as `PUBLISH_TOKEN` |

Request body fields: `title`, `bodyHtml` (required), plus optional `excerpt`, `category`, `image`, `images`, `merchantName`, `merchantUrl`, `mid`, `trackUrl`, `author`.

Success response:

```json
{
  "slug": "generated-slug",
  "url": "https://www.uncoverlab.top/blog/generated-slug"
}
```

`merchantUrl` is stored as a note only. Affiliate links inside `bodyHtml` are kept unchanged.

Public reads (no token):

- `GET /api/posts` — published list
- `GET /api/posts/<slug>` — `{ "bodyHtml": "..." }`
- `DELETE /api/posts/<slug>` — remove one API-published article (requires token)
