<template>
  <div class="app-wrapper" :class="classObj">
    <div
      v-if="'horizontal' === layout"
      class="layout-container-horizontal"
      :class="{
        fixed: header === 'fixed',
        'no-tags-view': tagsView === 'false' || tagsView === false,
      }"
    >
      <div :class="header === 'fixed' ? 'fixed-header' : ''">
        <top-bar />
        <div
          v-if="tagsView === 'true' || tagsView === true"
          :class="{ 'tag-view-show': tagsView }"
        >
          <byui-main>
            <tags-view />
          </byui-main>
        </div>
      </div>
      <byui-main class="main-padding">
        <nav-bar />
        <app-main />
      </byui-main>
    </div>
    <div
      v-else
      class="layout-container-vertical"
      :class="{
        fixed: header === 'fixed',
        'no-tags-view': tagsView === 'false' || tagsView === false,
      }"
    >
      <side-bar />
      <byui-main :class="collapse ? 'is-collapse-main' : ''">
        <div :class="header === 'fixed' ? 'fixed-header' : ''">
          <nav-bar />
          <tags-view v-if="tagsView === 'true' || tagsView === true" />
        </div>
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
import ResizeMixin from "./mixin/ResizeHandler";

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
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(["layout", "tagsView", "collapse", "header", "device"]),
    classObj() {
      return {
        mobile: this.device === "mobile",
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
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
  width: 100%;
  height: 100%;
  position: relative;

  &.mobile {
    ::v-deep {
      .fold-unfold {
        display: none;
      }
    }
  }

  .layout-container-horizontal {
    position: relative;

    &.fixed {
      padding-top: 96px;
    }

    &.fixed.no-tags-view {
      padding-top: 56px;
    }

    ::v-deep {
      .byui-main {
        width: 88%;
      }
      .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: 100%;
        overflow: hidden;
      }

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

    &.fixed {
      padding-top: 96px;
    }

    &.fixed.no-tags-view {
      padding-top: 56px;
    }

    .byui-main {
      margin-left: $base-left-menu-width;
      background: #f6f8f9;
      min-height: 100%;
      transition: margin-left 0.28s;
      position: relative;

      ::v-deep {
        .fixed-header {
          position: fixed;
          top: 0;
          left: $base-left-menu-width;
          right: 0;
          z-index: 9;
          width: $base-right-content-width;
          overflow: hidden;
        }

        .nav-bar-container {
          position: relative;
          padding-left: 5px;
        }

        .tags-view-container {
          position: relative;
          padding-left: 8px;
          box-shadow: $base-box-shadow;
          width: 100%;
        }

        .app-main-container {
          margin: 15px auto;
          width: calc(100% - 30px);
          border-radius: $base-border-radius;
          background: $base-color-white;
          min-height: calc(100vh - 127px);
          box-shadow: $base-box-shadow;
        }
      }

      &.is-collapse-main {
        margin-left: $base-left-menu-width-min;
        width: $base-right-content-width-min;

        ::v-deep {
          .fixed-header {
            width: calc(100vw - 65px);
            left: $base-left-menu-width-min;
          }
        }
      }
    }
  }
}
</style>
