<template>
  <div class="nav-bar-container">
    <byui-main>
      <el-row :gutter="15">
        <el-col :span="12">
          <div class="left-panel">
            <i
              :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              :title="collapse ? '展开' : '收起'"
              class="fold-unfold"
              @click="handleCollapse"
            ></i>
            <breadcrumb />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right-panel">
            <error-log />
            <byui-screenfull></byui-screenfull>
            <byui-icon
              @click="refreshSelectedTag"
              :pulse="pulse"
              class="right-icon"
              :icon="['fas', 'redo']"
            />
            <byui-icon
              @click="handleChangeTheme"
              class="right-icon"
              :icon="['fas', 'brush']"
            />
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <el-tooltip effect="light" placement="bottom">
              <div slot="content">上次登录时间:{{ lastLoginTime }}</div>
              <span class="user-name">{{ name }}</span>
            </el-tooltip>
            <byui-icon
              @click="logout"
              class="right-icon"
              :icon="['fas', 'sign-out-alt']"
            />
          </div>
        </el-col>
      </el-row>
    </byui-main>
    <el-dialog
      append-to-body
      title="修改配色"
      :visible.sync="dialogVisible"
      width="20%"
    >
      <el-form>
        <el-form-item label="菜单主题色">
          <el-color-picker
            :predefine="['#2a58ad', '#001529', '#f56c6c']"
            show-alpha
            v-model="colors.color1"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="菜单选中色">
          <el-color-picker
            :predefine="['#22468a', '#1890ff', '#0fd59d']"
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
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSaveColors">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/layouts/components/Breadcrumb/index";
import ByuiMain from "@/components/ByuiMain/index";
import ErrorLog from "@/components/ErrorLog/index";
import ByuiScreenfull from "@/components/ByuiScreenfull/index";

export default {
  components: {
    Breadcrumb,
    ByuiMain,
    ErrorLog,
    ByuiScreenfull,
  },
  data() {
    return {
      pulse: false,
      dialogVisible: false,
      colors: {
        color1: null,
        color2: null,
        color3: null,
      },
    };
  },
  computed: {
    ...mapGetters([
      "avatar",
      "collapse",
      "name",
      "loginTimes",
      "lastLoginTime",
      "selectedTag",
    ]),
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
    handleCollapse() {
      this.$store.dispatch("settings/changeCollapse");
    },
    handleChangeTheme() {
      this.dialogVisible = true;
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
    },
    async logout() {
      await this.baseConfirm(
        "您确定要退出" + this.baseTitle + "吗?",
        null,
        () => {
          const fullPath = this.$route.fullPath;
          this.$store.dispatch("user/logout");
          //this.$router.push(`/login?redirect=${fullPath}`);
        }
      );
    },
    refreshSelectedTag() {
      this.pulse = true;
      const view = this.selectedTag;
      this.$store.dispatch("tagsView/delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router
            .replace({
              path: "/redirect" + fullPath,
            })
            .then(() => {
              setTimeout(() => {
                this.pulse = false;
              }, 1000);
            });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar-container {
  transition: all 0.3s;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

  .left-panel {
    display: flex;
    justify-items: center;
    align-items: center;

    .fold-unfold {
      font-size: 20px;
      color: $base-color-gray;
      cursor: pointer;
      transition: all 0.3s;
      z-index: 999;
      margin: 10px;
    }

    .fold-unfold.el-icon-s-unfold {
      transition: all 0.3s;
    }
  }

  .right-panel {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;

    .user-name {
      margin-right: 15px;
      margin-left: 5px;
    }

    ::v-deep {
      > svg {
        color: $base-color-gray;
        fill: $base-color-gray;
        margin-right: 15px;
        cursor: pointer;
      }

      .el-badge {
        margin-right: 15px;
      }
    }
  }
}
</style>
