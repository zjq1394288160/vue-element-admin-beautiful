<template>
  <section class="app-main-container">
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedViews" :max="10">
        <byui-keel v-if="show" style="margin: 15px;">
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="7" />
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="6" />
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="8" />
        </byui-keel>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
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
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 400);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-main-container {
  transition: all 0.3s;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
