const changelog = `- 订阅源搜索：新增在添加订阅源时通过关键词进行搜索的功能。
- Folo 账号支持：新增对 Folo 账号的支持，并优化了 Feedly 的登录体验。
- 桌面端键盘快捷键：在桌面端引入了新的键盘快捷键，以提升阅读与导航效率。
- 增强的更新通知：优化了通知内容，现已支持显示文章预览。
- 改进的横向滑动体验：优化了阅读页面的滑动灵敏度，以减少误触情况。
- Bug 修复：
  - 解决了同步服务中文章重复抓取及订阅源排序异常的问题。 
  - 修复了文本转语音（TTS）模式下的播放错误。 
  - 修复了桌面客户端上的全文解析错误。`;

const versionName = "1.18.0";
const versionCode = 101018000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://resource.agrreader.com/f/mVfz/Agr_Reader_${versionName}.apk`,
  })
);
