import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.arrXucXac.map((item, index) => {
      return (
        <img
          style={{ width: 30, height: 30 }}
          key={index}
          src={item.hinhAnh}
          alt="..."
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    arrXucXac: state.gameReducer.arrXucXac,
  };
};
export default connect(mapStateToProps, null)(XucXac);
