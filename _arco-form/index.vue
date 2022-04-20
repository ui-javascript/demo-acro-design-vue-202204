<template>
  <FormCreate v-model="value" v-model:api="fApi" :rule="rule" :option="option" />
</template>

<script setup>
const fApi = {};
//表单数据
const value = {};
//表单生成规则
const rule = [
  {
    type: "InputNumber",
    field: "price",
    title: "价格",
    value: 1,
    props: {
      precision: 2,
    },
  },
  {
    type: "cascader",
    title: "所在区域",
    field: "address",
    value: ["陕西省", "西安市", "新城区"],
    props: {
      options: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫",
            },
            {
              value: "tiantan",
              label: "天坛",
            },
            {
              value: "wangfujing",
              label: "王府井",
            },
          ],
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙",
                },
              ],
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园",
                },
                {
                  value: "shizilin",
                  label: "狮子林",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
//组件参数配置
const option = {
  onSubmit: (formData) => {
    alert(JSON.stringify(formData));
  },
  resetBtn: true,
};
</script>

<script>
export default {
  name: 'App',
}
</script>
