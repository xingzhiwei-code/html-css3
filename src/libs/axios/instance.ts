import axios, { AxiosRequestConfig } from "axios";
import config from "@libs/axios/config";
import ls from "@libs/localStorage";
import message from "@libs/message";
import router from "@/router";

// 重新定义 axios 请求头的接口（axios存在的小问题）
export interface XRequestConfig extends AxiosRequestConfig {
  headers?: any;
}

/**
 * 创建一个独立的axios实例
 * 把常用的公共请求配置在此处添加
 */
const instance = axios.create(config);

/**
 * 请求拦截
 * 添加一些全局请求需要带上的内容
 */
instance.interceptors.request.use(
  // 正常拦截
  (config: XRequestConfig) => {
    // 配置请求头（添加token）
    const LOCAL_TOKEN: string = ls.get("token") || "";
    if (LOCAL_TOKEN) {
      config.headers["Authorization"] = LOCAL_TOKEN;
    }

    // 返回处理后的配置
    return Promise.resolve(config);
  },

  // 拦截失败
  (err) => {
    Promise.reject(err);
  }
);

/**
 * 返回拦截
 * 此处解决返回数据异常的情况
 */
instance.interceptors.response.use(
  // 正常响应
  (res) => {
    // 这里处理一下IE 8-9 axios存在的兼容性问题，虽然现在几乎遇不到这样的问题，但也算个知识点扩展，详情请看 README
    if (res.data === null && res.config.responseType === "json" && res.request.responseText !== null) {
      try {
        res.data = JSON.parse(res.request.responseText);
      } catch (e) {
        console.log(e);
      }
    }

    /**
     * 登录失效拦截（这里主要针对refreshToken也失效的情况）
     * code 值需要和后端约定好，此处以 1 为例
     */
    if (res.data.code === 1 && res.data.msg === "用户凭证已过期") {
      // 告知用户
      message.error(res.data.msg);

      // 跳转登录
      try {
        router.push({
          name: "login",
        });
      } catch (e) {
        console.log(e);
      }
    }

    // 提取接口的返回结果，简化接口调用的编码操作
    return Promise.resolve(res.data);
  }
);

export default instance;
