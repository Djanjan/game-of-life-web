<template>
  <div class="container">
    <i class="material-icons md-36">{{ icon }}</i>
    <slot name="label"></slot>
  </div>
</template>

<script>
export default {
  name: "chips",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "disabled_by_default"
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 200px 200px 200px 200px;
  border: 1px solid var(--color-primary);
  position: relative;
  min-width: 3em;
  margin: 0.2em;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;

  .material-icons {
    color: var(--color-primary);
    font-size: 24px;
    margin-left: 0.3em;
  }

  div {
    font-size: var(--text-sm);
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
}
</style>
