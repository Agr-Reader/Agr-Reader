// 发版信息单一数据源。每次发版只改这里。
// 消费方：
//   - docs/.vitepress/theme/components/HomeHeroActions.vue（ZH 首页 APK 下载按钮）
//   - version.js（发版辅助脚本，stdout JSON）
// 注意：docs/public/resources/version.json 是应用内更新端点，仍需手动保持同步。
export const versionName = '2.0.0'

export const versionCode = 102000000

export const changelog = `- 朗读升级为全局悬浮播放器，App 内任意界面都能控制，支持手势切换与快进
- 阅读页打开性能大幅优化
- 修复同步后订阅源的通知、置顶、过滤关键词被重置（Feedly/Feedbin/Folo/GReader）
- 列表滚动到底部不再自动标记全部已读
- 提升 Fever 同步稳定性，修复微软翻译失效`

export const apkFileKey = `Agr_Reader_${versionName}.apk`

export const apkUrl = `https://resource.agrreader.com/f/d/LDHl/${apkFileKey}`