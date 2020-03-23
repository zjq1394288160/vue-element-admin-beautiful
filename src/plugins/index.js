/* 公共引入,勿随意修改,修改时需经过确认 */
import "babel-polyfill";
import Vue from "vue";
import "normalize.css";
import "./rely";
import "./element";
import "./support";
import "@/styles/byui.scss";
import byui from "@/utils/byui";
import "@/icons";
import "@/permission";
import "@/utils/errorLog";
import "./f12";
import drag from "@/directive/drag";
import permission from "@/directive/permission";
import "./byuiIcon";

Vue.use(permission);
Vue.use(drag);
Vue.use(byui);
