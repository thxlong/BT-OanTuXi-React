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
  soBanThang: 0,
  soBanChoi: 0,

  computer: {
    ma: "keo",
    hinhAnh: "./img/keo.png",
  },
};

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KBB": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      // console.log("reset false", mangCuocUpdate);
      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let computerRandomPlay = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[computerRandomPlay];
      // console.log("computerRandom", quanCuocNgauNhien);
      state.computer = { ...quanCuocNgauNhien };

      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      // console.log("computer", computer);
      // console.log("computerMa", computer.ma);

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà game";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua game";
            state.soBanThang -= 1;
          } else {
            state.ketQua = "Win game";
            state.soBanThang += 1;
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Win game";
            state.soBanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoà game";
          } else {
            state.ketQua = "Thua game";
            state.soBanThang -= 1;
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua game";
            state.soBanThang -= 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Win game";
            state.soBanThang += 1;
          } else {
            state.ketQua = "Hoà game";
          }
          break;

        default:
          state.ketQua = "Win game";
          state.soBanThang += 1;
          break;
      }
      state.soBanChoi += 1;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BaiTapOanTuTiReducer;
