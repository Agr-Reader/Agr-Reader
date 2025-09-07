const changelog = `- fix: 修复FreshRSS无法同步问题`;

const versionName = "1.9.3";
const versionCode = 101009003;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
