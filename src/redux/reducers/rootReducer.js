import { combineReducers } from "redux";

import BaiTapOanTuTiReducer from "./BaiTapOanTuTiReducer";

//Store tổng ứng dụng

export const rootReducer = combineReducers({
  // nơi sẽ chứa các reducer cho nghiệp vụ (store con)

  //   Bài tập oản tù tì
  BaiTapOanTuTiReducer,
});

export default rootReducer;
