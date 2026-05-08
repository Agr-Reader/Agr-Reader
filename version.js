const changelog = `- 新增预测返回手势支持，带来更加流畅的页面切换效果
- 改进桌面小部件用户界面，支持标记以上已读，带来更佳的体验
- 新增与 RSS 服务（例如 FreshRSS）同步时的进度指示器。`;

const versionName = "1.18.1";
const versionCode = 101018001;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/lZCx/Agr_Reader_${versionName}.apk`,
  })
);
