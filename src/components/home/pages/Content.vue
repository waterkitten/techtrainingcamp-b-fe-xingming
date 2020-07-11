<template>
  <div class="text">

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
    events: { type: Array, required: true }
  },

};
</script>

<style>
.text {
  text-align: center;
}
</style>
