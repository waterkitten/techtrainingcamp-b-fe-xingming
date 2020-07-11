<template>
  <div>
    <HomeHeader />
    <Content :events="events" />
  </div>
</template>
<script>
import HomeHeader from "./pages/Header";
import axios from "axios";
import Content from "./pages/Content";

import Card from "./pages/Card";
export default {
  components: {
    HomeHeader,
    Content,

    Card
  },
  data () {
    return {
      events: []
    };
  },
  methods: {
    getHomeInfo () {
      axios
        .get("https://i.snssdk.com/search/api/study?keyword=css&offset=0")
        .then(this.getHomeInfoSucc)
        .catch(error => {
          console.log("there is an error", error);
        });
    },
    getHomeInfoSucc (res) {
      this.events = res.data.data;
      console.log(this.events);
    }
  },
  mounted () {
    this.lastCity = this.city;
    this.getHomeInfo();
  }
};
</script>
<style></style>
