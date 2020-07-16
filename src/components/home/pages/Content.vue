<template>
  <div class="text">
    <!-- 第二次开始，就开始用其他数据渲染 -->
    <Card v-show="sure"
          v-for="event in list"
          :key="event.title"
          :event="event" />
    <!-- 第一次加载使用主页传来的默认数据 -->
    <Card v-show="!sure"
          v-for="event in events"
          :key="event.link_url"
          :event="event" />
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
  data () {
    return {
      list: [],
      sure: false
    };
  },
  mounted () {
    this.list = [];
  },
  computed: {
    EventsInit () {
      if (list !== []) {
        return this.list;
      }
      return this.events;
    }
  },

  methods: {
    listenToMyPage (something) {
      this.list = something;
      this.sure = true
    }
  }
};
</script>

<style>
.text {
  text-align: center;
  height: 100%;
}
</style>
