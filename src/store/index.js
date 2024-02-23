import { configureStore } from "@reduxjs/toolkit";
import studentApi from "./studentApi";
const store = configureStore({
  reducer: {
    //以studentApi.reducerPath命名，将reducer配置到store中
    [studentApi.reducerPath]: studentApi.reducer,
  },
  //添加中间件
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(studentApi.middleware);
  },
});
export default store;
