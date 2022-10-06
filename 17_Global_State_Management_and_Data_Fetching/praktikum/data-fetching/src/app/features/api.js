import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONSTANT from '../utils/constant';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://square-wasp-13.hasura.app/api/rest',
    prepareHeaders: (header) => {
      header.set(...CONSTANT.API_KEY.content_type);
      header.set(...CONSTANT.API_KEY.key);
      return header;
    },
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => {
        return {
          url: '/todos',
        };
      },
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo) => {
        return {
          url: '/todos',
          body: todo,
          method: 'POST',
        };
      },
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/update/${todo.id}`,
        body: todo,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        body: id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
