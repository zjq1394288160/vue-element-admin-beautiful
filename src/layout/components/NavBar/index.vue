<template>
  <div class="nav-bar-container">
    <byui-main>
      <breadcrumb class="breadcrumb-container" />
      <div class="right-menu">
        <error-log class="errLog-container right-menu-item hover-effect" />

        <div class="avatar-container" trigger="click">
          <div class="avatar-content">
            <byui-icon
              @click="refreshSelectedTag"
              :pulse="pulse"
              class="right-icon"
              :icon="['fas', 'redo']"
            />
            <byui-screenfull></byui-screenfull>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <el-tooltip effect="light" placement="bottom">
              <div slot="content">
                <p style="height: 24px; line-height: 24px;">
                  上次登录时间:{{ lastLoginTime }}
                </p>
              </div>
              <span class="nav-name">{{ name }}</span>
            </el-tooltip>

            <span @click="logout"
              ><byui-icon class="right-icon" :icon="['fas', 'sign-out-alt']"
            /></span>
          </div>
        </div>
      </div>
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

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: $base-font-size-default;
      color: $base-menu-background;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;
      }
    }

    .avatar-container {
      float: right;
      margin-right: 20px;

      .avatar-content {
        margin-top: 5px;
        display: flex;
        line-height: 40px;

        .right-icon {
          margin-top: 12px;
          margin-right: 15px;
          color: #97a8be;
          cursor: pointer;
        }

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .nav-name {
          margin: 0 10px;
          cursor: pointer;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          font-size: $base-font-size-default;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
