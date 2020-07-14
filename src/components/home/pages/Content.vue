<template>
  <div class="text">
    <Card v-for="event in list" :key="event.title" :event="event" />
    <!-- 跳转 -->
    <Pagination @child-say="listenToMyPage" />
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
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = this.events;
  },
  computed: {
    EventsInit() {
      if (list !== []) {
        return this.list;
      }
      return this.events;
    }
  },

  methods: {
    listenToMyPage(something) {
      this.list = something;
    }
  }
};
</script>

<style>
.text {
  text-align: center;
}
</style>
