<template>
  <hr :class="getCustomClass" />
</template>

<script>
export default {
  name: "v-divider",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    inset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getCustomClass() {
      let classOut = "v-divider v-divider--color";
      if (this.inset) {
        classOut += "v-divider--inset ";
      }
      return classOut + this.customClass;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-divider {
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid;
  border-width: thin 0 0;
  transition: inherit;
}

.v-divider--inset {
  //margin-left: 72px;
  max-width: calc(100% - 72px);
}

/*.v-divider:not([data-theme="dark"]) {
  border-color: hsla(0, 0%, 100%, 0.12);
}
:not(:root, [data-theme="default"])
.v-divider:not([data-theme="default"]) {
  border-color: rgba(0, 0, 0, 0.12);
}*/

[data-theme="dark"] .v-divider--color {
  border-color: hsla(0, 0%, 100%, 0.12);
}

[data-theme="default"] .v-divider--color {
  border-color: rgba(0, 0, 0, 0.12);
}

/*.v-divider,
[data-theme="dark"] {
  border-color: hsla(0, 0%, 100%, 0.12);
}

.v-divider,
[data-theme="default"] {
  border-color: rgba(0, 0, 0, 0.12);
}*/
</style>
