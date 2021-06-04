<template>
  <div class="about">
    <h1>This is an about page${{ $route.query.id }}</h1>
  </div>
</template>
<script>
export default {
  props: ["name"],
  mounted() {
    // console.log(this.name, this.id);
    // console.log("this.$route.params:", this.$route.params);
    // console.log("this.$route.query:", this.$route.query);
    // console.log("this.$route.hash:", this.$route.hash);
    // console.log("this.$route.params.pathMatch:", this.$route.params.pathMatch);
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to, from, "beforeRouteEnter");
    next((vm) => {
      console.log(vm, "vm是啥");
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to, from, "beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to, from, "beforeRouteLeave");
    next();
  },
  created() {
    // console.log("created");
  },
  methods: {},
};
</script>
