const changelog = `- 新增功能：
  - 全新的基础与进阶主题预设（日落、新闻纸、单色）组合。
  - 新增AI摘要的复制和分享功能。
  - 新增切换文章解析引擎的选项，以提高全文解析的兼容性。
  - 新增关闭Logo特殊字体选项。
  - 新增文章封面图片抓取选项（头图/首图）。

- 改进：
  - 增强阅读页沉浸式体验，优化BottomBar的样式与滚动收起动效。
  - 为AI功能新增“重新生成”选项。
  - 起始页Feed/Unread选项优化

- 错误修复：
   - 修复了Miniflux同步失败及相关数据获取问题。
   - 修复了文章中数学公式的渲染问题和布局溢出问题。
   - 修复了退出全屏视频时的卡顿问题，并减少了过渡动画期间的空白闪烁现象。`;

const versionName = "1.15.0";
const versionCode = 101015000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/eouq/Agr_Reader_${versionName}.apk`,
  })
);
