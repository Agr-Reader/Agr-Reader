const changelog = `- feature: 适配Android 16
- fix: 修复部分问题`;

const versionName = "1.11.2";
const versionCode = 101011002;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
