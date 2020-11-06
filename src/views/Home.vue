<template>
  <div class="home">
    <v-card>
      <field></field>
    </v-card>
    <the-tool-bar-bottom></the-tool-bar-bottom>
  </div>
</template>

<script>
/* <v-button class="cn-button" icon="home"></v-button>
    <div id="cn-overlay" class="cn-overlay"></div> */
export default {
  name: "Home",
  components: {
    field: () => import("@/components/Field.vue"),
    "v-card": () => import("@/components/VCard.vue"),
    "the-tool-bar-bottom": () => import("@/components/TheToolBarBottom.vue")
  },
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: var(--space-sm);
}

.btn-start {
  position: fixed;
  left: 50%;
  margin-left: -1.75em;
  bottom: 0.5em;
}

.cn-button {
  font-size: 1.5em;
  padding-bottom: 1em;
  height: 3.5em;
  width: 3.5em;
  position: fixed;
  left: 50%;
  margin-left: -1.75em;
  bottom: -1.75em;
  border-radius: 50%;
  cursor: pointer;
  z-index: 11;
}

.cn-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
  pointer-events: none;
}

/* Class added to the overlay via JavaScript to show it when navigation is open */
.cn-overlay.on-overlay {
  pointer-events: auto;
  opacity: 1;
}

.image {
  height: 100%;
  width: 100%;
  border-radius: 4px 4px 4px 4px;
  z-index: 0;
}
</style>
