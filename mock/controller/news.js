const axios = require("axios");

function getList(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
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

/*开源中国*/
let kyzgData = "";
getList("https://rsshub.app/oschina/news").then((res) => {
  kyzgData = res.data;
});
/*掘金*/
let jjData = "";
getList("https://rsshub.app/juejin/category/frontend").then((res) => {
  jjData = res.data;
});
/*中国政府*/
let zgzfData = "";
getList("https://rsshub.app/gov/zhengce/zuixin").then((res) => {
  zgzfData = res.data;
});
/*联合国*/
let lhgData = "";
getList("https://rsshub.app/un/scveto").then((res) => {
  lhgData = res.data;
});
/*UI中国*/
let uizgData = "";
getList("https://rsshub.app/ui-cn/article").then((res) => {
  uizgData = res.data;
});
/*站酷*/
let zkData = "";
getList("https://rsshub.app/zcool/recommend/all").then((res) => {
  zkData = res.data;
});
/*阮一峰的博客*/
let ryfdbkData = "";
getList("https://rsshub.app/yuque/doc/102804").then((res) => {
  ryfdbkData = res.data;
});
export default [
  {
    url: "/getKyzgList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: kyzgData,
      };
    },
  },
  {
    url: "/getJjList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: jjData,
      };
    },
  },
  {
    url: "/getZgzfList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: zgzfData,
      };
    },
  },
  {
    url: "/getLhgList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: lhgData,
      };
    },
  },
  {
    url: "/getUizgList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: uizgData,
      };
    },
  },
  {
    url: "/getZkList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: zkData,
      };
    },
  },
  {
    url: "/getRyfdbkList",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: ryfdbkData,
      };
    },
  },
];
