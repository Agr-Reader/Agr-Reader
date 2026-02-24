const changelog = `- 新特性
  - 支持BazQux，Feedbin和Feedly账号集成
  - AI提供商新增Alibaba(Qwen)和OpenRouter
  - 新增文章列表背景色海拔高度调整设置，打造更个性化的阅读体验。
- 体验优化
  - 大幅提升文章打开时的初始渲染速度。
  - 优化内容源切换，确保沉浸式翻译更加稳定可靠。
  - 优化沉浸式翻译识别逻辑，排除 AI 摘要文本。
- 问题修复：
  - 修复 Feedly 订阅流程稳定性问题。
  - 修复 Feedbin 副标题解析错误。
  - 修复 AI 摘要默认语言设置错误的问题，跟随APP语言自适应输出内容。`;

const versionName = "1.13.0";
const versionCode = 101013000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/GVfq/Agr_Reader_1.13.0.apk`,
  })
);
