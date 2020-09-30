<template>
  <div>
    <div class="left_item">
      <div
        v-for="(item, index) in leftList"
        :key="index"
        @click="leftIndex(index)"
        :class="defaultIndex===index?'left_item_cons':'left_item_con'"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftList: {
      type: Array,
      required: true,
    },
    defaultIndex: {
      type: Number,
      required:true
    },
  },
  methods: {
    leftIndex(index) {
      this.$emit("leftIndex", index);
    },
  },
};
</script>

<style scoped>
.left_item {
  width: 1.9rem;
  /* background-color: red; */
  height: 1.1rem;
  text-align: center;
}
.left_item_con {
  width: 1.3rem;
  margin-left: 0.2rem;
  margin-top: 0.4rem;
}
.left_item_cons {
  width: 1.3rem;
  margin-left: 0.2rem;
  margin-top: 0.4rem;
  background-color: #fff;
}
</style>