<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ age }} {{ age2 }}</div>
    <button @click="addAge(9)">年龄增加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      worked: "enginer",
    };
  },
  mounted() {
    console.log("getAge", this.getAge);
  },
  computed: {
    work() {
      return this.worked;
    },
    ...mapGetters(["getAge"]),
    ...mapState({
      age: (state) => state.age,
      age2: (state) => state.a.age,
    }),
  },
  methods: {
    ...mapMutations({
      addAge: "Add_AGE",
    }),
  },
};
</script>
