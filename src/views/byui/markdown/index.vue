<template>
  <div class="markdown-container markdown-body">
    <el-divider content-position="left"
      >演示环境可能无法访问,需部署到本地
    </el-divider>
    <el-select @change="handleChange" v-model="value" placeholder="请选择">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div v-html="prettierList"></div>
  </div>
</template>

<script>
import { getPrettierList, getVueApiList } from "@/api/markdown";

import marked from "marked";
import "github-markdown-css/github-markdown.css";

export default {
  name: "News",
  data() {
    return {
      listLoading: true,
      elementLoadingText: "正在加载...",
      options: [
        {
          value: "0",
          label: "Prettier",
        },
        {
          value: "1",
          label: "Vue Api",
        },
      ],
      value: "0",
      prettierList: [],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    handleChange(val) {
      this.value = val;
      this.fetchData();
    },
    fetchData() {
      this.listLoading = true;
      switch (this.value) {
        case "0":
          getPrettierList(this.pagination)
            .then((res) => {
              this.prettierList = marked(res.data || "", {
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
              });
            })
            .then(() => {
              $(".markdown-container a").each(function () {
                if ($(this).attr("href").indexOf("http") === -1) {
                  $(this).removeAttr("href");
                }
              });
            });
          break;

        case "1":
          getVueApiList(this.pagination)
            .then((res) => {
              this.prettierList = marked(res.data || "", {
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
              });
            })
            .then(() => {
              $(".markdown-container a").each(function () {
                if ($(this).attr("href").indexOf("http") === -1) {
                  $(this).removeAttr("href");
                }
              });
            });
          break;
      }
      setTimeout(() => {
        this.listLoading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.markdown-container {
}
</style>
