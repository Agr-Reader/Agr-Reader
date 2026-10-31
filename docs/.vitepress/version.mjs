// 发版信息单一数据源。每次发版只改这里。
// 消费方：
//   - docs/.vitepress/theme/components/HomeHeroActions.vue（ZH 首页 APK 下载按钮）
//   - version.js（发版辅助脚本，stdout JSON）
// 注意：docs/public/resources/version.json 是应用内更新端点，仍需手动保持同步。
export const versionName = '2.0.3'

export const versionCode = 102000003

export const changelog = `- AI 同步焦点：订阅同步完成后一键提炼新增文章的核心焦点与话题，普通用户每周尊享免费试用额度
- 缓存清理：设置中新增缓存管理，轻松清理图片与临时文件以释放设备存储空间
- 同步速度飞跃：优化同步拉取机制，大幅降低网络开销与同步耗时，刷源更迅捷
- 大屏与折叠屏适配：全面升级平板与折叠屏双栏分屏体验，自适应更多屏幕尺寸与形态`

export const apkFileKey = `Agr_Reader_${versionName}.apk`

export const apkUrl = `https://resource.agrreader.com/f/d/5bca/${apkFileKey}`