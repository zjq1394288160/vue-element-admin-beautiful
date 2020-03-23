<template>
  <div class="app-container">
    <div id="map"></div>
  </div>
</template>

<script>
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";
import { ClusterLayer } from "maptalks.markercluster";

export default {
  name: "ByuiMap",
  components: {},
  props: {
    mapConfig: {
      type: Object,
      default: function () {
        return {
          isShowMarks: false,
          isShowShapeDraw: false,
        };
      },
    },
    addressPoints: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      map: null,
      shapeLayer: null, // 放置绘制图形的图层
      drawTool: null, // 绘制工具
      startDraw: false,
      myhint: null,
      myMap: null,
      shapeType: "",
    };
  },
  created() {},
  mounted() {
    const that = this;
    that.$nextTick(() => {
      that.initMap();
      if (that.mapConfig.isShowShapeDraw) {
        that.initShapeDraw();
      }
      if (that.mapConfig.isShowMarks) {
        that.initMark();
      }
    });
  },
  methods: {
    /* 初始化地图 */
    initMap() {
      const that = this;
      that.map = new maptalks.Map("map", {
        center: [116.41348403785, 39.910843952376],
        zoom: 12,
        spatialReference: this.baseSpatialReference(),
        baseLayer: new maptalks.TileLayer("base", this.baseLayer()),
      });
    },
    /* 初始化图形绘制工具 */
    initShapeDraw() {
      const that = this;
      // 监听地图点击事件
      that.map.on("click", function (e) {
        if (that.startDraw) {
          if (that.shapeType == "Polygon" || that.shapeType == "LineString") {
            that.WordsFollowMouseDOM(2);
          } else if (
            that.shapeType == "FreeHandLineString" ||
            that.shapeType == "FreeHandPolygon"
          ) {
            that.WordsFollowMouseDOM(4);
          } else {
            that.WordsFollowMouseDOM(3);
          }
        }
      });
      that.myMap = document.getElementById("map");
      that.myhint = document.createElement("div");
      that.myhint.style.position = "absolute";
      that.myMap.appendChild(that.myhint);
      // 声明放置绘制图形的图层
      that.shapeLayer = new maptalks.VectorLayer("shapeLayer", null, {
        zIndex: "10",
      }).addTo(that.map);

      // 绘制工具，画操作
      that.drawTool = new maptalks.DrawTool({
        mode: "Point",
        symbol: {
          lineColor: "rgb(0,208,223)",
          lineWidth: 2,
          polygonFill: "rgb(135,196,240)",
          polygonOpacity: 0.6,
        },
      })
        .addTo(that.map)
        .disable();
      // 画操作结束后事件
      that.drawTool.on("drawend", function (param) {
        //that.drawTool.disable();
        //that.startDraw = false;
        that.shapeLayer.addGeometry(param.geometry);
        that.WordsFollowMouseDOM();
        that.$emit("drawShape", param.geometry);
      });
    },
    /* 开始绘制 */
    doDraw(shapeType) {
      const that = this;
      that.drawTool.setMode(shapeType).enable();
      if (shapeType == "Point") {
        that.drawTool.setSymbol([
          {
            markerType: "ellipse",
            markerWidth: 30,
            markerHeight: 30,
            markerFill: "rgb(64, 158, 255)",
            markerFillOpacity: 0.7,
            markerLineColor: "#73b8ff",
            markerLineWidth: 0,
          },
          {
            markerType: "ellipse",
            markerWidth: 15,
            markerHeight: 15,
            markerFill: "#006ddd",
            markerFillOpacity: 0.8,
            markerLineWidth: 0,
          },
        ]);
      } else {
        that.drawTool.setSymbol({
          lineColor: "rgb(0,208,223)",
          lineWidth: 2,
          polygonFill: "rgb(135,196,240)",
          polygonOpacity: 0.6,
        });
      }
      that.WordsFollowMouseDOM(1);
      that.startDraw = true;
      that.shapeType = shapeType;
    },
    /* 清空地图绘制 */
    clearDraw() {
      const that = this;
      that.WordsFollowMouseDOM();
      that.shapeLayer.clear();
      that.drawTool.disable();
      that.startDraw = false;
    },
    /* 地图绘制时鼠标跟随提示 1-单击左键开始绘制、2-双击左键结束绘制、不传-不显示跟随信息 */
    WordsFollowMouseDOM(hintwords) {
      const that = this;
      that.myMap.addEventListener("mousemove", function (e) {
        that.myhint.style.left =
          e.clientX - $("#map").offset().left + 10 + "px";
        that.myhint.style.top = e.clientY - $("#map").offset().top + 2 + "px";
        that.myhint.style.backgroundColor = "rgba(52,126,255,0.6)";
        that.myhint.style.padding = "2px 4px";
        that.myhint.style.fontSize = "12px";
        that.myhint.style.color = "#fff";
        that.myhint.style.borderRadius = "2px";
        that.myhint.style.fontWeight = "10";
        switch (hintwords) {
          case 1:
            that.myhint.innerHTML = "单击左键开始绘制";
            that.myhint.style.display = "block";
            break;
          case 2:
            that.myhint.innerHTML = "双击左键结束绘制";
            that.myhint.style.display = "block";
            break;
          case 3:
            that.myhint.innerHTML = "单击左键结束绘制";
            that.myhint.style.display = "block";
            break;
          case 4:
            that.myhint.innerHTML = "连续绘制";
            that.myhint.style.display = "none";
            break;
          default:
            that.myhint.innerHTML = "";
            that.myhint.style.display = "none";
            break;
        }
      });
      that.myMap.addEventListener("mouseout", function (e) {
        that.myhint.innerHTML = "";
        that.myhint.style.display = "none";
      });
    },
    /* 打点Mark+聚合效果+点击弹框 */
    initMark() {
      const that = this;
      const markers = [];
      for (let i = 0; i < that.addressPoints.length; i++) {
        const a = that.addressPoints[i];
        markers.push(
          new maptalks.Marker([a[0], a[1]], {
            symbol: [
              {
                markerType: "ellipse",
                markerWidth: 30,
                markerHeight: 30,
                markerFill: "rgb(64, 158, 255)",
                markerFillOpacity: 0.7,
                markerLineColor: "#73b8ff",
                markerLineWidth: 0,
              },
              {
                markerType: "ellipse",
                markerWidth: 15,
                markerHeight: 15,
                markerFill: "#006ddd",
                markerFillOpacity: 0.8,
                markerLineWidth: 0,
              },
            ],
          }).on("mousedown", onClick)
        );
      }

      // mark点击弹框
      function onClick(e) {
        e.target.setInfoWindow({
          title: "x:" + e.coordinate.x + ",y:" + e.coordinate.y,
          content:
            '<div class="map-popover">' +
            '<div class="mark-info">' +
            "</div>" +
            "</div>",
          width: 400,
          minHeight: 100,
          dy: 5,
          autoPan: true,
          custom: false,
          autoOpenOn: "click", //set to null if not to open when clicking on marker
          autoCloseOn: "click",
        });
      }

      // 聚合效果
      const clusterLayer = new ClusterLayer("cluster", markers, {
        noClusterWithOneMarker: false,
        maxClusterZoom: 15,
        zIndex: "100",
        //"count" is an internal variable: marker count in the cluster.
        symbol: {
          markerType: "ellipse",
          markerFill: {
            property: "count",
            type: "interval",
            stops: [
              [0, "rgb(135, 196, 240)"],
              [9, "#1bbc9b"],
              [99, "rgb(216, 115, 149)"],
            ],
          },
          markerFillOpacity: 0.7,
          markerLineOpacity: 1,
          markerLineWidth: 3,
          markerLineColor: "#fff",
          markerWidth: {
            property: "count",
            type: "interval",
            stops: [
              [0, 40],
              [9, 60],
              [99, 80],
            ],
          },
          markerHeight: {
            property: "count",
            type: "interval",
            stops: [
              [0, 40],
              [9, 60],
              [99, 80],
            ],
          },
        },
        drawClusterText: true,
        geometryEvents: true,
        single: true,
      });
      that.map.addLayer(clusterLayer);
    },
    /* 地图飞行倒指定位置方法 */
    changeView(center) {
      const that = this;
      that.map.animateTo(
        {
          center: center,
          zoom: 16,
          pitch: 0,
          bearing: 20,
        },
        {
          duration: 1000,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  #map {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
