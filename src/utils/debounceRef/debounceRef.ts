/**
 * 利用 customRef 实现防抖
 * @param value
 * @param delay
 */
export function debounceRef(value: any, delay: number = 1000) {
  let timer: NodeJS.Timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖
        track();
        return value;
      },
      set(val) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          // 派发更新
          value = val;
          trigger();
        }, delay);
      },
    };
  });
}
