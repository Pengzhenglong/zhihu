

<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-brand" href="#">者也专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" href="#" class="btn btn-outline-light my-2"
          >登陆</router-link
        >
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好${user.name}`">
          <dropdown-item>
            <router-link to="/create" class="dropdown-item" href="#"
              >新建文章</router-link
            >
          </dropdown-item>
          <dropdown-item disabled>
            <a class="dropdown-item" href="#">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">退出登录</a>
          </dropdown-item></dropdown
        >
      </li>
    </ul>
  </nav>
</template>

<script  lang="ts">
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { defineComponent, PropType } from "vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>

<style>
</style>