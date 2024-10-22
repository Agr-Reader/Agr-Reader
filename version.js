const changelog = `- feat: 支持设置默认初始页面(订阅源列表或文章列表)
- feat: 小组件可支持自定义分组(Pro)
- feat: 小组件支持设置字体大小
- feat: 支持Bionic Reading(仿生阅读)(Pro)
- opt: 桌面模式分屏比例支持50%
- fix: 修复API未同步已删除订阅源
- fix: 修复深色模式下下载icon不可见问题`;

const versionName = "1.7.14";
const versionCode = 101007014;

console.log(
  JSON.stringify({
    versionName: versionName,
    versionCode: versionCode,
    changelog: changelog,
    fileKey: `Agr_Reader_${versionName}.apk`,
    url: `https://www.agrreader.xyz/resources/Agr_Reader_${versionName}.apk`,
  })
);
