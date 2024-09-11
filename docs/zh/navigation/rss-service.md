# RSS服务接入教程

## [The Old Reader](https://theoldreader.com/)
> 将在1.7.5版本支持

The Old Reader的接入较为简单。
::: tip
- 域名：https://theoldreader.com/
- 用户名：邮箱地址
- 密码：账户的登录密码
:::

## [Fresh RSS](https://freshrss.org/)
> FreshRSS默认使用Google Reader API接入。

进入设置-> 账户管理界面。
![FreshRSS账户管理](/images/freshrss1.png)

输入API 密码后点击提交更新。然后点击下方链接跳转到FreshRSS API endpoints页面。

![FreshRSS账户管理](/images/freshrss2.png)

::: tip
- 域名：FreshRSS API endpoints界面对应的Google Reader compatible API以greader.php结尾的地址。
- 用户名：账户的用户名
- 密码：API密码（**注意非账户密码**）
:::

## [Miniflux](https://miniflux.app/)
> Miniflux默认使用Google Reader API接入。

进入设置-> 集成设置中，展开Google Reader 选项。

![Miniflux集成](/images/miniflux1.png)


选中“启动Google Reader API”，然后设置Google Reader用户名与密码即可。
::: tip
- 域名：Google Reader API端点链接
- 用户名：Google Reader 用户名
- 密码：Google Reader 密码
:::
## [Tiny Tiny RSS](https://tt-rss.org/)
> Tiny Tiny RSS目前仅支持Fever API且需要开启对应插件，操作比较麻烦而且Fever API功能太少，不太推荐。

1. 打开插件列表搜索“Fever”并开启Fever插件
![Fever插件](/images/tinytinyrss2.png)

2. 在偏好设置中，启用API，勾选“允许外部客户端通过 API 来访问该账户”
![启用API](/images/tinytinyrss1.png)

3. 在Fever插件安装好后，进入偏好设置->Fever Emulation设置
设置Fever API密码，域名为黄色高亮处链接（**注意使用时去掉“.local”**），如：https://ttrss.xxx/plugins/fever/
![Fever设置](/images/tinytinyrss3.png)

::: tip
- 域名：Fever Emulation设置中提供：https://ttrss.xxx/plugins/fever/ (**注意去掉“.local”**）)
- 用户名：登录所用用户名
- 密码：Fever Emulation设置的Fever API密码
:::
