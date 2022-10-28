import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://climbing-titmouse-96.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret':
      'uqoFL8SgGhaHh5SwHnraQvh84s66tRGn7GyOnd6Cw4SvDXu67DHBY06nn7FMmUrO',
  },
});

export default client;
