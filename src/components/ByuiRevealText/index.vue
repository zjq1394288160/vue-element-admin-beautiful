<template>
  <div :class="`reveal-text-${uuid}`" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
import { uuid } from "@/utils";

export default {
  name: "ByuiRevealText",
  props: {
    styleObj: {
      type: Object,
      default: () => {
        return {
          fontWeight: "bold",
          fontSize: "2em",
          letterSpacing: "5px",
        };
      },
    },
  },
  data() {
    return {
      uuid: uuid(),
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      let duration = 0.8;
      let delay = 0.3;
      let revealText = document.querySelector(`.reveal-text-${this.uuid}`);
      let letters = revealText.textContent.split("");
      revealText.textContent = "";
      let middle = letters.filter((e) => e !== " ").length / 2;
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
[class*="reveal-text-"] {
  position: relative;
  color: $base-color-default;

  ::v-deep {
    span {
      opacity: 0;
      transform: scale(0);
      animation: fadeIn 2.4s forwards;
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    color: $base-color-default;
    opacity: 0;
    transform: scale(0);
  }

  &::before {
    left: 50%;
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }

  &::after {
    right: 50%;
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
</style>
