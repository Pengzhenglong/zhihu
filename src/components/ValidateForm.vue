<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script  lang="ts">
import mitt from "mitt";
import { defineComponent, onUnmounted } from "vue";
type ValidateFunc = () => boolean;
export const emitter = mitt<{
  formItemCreated: ValidateFunc;
}>();
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];

    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      console.log("结果", result);
      context.emit("form-submit", result);
    };
    const callback = (func: ValidateFunc) => {
      funcArr.push(func);
    };

    // listen to an event
    emitter.on("formItemCreated", callback);
    // listen to all events

    onUnmounted(() => {
      emitter.off("formItemCreated", callback);
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>

<style>
</style>