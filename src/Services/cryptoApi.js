import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST_CRYPTO,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_BASEURL_CRYPTO;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timePeriod }) =>
        createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
