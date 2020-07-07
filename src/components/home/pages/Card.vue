<template>
  <div>
    <!-- 就是这里！！！！ -->
    <transition
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <router-link class="newsDetaile" :to="{ name: 'Home' }">
        <p class="title">「硬核JS」一次搞懂JS运行机制</p>
        <div class="bottomInfo clearfix">
          <span class="writer">isboyjc</span> &nbsp;&nbsp;
          <span class="comment_count">评论&nbsp;91</span>
          <span class="datetime">1579401275179</span>
        </div>
      </router-link>
    </transition>
    <!-- 这里！！！！ -->
    <router-link class="newsDetaile" :to="{ name: 'Home' }">
      <p class="title">{{ event.title }}</p>
      <div class="bottomInfo clearfix">
        <span class="writer">{{ event.user_name }}</span> &nbsp;&nbsp;
        <span class="comment_count">评论&nbsp;{{ event.comment_count }}</span>
        <span class="datetime">{{ event.create_time }}</span>
      </div>
    </router-link>
    <!-- 这里 -->
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    event: { type: Object, required: true }
  }
};
</script>

<style lang="less" scoped rel="styleheet/less">
@import "../../../assets/css/border.less";
@import "../../../assets/css/transtion.less";
.newsDetaile {
  width: 94%;
  display: block;
  position: relative;
  margin: 0 auto;
  padding-bottom: 0.15rem;
  .borderBottom(1px, #ccc);
  .title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    padding-top: 0.2rem;
    padding-bottom: 0.15rem;
  }
}
</style>
