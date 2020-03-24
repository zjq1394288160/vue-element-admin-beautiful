<template>
  <el-scrollbar class="srcollbar-container">
    <router-view />
  </el-scrollbar>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
.srcollbar-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
