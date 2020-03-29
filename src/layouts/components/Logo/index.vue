<template>
  <div :class="'logo-container-' + layout">
    <byui-icon v-if="logo" class="logo" :icon="['fas', 'trophy']"></byui-icon>
    <span class="title" :title="title">
      {{ title }}
    </span>
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
@mixin container {
  position: relative;
  height: 56px;
  line-height: 56px;
  background: $base-color-header;
  overflow: hidden;
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: 3px;
  color: $base-title;
}

@mixin title {
  display: inline-block;
  color: $base-title;
  font-weight: 600;
  line-height: 55px;
  font-size: $base-font-size-max;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.logo-container-horizontal {
  transition: all 0.3s;
  @include container;

  .logo {
    @include logo;
  }

  .title {
    @include title;
  }
}

.logo-container-vertical {
  transition: all 0.3s;
  @include container;
  text-align: center;

  .logo {
    @include logo;
  }

  .title {
    @include title;
    max-width: 140px;
  }
}
</style>
