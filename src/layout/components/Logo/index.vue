<template>
  <div :class="'logo-container-' + layout">
    <router-link class="logo-link" to="/">
      <byui-icon class="logo" v-if="logo" :icon="['fas', 'chess-queen']" />
      <span class="title" :title="title">
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from "Vuex";

export default {
  name: "Logo",
  data() {
    return {
      title: this.baseTitle,
    };
  },
  computed: {
    ...mapGetters(["logo", "layout"]),
  },
};
</script>
<style lang="scss" scoped>
.logo-container-horizontal {
  padding: 0 !important;
  position: relative;
  height: 56px;
  line-height: 50px;
  background: $base-color-header;
  text-align: left;
  overflow: hidden;

  .logo-link {
    height: 100%;
    width: 100%;

    .logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 5px;
      float: left;
      margin-top: 11px;
      color: $base-title;
    }

    .title {
      display: inline-block;
      margin: 0;
      color: $base-title;
      font-weight: 600;
      line-height: 55px;
      font-size: $base-font-size-max;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.logo-container-vertical {
  padding: 10px 16px 0 14px !important;
  position: relative;
  height: 56px;
  line-height: 50px;
  background: $base-color-header;
  text-align: left;
  overflow: hidden;

  .logo-link {
    height: 100%;

    .logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 5px;
      float: left;
      margin-top: 11px;
      color: $base-title;
    }

    .title {
      width: 80%;
      display: inline-block;
      margin: 0;
      color: $base-title;
      font-weight: 600;
      line-height: 55px;
      font-size: $base-font-size-max;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
