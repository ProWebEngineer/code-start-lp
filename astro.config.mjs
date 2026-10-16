// @ts-check
import { defineConfig } from 'astro/config';

// 公開 URL: https://prowebengineer.github.io/code-start-lp/
// site は GitHub Pages のオリジン、base はリポジトリのサブパス。
// デプロイは .github/workflows/deploy.yml（withastro/action）が行う。
export default defineConfig({
  site: 'https://prowebengineer.github.io',
  base: '/code-start-lp',
  trailingSlash: 'always',
});
