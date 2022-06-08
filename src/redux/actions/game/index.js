import { CHOI_GAME, DAT_CUOC } from "../../constants/game";

export const actDatCuoc = (status) => {
  return {
    type: DAT_CUOC,
    payload: status,
  };
};
export const actChoiGame = () => {
  return {
    type: CHOI_GAME,
  };
};
