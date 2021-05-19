<script>
export default {
  name: "h",
  props: {
    tag: String,
  },
  render(h) {
    return h(
      this.tag, // 标签名称
      this.$slots.default // 子节点
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
