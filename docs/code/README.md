# 必读

## Gitee自动发布代码到阿里云服务器

要实现Gitee自动发布代码到阿里云服务器，可以借助Gitee的Webhook功能结合服务器端简单的脚本，按以下步骤操作：

### 1. 确保阿里云服务器环境准备

#### 安装必要软件

需要在阿里云服务器上安装Git，以便拉取代码，若还没安装，可以使用以下命令安装，以下示例针对常见的Linux系统：

**Ubuntu/Debian系统**

`sudo apt-get update sudo apt-get install git`

**CentOS/RHEL系统**

`sudo yum install git`

### 2. 创建项目目录并克隆代码

在服务器上创建一个用于存放项目代码的目录，并将Gitee上的项目克隆到该目录。

```bash
# 创建目录，可根据实际需求修改路径和目录名 
mkdir /var/www/myproject cd /var/www/myproject 
# 克隆Gitee上的项目，替换为你的仓库地址 
git clone <gitee-repo-url>.
```

### 3. 编写拉取代码的脚本

在服务器上创建一个Shell脚本，用于拉取最新的代码。例如，创建一个名为`update.sh` 的脚本：

```bash
#!/bin/bash # 定义项目目录 PROJECT_DIR="/var/www/myproject" 
# 进入项目目录 
cd $PROJECT_DIR 
# 拉取最新代码 
git pull origin main 
# 下面可添加其他部署相关的命令，如重启服务等，以Node.js 项目为例 
# 安装依赖 
npm install 
# 重启PM2进程
pm2 restart app.js 
```

给脚本添加执行权限：

`chmod +x update.sh`

### 4. 配置Gitee的Webhook

#### - 登录Gitee

进入你的项目仓库，点击`管理` -> `WebHooks`。

#### - 添加Webhook

- **URL**：填写阿里云服务器上能够接收Webhook请求的地址，假设服务器IP为`123.456.789.01`，可以编写一个简单的Node.js 或Python脚本来接收请求并执行`update.sh` 脚本。下面是一个使用Node.js 的示例代码：

``const express = require('express'); const app = express(); const { exec } = require('child_process'); app.post('/webhook', (req, res) => { exec('/var/www/myproject/update.sh', (error, stdout, stderr) => { if (error) { console.error(` 执行脚本出错: ${error.message}`); res.status(500).send(' 执行脚本出错'); return; } if (stderr) { console.error(` 脚本错误输出: ${stderr}`); } console.log(` 脚本输出: ${stdout}`); res.status(200).send(' 更新成功'); }); }); const port = 3000; app.listen(port, () => { console.log(` 服务器运行在端口 ${port}`); });``

将上述代码保存为`webhook.js` ，然后安装`express`并启动服务：

`npm init -y npm install express node webhook.js`

在Gitee的Webhook配置中，URL填写 `http://123.456.789.01:3000/webhook` 。

- **触发条件**：根据需求选择，一般选择`Push事件`，当代码推送到仓库时触发Webhook。

### 5. 验证配置

将一些更改推送到Gitee仓库，查看服务器日志是否执行了拉取代码的操作，以及Webhook的响应状态，如果一切正常，则说明自动发布配置成功。

### 注意事项

- **安全性**：要确保服务器防火墙允许相应端口的流量，并且只接受Gitee的合法请求，可以根据Gitee的IP范围进行限制。
- **进程管理**：使用`pm2`等工具管理`webhook.js` 服务，确保它在服务器启动时自动运行。