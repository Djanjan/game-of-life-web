<template>
  <div id="toolBar">
    <v-button
      :class="isMenu ? 'menu-button active' : 'menu-button'"
      :icon="getMenuIcon"
      fab
      color="color-primary"
      @click.native="touchMenu"
    ></v-button>
    <transition name="slide-fade" mode="out-in">
      <v-card
        :class="isMenu ? 'nav-bottom active' : 'nav-bottom'"
        customClass="card elevation-2 card-nav-bottom"
      >
        <div class="list-button">
          <v-button
            :icon="getStartIcon"
            fab
            color="color-primary"
            @click.native="startField"
          ></v-button>
          <v-button
            icon="delete"
            fab
            color="color-primary"
            @click.native="clearField"
          ></v-button>
        </div>
        <v-divider></v-divider>
        <div class="">
          <div>Field Size: {{ modelFieldSize }}</div>
          <vue-slider
            v-model="modelFieldSize"
            :min="4"
            :max="100"
            :interval="1"
          ></vue-slider>
        </div>
        <div>
          <div>Life Speed: {{ modelTimeSpeed }}</div>
          <vue-slider
            v-model="modelTimeSpeed"
            :min="1"
            :max="1000"
            :interval="1"
          ></vue-slider>
        </div>
        <v-divider></v-divider>
      </v-card>
    </transition>
    <!--<transition name="slide-fade" mode="out-in">
      <v-button
        v-if="isMenu"
        class="btn-start"
        :icon="getStartIcon"
        fab
        color="color-primary"
        size="v-size--large"
        @click.native="startField"
      ></v-button>
    </transition>
    <transition name="slide-fade" mode="out-in">
      <v-button
        v-if="isMenu"
        class="btn-start1"
        :icon="getStartIcon"
        fab
        color="color-primary"
        size="v-size--large"
        @click.native="startField"
      ></v-button>
    </transition>
    <transition name="slide-fade" mode="out-in">
      <v-button
        v-if="isMenu"
        class="btn-start2"
        :icon="getStartIcon"
        fab
        color="color-primary"
        size="v-size--large"
        @click.native="startField"
      ></v-button>
    </transition>
    <transition name="slide-fade" mode="out-in">
      <v-button
        v-if="isMenu"
        class="btn-start3"
        :icon="getStartIcon"
        fab
        color="color-primary"
        size="v-size--large"
        @click.native="startField"
      ></v-button>
    </transition>-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "the-tool-bar-bottom",
  components: {
    "v-card": () => import("@/components/VCard.vue"),
    "v-button": () => import("@/components/VButton.vue"),
    "v-divider": () => import("@/components/VDivider.vue"),
    "vue-slider": () => import("vue-slider-component")
  },
  data() {
    return {
      isMenu: false
      // fieldSize: 10
      //icon: "" //stop  play_circle_filled
    };
  },
  computed: {
    ...mapState("field", {
      isStart: state => state.field.isStart,
      fieldSize: state => state.field.attribute.rectSize,
      timeSpeed: state => state.field.attribute.timerSpeed,
      clearField: state => state.field.clearFunc
    }),
    getStartIcon() {
      //console.log("getIcon() " + this.isStart);
      return this.isStart ? "stop" : "play_arrow";
    },
    getMenuIcon() {
      return this.isMenu ? "keyboard_arrow_down" : "keyboard_arrow_up";
    },
    modelFieldSize: {
      get: function() {
        return this.fieldSize;
      },
      set: function(value) {
        this.setFieldSize(value);
      }
    },
    modelTimeSpeed: {
      get: function() {
        return this.timeSpeed;
      },
      set: function(value) {
        this.setSpeed(value);
      }
    }
  },
  mounted: function() {},
  methods: {
    ...mapActions("field", ["setFieldStartStop", "setFieldSize", "setSpeed"]),

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    touchMenu() {
      this.isMenu = !this.isMenu;
    },
    startField() {
      //console.log("start() " + this.isStart);
      if (this.isStart) {
        this.setFieldStartStop(false);
      } else {
        this.setFieldStartStop(true);
      }
    },
    clearField() {
      //console.log("clearField")

      //console.log(this.$store.state.field.clearFunc)
      if (this.field.clearFunc != null) {
        this.field.clearFunc();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/*#toolBar {
  background-color: var(--color-contrast-lower);
  position: relative;
  margin-left: 5em;
  margin-right: 5em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
}*/

.nav-bottom {
  display: flex;
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: -30em;
  margin-left: -12px;
  border-radius: 4px 4px 4px 4px;
  z-index: 2;
  transition: all 0.5s ease;
}

.nav-bottom.active {
  bottom: 0;
}

.list-button {
  display: flex;
  justify-content: center;
  align-content: center;

  .v-btn {
    margin-left: 5px;
    margin-right: 5px;
  }
}

/*.btn-start {
  position: fixed;
  left: 40%;
  //margin-left: -1.75em;
  bottom: 0.5em;
  transition: all 0.3s ease;
}

.btn-start1 {
  position: fixed;
  left: 56%;
  //margin-left: 1.75em;
  bottom: 0.5em;
  transition: all 0.3s ease;
}

.btn-start2 {
  position: fixed;
  left: 53%;
  bottom: 5.5em;
  transition: all 0.3s ease;
}

.btn-start3 {
  position: fixed;
  left: 43%;
  bottom: 5.5em;
  transition: all 0.3s ease;
}*/

.menu-button {
  font-size: 1.5em;
  padding-bottom: 1em;
  width: 3.5em;
  position: fixed;
  left: 50%;
  margin-left: -1.75em;
  bottom: -1.75em;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-button.active {
  //font-size: 0;
  //height: 3.5em;
  bottom: 160px;
  z-index: 1;
}

/*@media (max-width: 940px) {
  .btn-start {
    left: 10%;
  }
  .btn-start1 {
    left: 70%;
  }
  .btn-start3 {
    left: 23%;
  }
}*/

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  //left: 50%;
  //margin-left: -0.1em;
  transform: translateY(150px);
  opacity: 0;
}
.slide-fade-enter-to {
  //left: 40%;
  //margin-left: -1.75em;
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave {
  //left: 40%;
  //margin-left: -1.75em;
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave-to {
  //left: 50%;
  //margin-left: -0.1em;
  transform: translateY(150px);
  opacity: 0;
}
</style>
