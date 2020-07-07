<template>
  <div>
    <h1>信息列表</h1>
    <Card v-for="event in events"
          :key="event.title"
          :event="event" />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "Content",
  components: {
    Card
  },
  props: {
    events: { type: Object, required: true }
  },
  data () {

  }
};
</script>

<style></style>
