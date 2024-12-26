const express = require('express');
const mysql = require('mysql');
const app = express();

// 配置MySQL数据库连接（根据你的数据库实际配置修改参数）
const connection = mysql.createConnection({
    host: 'your_host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
        console.error('数据库连接失败：', err);
        return;
    }
    console.log('数据库已成功连接');
});

// 配置中间件，用于解析POST请求的表单数据（如果前端使用表单提交方式）
app.use(express.urlencoded({ extended: false }));

// 这里监听登录请求的路由，暂假设登录请求路径为 /login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // 后续在这里进行数据库查询验证逻辑
    // 示例代码，实际要根据数据库表结构等完善
    const query = `SELECT * FROM user WHERE username =? AND password =?`;
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('查询数据库出错：', err);
            res.status(500).send('服务器内部错误');
            return;
        }
        if (results.length > 0) {
            // 登录成功，重定向或返回成功信息等，这里简单返回成功消息
            res.send('登录成功');
        } else {
            // 登录失败，返回相应提示
            res.send('用户名或密码错误');
        }
    });
});

// 启动服务器，监听端口（可自行选择合适端口号，如3000）
const port = 3000;
app.listen(port, () => {
    console.log(`服务器在端口 ${port} 上运行`);
});