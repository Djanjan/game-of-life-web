<template>
  <div class="list-flex">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "v-list-flex"
};
</script>

<style lang="scss" scoped>
/*.col {
  grid-row: span 1;
}

.col-0 {
  grid-column: span 1;
}

.col-1 {
  grid-column: 2;
}

.col-2 {
  grid-column: 3;
}*/
</style>
