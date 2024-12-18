const changelog = `- fix: 修复平板模式下今日未读无法打开文章的问题
- fix: 修复赞助功能无法跳转的问题`;

const versionName = "1.7.17";
const versionCode = 101007017;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
