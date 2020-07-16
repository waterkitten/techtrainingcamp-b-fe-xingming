<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">
        &#xe624;
      </div>
    </div>
    <!-- 搜索框 -->
    <input class="header-search"
           type="text"
           placeholder="输入信息"
           v-model="keyword" />
    <span class="iconfont arrow-icon">
      &#xe632;
      <button>搜索</button>
    </span>
    <!-- 内容渲染 -->
    <div class="search-content"
         ref="header-search"
         v-show="keyword">
      <ul>
        <li class="search-item border-"
            v-for="(item, index) in list"
            :key="index"
            @click="HandleItem(item)">
          {{ item }}
        </li>
        <li class="search-item border-bottom"
            v-show="hasEvent">
          没有匹配到数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Header",
  data () {
    return {
      keyword: "",
      timer: null,
      list: [],
      value: [],
      hasResult: false
    };
  },

  computed: {
    hasEvent () {
      return !this.list.length;
    }
  },
  methods: {
    getResult (url) {
      return new Promise((resolve, reject) => {
        axios.get(url).then(url => {
          resolve(url.data.data);
        });
      });
    },
    HandleItem (item) {

      this.keyword = item
      // this.$emit("accept-keyword", this.keyword)
    }
  },

  watch: {
    keyword: function () {

      const result = [];
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        this.getResult(
          `https://i.snssdk.com/search/api/sug/?keyword=${this.keyword}`
        ).then(res => {
          console.log(res);
          for (const item of res) {
            result.push(item.keyword);
          }
          this.list = result;
        });
      }, 600);
    }
  }
};
</script>
<style scoped lang="stylus">
/* 局部 */
@import '~css/var.stylus'
.header
  animation-name colorful
  animation-duration 4s
  animation-play-state running
  animation-iteration-count 999
  width 99%
  line-height 0.88rem
  background $bgColor
  font-size 0.36rem
  color $textColor
  padding 5px 0px 0px 0px
  display flex
@keyframes colorful
  0%
    background-color pink
  50%
    background-color green
  75%
    background-color red
  100%
    background-color yellow
.back-icon
  text-align center
  font-size 0.4rem
.header-left
  width 0.4rem
  padding 0.6 0.6rem
  text-align center
  font-weight bold
.header-search
  flex 1
  background #fff
  font-size 0.28rem
  line-height 0.6rem
  height 0.6rem
  margin 0.14rem 0
  border-radius 0.69rem
  color black
  padding-left 0.3rem
.arrow-iconfon
  margin-left -0.3rem
  font-size 0.24rem
.search-content
  overflow hidden
  background #eee
  position absolute
  top 0.99rem
  left 0
  right 0
  z-index 1
  bottom 2
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background #fff
    box-shadow 0 0 1px 1px black
    font-size 15px
    margin 8px
    padding 8px
</style>
