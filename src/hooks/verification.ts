type LoginForm = {
  userName: string;
  passWord: string;
  verification: string;
  [key: string]: any;
};

export const useVerification = () => {
  const disabledBtn = ref<boolean>(false);
  const currentStatus = ref<boolean>(true);
  const currentTime = ref<number>(60);

  // 文字提示
  const sendText = ref<string>("发送验证码");
  const updateText = ref<string>("秒后重新发送");

  const submit = ref<LoginForm>({
    userName: "",
    passWord: "",
    verification: "",
  });

  // 发送验证码
  const sendSmCode = async () => {
    currentStatus.value = false;
    const mobile = submit.value.userName;
    // 根据手机号请求验证码接口
    disabledBtn.value = true;
    runTime();
  };

  // 开始倒计时
  const runTime = () => {
    console.log("fs");

    const timer = setInterval(() => {
      if (currentTime.value === 0) {
        clearInterval(timer);
        currentStatus.value = true;
        disabledBtn.value = false;
        currentTime.value = 60;
        return;
      }
      currentTime.value--;
    }, 1000);
  };

  // 校验手机号
  const checkMobileVal = () => {
    const status = submit.value.userName.match(/^(?:(?:\+|00)86)?1\d{10}$/);
    if (status) {
      console.log(status, "通过");
      disabledBtn.value = false;
    } else {
      console.log("不通过");
      disabledBtn.value = true;
    }
  };

  return {
    sendText,
    updateText,
    disabledBtn,
    currentStatus,
    currentTime,
    submit,
    sendSmCode,
    checkMobileVal,
  };
};
