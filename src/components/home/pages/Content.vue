<template>
  <div class="text">
    <Card v-for="event in events" :key="event.title" :event="event" />
    <!-- 跳转 -->
    <Pagination />
  </div>
</template>

<script>
import Card from "./Card";
import Pagination from "./pagination";
export default {
  name: "Content",
  components: {
    Card,
    Pagination
  },

  props: {
    events: { type: Array, required: true }
  },
  methods: {}
};
</script>

<style>
.text {
  text-align: center;
}
</style>
