<template>
  <div class="login-container">
    <div class="login-logo-bysj">
      <!--<img src="../../assets/login_images/logo2.png" />-->
    </div>
    <el-row>
      <el-col :span="12">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          auto-complete="off"
          class="login-form"
          label-position="left"
        >
          <div class="title">
            你好！
          </div>
          <div class="title-tips">欢迎来到{{ title }}！</div>
          <el-form-item
            style="margin-top: 49px;"
            prop="userName"
            class="login-form-admin"
          >
            <span class="svg-container svg-container-admin"
              ><byui-icon :icon="['fas', 'user']"
            /></span>
            <el-input
              v-model="loginForm.userName"
              v-focus
              auto-complete="off"
              placeholder="请输入用户名"
              tabindex="1"
              type="text"
            />
          </el-form-item>
          <el-form-item prop="password" class="login-form-pass">
            <span class="svg-container svg-container-pass"
              ><byui-icon :icon="['fas', 'lock']"
            /></span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              auto-complete="off"
              placeholder="请输入密码"
              tabindex="2"
              @keyup.enter.native="handleLogin"
            />
            <span
              v-if="passwordType === 'password'"
              class="show-pwd"
              @click="showPwd"
              ><byui-icon :icon="['fas', 'eye-slash']"
            /></span>
            <span v-else class="show-pwd" @click="showPwd"
              ><byui-icon :icon="['fas', 'eye']"
            /></span>
          </el-form-item>
          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            @click.native.prevent="handleLogin"
            >登录
          </el-button>
          <div class="forget-password">
            <el-tooltip
              class="item"
              effect="dark"
              content="请联系管理员"
              placement="bottom"
            >
              <span class="forget-pass">忘记账号密码?</span>
            </el-tooltip>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { isPassword, isUserName } from "@/utils/validate";

export default {
  name: "Login",
  directives: {
    focus: {
      inserted(el) {
        el.querySelector("input").focus();
      },
    },
  },
  data() {
    const validateUserName = (rule, value, callback) => {
      if ("" == value) {
        callback(new Error("用户名不能为空"));
      } else if (!isUserName(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!isPassword(value)) {
        callback(new Error("密码不能少于6位"));
      } else {
        callback();
      }
    };
    return {
      title: this.baseTitle,
      loginForm: {
        userName: "",
        password: "",
      },
      loginRules: {
        userName: [
          {
            required: true,
            trigger: "blur",
            validator: validateUserName,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword,
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {
    if ("production" !== process.env.NODE_ENV) {
      this.loginForm.userName = "admin";
      this.loginForm.password = "123456";
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      // alert();
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              const routerPath = this.redirect === "/404" ? "/" : this.redirect;
              this.$router.push({ path: routerPath || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: url("~@/assets/login_images/bgg.png") no-repeat;
  background-size: cover;

  .title {
    height: 50px;
    font-size: 54px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(14, 18, 26, 1);
  }

  .title-tips {
    height: 24px;
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(14, 18, 26, 1);
    margin-top: 29px;
  }

  .login-btn {
    height: 60px;
    border-radius: 99px;
    width: 220px;
    display: inherit;
    background: linear-gradient(
      90deg,
      rgba(90, 97, 240, 1),
      rgba(106, 142, 239, 1)
    );
    box-shadow: 0 17px 21px 0 rgba(152, 173, 241, 0.44);
    margin-top: 5px;

    &:hover {
      opacity: 0.9;
    }
  }

  .login-logo-bysj {
    position: absolute;
    left: 45px;
    top: 45px;

    img {
      width: 180px;
    }
  }

  .login-form {
    position: relative;
    width: 577px;
    max-width: 100%;
    min-width: 500px;
    background-size: 100% 100%;
    padding: 60px 40px 50px 40px;
    overflow: hidden;
    margin-top: 200px;
    margin-left: 200px;

    .forget-password {
      width: 100%;
      text-align: left;
      margin-top: 40px;

      .forget-pass {
        width: 129px;
        height: 19px;
        font-size: 20px;

        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(92, 102, 240, 1);
      }
    }
  }

  .tips {
    font-size: $base-font-size-default;
    color: $base-color-white;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      font-size: 34px;
      color: $base-color-blue;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .svg-container {
    position: absolute;
    left: 15px;
    top: 14px;
    font-size: 16px;
    color: #d7dee3;
    cursor: pointer;
    user-select: none;
    z-index: 99;
  }

  .show-pwd {
    position: absolute;
    right: 25px;
    top: 14px;
    font-size: 16px;
    color: $base-font-color;
    cursor: pointer;
    user-select: none;
  }

  .login-left {
    width: 388px;
    margin-top: 20px;
  }

  ::v-deep {
    .el-form-item {
      margin: 20px 0;
      padding-right: 0;
      border: 1px solid transparent;
      background: transparent;
      border-radius: 2px;
      color: #454545;

      &__content {
        line-height: $base-input-height;
        min-height: $base-input-height;
      }

      &__error {
        color: $base-color-red;
        font-size: $base-font-size-small;
        line-height: 18px;
        position: absolute;
        top: 100%;
        left: 18px;
      }
    }

    .el-input {
      box-sizing: border-box;

      input {
        background: #f6f4fc;
        border: 0;
        border-radius: 99px;
        color: $base-font-color;
        caret-color: $base-font-color;
        padding-left: 45px;
        height: 58px;
        line-height: 58px;
        font-size: $base-font-size-default;
      }
    }
  }
}
</style>
