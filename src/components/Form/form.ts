import type { Component } from "vue";
import type {} from "ant-design-vue";

export interface Schema<T = string> {
  prop: T extends string ? T : T extends object ? keyof T : string;
  label?: string;
  defaultValue?: any;
  component: string | Component;
  componentProps?: Record<string, any>;
  componentSlots?: Record<string, string | Component>;
  required?: boolean;
  rule?: any;
  propType?:
    | "string"
    | "number"
    | "boolean"
    | "method"
    | "regexp"
    | "integer"
    | "float"
    | "array"
    | "object"
    | "enum"
    | "date"
    | "url"
    | "hex"
    | "email"
    | "pattern"
    | "any";
  valueKey?: string;
  noTrim?: boolean;
  [key: string]: any;
}

export type FormItemSchema<T = string> = Schema<T>;

export const getRule = <T extends Partial<Schema> = Schema>(schema: T) => {
  const requiredRule = schema.required
    ? {
        type: schema.propType || "string",
        required: true,
        message: `${schema.label || schema.prop}为必填项`,
        trigger: ["input", "blur"],
      }
    : false;
  if (Array.isArray(schema.rule)) {
    return requiredRule ? [...schema.rule, requiredRule] : schema.rule;
  } else {
    return requiredRule || {};
  }
};

export interface Expose {
  reset: () => void;
  submit: () => void;
  validate: () => void;
}
