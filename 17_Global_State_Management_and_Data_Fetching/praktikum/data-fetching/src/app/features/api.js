import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const config = {
  'content-type': 'application/json',
  'x-hasura-admin-secret':
    'B1QdRK5AvN5WANqsYVgI4Ubhx5r5QIpsStXAxsLAZj43VzOUKkx8KNNVMfSGsl3Z',
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://square-wasp-13.hasura.app/api/rest',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => {
        return {
          url: '/todos',
          headers: config,
        };
      },
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo) => {
        return {
          url: '/todos',
          headers: config,
          body: todo,
          method: 'POST',
        };
      },
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/update/${todo.id}`,
        headers: config,
        body: todo,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        headers: config,
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
