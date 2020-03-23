<template>
  <section class="main-container">
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedViews" :max="10">
        <byui-keel v-if="show" style="margin: 15px;">
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="6" />
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="6" />
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="7" />
        </byui-keel>
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <div v-if="layoutSwitchBar" class="byui-layout-switch">
      <el-switch
        v-model="layoutSwitch"
        active-text="横向布局"
        inactive-text="纵向布局"
        @change="handleSwitch"
      ></el-switch>
    </div>
  </section>
</template>

<script>
import { layout, layoutSwitchBar } from "@/settings";
import { byuiKeel, byuiKeelHeading, byuiKeelText } from "@/plugins/byuiKeel";
import { mapGetters } from "vuex";

export default {
  name: "AppMain",
  components: {
    byuiKeel,
    byuiKeelHeading,
    byuiKeelText,
  },
  data() {
    return {
      show: true,
      layoutSwitch: true,
      layoutSwitchBar,
    };
  },
  computed: {
    ...mapGetters(["cachedViews"]),
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        if (this.$store.state.tagsView.skeleton) {
          this.show = true;
          setTimeout(() => {
            this.show = false;
          }, 900);
        } else {
          this.show = false;
        }
      });
    },
  },
  created() {
    if (localStorage.getItem("BYUI-VUE-LAYOUT")) {
      if (localStorage.getItem("BYUI-VUE-LAYOUT") === "vertical") {
        this.layoutSwitch = false;
      } else {
        this.layoutSwitch = true;
      }
    } else {
      if (layout === "vertical") {
        this.layoutSwitch = false;
      } else {
        this.layoutSwitch = true;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.show = true;
      this.baseColorfullLoading();
      setTimeout(() => {
        this.show = false;
      }, 400);
    });
  },
  methods: {
    handleSwitch(val) {
      let layout = "horizontal";
      if (true === val) {
        layout = "horizontal";
      } else {
        layout = "vertical";
      }
      localStorage.setItem("BYUI-VUE-LAYOUT", layout);
      setTimeout(() => {
        this.$store.dispatch("settings/changeLayout", layout);
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  position: relative;
  overflow: hidden;
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
  border: 1px solid $base-color-default;
  padding-left: 15px;
  box-shadow: $base-box-shadow;
  z-index: 9999;
}
</style>
