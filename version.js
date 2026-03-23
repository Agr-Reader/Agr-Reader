const changelog = `- 新增：
  - AI每周报告：新增了每周摘要功能，帮助您快速补看过往未读文章
  - 手势重构：重构左滑手势，现在支持更广泛的动作选项。
- 改进：
  - 优化Grey和Monochrome主题配色.
  - 优化全平台Toast样式
- 修复：
  - 修复AI模型上下文长度报错问题`;

const versionName = "1.16.0";
const versionCode = 101016000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/j7hk/Agr_Reader_${versionName}.apk`,
  })
);
