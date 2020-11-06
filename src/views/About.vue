<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-list-flex>
      <v-button icon="card_giftcard"></v-button>
      <v-button rounded>lol</v-button>
      <v-button icon="card_giftcard" fab colorRipple="#f8bbd0"></v-button>
      <v-button color="color-primary">lol</v-button>
      <v-button icon="card_giftcard" fab size="v-size--large"></v-button>
      <v-button color="color-secondary--text" outlined>lol</v-button>
      <v-button
        color="color-secondary--text"
        icon="card_giftcard"
        fab
        outlined
      ></v-button>
      <v-button color="color-secondary" colorRipple="red" rounded>lol</v-button>
    </v-list-flex>
  </div>
</template>

<script>
export default {
  name: "app-not-found",
  components: {
    "v-button": () => import("@/components/VButton.vue"),
    "v-list-flex": () => import("@/components/VListFlex.vue")
  }
};
</script>

<style lang="scss" scoped>
.about {
  padding: var(--space-sm);
  min-height: 100%;
}

.list-flex {
  align-items: center;
}

.v-btn {
  margin: 5px;
}
</style>
