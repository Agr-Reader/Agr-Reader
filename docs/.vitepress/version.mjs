// 发版信息单一数据源。每次发版只改这里。
// 消费方：
//   - docs/.vitepress/theme/components/HomeHeroActions.vue（ZH 首页 APK 下载按钮）
//   - version.js（发版辅助脚本，stdout JSON）
// 注意：docs/public/resources/version.json 是应用内更新端点，仍需手动保持同步。
export const versionName = '2.0.2'

export const versionCode = 102000002

export const changelog = `- 修复面包多激活问题
- 优化平板模式以支持自适应折叠屏/大屏等多类设备`

export const apkFileKey = `Agr_Reader_${versionName}.apk`

export const apkUrl = `https://resource.agrreader.com/f/d/nBtb/${apkFileKey}`