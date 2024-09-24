const changelog = `- opt: 平板模式采用更加宽松的策略，中型尺寸也进行分屏处理。
- fix: 修复文章保存期间为永久时已读失效的问题；
- fix: 过滤规则配置计数未更新问题`;

const versionName = "1.7.11";
const versionCode = 101007011;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
