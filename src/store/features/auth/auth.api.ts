import { baseApi } from "@/store/baseApi";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		registration: builder.mutation({
			query: (userData) => ({
				method: "POST",
				url: "/user/register",
				data: userData,
			}),
		}),
		login: builder.mutation({
			query: (credentials) => ({
				method: "POST",
				url: "/auth/login",
				data: credentials,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
			invalidatesTags: ["USER"],
		}),
		userInfo: builder.query({
			query: () => ({
				method: "GET",
				url: "/user/me",
			}),
			providesTags: ["USER"],
		}),
	}),
});

export const {
	useRegistrationMutation,
	useLoginMutation,
	useLogoutMutation,
	useUserInfoQuery,
} = authApi;
