const axios = require("axios");

function getList(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        timout: 60000,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((res) => {
        resolve(res);
      });
  });
}

/*Prettier*/
let prettierData = "";
getList("https://gitee.com/mirrors/Prettier/raw/master/docs/options.md").then(
  (res) => {
    prettierData = res.data;
  }
);
/*Prettier*/
let vueApi = "";
getList(
  "https://gitee.com/chu1204505056/cn.vuejs.org/raw/master/src/v2/api/index.md"
).then((res) => {
  vueApi = res.data;
});
export default [
  {
    url: "/markdown/getPrettierList",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: prettierData,
      };
    },
  },
  {
    url: "/markdown/getVueApiList",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: vueApi,
      };
    },
  },
];
