# Sneaker 项目

为想买跑鞋但不知如何选择的用户提供可查询的网站，后续会不断扩展功能。

## 技术栈
- 前端：`sneaker-website`（Next.js 16、React 19、TypeScript、Tailwind CSS，包管理器 pnpm）
- 后端：`sneaker-api`（Go，待实现）
- 云资源：AWS（EC2、S3）

## 目录结构
```
Sneaker/
├── sneaker-website/   # 前端站点（Next.js）
└── sneaker-api/       # 后端 API（Go，占位）
```

## 快速开始

### 前置条件
- Node.js：推荐使用 20 LTS（Next.js 16 需 >= 18.18；建议 20 以获得长期支持）
- pnpm：与项目声明一致（package.json 中为 `pnpm@10.15.1`）
- Go：建议 1.22+（后端就绪后补充具体版本）

### 启动前端（sneaker-website）
```
cd sneaker-website
pnpm install
pnpm dev
```
访问：http://localhost:3000

常用脚本（在 `sneaker-website` 目录下执行）：
- 开发：`pnpm dev`
- 构建：`pnpm build`
- 生产启动：`pnpm start`
- 代码检查：`pnpm lint` / `pnpm lint:fix`
- 格式化：`pnpm format` / `pnpm format:check`

### 启动后端（sneaker-api）
后端目录暂为空，计划使用 Go 实现。示例（占位）：
```
cd sneaker-api
# go run ./cmd/api
# 或构建后运行：go build -o bin/api ./cmd/api && ./bin/api
```

## 环境变量
根目录 `.gitignore` 已忽略 `.env` 与 `.env.*`（保留 `.env.example`）。

前端（sneaker-website/.env.local 或 .env）：
- NEXT_PUBLIC_API_BASE_URL：后端 API 基础地址（例如 https://api.example.com 或 http://localhost:8080）
- NEXT_PUBLIC_SITE_URL：站点对外地址（可选，用于 SEO/分享）

后端（sneaker-api/.env 或系统环境）：
- PORT：服务端口（默认 8080）
- APP_ENV：运行环境（development | staging | production）
- AWS_REGION：AWS 区域（如 ap-southeast-1）
- AWS_S3_BUCKET：用于存储图片或静态资源的 S3 桶名
- 可选（若未使用 EC2 实例角色/IAM 绑定）：AWS_ACCESS_KEY_ID、AWS_SECRET_ACCESS_KEY（不建议明文配置）

本仓库已提供 `.env.example` 模板，按需复制为实际环境文件并填写。

## 部署建议
- 前端（Vercel）：
  - 连接 Git 仓库，一键部署 Next.js
  - 在 Vercel 项目设置中配置 NEXT_PUBLIC_API_BASE_URL
- 后端（AWS EC2）：
  - 将 Go 后端部署到 EC2（systemd 进程守护，或 Docker）
  - 暴露端口（如 8080）并通过 Nginx/ALB 做反向代理与 TLS
  - 访问 S3（推荐使用 EC2 实例角色 + 最小权限策略）

## 许可证
待确认（如果希望开源，推荐 MIT；若私有，可标注专有）

## 维护者
待确认（姓名、联系方式或组织）

## 下一步
- 确认项目正式名称（当前以 “Sneaker” 代称）
- 确认 Node.js 与 Go 的目标版本范围（建议 Node 20 LTS，Go 1.22+）
- 确认部署方案细节（Vercel + EC2 是否可行）
- 填写 `.env.example` 并创建对应的实际环境文件
