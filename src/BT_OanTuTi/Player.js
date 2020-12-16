import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center player">
        <div className="theThink mt-3">
          <img
            className="mt-5"
            width={100}
            height={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble mb-5"></div>

        <img
          src="./img/player.png"
          alt="./img/player.png"
          style={{ height: "250px", width: "250px" }}
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // Xét giá trị đặt cược thêm viên cho item được chọn

            let border = {};
            if (item.datCuoc) {
              border = { border: "5px solid orange" };
            }

            return (
              <div className="col-4">
                <button style={border} className="btnItem">
                  <img
                    src={item.hinhAnh}
                    onClick={() => {
                      this.props.datCuoc(item.ma);
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KBB",
        maCuoc,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return { mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
