<template>
  <div>
    <!-- 就是这里！！！！ -->
    <transition enter-active-class="bounceInLeft"
                leave-active-class="bounceOutRight">
      <a :href="event.link_url"
         class="navigate">
        <!-- 这里！！！！ -->
        <div class="newsDetaile">
          <p class="title">{{ event.title }}</p>
          <div class="bottomInfo clearfix">
            <span class="writer">{{ event.user_name }}</span> &nbsp;&nbsp;
            <span class="comment_count">评论&nbsp;{{ event.comment_count }}</span>
            <span class="datetime">{{ event.create_time }}</span>
            <hr>
            <span id="description">{{event.description}}</span>
          </div>

        </div>
      </a>
    </transition>
    <!-- 这里 -->
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    event: { type: Object, required: true }
  },

};
</script>

<style lang="less" scoped rel="styleheet/less">
@import "../../../assets/css/border.less";
@import "../../../assets/css/transtion.less";
.navigate {
  width: 100%;
  height: 100%;
  background-color: red;
}

.newsDetaile {
  width: 94%;
  display: block;
  position: relative;
  margin: 5px;
  padding-bottom: 0.15rem;
  box-shadow: 0 0 9px 2px black;
  .borderBottom(1px, #ccc);
  .title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    padding-top: 0.2rem;
    padding-bottom: 0.15rem;
  }
  .writer {
    color: rgb(202, 62, 86);
  }
  .comment_count {
    color: rgb(202, 62, 86);
  }
  .datetime {
    color: rgb(125, 155, 155);
  }
}
#description {
  color: rgb(56, 95, 168);
}
</style>
