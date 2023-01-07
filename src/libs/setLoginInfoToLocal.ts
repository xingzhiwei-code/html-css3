import ls from "@/libs/localStorage";

interface IUserInfo {
  id: number | string;
  name: string;
}

/**
 * 存储登录相关信息到本地
 * accessToken: 用户凭证token
 * refreshToken: 刷新用户凭证token
 */
const setLoginInfoToLocal = (data: any): void => {
  // 更新本地存储的token
  const TOKEN: string = `${data.tokenType} ${data.accessToken}`;
  ls.set("token", TOKEN);

  // 更新本地存储的 refresh token
  const REFRESH_TOKEN: string = data.refreshToken;
  ls.set("refresh_token", REFRESH_TOKEN);

  // 更新本地存储的token过期时间戳
  const EXPIRED_TIME: number = data.expiresTime;
  ls.set("token_expired_timestamp", EXPIRED_TIME);

  // 更新本地存储的用户信息
  if (data.userInfo) {
    const USER_INFO: IUserInfo = data.userInfo;
    ls.set("user_info", USER_INFO);
  }

  // 更新本地存储的完整信息
  ls.set("login_info", data);
};

export default setLoginInfoToLocal;
