export default {
  namespaced: true,
  state: {
    field: {
      isStart: false,
      matrix: {
        life: null,
        posX: null,
        posY: null
      },
      attribute: {
        rectSize: 30,
        timerSpeed: 100,
        style: {
          lineWidth: 1,
          strokeStyle: "black",
          fillStyle: "#00bcd4"
        }
      },
      initFunc: null,
      startTimerFunc: null,
      clearFunc: null
    }
  },

  actions: {
    setFieldStartStop({ commit }, isStart) {
      commit("Set_Field_Start_Stop", isStart);
    },
    setFieldSize({ commit }, rectSize) {
      commit("Set_Field_Size", rectSize);
    },
    setInitFunc({ commit }, func) {
      commit("Set_Init_Func", func);
    },
    setClearFunc({ commit }, func) {
      commit("Set_Clear_Func", func);
    },
    setSpeed({ commit }, mSec) {
      commit("Set_Speed", mSec);
    },
    setStartTimerFunc({ commit }, func) {
      commit("Set_Start_Timer_Func", func);
    }
  },

  mutations: {
    Set_Field_Start_Stop(state, isStart) {
      state.field.isStart = isStart;
    },
    Set_Field_Size(state, rectSize) {
      state.field.attribute.rectSize = rectSize;
    },
    Set_Init_Func(state, func) {
      state.field.initFunc = func;
    },
    Set_Clear_Func(state, func) {
      state.field.clearFunc = func;
    },
    Set_Speed(state, mSec) {
      state.field.attribute.timerSpeed = mSec;
    },
    Set_Start_Timer_Func(state, func) {
      state.field.startTimerFunc = func;
    }
  }
};
