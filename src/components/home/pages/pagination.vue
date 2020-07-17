<template>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage3"
                   :page-size="10"
                   layout="prev, pager, next, jumper"
                   :total="this.Total">
    </el-pagination>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    keys: { type: String, required: true }
  },
  methods: {
    handleSizeChange (val) {
      this.currentRow = val;
      console.log(`每页 ${this.currentRow} 条`);
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      console.log(`当前页: ${this.currentPage}`);
      this.getHomeInfo();
    },
    // 发送请求
    getHomeInfo () {
      axios
        .get(
          "https://i.snssdk.com/search/api/study?keyword=" + this.keys + "&offset=" +
          this.currentPage
        )
        .then(this.getHomeInfoSucc)
        .catch(error => {
          console.log("there is an error", error);
        });
      console.log(this.keys)
    },
    getHomeInfoSucc (res) {
      this.events = res.data.data;
      this.$emit("child-say", this.events);
      this.Total = res.data.total;
      console.log(this.events);
    }
  },
  data () {
    return {
      currentPage: 1,
      currentRow: 1,
      list: [],
      Total: 267,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>
