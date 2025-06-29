const changelog = `- feature: 新增AI总结摘要功能，在交互->AI设置中设置API模型  
- optimize: 阅读页面标题增加加载效果  
- optimzie: 非Pro版本订阅源数据增加至200个`;

const versionName = "1.9.0";
const versionCode = 101009000;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
