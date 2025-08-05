const changelog = `- feature: 阅读页增加切换内容来源提示，当页面无内容显示时可尝试切换
- optimize: 改善阅读页滑动效果，减少横滑灵敏度
- optimize: 增加Google模型
- optimize: 优化阅读页图片预览显示效果
- fix: 修复订阅源设置中内容摘要选项失效问题`;

const versionName = "1.9.1";
const versionCode = 101009001;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
