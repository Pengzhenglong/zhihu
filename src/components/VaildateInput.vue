
<template>
  <div class="mb-3">
    <input
      type="text"
      v-model="inputRef.val"
      @blur="vaildateInput"
      class="form-control"
      id="exampleInputEmail1"
    />
  </div>
</template>

<script  lang="ts">
import { defineComponent, reactive, PropType } from "vue";

interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
  },
  setup(props) {
    const emailReg =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const inputRef = reactive({
      val: "",
      error: false,
      message: "",
    });

    const vaildateInput = () => {
      console.log("11");
    };

    return { inputRef, vaildateInput };
  },
});
</script>

<style>
</style>