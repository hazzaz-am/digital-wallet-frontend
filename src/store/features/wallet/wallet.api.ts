import { baseApi } from "@/store/baseApi";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createNewWallet: builder.mutation({
			query: (walletData) => ({
				method: "POST",
				url: "/wallet/create-wallet",
				data: walletData,
			}),
		}),
		myWallet: builder.query({
			query: () => ({
				method: "GET",
				url: "/wallet/my-wallet",
			}),
			providesTags: ["WALLET"],
		}),
	}),
});

export const { useCreateNewWalletMutation, useMyWalletQuery } = authApi;
