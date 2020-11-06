<template>
  <div id="app" data-theme="dark">
    <div id="main">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  height: inherit;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateY(-150px);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave {
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(150px);
  opacity: 0;
}
</style>
