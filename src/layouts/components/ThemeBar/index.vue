<template>
  <span>
    <byui-icon
      @click="handleChangeTheme"
      class="right-icon"
      :icon="['fas', 'brush']"
    />
    <el-drawer
      title="主题配置"
      :visible.sync="drawerVisible"
      direction="rtl"
      append-to-body
      size="20%"
    >
      <div class="el-drawer__body">
        <el-form>
          <el-form-item label="菜单主题色">
            <el-color-picker
              :predefine="[
                '#2a58ad',
                '#001529',
                '#f56c6c',
                '#0fd59d',
                '#3fb884',
                '#ff7a47',
                '#a80505',
              ]"
              show-alpha
              v-model="colors.color1"
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="菜单选中色">
            <el-color-picker
              :predefine="['#22468a', '#1890ff', '#21e6af', '#f57e6c']"
              show-alpha
              v-model="colors.color2"
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="标签主题色">
            <el-color-picker
              :predefine="['#1890ff', '#0fd59d', '#f56c6c']"
              show-alpha
              v-model="colors.color3"
            ></el-color-picker>
          </el-form-item>
          <el-form-item>
            <el-button @click="drawerVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleSaveColors"
              >确 定</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </span>
</template>

<script>
export default {
  name: "ThemeBar",
  data() {
    return {
      drawerVisible: false,
      colors: {
        color1: null,
        color2: null,
        color3: null,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const theme = localStorage.getItem("BYUI-THEME");
      if (null !== theme) {
        this.$set(this.colors, "color1", JSON.parse(theme).color1);
        this.$set(this.colors, "color2", JSON.parse(theme).color2);
        this.$set(this.colors, "color3", JSON.parse(theme).color3);
        this.handleSaveColors();
      }
    });
  },
  methods: {
    handleChangeTheme() {
      this.drawerVisible = true;
    },
    handleSaveColors() {
      let color1 = this.colors.color1;
      let color2 = this.colors.color2;
      let color3 = this.colors.color3;
      let style = document.createElement("style");
      style.innerHTML = `
      .top-bar-container, .top-bar-container .byui-main, .side-bar-container, .logo-container-vertical, .logo-container-horizontal, .el-menu, .el-menu-item, .el-submenu.is-active.is-opened, .el-submenu__title, .el-menu-item.is-active, .el-menu-item .is-active { background-color:${color1}!important; }
      body .el-menu--horizontal .top-bar-item-container  .el-menu-item:hover, body .el-menu--horizontal .top-bar-item-container .el-menu-item.is-active, body .app-wrapper .side-bar-container .el-submenu .el-menu-item.is-active, body .app-wrapper .side-bar-container  .el-menu-item:hover,body .side-bar-container .el-menu .el-menu-item.is-active{ background-color:${color2}!important; }
      .tags-view-item.router-link-exact-active.router-link-active.active{ background-color: ${color3}; border: 1px solid ${color3}; } `;
      document.getElementsByTagName("head").item(0).appendChild(style);
      localStorage.setItem(
        "BYUI-THEME",
        `{"color1":"${color1}","color2":"${color2}","color3":"${color3}"}`
      );
      this.drawerVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-drawer__body {
  padding: 20px;
}
</style>
