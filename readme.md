# vitepress-docs-site-template

> 以下内容供参考

## 背景

很多人希望利用 vitepress 管理文档，并制作一个文档网站，这里提供一个快捷模板，使用该模板可以很快建立起托管到 github pages 上。

## 目前状态

`alpha` 你需要有看懂代码的能力。

## 使用方式

使用本模板会很容易，请按照下面步骤操作：

1. 选择 "use template" 使用本模板，并建立仓库
2. 克隆仓库，执行依赖安装，请任意选择 `pnpm/yarn/npm` ，个人推荐 `pnpm` 理由是更轻更快。
3. 修改 `package.json` 中的相关字段，比如 `name` `author` `repository` `homepage` 等
4. 观察并维护 `docs/` 文件夹内容
5. 修改 `.github/workflow` 内容

## roadmap

- [ ] 完善 readme.md
- [ ] actions 里尽可能使用变量，减少操作步骤
- [ ] 完善自动生成 `data.json` 的脚本
- [ ] 推广试用
- [ ] gitlab/gitee/coding 支持
