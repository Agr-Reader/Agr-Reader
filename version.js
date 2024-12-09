const changelog = `- feature: 文章来源增加外部浏览器选项，支持以自定义标签页或外部浏览器直接打开文章
- opt: 加强标题去重范围，目前是整体去重
- opt: 优化多语言下订阅源设置选项的文案展示
- fix: 修复标题翻译失效的问题`;

const versionName = "1.7.16";
const versionCode = 101007016;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
