
<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        ></validate-input>
        {{ emailVal }}
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        ></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script  lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";

export default defineComponent({
  name: "Login",
  components: { ValidateInput, ValidateForm },
  setup() {
    const store = useStore();
    const router = useRouter();
    const inputRef = ref<any>();
    const emailVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" },
    ];
    const passwordVal = ref("");
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];
    const onFormSubmit = (result: boolean) => {
      // console.log(inputRef.value);
      console.log("result", result);
      if (result) {
        router.push("/");
        store.commit("login");
      }
    };

    return {
      passwordVal,
      passwordRules,
      emailRules,
      emailVal,
      onFormSubmit,
      inputRef,
    };
  },
});
</script>

<style>
</style>