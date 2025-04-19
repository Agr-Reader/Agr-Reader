const changelog = `- feature: 新增导出所有收藏文章功能
- optimize: 同步间隔支持5/15分钟
- optimize: 优化全部已读功能
- fix: 修复部分导致闪退的问题`;

const versionName = "1.8.3";
const versionCode = 101008003;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
