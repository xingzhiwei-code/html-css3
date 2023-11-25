<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol" :model="formModel" :validate-trigger="validateTrigger" @finish="onFinish">
    <a-form-item v-for="(item, index) in formItems" :key="index" :label="item.label" :name="item.name" :rules="item.rules">
      <component :is="item.component" v-bind="item.props" v-model:value="formModel[item.name]"></component>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { Form, Input, Select, Checkbox, Radio, Switch, DatePicker, TimePicker, Button } from "ant-design-vue";
import { PropType } from "vue";
import { FormItem } from "./FormItem";

export default defineComponent({
  name: "DynamicAntForm",
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    ASelect: Select,
    ACheckbox: Checkbox,
    ARadio: Radio.Group,
    ASwitch: Switch,
    ADatePicker: DatePicker,
    ATimePicker: TimePicker,
    AButton: Button,
  },
  props: {
    formItems: {
      type: Array as () => FormItem[],
      required: true,
    },
    labelCol: {
      type: Object,
      default: () => ({ span: 8 }),
    },
    wrapperCol: {
      type: Object,
      default: () => ({ span: 16 }),
    },
    validateTrigger: {
      type: String,
      default: "change",
    },
    onFinish: {
      type: Function as PropType<(values: Record<string, any>) => void>,
      required: true,
    },
  },
  setup(props) {
    const formModel = ref<Record<string, any>>({
      // username: null,
      // password: null,
      // gender: null,
      // hobby: null,
    });
    console.log(formModel.value);
    const { formItems } = props;

    const onFinish = (values: Record<string, any>) => {
      props.onFinish(values);
    };

    return {
      formModel,
      onFinish,
      formItems,
    };
  },
});
</script>
