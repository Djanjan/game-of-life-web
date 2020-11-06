<template>
  <v-card :customClass="customClass" @click.native="active = !active">
    <img :class="active ? 'active' : '' + ' image'" :src="image" />
    <transition name="fade">
      <div v-show="active" class="v-card--content">
        <v-button class="icon-card" icon="launch"></v-button>
        <v-button class="icon-card" icon="favorite_border"></v-button>
        <v-button class="icon-card" icon="aspect_ratio"></v-button>
      </div>
    </transition>
  </v-card>
</template>

<script>
export default {
  name: "image-card",
  components: {
    "v-card": () => import("@/components/VCard.vue"),
    "v-button": () => import("@/components/VButton.vue")
  },
  props: {
    customClass: {
      type: String,
      default: "card elevation-2"
    },
    customStyle: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  height: 100%;
  width: 100%;
  border-radius: 4px 4px 4px 4px;
  z-index: 0;
}

.image.active {
  height: 80%;
}

.v-card--content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-card {
  margin-left: 5px;
  margin-right: 5px;
}

/*.image {
  background-image: url(https://picsum.photos/500/300?random);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 5px 5px;
  width: 100%;
  height: 100%;
}*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
