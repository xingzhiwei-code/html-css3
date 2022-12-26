/**
 * 背景生成泡泡动画
 */
export const bubleCreate = () => {
  const el = document.querySelector(".login-index")!;
  // 创建泡泡元素
  const buble = document.createElement("div");
  buble.className = "buble";

  // 设置泡泡半径
  let r = Math.random() * 5 + 25;
  // 设置泡泡的宽高
  buble.style.width = r + "px";
  buble.style.height = r + "px";
  // 设置泡泡的随机起点
  buble.style.left = Math.random() * innerWidth + "px";

  el.append(buble);

  // 每过一段时间清除生成的泡泡
  setTimeout(() => {
    buble.remove();
  }, 7000);
};
