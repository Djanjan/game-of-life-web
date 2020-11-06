/*
<div
    ref="container"
    @mousedown="addRipple"
    class="card elevation-2 ripple-outer"
  >
    <transition-group class="ripples" name="grow" tag="div">
      <div
        class="ripple"
        v-for="ripple in ripples"
        :key="ripple.id"
        :style="{
          top: ripple.top,
          left: ripple.left,
          width: ripple.width,
          height: ripple.height,
          background: colorRipple
        }"
      ></div>
    </transition-group>
    <slot name="default"></slot>
  </div>
*/

const mixin = {
  props: {
    colorRipple: {
      type: String,
      default: "#00bcd4"
    },
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ripples: []
    };
  },
  mounted() {
    if (this.ripple) {
      const width = this.$refs.container.offsetWidth;
      const height = this.$refs.container.offsetHeight;
      this.rippleWidth = width > height ? width : height;
      this.halfRippleWidth = this.rippleWidth / 2;

      window.addEventListener("mouseup", this.purgeRipples);
    }
  },
  beforeDestroy() {
    if (this.ripple) {
      window.removeEventListener("mouseup", this.purgeRipples);
    }
  },
  methods: {
    addRipple(e) {
      const { left, top } = this.$refs.container.getBoundingClientRect();
      const rippleId = Date.now();
      this.ripples.push({
        width: `${this.rippleWidth}px`,
        height: `${this.rippleWidth}px`,
        left: `${e.clientX - left - this.halfRippleWidth}px`,
        top: `${e.clientY - top - this.halfRippleWidth}px`,
        id: rippleId
      });
    },
    purgeRipples() {
      this.ripples = [];
    }
  }
};

export default mixin;
