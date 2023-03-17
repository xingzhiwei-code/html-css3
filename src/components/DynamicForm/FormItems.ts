import { FormItem } from "./FormItem";

const formItems: FormItem[] = [
  {
    name: "username",
    label: "用户名",
    component: "AInput",
    rules: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  },
  {
    name: "password",
    label: "密码",
    component: "AInput",
    props: { type: "password" },
    rules: [{ required: true, message: "请输入密码", trigger: "blur" }],
  },
  {
    name: "gender",
    label: "性别",
    component: "ARadio",
    props: {
      options: [
        { label: "男", value: "male" },
        { label: "女", value: "female" },
      ],
    },
    rules: [{ required: true, message: "请选择性别", trigger: "change" }],
  },
  {
    name: "hobby",
    label: "爱好",
    component: "ACheckbox",
    props: {
      options: [
        { label: "足球", value: "football" },
        { label: "篮球", value: "basketball" },
        { label: "乒乓球", value: "pingpong" },
      ],
    },
    rules: [{ required: true, message: "请选择爱好", trigger: "change" }],
  },
];

export default formItems;
