
<template>
  <div>
    <column-list :list="list"></column-list>
  </div>
</template>

<script  lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import ColumnList from "../components/ColumnList.vue";

import { GlobalDataProps } from "../store/index";
export default defineComponent({
  name: "Home",
  components: { ColumnList },
  setup() {
    const store = useStore<GlobalDataProps>();
    const list = computed(() => store.state.columns);
    return {
      list: list,
    };
  },
});
</script>

<style>
</style>