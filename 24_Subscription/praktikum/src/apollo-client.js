import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'https://climbing-titmouse-96.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret':
      'uqoFL8SgGhaHh5SwHnraQvh84s66tRGn7GyOnd6Cw4SvDXu67DHBY06nn7FMmUrO',
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://climbing-titmouse-96.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'uqoFL8SgGhaHh5SwHnraQvh84s66tRGn7GyOnd6Cw4SvDXu67DHBY06nn7FMmUrO',
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
