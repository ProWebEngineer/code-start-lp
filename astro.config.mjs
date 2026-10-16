// @ts-check
import { defineConfig } from 'astro/config';

// 公開予定 URL: https://prowebengineer.github.io/code-start-lp/
// site は GitHub Pages のオリジン、base はリポジトリのサブパス。
// デプロイ用ワークフローの追加や Pages の有効化は行わない。
export default defineConfig({
  site: 'https://prowebengineer.github.io',
  base: '/code-start-lp',
  trailingSlash: 'always',
});
