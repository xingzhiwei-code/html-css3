# clutter-practice

#### 架构搭建注意点

- 使用 vite 创建的项目，在配置路径别名时，要在 tsconfig.json 中配置响应 key 值和路径，同时 vscode 还存在报错提示时，重启项目和 vscode

- 由于版本原因 0.21.0 版本之前 axios 里面的 headers 类型是 any，因为 headers 确实有可能是 undefined， 所以会导致此类型报错

解决：对 headers 加一层 undefined 的判断
![axios headers类型错误](/src/assets/images/error.png)

- axios 处理 IE 8-9 response.data 不存在问题

![axios](/src/assets/images/IE8-9.png)
