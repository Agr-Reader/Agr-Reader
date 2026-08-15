// 发版辅助脚本：stdout 输出 JSON（versionName/versionCode/changelog/fileKey/url）。
// 数据源：docs/.vitepress/version.mjs（单一数据源）。CJS 无法静态 import ESM，故用动态 import。
import("./docs/.vitepress/version.mjs").then(
  ({ versionName, versionCode, changelog, apkFileKey, apkUrl }) => {
    console.log(
      JSON.stringify({
        versionName: versionName,
        versionCode: versionCode,
        changelog: changelog,
        fileKey: apkFileKey,
        url: apkUrl,
      })
    )
  }
)
