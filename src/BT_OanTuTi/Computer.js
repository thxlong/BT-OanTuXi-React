import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 80px;}
      50% {top: -50px;}
      75% {top: 80px;}
      100% {top: 0px;}
    }`;
    return (
      <div className="text-center computer">
        <style>{keyframe}</style>
        <div className="theThink mt-3" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
              left: "100px",
            }}
            className="mt-5"
            width={100}
            height={100}
            src={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble mb-5"></div>

        <img
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
          style={{ height: "250px", width: "250px" }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
