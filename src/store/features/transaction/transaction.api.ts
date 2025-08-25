import { baseApi } from "@/store/baseApi";

export const transactionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllTransactions: builder.query({
			query: (params) => ({
				method: "GET",
				url: "/transaction/get-all-transactions",
				params
			}),
			providesTags: ["TRANSACTION"],
		}),
		myTransactions: builder.query({
			query: (params) => ({
				method: "GET",
				url: "/transaction/my-transactions",
				params
			}),
			providesTags: ["TRANSACTION"],
		}),
		getSingleTransaction: builder.query({
			query: (id) => ({
				method: "GET",
				url: `/transaction/${id}`,
			}),
			providesTags: ["TRANSACTION"],
		}),
	}),
});

export const {
	useGetAllTransactionsQuery,
	useMyTransactionsQuery,
	useGetSingleTransactionQuery,
} = transactionApi;
