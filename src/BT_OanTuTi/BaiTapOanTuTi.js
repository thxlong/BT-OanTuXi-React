import React, { Component } from "react";
import "./BaiTapOanTuTi.css";
import Computer from "./Computer";
import Player from "./Player";
export default class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <Player />
        <Computer />
      </div>
    );
  }
}
