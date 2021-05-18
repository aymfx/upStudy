<template>
  <div>
    <hello-world :sex="1" />
  </div>
</template>

<script>
import HelloWorld from "./components/Main.vue";
export default {
  setup() {},
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {},
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
