# eai-homepage

极简中的极简的个人主页，风格参考 [ssi.inc](https://ssi.inc/)：纯白底、黑字、一句宣言式大标题、章节自动编号、页脚一行版权。

## 技术栈

| 工具                                                 | 用途                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| [VuePress 2](https://v2.vuepress.vuejs.org/) (rc.31) | 静态站点生成，自带极简自定义主题（`docs/.vuepress/theme/`） |
| Vite 8 / Rolldown                                    | VuePress bundler 内核（`@vuepress/bundler-vite` 自带）      |
| [TypeScript 7](https://www.typescriptlang.org/)      | 原生编译器，负责 `.ts` 类型检查（`pnpm typecheck`）         |
| [Vite+](https://viteplus.dev/)                       | `vp check`（Oxlint + Oxfmt + 类型检查），统一工具链         |
| [Tailwind CSS 4](https://tailwindcss.com/)           | 样式：组件用工具类，tokens 与 markdown 样式在 `styles.css`  |
| [prek](https://github.com/j178/prek)                 | Git hooks（格式化 + lint + 基础检查）                       |
| [Cloudflare Pages](https://pages.cloudflare.com/)    | 部署（wrangler + GitHub Actions）                           |

## 常用命令

```sh
pnpm install        # 安装依赖（首次需再执行 pnpm approve-builds --all 放行 esbuild/workerd）
pnpm dev            # 本地开发 (localhost:8080)
pnpm build          # 构建到 docs/.vuepress/dist
pnpm check          # vp: 格式 + lint + 类型
pnpm typecheck      # TypeScript 7 (tsc --noEmit)
pnpm deploy         # 构建并用 wrangler 直接发布到 Cloudflare Pages
```

## 改内容

| 想改什么                   | 改哪里                                                           |
| -------------------------- | ---------------------------------------------------------------- |
| 大标题、正文、链接列表     | `docs/README.md`（社交链接在 `options.ts` 里还有一份，两处同改） |
| 名字、导航、页脚、SEO 描述 | `docs/.vuepress/theme/options.ts`                                |
| 样式（tokens、字体、动效） | `docs/.vuepress/theme/styles.css`（Tailwind `@theme`）           |
| favicon                    | `docs/.vuepress/public/favicon.svg`                              |

## 部署到 Cloudflare

一次性准备：

```sh
# 1. 登录（会开浏览器授权）
pnpm exec wrangler login

# 2. 创建 Pages 项目（名字对应 wrangler.toml / deploy.yml 里的 eai-homepage）
pnpm exec wrangler pages project create eai-homepage --production-branch=main
```

两种发布方式：

- **手动**：`pnpm deploy`
- **自动**：推到 GitHub 后由 `.github/workflows/deploy.yml` 发布。在仓库 Settings →
  Secrets and variables → Actions 里添加：
  - `CLOUDFLARE_API_TOKEN`（权限：Account → Cloudflare Pages → Edit）
  - `CLOUDFLARE_ACCOUNT_ID`

## Git hooks

```sh
prek install        # 激活 hooks（首次 clone 后执行一次）
prek run --all-files
```
