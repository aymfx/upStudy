<template>
  <div>
    <div @click="gotoAbout">我是User2</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "user2",
  methods: {
    gotoAbout() {
      this.$router.push({ name: "about", query: { id: 123 } }).then((item) => {
        console.log(item, "好强");
      });
    },
  },
};
</script>
