
<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题:</label>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入邮箱地址"
          type="text"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情:</label>
        <validate-input
          rows="10"
          :rules="contentRules"
          v-model="contentVal"
          placeholder="请输入文章详情"
          type="textarea"
          tag="textarea"
        ></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-primary btn-large">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref } from "vue";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import { GlobalDataProps, PostProps } from "../store/index";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "CreatePost",
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const contentVal = ref("");
    const titleVal = ref("");
    const titleRules: RulesProp = [
      { type: "required", message: "文章标题不能为空" },
    ];
    const contentRules: RulesProp = [
      { type: "required", message: "文章详情不能为空" },
    ];
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = store.state.user;
        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createdAt: new Date().toLocaleString(),
          };
          console.log(newPost);

          store.commit("createPost", newPost);
          router.push({ name: "column", params: { id: columnId } });
        }
      }
    };
    return {
      titleVal,
      titleRules,
      contentRules,
      contentVal,
      onFormSubmit,
    };
  },
});
</script>

<style>
</style>