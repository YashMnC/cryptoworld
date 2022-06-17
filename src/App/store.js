import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { cryptoNewsApi } from "../Services/cryptoNewsApi";
import { cryptoExchangesApi } from "../Services/cryptoExchangesApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,
  },
});
