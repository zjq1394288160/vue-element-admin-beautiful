/*!
 * byui前端敏捷开发平台 : vue-element-admin-beautiful
 *  copyright:1204505056@qq.com 
 *  author: chuzhixin <1204505056@qq.com> 
 *  participants: liyanna,songmeiyu,lizhenguo
 *  time: 2020-4-7 16:20:44
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./src/styles/common.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-3-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/styles/common.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n/*浅色风格结束*/\n/*蓝色风格开始*/\n/*蓝色风格结束*/\n/*黑色风格开始*/\n/*黑色风格结束*/\n/* byui scss全局变量结束 */\n\n* {\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  background: #f6f8f9;\n  position: relative;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  outline: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.byui-clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: #1890ff;\n}\n\n.byui-overflow {\n  overflow: hidden;\n}\n\n/* 滚动条样式,新版本滚动条默认使用el-scroll方式,请仔细阅读文档 */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(144, 147, 153, 0.3);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 147, 153, 0.3);\n}", "",{"version":3,"sources":["common.scss","D:\\Development\\WebStormProjects\\vue-element-admin-beautiful/src\\styles\\variables.scss","D:\\Development\\WebStormProjects\\vue-element-admin-beautiful/src\\styles\\common.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB,oBAAA;AACA,SAAA;AAMA,SAAA;AAEA,SAAA;AAMA,SAAA;AACA,SAAA;AAMA,SAAA;AA2BA,oBAAA;;AChDA;EACE,UAAA;EACA,SAAA;EACA,8BAAA;UAAA,sBAAA;AFgBF;;AEbA;;EAEE,SAAA;EACA,UAAA;EACA,4BAAA;EACA,gBAAA;EACA,mCAAA;EACA,wCAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AFgBF;;AEdA;;;EAGE,aAAA;EACA,8BAAA;UAAA,sBAAA;AFiBF;;AEdA;EACE,YAAA;EACA,cAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;AFiBF;;AEdA;EACE,oBAAA;KAAA,iBAAA;AFiBF;;AEdA;EACE,qBAAA;EACA,eAAA;EACA,cDZgB;AD6BlB;;AEdA;EACE,gBAAA;AFiBF;;AEdA,wCAAA;AACA;EACE,UAAA;EACA,WAAA;EACA,uBAAA;AFiBF;;AEdA;EACE,0CAAA;EACA,mBAAA;AFiBF;;AEdA;EACE,0CAAA;AFiBF","file":"common.scss","sourcesContent":["@charset \"UTF-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n/*浅色风格结束*/\n/*蓝色风格开始*/\n/*蓝色风格结束*/\n/*黑色风格开始*/\n/*黑色风格结束*/\n/* byui scss全局变量结束 */\n:export {\n  menuText: #ffffff;\n  menuTextAcive: #ffffff;\n  menuBackground: #001529;\n  menuActiveBackground: #1890ff;\n  tagViewsActiveBackground: #1890ff;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  background: #f6f8f9;\n  position: relative;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.byui-clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\nimg {\n  object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: #1890ff;\n}\n\n.byui-overflow {\n  overflow: hidden;\n}\n\n/* 滚动条样式,新版本滚动条默认使用el-scroll方式,请仔细阅读文档 */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(144, 147, 153, 0.3);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 147, 153, 0.3);\n}","@charset \"utf-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n$base-menu-background: #e7eaed;\n$base-menu-active-background: rgba(#1890ff, 0.5);\n$base-menu-text: #001529;\n$base-menu-text-active: #001529;\n$base-title: #001529;\n/*浅色风格结束*/\n\n/*蓝色风格开始*/\n$base-menu-background: #2a58ad;\n$base-menu-active-background: #22468a;\n$base-menu-text: #ffffff;\n$base-menu-text-active: #ffffff;\n$base-title: #ffffff;\n/*蓝色风格结束*/\n/*黑色风格开始*/\n$base-menu-background: #001529;\n$base-menu-active-background: #1890ff;\n$base-menu-text: #ffffff;\n$base-menu-text-active: #ffffff;\n$base-title: #ffffff;\n/*黑色风格结束*/\n$base-font-size-small: 12px;\n$base-font-size-default: 14px;\n$base-font-size-big: 16px;\n$base-font-size-bigger: 18px;\n$base-font-size-max: 22px;\n$base-color-header: $base-menu-background;\n$base-color-blue: #1890ff;\n$base-color-white: #ffffff;\n$base-color-black: #000000;\n$base-color-yellow: #ffba00;\n$base-color-red: #ff4d4f;\n$base-color-gray: #97a8be;\n$base-main-width: 1279px;\n$base-border-radius: 2px;\n$base-border-color: #ebeef5;\n$base-form-width: 600px;\n$base-input-height: 32px;\n$base-pagination-height: 28px;\n$base-dialog-title-height: 40px;\n$base-padding: 15px;\n$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n$base-font-color: #606266;\n$base-left-menu-width: 225px;\n$base-right-content-width: calc(100vw - 225px);\n$base-left-menu-width-min: 65px;\n$base-right-content-width-min: calc(100vw - 65px);\n/* byui scss全局变量结束 */\n:export {\n  menuText: $base-menu-text;\n  menuTextAcive: $base-menu-text-active;\n  menuBackground: $base-menu-background;\n  menuActiveBackground: $base-menu-active-background;\n  tagViewsActiveBackground: $base-color-blue;\n}\n","@import \"~@/styles/variables.scss\";\r\n@charset \"utf-8\";\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  background: #f6f8f9;\n  position: relative;\n  height: 100%;\n}\n*,\n*:before,\n*:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.byui-clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\nimg {\n  object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: $base-color-blue;\n}\n\n.byui-overflow {\n  overflow: hidden;\n}\n\n/* 滚动条样式,新版本滚动条默认使用el-scroll方式,请仔细阅读文档 */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(144, 147, 153, 0.3);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 147, 153, 0.3);\n}\n"]}]);
// Exports
exports.locals = {
	"menuText": "#ffffff",
	"menuTextAcive": "#ffffff",
	"menuBackground": "#001529",
	"menuActiveBackground": "#1890ff",
	"tagViewsActiveBackground": "#1890ff"
};
module.exports = exports;


/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-3-2!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./common.scss */ "./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./src/styles/common.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("2aa096c5", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=98.js.map