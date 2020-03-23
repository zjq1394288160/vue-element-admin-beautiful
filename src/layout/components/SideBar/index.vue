<template>
  <div class="side-bar-container">
    <el-scrollbar style="height: 100%;">
      <logo style="margin-bottom: 15px;" v-if="showLogo" />
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuTextAcive"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-openeds="defaultOpen"
        :unique-opened="false"
        class="el-menu-vertical-demo"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :base-path="route.path"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import path from "path";
import Logo from "@/layout/components/Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import { version } from "@/settings";

export default {
  components: { SidebarItem, Logo },
  props: { isCollapse: Boolean },
  data() {
    return { version: version };
  },
  computed: {
    defaultOpen() {
      const list = this.$store.getters.routes;
      let arr = list.map((item) => {
        return path.resolve(item.path);
      });
      /*只默认展开除了首页,登录,404,重定向以外的第一级*/
      arr = this.baseLodash().pull(
        arr,
        "/",
        "/*",
        "/login",
        "/404",
        "/redirect"
      );
      return arr;
    },
    routes() {
      return this.$store.getters.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.logo;
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style lang="scss" scoped>
.side-bar-container {
  width: $base-left-menu-width;
  background: $base-menu-background;
  transition: width 0.5s;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  ::v-deep {
    .el-menu {
      border: 0px;
    }

    .svg-inline {
      &--fa {
        width: 1rem;
      }
    }

    .el-menu-item {
      height: 46px !important;
      line-height: 46px !important;

      &.is-active {
        background-color: $base-menu-active !important;
      }
    }

    .nest-menu {
      .el-menu-item {
        height: 46px !important;
        line-height: 46px !important;

        &.is-active {
          background-color: $base-menu-active !important;
        }
      }
    }

    .el-submenu {
      .el-menu-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.is-active {
          background-color: $base-menu-active !important;
        }
      }
    }
  }

  &.is-collapse {
    width: $base-left-menu-width-min;
    transition: width 0.5s;
    border-right: 0 !important;

    ::v-deep {
      .el-menu--collapse {
        border-right: 0 !important;

        .el-submenu__icon-arrow {
          right: 10px;
          margin-top: -3px;
        }

        .el-submenu__title {
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
