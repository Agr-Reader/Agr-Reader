const changelog = `- 新增功能：
  - 在阅读器中新增顶部和底部边缘拖动操作，方便更快捷地控制阅读。
  - 新增自定义阅读字体，可根据您的喜好进行个性化设置。
- 改进：
  - 优化拖动手势的阻尼，带来更流畅的触控交互体验。
  - 改进添加集成 RSS 服务时的错误反馈。
  - 优化Feed列表空状态，使订阅源状态更加清晰。
- 问题修复：
  - 修复 AI 提供商（如 LongCat）集成问题。
  - 修复阅读器中文章图片尺寸显示不正常的问题。
  - 修复阅读和导出菜单的显示问题，带来更稳定的用户体验。`;

const versionName = "1.17.0";
const versionCode = 101017000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/yDHv/Agr_Reader_${versionName}.apk`,
  })
);
