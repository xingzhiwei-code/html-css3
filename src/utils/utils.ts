/**
 * 路由跳转
 */
import { Router, useRouter } from "vue-router";
const router = useRouter();
export const routerJump = (path: string) => {
  const checkPath = path.match(/^\//);
  if (!checkPath) {
    alert("请输入合法的路径！");
  }
  console.log("跳转");
  router.push("/show");
}
