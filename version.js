const changelog = `- 新增功能：
  - 添加了 AI 注释，帮助读者更好地理解文章内容。
  - 添加了图片分享功能。
  - 添加了置顶订阅源，方便用户快速访问重要信息。
- 改进：
  - 优化了预测性返回过渡效果。
- 问题修复：
  - 修复了导航栏边距问题。
  - 修复了下载图片时未显示提示信息的问题。`;

const versionName = "1.18.2";
const versionCode = 101018002;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/lZCx/Agr_Reader_${versionName}.apk`,
  })
);
