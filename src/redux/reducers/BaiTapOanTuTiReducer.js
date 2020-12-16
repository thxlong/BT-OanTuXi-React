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

  ketQua: "You win!",
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

    default:
      return { ...state };
  }
};

export default BaiTapOanTuTiReducer;
