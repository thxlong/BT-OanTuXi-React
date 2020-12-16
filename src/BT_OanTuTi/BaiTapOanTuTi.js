import React, { Component } from "react";
import "./BaiTapOanTuTi.css";
import Computer from "./Computer";
import GameResult from "./GameResult";
import Player from "./Player";
import { connect } from "react-redux";
class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="row ">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4 text-center">
            <GameResult />
            <button
              style={{ width: "350px", height: "120px" }}
              className="btn btn-success mt-5 "
            >
              <span
                className="display-4"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                Play game
              </span>
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count >= 30) {
          // Dừng hàm lặp interval
          clearInterval(randomComputerItem);
        }
      }, 100);
    },
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapOanTuTi);
