import React, { Component } from "react";
import "../assets/css/style.css";
import XucXac from "./xucxac";
import { connect } from "react-redux";
import { actChoiGame, actDatCuoc } from "../redux/actions/game";

class GameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <h1 className="text-center mt-5">Game Đổ Xúc xắc</h1>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              className="btnDatCuoc"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              className="btnDatCuoc"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="text-center">
          <h2>
            Bạn chọn:{" "}
            <span className="text-danger">
              {this.props.choose ? "Tài" : "Xỉu"}
            </span>
          </h2>
          <h2>
            Số bàn thắng:{" "}
            <span className="text-success">{this.props.soBanThang}</span>
          </h2>
          <h2>
            Tổng số bàn chơi:{" "}
            <span className="text-primary">{this.props.tongSoBanChoi}</span>
          </h2>
          <button
            className="btn btn-success mt-5"
            onClick={() => {
              this.props.choiGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    choose: state.gameReducer.choose,
    soBanThang: state.gameReducer.soBanThang,
    tongSoBanChoi: state.gameReducer.tongSoBanChoi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (status) => {
      dispatch(actDatCuoc(status));
    },
    choiGame: () => {
      dispatch(actChoiGame());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameXucXac);
