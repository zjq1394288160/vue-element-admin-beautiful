<template>
  <div class="errorLog-container">
    <Error />
    错误日志测试页，这里会模拟一个js错误，除了这个错误所有页面的异常捕获问题必须解决
  </div>
</template>

<script>
import Error from "./components/ErrorTest";

export default {
  name: "ErrorLog",
  components: { Error },
};
</script>
<style lang="scss" scoped></style>
