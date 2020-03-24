<template>
  <div class="app-wrapper">
    <div v-if="'horizontal' === layout" class="layout-container-horizontal">
      <top-bar />
      <div :class="{ 'tags-view': true, 'tag-view-show': tagsView }">
        <byui-main>
          <tags-view v-if="tagsView" />
        </byui-main>
      </div>
      <byui-main class="byui-main-padding">
        <nav-bar />
        <app-main />
      </byui-main>
    </div>
    <div v-else class="layout-container-vertical">
      <side-bar
        :class="isCollapse ? 'is-collapse' : ''"
        :is-collapse="isCollapse"
        class="side-bar-container"
      />
      <div :class="{ 'tag-view-show': tagsView }">
        <byui-main
          :class="isCollapse ? 'is-collapse-main' : ''"
          class="byui-main-padding"
        >
          <i
            :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="isCollapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="isCollapse = !isCollapse"
          ></i>

          <nav-bar />
          <tags-view v-if="tagsView" />
          <app-main />
        </byui-main>
      </div>
    </div>

    <byui-back-to-top transition-name="fade" />
  </div>
</template>

<script>
import { AppMain, NavBar, SideBar, TagsView, TopBar } from "./components";
import ByuiMain from "@/components/ByuiMain";
import ByuiBackToTop from "@/components/ByuiBackToTop";
import { mapGetters } from "vuex";
import { tokenName } from "@/settings";

export default {
  name: "Layout",
  components: {
    TopBar,
    NavBar,
    SideBar,
    AppMain,
    ByuiMain,
    TagsView,
    ByuiBackToTop,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapGetters(["layout", "tagsView"]),
    /*...mapState({
               tagsView: state => state.settings.tagsView
           }),*/
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        window.addEventListener(
          "storage",
          (e) => {
            if (e.key === tokenName || e.key === null) {
              window.location.reload();
            }
          },
          false
        );
      }, 500);
    });
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  .layout-container-horizontal {
    ::v-deep {
      .tag-view-show {
        background: $base-color-white;
      }

      .nav-bar-container {
        .byui-main {
          width: 98%;

          .right-menu {
            .avatar-container {
              margin-right: 0;
            }
          }
        }
      }

      .main-container {
        background: $base-color-white;
        min-height: calc(100vh - 180px);
      }
    }
  }

  .layout-container-vertical {
    position: relative;
    transition: left 0.5s;

    .fold-unfold {
      position: fixed;
      left: $base-left-menu-width + 15px;
      top: 15px;
      font-size: 20px;
      color: $base-color-gray;
      cursor: pointer;
      transition: left 0.5s;
      z-index: 1000;
    }

    .fold-unfold.el-icon-s-unfold {
      left: 79px;
      transition: left 0.5s;
    }

    .byui-main-padding {
      width: $base-right-content-width;
      margin-left: $base-left-menu-width;
      background: #f6f8f9;
      padding-top: 94px;
      transition: left 0.5s;

      ::v-deep {
        .nav-bar-container {
          transition: left 0.5s;
          position: fixed;
          z-index: 1;
          top: 0;
          right: 0;
          left: $base-left-menu-width;
        }

        .tags-view-container {
          transition: left 0.5s;
          position: fixed;
          z-index: 1;
          top: 0;
          right: 0;
          left: $base-left-menu-width;
          top: 50px;
        }

        .main-container {
          transition: all 0.5s;
          width: calc(100% - 30px);
          margin: 15px auto;
          border-radius: $base-border-radius;
          background: $base-color-white;
          min-height: calc(100vh - 125px);
        }
      }

      &.is-collapse-main {
        width: $base-right-content-width-min;
        margin-left: $base-left-menu-width-min;
        transition: left 0.5s;

        ::v-deep {
          .nav-bar-container {
            transition: left 0.5s;
            left: $base-left-menu-width-min;
          }

          .tags-view-container {
            transition: left 0.5s;
            left: $base-left-menu-width-min;
          }

          .main-container {
            transition: all 0.5s;
          }
        }
      }
    }

    .nav-bar-container {
      padding-left: 52px;
    }
  }
}
</style>
