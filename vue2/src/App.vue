<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Tag tag="span">
      <Hellow />
    </Tag>
  </div>
</template>

<script>
import Tag from "./components/tag.vue";
import Hellow from "./components/hellow.vue";

export default {
  name: "App",
  components: {
    Hellow,
    Tag,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
