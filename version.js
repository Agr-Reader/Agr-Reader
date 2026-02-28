const changelog = `- 新增功能：
  - 新增 Agr Reader 更新日志作为默认订阅 (https://www.agrreader.com/rss/changelog.xml)
- 改进：
  - 优化了“关于”页面的呈现方式，使应用和版本信息在移动设备上更易于阅读。
  - 优化了内容源控件周围的设置交互，带来更流畅的触控体验。
- 问题修复：
  - 修复了内容源切换选项中的工具提示显示问题。
  - 修复了部分订阅源解析失败的问题。
  - 修复了部分 AI 模型设置无法成功保存配置的问题。`;

const versionName = "1.13.1";
const versionCode = 101013002;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/Y1Sa/Agr_Reader_${versionName}.apk`,
  })
);
