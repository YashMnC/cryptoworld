import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3";
//process.env.REACT_APP_BASEURL_EXCHANGES;

const createRequest = (url) => ({ url });

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
