<template>
  <div>
    <template v-if="ripple">
      <div
        ref="container"
        @mousedown="addRipple"
        :class="customClass + ' ripple-outer'"
        :style="customStyle"
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
    </template>
    <template v-else>
      <div :class="customClass" :style="customStyle">
        <slot name="default"></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ripple from "@/mixins/ripple.js";
export default {
  name: "v-card",
  mixins: [ripple],
  props: {
    customClass: {
      type: String,
      default: "card elevation-2"
    },
    customStyle: {
      type: String,
      default: ""
    },
    ripple: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  //padding: var(--space-sm);
  width: 100%;
  height: 100%;
  user-select: none;
  transition: 0.3s ease-out;
}

/*.container {
  width: 100%;
  height: 100%;
}*/
</style>
