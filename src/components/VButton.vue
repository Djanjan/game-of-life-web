<template>
  <div ref="container" :class="classUpdate" @mousedown="addRipple">
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
    <span class="v-btn-content">
      <template v-if="icon == ''">
        <slot name="default"></slot>
      </template>
      <template v-else>
        <i class="material-icons md-24">{{ icon }}</i>
      </template>
    </span>
  </div>
</template>

<script>
import ripple from "@/mixins/ripple.js";
export default {
  name: "v-button",
  mixins: [ripple],
  props: {
    customClass: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    fab: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "v-size--default"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    classUpdate() {
      let classOut = "v-btn ripple-outer ";
      if (this.icon != "") {
        classOut += "v-btn--icon v-btn--round ";
      } else if (this.rounded) {
        classOut += "v-btn--rounded elevation-2 ";
      }
      if (this.fab) {
        classOut += "v-btn--fab v-btn--round elevation-2 ";
      }
      if (this.outlined) {
        classOut += "v-btn--outlined elevation-2 ";
      }
      if (this.color != "") {
        classOut += this.color;
      }
      return classOut + " " + this.size + " " + this.customClass;
    }
  }
};
/*icon == ''
        ? 'v-btn elevation-2 v-size--default ripple-outer'
        : 'v-btn elevation-2 v-btn--icon v-btn--round v-size--default ripple-outer'*/
</script>

<style lang="scss">
.v-btn-content {
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
}
</style>
