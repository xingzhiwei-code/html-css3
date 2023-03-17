// export interface RuleObject {
//   required?: boolean;
//   message?: string;
//   trigger?: string;
//   [key: string]: any;
// }

import { RuleObject } from "ant-design-vue/lib/form";

export interface FormItem {
  name: string;
  label: string;
  component: "AInput" | "ARadio" | "ASelect" | "ACheckbox" | "ASwitch";
  // component: keyof typeof import("ant-design-vue")["default"];
  props?: Record<string, any>;
  rules?: RuleObject | RuleObject[];
}
