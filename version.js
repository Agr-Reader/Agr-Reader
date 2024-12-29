const changelog = `- feat: RSSHub Agr Reader自部署服务已上线：rsshub.agrreader.xyz`;

const versionName = "1.8.0";
const versionCode = 101008000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
