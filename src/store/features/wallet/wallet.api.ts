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
		topUpWallet: builder.mutation({
			query: (topUpData) => ({
				method: "POST",
				url: "/wallet/top-up",
				data: topUpData,
			}),
			invalidatesTags: ["WALLET"],
		}),
		sendMoney: builder.mutation({
			query: (sendMoneyData) => ({
				method: "POST",
				url: "/wallet/send-money",
				data: sendMoneyData,
			}),
			invalidatesTags: ["WALLET"],
		}),
		cashIn: builder.mutation({
			query: (cashInData) => ({
				method: "POST",
				url: "/wallet/cash-in",
				data: cashInData,
			}),
			invalidatesTags: ["WALLET"],
		}),
		cashOut: builder.mutation({
			query: (cashOutData) => ({
				method: "POST",
				url: "/wallet/cash-out",
				data: cashOutData,
			}),
			invalidatesTags: ["WALLET"],
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
} = authApi;
