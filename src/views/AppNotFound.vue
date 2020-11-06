<template>
  <div class="container">
    <div class="box-shadow"></div>
    <div class="text-box">
      <div class="heading-3 font-weight-bold">Ohhh god what is it!</div>
      <div class="subtitle-1">You are lost...</div>
      <v-button
        outlined
        color="color-secondary--text"
        @click.native="$router.push({ name: 'home' })"
        >Back to Home</v-button
      >
    </div>
    <img class="image-error" loading="lazy" src="@/assets/cat-what.gif" />
  </div>
</template>

<script>
export default {
  name: "app-not-found",
  components: {
    "v-button": () => import("@/components/VButton.vue")
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
}

.box-shadow {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.text-box {
  position: absolute;
  left: 35%;
  top: 40%;
  text-align: center;
  color: white;

  .subtitle-1 {
    margin-top: 3vh;
  }

  .v-btn {
    margin-top: 5vh;
  }
}

.image-error {
  height: -webkit-fill-available;
  width: 100%;
}
</style>
