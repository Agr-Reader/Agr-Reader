const changelog = `• 新增针对订阅、群组和信息源的 AI 未读内容摘要，包含关键要点、主题、推荐阅读及来源引用
• 优化 AI 周报功能，改进了日期选择、生成与重新生成机制以及文章导航体验
• 改进 Android 主屏幕小组件，支持基于系统壁纸的动态配色及主题自动刷新
• 修复了将内容标记为已读时对文章范围的处理问题`;

const versionName = "1.18.3";
const versionCode = 101018003;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/d/DwI2/Agr_Reader_${versionName}.apk`,
  })
);
