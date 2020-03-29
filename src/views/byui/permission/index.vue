<template>
  <div class="permission-container">
    <el-divider content-position="left">
      intelligence模式,前端根据roles拦截路由
    </el-divider>

    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="权限切换">
        <el-radio-group v-model="form.permission">
          <el-radio label="admin">超级管理员</el-radio>
          <el-radio label="editor">访客</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button @click="handleChangePermission" type="primary"
          >切换权限
        </el-button>
      </el-form-item>
      <el-form-item label="当前账号拥有的权限">
        {{ JSON.stringify(roles) }}
      </el-form-item>
    </el-form>

    <el-divider content-position="left">
      all模式,路由以及view文件引入全部交给后端
    </el-divider>
    <p>
      settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { tokenTableName } from "@/settings";

export default {
  name: "Permission",
  components: {},
  data() {
    return {
      form: {
        permission: "",
      },
    };
  },
  computed: {
    ...mapGetters(["roles"]),
  },
  created() {},
  mounted() {
    this.form.permission = this.roles[0];
  },
  methods: {
    handleChangePermission() {
      localStorage.setItem(
        tokenTableName,
        `byui-${this.form.permission}-accessToken`
      );
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.permission-container {
}
</style>
