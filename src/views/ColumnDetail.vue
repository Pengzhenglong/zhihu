<template>
  <div>
    <pre>
       {{ route }}  
    </pre>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "ColumnDetail",
  setup() {
    const route = useRouter();
    return {
      route,
    };
  },
});
</script>

<style>
</style>