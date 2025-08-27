import { baseApi } from "@/store/baseApi";

export const walletApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createNewWallet: builder.mutation({
			query: (walletData) => ({
				method: "POST",
				url: "/wallet/create-wallet",
				data: walletData,
			}),
		}),
		updateWallet: builder.mutation({
			query: ({ id, walletData }) => ({
				method: "PATCH",
				url: `/wallet/update/${id}`,
				data: walletData,
			}),
			invalidatesTags: ["WALLET"],
		}),
		deleteWallet: builder.mutation({
			query: (id) => ({
				method: "DELETE",
				url: `/wallet/${id}`,
			}),
			invalidatesTags: ["WALLET"],
		}),
		myWallet: builder.query({
			query: () => ({
				method: "GET",
				url: "/wallet/my-wallet",
			}),
			providesTags: ["WALLET"],
		}),
		topUpWallet: builder.mutation({
			query: (topUpData) => ({
				method: "POST",
				url: "/wallet/top-up",
				data: topUpData,
			}),
			invalidatesTags: ["WALLET", "TRANSACTION"],
		}),
		sendMoney: builder.mutation({
			query: (sendMoneyData) => ({
				method: "POST",
				url: "/wallet/send-money",
				data: sendMoneyData,
			}),
			invalidatesTags: ["WALLET", "TRANSACTION"],
		}),
		cashIn: builder.mutation({
			query: (cashInData) => ({
				method: "POST",
				url: "/wallet/cash-in",
				data: cashInData,
			}),
			invalidatesTags: ["WALLET", "TRANSACTION"],
		}),
		cashOut: builder.mutation({
			query: (cashOutData) => ({
				method: "POST",
				url: "/wallet/cash-out",
				data: cashOutData,
			}),
			invalidatesTags: ["WALLET", "TRANSACTION"],
		}),
		getWallets: builder.query({
			query: (params) => ({
				method: "GET",
				url: "/wallet/get-wallets",
				params,
			}),
			providesTags: ["WALLET"],
		}),
	}),
});

export const {
	useCreateNewWalletMutation,
	useMyWalletQuery,
	useTopUpWalletMutation,
	useSendMoneyMutation,
	useCashInMutation,
	useCashOutMutation,
	useGetWalletsQuery,
	useUpdateWalletMutation,
	useDeleteWalletMutation
} = walletApi;
