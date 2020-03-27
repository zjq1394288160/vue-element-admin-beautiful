<template>
  <div class="app-wrapper">
    <div v-if="'horizontal' === layout" class="layout-container-horizontal">
      <top-bar />
      <div v-if="tagsView" :class="{ 'tag-view-show': tagsView }">
        <byui-main>
          <tags-view />
        </byui-main>
      </div>
      <byui-main class="main-padding">
        <nav-bar />
        <app-main />
      </byui-main>
    </div>
    <div v-else class="layout-container-vertical">
      <side-bar />
      <byui-main :class="collapse ? 'is-collapse-main' : ''">
        <nav-bar />
        <tags-view v-if="tagsView" />
        <app-main />
      </byui-main>
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
    return {};
  },
  computed: {
    ...mapGetters(["layout", "tagsView", "collapse"]),
  },
  mounted() {
    this.$nextTick(() => {
      const collapse = this.$store.getters.collapse;
      if (document.body.clientWidth < 1366 && false === collapse) {
        this.$store.dispatch("settings/foldSideBar");
      } else if (document.body.clientWidth >= 1366 && true === collapse) {
        this.$store.dispatch("settings/openSideBar");
      }
      window.addEventListener(
        "storage",
        (e) => {
          if (e.key === tokenName || e.key === null) window.location.reload();
          if (e.key === tokenName && e.value === null) window.location.reload();
        },
        false
      );
      this.baseColorfullLoading();
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  .layout-container-horizontal {
    ::v-deep {
      .tag-view-show {
        background: $base-color-white;
        box-shadow: $base-box-shadow;
        transition: all 0.3s;
      }

      .nav-bar-container {
        transition: all 0.3s;

        .byui-main {
          width: 98%;

          .fold-unfold {
            display: none;
          }
        }
      }

      .main-padding {
        margin-top: 15px;
        margin-bottom: 15px;

        .app-main-container {
          transition: all 0.3s;
          background: $base-color-white;
          min-height: calc(100vh - 180px);
        }
      }
    }
  }

  .layout-container-vertical {
    position: relative;

    .byui-main {
      width: $base-right-content-width;
      margin-left: $base-left-menu-width;
      background: #f6f8f9;
      padding-top: 94px;

      ::v-deep {
        .nav-bar-container {
          position: fixed;
          z-index: 99;
          top: 0;
          right: 0;
          left: $base-left-menu-width;
          width: calc(100vw - 225px);
        }

        .tags-view-container {
          position: fixed;
          z-index: 99;
          top: 50px;
          right: 0;
          left: $base-left-menu-width;
          width: calc(100vw - 227px);
          box-shadow: $base-box-shadow;
        }

        .app-main-container {
          width: calc(100% - 30px);
          margin: 15px auto;
          border-radius: $base-border-radius;
          background: $base-color-white;
          min-height: calc(100vh - 127px);
          box-shadow: $base-box-shadow;
        }
      }

      &.is-collapse-main {
        width: $base-right-content-width-min;
        margin-left: $base-left-menu-width-min;
        transition: all 0.3s;

        ::v-deep {
          .nav-bar-container {
            left: $base-left-menu-width-min;
            width: calc(100vw - 65px);
          }

          .tags-view-container {
            left: $base-left-menu-width-min;
            width: calc(100vw - 65px);
          }
        }
      }
    }
  }

  .byui-layout-switch {
    position: fixed;
    bottom: 15px;
    right: 15px;
    background: $base-color-white;
    width: 200px;
    height: 50px;
    vertical-align: middle;
    padding-top: 15px;
    border-radius: 99px;
    border: 1px solid $base-color-blue;
    padding-left: 15px;
    box-shadow: $base-box-shadow;
    z-index: 99;
  }

  .byui-layout-switch {
    position: fixed;
    bottom: 15px;
    right: 15px;
    background: $base-color-white;
    width: 200px;
    height: 50px;
    vertical-align: middle;
    padding-top: 15px;
    border-radius: 99px;
    border: 1px solid $base-color-blue;
    padding-left: 15px;
    box-shadow: $base-box-shadow;
    z-index: 99;
  }
}
</style>
