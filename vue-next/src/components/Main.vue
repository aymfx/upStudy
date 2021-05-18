<template>
  <div>
    <div ref="age">asdasd</div>
    <div
      v-for="(item, i) in list"
      :ref="
        (el) => {
          if (el) divs[i] = el;
        }
      "
      :key="i"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
import { ref, reactive, onBeforeUpdate, onMounted } from "vue";
export default {
  props: ["sex"],
  setup() {
    const list = reactive([1, 2, 3]);
    const divs = ref([]);

    // 确保在每次更新之前重置ref
    onBeforeUpdate(() => {
      divs.value = [];
    });
    onMounted(() => {
      console.log(divs);
    });
    return {
      list,
      divs,
    };
  },
  beforeUpdate() {
    console.log(2);
  },
  updated() {
    console.log(3);
  },
  data() {
    return {};
  },
};
</script>
