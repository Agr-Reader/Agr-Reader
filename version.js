const changelog = `- feature: AI功能优化，开放支持自定义Url；支持自定义Prompt
- feature: 增加多语言文本
- optimize: AI摘要支持流式输出
- optimize: 优化RSS订阅页面，优化拉取功能`;

const versionName = "1.11.0";
const versionCode = 101011000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
