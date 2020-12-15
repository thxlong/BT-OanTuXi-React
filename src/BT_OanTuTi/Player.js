import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="text-center player">
        <div className="theThink mt-3">
          <img className='mt-5' width={100} height={100} src="./img/keo.png" />
        </div>
        <div className="speech-bubble mb-5"></div>

        <img
          src="./img/player.png"
          alt="./img/player.png"
          style={{ height: "250px", width: "250px" }}
        />
        <div className="row">
          <div className="col-4">
            <button className="btnItem">
              <img src="./img/keo.png" />
            </button>
          </div>

          <div className="col-4">
            <button className="btnItem">
              <img src="./img/bua.png" />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img src="./img/bao.png" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
