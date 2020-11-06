<template>
  <div class="catalogs">
    <v-list-flex>
      <v-card
        v-for="(item, index) in data"
        :key="index"
        :class="'item-flex ' + item.flexItem"
      >
        <img class="image-card" :src="item.src" />
      </v-card>
    </v-list-flex>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "catalogs",
  components: {
    "v-list-flex": () => import("@/components/VListFlex.vue"),
    "v-card": () => import("@/components/VCard.vue")
  },
  data() {
    return {
      data: []
    };
  },
  mounted: function() {
    for (let i = 0; i < 20; i++) {
      this.fetchData();
    }
  },
  methods: {
    fetchData: function() {
      axios
        .get("https://picsum.photos/600/300?random")
        .then(response => {
          this.data.push({
            src: response.request.responseURL,
            flexItem: this.getItemFlex()
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    getItemFlex() {
      return "item-flex-" + this.getRandomInt(0, 10);
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};
</script>

<style lang="scss" scoped>
.catalogs {
  padding: var(--space-sm);
}

.image-card {
  height: 100%;
  width: 100%;
  border-radius: 4px 4px 4px 4px;
  z-index: 0;
}
</style>
