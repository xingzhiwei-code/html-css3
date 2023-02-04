/**
 * localStorage 的封装
 *
 * @description 简化localStorage的读取操作，同时支持直接读取不同类型的值，无需每次都对默认的字符串进行转化
 * @author xingzhiwei
 */

class LocalStorage {
  prefix: string;

  /**
   * 通用参数
   * 在初始化时传入
   * @param {String} prefix  -key的前缀，因为localStorage同一个网站使用相同的key会互相覆盖，所以通过前缀来区分数据，约定格式为：prefix_key
   */
  constructor(prefix: string) {
    this.prefix = prefix;
  }

  /**
   * 读取数据
   */
  get(key: string) {
    const KEY: string = `${this.prefix}_${key}`;
    const DATA_STRING: any = window.localStorage.getItem(KEY);

    /**
     * 拿到的数据如果可以解析为JSON, 则优先导出JSON
     * 否则按情况导出 布尔值、数字、字符串
     */
    try {
      const DATA_JSON = JSON.parse(DATA_STRING);
      return DATA_JSON;
    } catch (e) {
      // 导出布尔值 true  （注：localStorage存储布尔数据时，取到的数据会变成字符串）
      if (DATA_STRING === "true") {
        return true;
      }

      // 导出布尔值 false
      if (DATA_STRING === "false") {
        return false;
      }

      // 导出数字
      const DATA_NUMBER = Number(DATA_STRING);
      if (!isNaN(DATA_NUMBER)) {
        return DATA_NUMBER;
      }

      // 导出字符串
      return DATA_STRING;
    }
  }

  /**
   * 存储数据
   */
  set(key: string, value: any) {
    const KEY: string = `${this.prefix}_${key}`;
    const VALUE = typeof value === "object" ? JSON.stringify(value) : value;
    window.localStorage.setItem(KEY, VALUE);
  }

  /**
   * 移除数据
   */
  remove(key: string) {
    const KEY: string = `${this.prefix}_${key}`;
    window.localStorage.removeItem(KEY);
  }

  /**
   * 清除所有数据（localStorage存储痕迹）
   */
  clear() {
    window.localStorage.clear();
  }
}

const ls = new LocalStorage("xingzhiwe-refresh-token");

export default ls;
