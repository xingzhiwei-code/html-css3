import { AxiosRequestConfig } from "axios";

export const IS_DEV: boolean = process.env.NODE_ENV === "development";

/**
 * axios 公共配置
 */
const config: AxiosRequestConfig = {
  // 接口基础路径
  baseURL: IS_DEV ? "http://127.0.0.1:12321/api" : "https://www.fastmock.site/mock/1c85c0d436ae044cf22849549ef471b8/api",

  // 公共请求头
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: "Basic KJytrqad8765Fia",
  },

  // 默认的响应方式
  responseType: "json",

  // 超出时间
  timeout: 5000,

  // 跨域的情况下不需要带上cookie
  withCredentials: false,

  // 调整Promise正常响应范围，范围内可以进入then流程，否则会进入catch
  validateStatus: (status: number): boolean => {
    return status >= 200 && status < 500;
  },
};
