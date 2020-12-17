const stateDefault = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/keo.png",
      datCuoc: false,
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao.png",
      datCuoc: true,
    },
  ],

  ketQua: "Thua game!",
  soBanThang: 10,
  soBanChoi: 20,

  computer: {
    ma: "keo",
    hinhAnh: "./img/keo.png",
  },
};

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KBB": {
      // Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let computerRandomPlay = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[computerRandomPlay];
      console.log("computerRandom", quanCuocNgauNhien);
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà game";
          } else if ("bua") {
            state.ketQua = "Thua game";
          } else {
            state.ketQua = "Win game";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Win game";
          } else if ("bua") {
            state.ketQua = "Hoà game";
          } else {
            state.ketQua = "Thua game";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua game";
          } else if ("bua") {
            state.ketQua = "Win game";
          } else {
            state.ketQua = "Hoà game";
          }
          break;

        default:
          state.ketQua = "Win game";
          break;
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BaiTapOanTuTiReducer;
