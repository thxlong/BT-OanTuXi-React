import React, { Component } from "react";
import "./BaiTapOanTuTi.css";
import Computer from "./Computer";
import GameResult from "./GameResult";
import Player from "./Player";
export default class BaiTapOanTuTi extends Component {
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
              <span className="display-4">Play game</span>
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
