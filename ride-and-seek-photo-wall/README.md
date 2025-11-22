# Ride and Seek 活动照片墙

这是一个响应式的照片墙网站，展示 Ride and Seek 活动的精彩瞬间。

## 功能特点

- 🎨 现代化的瀑布流布局
- 📱 完全响应式设计
- ✨ 悬停动画效果
- 🖼️ 自动适配不同屏幕尺寸
- 🎯 图片悬停描述

## 部署到 GitHub Pages

### 方法一：使用 GitHub Desktop（推荐新手）

1. 在 GitHub 上创建一个新的仓库，命名为 `ride-and-seek-photos`
2. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
3. 打开 GitHub Desktop，克隆刚才创建的仓库到本地
4. 将本项目的所有文件复制到仓库文件夹中
5. 在 GitHub Desktop 中提交并推送更改
6. 在 GitHub 仓库设置中，进入 "Pages" 选项卡
7. 在 "Source" 部分选择 "Deploy from a branch"
8. 选择 "main" 分支和 "/ (root)" 文件夹
9. 点击保存，等待几分钟后您的网站就上线了！

### 方法二：使用 Git 命令行

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Ride and Seek photo gallery"

# 连接到 GitHub 仓库（替换为您的仓库地址）
git remote add origin https://github.com/您的用户名/ride-and-seek-photos.git

# 推送代码
git branch -M main
git push -u origin main
```

然后在 GitHub 仓库设置中启用 Pages 功能。

## 访问您的网站

部署成功后，您的网站地址将是：
`https://您的用户名.github.io/ride-and-seek-photos/`

## 自定义和扩展

### 添加新图片
1. 将新图片放入 `images/` 文件夹
2. 在 `index.html` 文件的 `.gallery` 部分添加新的图片元素：
```html
<div class="gallery-item">
    <img src="images/新图片名称.jpg" alt="图片描述">
    <div class="image-caption">图片标题</div>
</div>
```

### 修改样式
编辑 `index.html` 文件中的 `<style>` 部分来自定义颜色、字体和布局。

## 技术支持

如果遇到任何问题，请检查：
- 所有图片路径是否正确
- 图片文件名是否包含空格（建议使用连字符代替空格）
- GitHub Pages 是否已正确配置

---

🚴 享受您的照片墙网站！
