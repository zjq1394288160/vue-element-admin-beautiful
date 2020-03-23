<template>
  <div class="table-query">
    <div style="margin-top: -13px;">
      温馨提示：表格可拖动可开启自定义
      <span style="color: red;">json最后一个字段不能加逗号</span>
    </div>
    <div style="margin-top: -19px;">
      <el-button type="primary" @click="openCodeDialog">查看代码 </el-button>
      <el-button type="primary" @click="handleClipboard(srcTableCode, $event)"
        >复制代码
      </el-button>
    </div>
    <el-dialog destroy-on-close title="查看代码" :visible.sync="dialogVisible">
      <textarea v-show="false" ref="code" v-model="srcTableCode"></textarea>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="closeCodeDialog">复制代码</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { handleClipboard } from "@/utils";
import CodeMirror from "codemirror";

export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    ...mapGetters(["srcTableCode"]),
  },
  methods: {
    handleClipboard(text, evnet) {
      handleClipboard(text, evnet).then(() => {
        this.baseMessage("已经复制到剪贴板", "success");
      });
    },
    openCodeDialog() {
      this.dialogVisible = true;
      setTimeout(() => {
        CodeMirror.fromTextArea(this.$refs.code, {
          lineNumbers: true,
          gutters: ["CodeMirror-lint-markers"],
          theme: "rubyblue",
          autoRefresh: true,
          lint: true,
        });
      }, 0);
    },
    closeCodeDialog() {
      this.handleClipboard(this.srcTableCode, event);
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-query {
  display: flex;
  justify-content: space-between;
  height: 15px;

  ::v-deep {
    .CodeMirror {
      height: auto;
      min-height: calc(100vh - 420px);
    }
  }
}
</style>
