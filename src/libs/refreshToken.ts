// 刷新用户凭证token操作

import axios from "@libs/axios/instance";
import ls from "@libs/localStorage";
import setLoginInfoToLocal from "@libs/setLoginInfoToLocal";

/**
 * 刷新token
 * 成功返回新的token，失败返回空字符串
 */
const refreshToken = (): Promise<string> => {
  return new Promise(async (reslove, reject) => {
    // 获取本地记录的刷新凭证
    const REFRESH_TOKEN: string = ls.get("refresh_token") || "";

    // 请求刷新
    const RES = await axios.post("/refreshToken", { refreshToken: REFRESH_TOKEN });
    const DATA = RES.data;

    // 存储token信息
    setLoginInfoToLocal(DATA);

    // 返回新的token
    const NEW_TOKEN: string = `${DATA.tokenType} ${DATA.accessToken}`;
    reslove(NEW_TOKEN);
  });
};

export default refreshToken;
