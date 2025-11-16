const changelog = `- feature: 新增账号系统，用户可以注册/登录账号以绑定Pro会员，多设备间只需要登录同一账号即可同步Pro会员，更多同步功能将在后续支持！`;

const versionName = "1.9.5";
const versionCode = 101009005;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
