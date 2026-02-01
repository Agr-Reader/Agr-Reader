const changelog = `- 桌面版正式发布，现已支持Windows,Linux平台，MacOS后续支持。
- 语言设置：新增语言设置，可自行切换应用语言、AI生成内容语言、翻译语言。
- 阅读页：阅读页内容来源切换按钮功能扩展，点击可切换内容来源为‘内容摘要’或‘全文解析’，长按切换为‘内嵌网页’。
- 优化：部分订阅源全文解析问题
- 修复：平板模式已读文章状态显示问题`;

const versionName = "1.12.1";
const versionCode = 101012001;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/XaFn/Agr_Reader_${versionName}.apk`,
  })
);
