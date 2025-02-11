const changelog = `- feature: 应用主题切换支持自定义输入色值
- feature: 增加首次启动App时引导弹窗
- feature: 多语言支持俄语
- optimize: 滚动标记已读兼容触底场景
- optimize: 文章列表页滚动时隐藏悬浮按钮`;

const versionName = "1.8.1";
const versionCode = 101008001;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
