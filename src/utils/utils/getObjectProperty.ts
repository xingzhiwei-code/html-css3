const cat = {
  name: "Kitty",
  age: 3,
  love: "flower",
};

const user = {
  loginId: "haha",
  loginPwd: "123123",
};

/**
 * 用于获取某个对象的某个属性值时，提供类型提示
 * 知道不确定的对象中存在要访问属性的字段提示
 * @param obj
 * @param name
 */
export function getValue<T extends object, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name];
}

getValue(user, "loginPwd");
