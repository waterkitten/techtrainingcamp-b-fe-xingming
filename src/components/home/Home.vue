<template>
  <div>
    <HomeHeader @accept-keyword="listenToKeyword" />
    <Content :events="events"
             :keys="keys" />
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
      events: [],
      keys: "css"
    };
  },
  methods: {
    getHomeInfo () {
      axios
        .get(`https://i.snssdk.com/search/api/study?keyword=${this.keys}&offset=0`)
        .then(this.getHomeInfoSucc)
        .catch(error => {
          console.log("there is an error", error);
        });
    },
    getHomeInfoSucc (res) {
      this.events = res.data.data;

      console.log(this.events);
    },
    //   getKeyWord (something) {
    //   axios
    //     .get("https://i.snssdk.com/search/api/study?keyword=css&offset=0")
    //     .then(this.getHomeInfoSucc)
    //     .catch(error => {
    //       console.log("there is an error", error);
    //     });
    // },
    listenToKeyword (something) {
      console.log(something)
      this.keys = something;
      axios
        .get(`https://i.snssdk.com/search/api/study?keyword=${something}&offset=0`)
        .then(this.getHomeInfoSucc)
        .catch(error => {
          console.log("there is an error", error);
        });

    }
  },
  mounted () {
    this.getHomeInfo();
  }
};
</script>
<style></style>
