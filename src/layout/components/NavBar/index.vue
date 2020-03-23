<template>
  <div class="nav-bar-container">
    <byui-main>
      <el-row :gutter="15">
        <el-col :span="12">
          <breadcrumb />
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "^/Breadcrumb/index";
import ByuiMain from "^/ByuiMain/index";
import ErrorLog from "^/ErrorLog/index";
import ByuiScreenfull from "^/ByuiScreenfull/index";

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
    };
  },
  computed: {
    ...mapGetters([
      "avatar",
      "name",
      "loginTimes",
      "lastLoginTime",
      "selectedTag",
    ]),
  },
  methods: {
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
  height: 50px;
  overflow: hidden;
  position: relative;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

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
      }

      .el-badge {
        margin-right: 15px;
      }
    }
  }
}
</style>
