# Backup Settings

To ensure privacy and data security, Agr Reader does not sync data to the server. Currently, two methods are provided for backing up your data:
- Local Backup: In Settings -> General -> Export to OPML, you can export all your local subscriptions as an OPML file, which can be used for future restoration or migration.
- WebDAV Backup: In Settings -> Backup & Restore, a backup function based on the WebDAV protocol is provided, allowing you to back up subscription data to the cloud.

> Recommendation: Use WebDAV for regular backups to prevent data loss due to unexpected situations such as phone damage, loss, or accidental deletion.

## Local Backup
Go to Settings -> General -> Export to OPML to export your subscriptions.


## WebDAV Backup
Many popular cloud storage services support backup using the WebDAV protocol. Here's an example of using [Jianguoyun](https://www.jianguoyun.com/).

### Jianguoyun WebDAV Usage Guide
1. Register for a Jianguoyun account.
2. Click on your username -> Account Information.
3. Click on Security Options -> Add Application, and follow the prompts.
4. Enter the application name and generate an application password, which will be used later.
5. Configure the settings in Agr Reader by entering the following: server address, account, and application password.
![WebDAV Setting](/images/webdav1.png)

::: info
Currently, WebDAV supports only manual backups. A scheduled backup feature will be added in future updates.
:::