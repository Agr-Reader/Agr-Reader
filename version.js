const changelog = `- 新功能：新增 AI 翻译、自定义 AI 提示词（Prompts）、自定义模型路径，并在“导入与导出”设置中增加了 OPML 导入功能。
- 功能改进：添加了快捷操作，支持快速标记文章为已读、跳转至下一个订阅源，以及批量标记过去 1 天或 7 天内的近期项目。
- 问题修复：修复了部分订阅源解析失败、特定 AI 模型设置无法保存、工具提示（Tooltip）闪烁、深色模式渲染异常、内容宽度溢出以及阅读器中标题截断的问题。`;

const versionName = "1.14.0";
const versionCode = 101014000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/0vsj/Agr_Reader_${versionName}.apk`,
  })
);
