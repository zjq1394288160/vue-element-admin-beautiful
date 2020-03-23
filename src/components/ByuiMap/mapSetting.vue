<template>
  <div class="app-container">
    <div id="map"></div>
  </div>
</template>

<script>
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";

export default {
  name: "ByuiMapSetting",
  components: {},
  props: {
    renderer: {
      type: String,
      default: "canvas",
    },
    mapType: {
      type: Number,
      default: 1,
    },
    baseLayer: {
      type: String,
      default: "",
    },
    layer: {
      type: String,
      default: "",
    },
    center: {
      type: Array,
      default: () => [116.41348403785, 39.910843952376],
    },
    zoom: {
      type: Number,
      default: 5,
    },
    minZoom: {
      type: Number,
      default: 1,
    },
    maxZoom: {
      type: Number,
      default: 18,
    },
  },
  data() {
    return {
      map: null,
    };
  },
  created() {},
  methods: {
    destroyMap() {
      if (this.map) {
        this.map.remove();
      }
    },
    /* 初始化地图 */
    initMap() {
      if (this.map) {
        this.map.remove();
      }
      if (this.mapType == 1) {
        /*天地图*/
        this.map = new maptalks.Map("map", {
          center: this.center,
          zoom: this.zoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom,
          attribution: true,
          zoomControl: true,
          scaleControl: true,
          overviewControl: true,
          spatialReference: {
            projection: "EPSG:4326",
          },
          baseLayer: new maptalks.TileLayer("base", {
            renderer: this.renderer,
            tileSystem: [1, -1, -180, 90],
            urlTemplate: this.baseLayer,
            subdomains: ["1", "2", "3", "4", "5"],
            attribution:
              '&copy; <a target="_blank" href="http://www.tianditu.cn">天地图</a>',
          }),
          layers: [
            new maptalks.TileLayer("road", {
              urlTemplate: this.layer,
              subdomains: ["1", "2", "3", "4", "5"],
              opacity: 1,
            }),
          ],
        });
      } else if (this.mapType == 2) {
        /*百度地图*/
        this.map = new maptalks.Map("map", {
          renderer: this.renderer,
          center: this.center,
          zoom: this.zoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom,
          attribution: true,
          zoomControl: true,
          scaleControl: true,
          overviewControl: true,
          spatialReference: {
            projection: "baidu",
          },
          baseLayer: new maptalks.TileLayer("base", {
            urlTemplate: this.baseLayer,
            subdomains: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            attribution:
              '&copy; <a target="_blank" href="http://map.baidu.com">百度地图</a>',
          }),
        });
      } else if (this.mapType == 3) {
        /*高德地图*/
        this.map = new maptalks.Map("map", {
          renderer: this.renderer,
          center: this.center,
          zoom: this.zoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom,
          attribution: true,
          zoomControl: true,
          scaleControl: true,
          overviewControl: true,
          spatialReference: {
            projection: "EPSG:4326",
          },
          baseLayer: new maptalks.TileLayer("base", {
            tileSystem: [1, -1, -180, 90],
            urlTemplate: this.baseLayer,
            subdomains: ["1", "2", "3", "4"],
            attribution:
              '&copy; <a target="_blank" href="https://www.amap.com/">高德地图</a>',
          }),
        });
      }
      this.$nextTick(() => {
        this.map.on("viewchange", (param) => {
          this.$emit("handleCenter", param.new.center);
          this.$emit("handleZoom", param.new.zoom);
        });
      });
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
