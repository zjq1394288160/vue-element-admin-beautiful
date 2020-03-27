<template>
  <span v-if="themeBar">
    <byui-icon @click="handleChangeTheme" :icon="['fas', 'brush']" />
    <el-drawer
      title="主题配置"
      :visible.sync="drawerVisible"
      direction="rtl"
      append-to-body
      size="20%"
    >
      <div class="el-drawer__body">
        <el-form :model="theme" ref="form">
          <el-form-item label="布局">
            <el-radio-group v-model="theme.layout">
              <el-radio-button label="vertical">纵向布局</el-radio-button>
              <el-radio-button label="horizontal">横向布局</el-radio-button>
            </el-radio-group>
          </el-form-item>
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
              v-model="theme.menuBackground"
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="菜单选中色">
            <el-color-picker
              :predefine="['#22468a', '#1890ff', '#21e6af', '#f57e6c']"
              show-alpha
              v-model="theme.menuActiveBackground"
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="标签主题色">
            <el-color-picker
              :predefine="['#1890ff', '#0fd59d', '#f56c6c']"
              show-alpha
              v-model="theme.tagViewsActiveBackground"
            ></el-color-picker>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSetDfaultTheme">恢复默认</el-button>
            <el-button type="primary" @click="handleSaveColors">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </span>
</template>

<script>
import variables from "@/styles/variables.scss";
import { mapGetters } from "vuex";
import { themeBar } from "@/settings";

export default {
  name: "ThemeBar",
  data() {
    return {
      themeBar,
      drawerVisible: true,
      theme: {
        layout: "",
        menuBackground: variables.menuBackground,
        menuActiveBackground: variables.menuActiveBackground,
        tagViewsActiveBackground: variables.tagViewsActiveBackground,
      },
    };
  },
  computed: {
    ...mapGetters(["layout"]),
  },
  mounted() {},
  created() {
    const theme = localStorage.getItem("BYUI-THEME");
    this.theme.layout = this.layout;
    if (null !== theme) {
      this.$set(this.theme, "menuBackground", JSON.parse(theme).menuBackground);
      this.$set(
        this.theme,
        "menuActiveBackground",
        JSON.parse(theme).menuActiveBackground
      );
      this.$set(
        this.theme,
        "tagViewsActiveBackground",
        JSON.parse(theme).tagViewsActiveBackground
      );
      this.handleSaveColors();
    }
  },
  methods: {
    handleChangeTheme() {
      this.drawerVisible = true;
    },
    handleSaveColors() {
      $("#BYUI-THEME").remove();
      let layout = this.theme.layout;
      let menuBackground = this.theme.menuBackground;
      let menuActiveBackground = this.theme.menuActiveBackground;
      let tagViewsActiveBackground = this.theme.tagViewsActiveBackground;
      let style = document.createElement("style");
      style.id = "BYUI-VUE-THEME";
      style.innerHTML = `
      .top-bar-container, .top-bar-container .byui-main, .side-bar-container, .logo-container-vertical, .logo-container-horizontal, .el-menu, .el-menu-item, .el-submenu.is-active.is-opened, .el-submenu__title, .el-menu-item.is-active, .el-menu-item .is-active { background-color:${menuBackground}!important; }
      body .el-menu--horizontal .top-bar-item-container  .el-menu-item:hover, body .el-menu--horizontal .top-bar-item-container .el-menu-item.is-active, body .app-wrapper .side-bar-container .el-submenu .el-menu-item.is-active, body .app-wrapper .side-bar-container  .el-menu-item:hover,body .side-bar-container .el-menu .el-menu-item.is-active{ background-color:${menuActiveBackground}!important; }
      .tags-view-item.router-link-exact-active.router-link-active.active{ background-color: ${tagViewsActiveBackground}; border: 1px solid ${tagViewsActiveBackground}; } `;
      document.getElementsByTagName("head").item(0).appendChild(style);
      localStorage.setItem(
        "BYUI-THEME",
        `{"menuBackground":"${menuBackground}","menuActiveBackground":"${menuActiveBackground}","tagViewsActiveBackground":"${tagViewsActiveBackground}"}`
      );
      this.handleSwitch(layout);
      this.drawerVisible = false;
    },
    handleSetDfaultTheme() {
      $("#BYUI-THEME").remove();
      localStorage.removeItem("BYUI-VUE-THEME");
      localStorage.removeItem("BYUI-VUE-LAYOUT");
      this.$store.dispatch("settings/changeLayout", this.theme.layout);
      this.$refs["form"].resetFields();
      Object.assign(this.$data, this.$options.data());
      this.drawerVisible = false;
      location.reload();
    },
    handleSwitch(layout) {
      localStorage.setItem("BYUI-VUE-LAYOUT", layout);
      this.$store.dispatch("settings/changeLayout", layout);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-drawer__body {
  padding: 20px;
}
</style>
