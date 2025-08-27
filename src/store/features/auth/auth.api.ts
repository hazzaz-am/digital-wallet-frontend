import { baseApi } from "@/store/baseApi";
import type { UserProfile } from "@/types";

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
		updateUserInfo: builder.mutation({
			query: ({
				id,
				updatedData,
			}: {
				id: string;
				updatedData: Partial<UserProfile>;
			}) => ({
				method: "PATCH",
				url: `/user/${id}`,
				data: updatedData,
			}),
			invalidatesTags: ["USER"],
		}),
		getAllUsers: builder.query({
			query: (params) => ({
				method: "GET",
				url: "/user/all-users",
				params,
			}),
			providesTags: ["USER"],
		}),
		getUserById: builder.query({
			query: (id) => ({
				method: "GET",
				url: `/user/${id}`,
			}),
			providesTags: ["USER"],
		}),
		changePassword: builder.mutation({
			query: (data) => ({
				method: "POST",
				url: "/auth/reset-password",
				data,
			}),
			invalidatesTags: ["USER"],
		}),
	}),
});

export const {
	useRegistrationMutation,
	useLoginMutation,
	useLogoutMutation,
	useUserInfoQuery,
	useUpdateUserInfoMutation,
	useChangePasswordMutation,
	useGetAllUsersQuery,
	useGetUserByIdQuery
} = authApi;
