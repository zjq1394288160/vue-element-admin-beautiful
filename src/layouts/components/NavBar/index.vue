<template>
  <div class="nav-bar-container">
    <byui-main>
      <el-row :gutter="15">
        <el-col :span="12">
          <div class="left-panel">
            <i
              :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              :title="collapse ? '展开' : '收起'"
              class="fold-unfold"
              @click="handleCollapse"
            ></i>
            <breadcrumb />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right-panel">
            <error-log />
            <byui-screenfull></byui-screenfull>
            <theme-bar></theme-bar>
            <byui-icon
              @click="refreshSelectedTag"
              :pulse="pulse"
              :icon="['fas', 'redo']"
            />

            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <el-tooltip effect="light" placement="bottom">
              <div slot="content">上次登录时间:{{ lastLoginTime }}</div>
              <span class="user-name">{{ name }}</span>
            </el-tooltip>
            <byui-icon @click="logout" :icon="['fas', 'sign-out-alt']" />
          </div>
        </el-col>
      </el-row>
    </byui-main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ByuiMain from "@/components/ByuiMain";
import ErrorLog from "@/components/ErrorLog";
import ByuiScreenfull from "@/components/ByuiScreenfull";
import Breadcrumb from "@/layouts/components/Breadcrumb";
import ThemeBar from "@/layouts/components/ThemeBar";

export default {
  components: {
    Breadcrumb,
    ByuiMain,
    ErrorLog,
    ByuiScreenfull,
    ThemeBar,
  },
  data() {
    return {
      pulse: false,
    };
  },
  computed: {
    ...mapGetters([
      "avatar",
      "collapse",
      "name",
      "loginTimes",
      "lastLoginTime",
      "selectedTag",
    ]),
  },
  methods: {
    handleCollapse() {
      this.$store.dispatch("settings/changeCollapse");
    },
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
  transition: all 0.3s;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

  .left-panel {
    display: flex;
    justify-items: center;
    align-items: center;

    .fold-unfold {
      font-size: 20px;
      color: $base-color-gray;
      cursor: pointer;
      transition: all 0.3s;
      z-index: 999;
      margin: 10px;
    }

    .fold-unfold.el-icon-s-unfold {
      transition: all 0.3s;
    }
  }

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
      svg {
        color: $base-color-gray;
        fill: $base-color-gray;
        margin-right: 15px;
        cursor: pointer;
      }

      .el-badge {
        margin-right: 15px;
      }
    }
  }
}
</style>
