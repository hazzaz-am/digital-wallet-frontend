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
	}),
});

export const { useRegistrationMutation, useLoginMutation } = authApi;
