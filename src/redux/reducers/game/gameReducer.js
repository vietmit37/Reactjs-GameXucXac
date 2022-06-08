import { CHOI_GAME, DAT_CUOC } from "../../constants/game";

const initialState = {
  choose: true,
  arrXucXac: [
    { ma: 5, hinhAnh: "./img/5.png" },
    { ma: 5, hinhAnh: "./img/5.png" },
    { ma: 5, hinhAnh: "./img/5.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_CUOC:
      return {
        ...state,
        choose: action.payload,
      };
    case CHOI_GAME:
      let arrXucXacNauNhien = [];
      for (let i = 0; i < state.arrXucXac.length; i++) {
        let x = Math.floor(Math.random() * 6) + 1;
        arrXucXacNauNhien.push({
          ma: x,
          hinhAnh: `./img/${x}.png`,
        });
      }
      state.tongSoBanChoi++;
      state.arrXucXac = arrXucXacNauNhien;
      let tongDiem = arrXucXacNauNhien.reduce((tong, item) => {
        return tong + item.ma;
      }, 0);
      if (
        (tongDiem > 11 && state.choose) ||
        (tongDiem <= 11 && !state.choose)
      ) {
        state.soBanThang++;
      }

      return { ...state };
    default:
      return { ...state };
  }
};
export default gameReducer;
