import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="text-center computer">
        <div className="theThink mt-3">
          <img className="mt-5" width={100} height={100} src="./img/bua.png" />
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
