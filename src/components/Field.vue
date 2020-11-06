<template>
  <!--
        <canvas id="field" :width="settings.width" :height="settings.height"></canvas>
    -->
  <canvas
    id="field"
    width="900"
    height="800"
    @click="clickCanvas"
    @dblclick="clickCanvas"
  ></canvas>
</template>
<script>
import { mapState, mapActions } from "vuex";
import * as Life from "../scripts/logicLife.js";

export default {
  /*props: {
    isStart: {
      type: Boolean,
      default: false
    },
    clickMode: {
      type: String,
      default: "add" // "add", "delete"
    }
  },*/
  data() {
    return {
      data: null,
      canvas: null,
      context: null,
      timer: null,
      settings: {
        width: 1520,
        height: 670
      }
    };
  },
  watch: {
    rectSize: function() {
      this.canvasAttributeUpdate();
      this.init();
    },
    timerSpeed: function() {
      if (this.timer != null) clearInterval(this.timer);
      this.startTimer();
    }
  },
  computed: {
    ...mapState("field", {
      cells: state => state.field,
      isStart: state => state.field.isStart,
      rectSize: state => state.field.attribute.rectSize,
      timerSpeed: state => state.field.attribute.timerSpeed
    })
  },
  created() {
    window.addEventListener("resize", this.resizeWindowsUpdate);
  },
  mounted: function() {
    /*this.settings.height = window.innerHeight - window.innerHeight * 0.1;
    this.settings.width = window.innerWidth - window.innerWidth * 0.01;

    this.canvas = document.querySelector("canvas");
    this.context = this.canvas.getContext("2d");

    this.canvas.setAttribute("height", this.settings.height);
    this.canvas.setAttribute("width", this.settings.width);*/

    this.canvasAttributeUpdate();

    /*this.canvas.addEventListener("click", e => {
      var rect = this.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      //console.log("x: " + x + " y: " + y);

      this.clickField(x, y);
    });*/

    //set func field in global
    this.setInitFunc(this.init);
    this.setClearFunc(this.clearFieldImport);
    this.setStartTimerFunc(this.startTimer);
    //set func field in global

    this.init();
  },
  beforeDestroy() {
    this.stopTimer();
    window.removeEventListener("resize", this.resizeWindowsUpdate);
  },
  methods: {
    ...mapActions("field", [
      "setInitFunc",
      "setClearFunc",
      "setStartTimerFunc"
    ]),

    init: function() {
      //console.log("init()")

      this.clearField();

      if (this.timer != null) clearInterval(this.timer);

      //style init
      //this.cells.style.fillStyle = this.getThemeColor();
      //style init

      this.drawNewField();

      Life.init(this.cells.matrix);

      this.startTimer();
    },
    drawNewField: function() {
      //console.log("drawField()")

      this.cells.matrix = new Array();

      for (
        var iterY = 1, i = 0;
        iterY < this.settings.height;
        iterY += this.cells.attribute.rectSize, i++
      ) {
        this.cells.matrix[i] = new Array();

        for (
          var iterX = 1, j = 0;
          iterX < this.settings.width;
          iterX += this.cells.attribute.rectSize, j++
        ) {
          this.cells.matrix[i][j] = {
            life: 0,
            posX: iterX,
            posY: iterY
          };

          this.context.beginPath();
          this.context.lineWidth = this.cells.attribute.style.lineWidth;
          this.context.strokeStyle = this.cells.attribute.style.strokeStyle;
          this.context.rect(
            iterX,
            iterY,
            this.cells.attribute.rectSize,
            this.cells.attribute.rectSize
          );
          this.context.stroke();
        }
      }
    },
    drawCell: function(lifeCell, i, j) {
      //console.log("drawrect()")

      if (lifeCell == 1) {
        this.context.beginPath();
        this.context.lineWidth = this.cells.attribute.style.lineWidth;
        this.context.strokeStyle = this.cells.attribute.style.strokeStyle;
        this.context.fillStyle = this.cells.attribute.style.fillStyle;
        this.context.fillRect(
          this.cells.matrix[i][j].posX + this.cells.attribute.style.lineWidth,
          this.cells.matrix[i][j].posY + this.cells.attribute.style.lineWidth,
          this.cells.attribute.rectSize - this.cells.attribute.style.lineWidth,
          this.cells.attribute.rectSize - this.cells.attribute.style.lineWidth
        );
        this.context.stroke();
      } else {
        this.context.clearRect(
          this.cells.matrix[i][j].posX + this.cells.attribute.style.lineWidth,
          this.cells.matrix[i][j].posY + this.cells.attribute.style.lineWidth,
          this.cells.attribute.rectSize - this.cells.attribute.style.lineWidth,
          this.cells.attribute.rectSize - this.cells.attribute.style.lineWidth
        );
      }
    },
    startTimer: function() {
      //console.log("startTimer()")
      clearInterval(this.timer);

      this.timer = setInterval(this.update, this.cells.attribute.timerSpeed);
    },
    stopTimer: function() {
      //console.log("clearField()")

      clearInterval(this.timer);
    },
    canvasAttributeUpdate: function() {
      this.settings.height = window.innerHeight - window.innerHeight * 0.1;
      this.settings.width = window.innerWidth - window.innerWidth * 0.01;

      this.canvas = document.querySelector("canvas");
      this.context = this.canvas.getContext("2d");

      this.canvas.setAttribute("height", this.settings.height);
      this.canvas.setAttribute("width", this.settings.width);
    },
    resizeWindowsUpdate: function() {
      this.canvasAttributeUpdate();
      this.init();
    },
    clearFieldImport: function() {
      this.init();
    },
    clearField: function() {
      //console.log("clearField()")

      this.context.clearRect(0, 0, this.settings.width, this.settings.height);
    },
    clearReactField: function() {
      //console.log("clearReactField()");

      for (var i = 0; i < this.cells.matrix.length; i++) {
        for (var j = 0; j < this.cells.matrix[0].length; j++) {
          this.drawCell(0, i, j);
        }
      }
    },
    drawRect: function() {
      //console.log("drawrect()")
    },
    /*getThemeColor: function() {
      var app = this;
      //console.log("getThemeColor()")

      var currentColorClass = app.root[0].className.match(
        /color-theme-([a-z]*)/
      );
      //if (currentColorClass) app.root.removeClass(currentColorClass[0]);
      //app.root.addClass(`color-theme-${color}`);

      //console.log(currentColorClass)

      if (currentColorClass == null) {
        return "#2196f3";
      } else {
        return currentColorClass[1];
      }
    },*/
    clickCanvas: function(e) {
      let rect = this.canvas.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let typeClick = e.type == "click" ? "add" : "delete";

      this.clickField(x, y, typeClick);
    },
    clickField: function(x, y, clickMode) {
      //console.log("clickField()")

      for (let i = 0; i < this.cells.matrix.length; i++) {
        for (let j = 0; j < this.cells.matrix[0].length; j++) {
          if (
            x >= this.cells.matrix[i][j].posX &&
            x <= this.cells.matrix[i][j].posX + this.cells.attribute.rectSize &&
            y >= this.cells.matrix[i][j].posY &&
            y <= this.cells.matrix[i][j].posY + this.cells.attribute.rectSize
          ) {
            this.clickSetRect(i, j, clickMode);

            return;
          }
        }
      }
    },
    clickSetRect: function(x, y, clickMode) {
      //console.log("clickField()")

      if (clickMode == "add") {
        this.cells.matrix[x][y].life = 1;
        this.drawCell(1, x, y);

        return;
      }
      if (clickMode == "delete") {
        this.cells.matrix[x][y].life = 0;
        this.drawCell(0, x, y);

        return;
      }
    },
    update: function() {
      //console.log("update()")

      if (!this.isStart) {
        return;
      }

      Life.iter();

      for (var i = 0; i < this.cells.matrix.length; i++) {
        for (var j = 0; j < this.cells.matrix[0].length; j++) {
          if (this.cells.matrix[i][j].life == 1) {
            this.drawCell(1, i, j);
          } else {
            this.drawCell(0, i, j);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#field {
  height: 100%;
  width: 100%;
}
</style>
