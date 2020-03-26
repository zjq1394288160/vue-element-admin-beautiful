<template>
  <div class="qr-code-container">
    <el-row :gutter="15">
      <el-col :span="4">
        <el-card shadow="hover">
          <div slot="header"><span>二维码示例</span></div>
          <a target="_blank" :href="url">
            <byui-qr-code :image-path="imagePath" :url="url"></byui-qr-code>
          </a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ByuiQrCode from "@/components/ByuiQrCode";

export default {
  name: "QrCode",
  components: {
    ByuiQrCode,
  },
  data() {
    return {
      url: "https://chu1204505056.gitee.io/byui-bookmarks/",
      imagePath: require("@/assets/qr_logo/lqr_logo.png"),
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
