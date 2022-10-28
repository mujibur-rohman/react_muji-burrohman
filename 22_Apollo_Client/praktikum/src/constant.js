import { gql } from '@apollo/client';

export const ALL_PASSENGERS = gql`
  query MyQuery {
    passenger {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

export const PASSENGERS_BY_ID = gql`
  query MyQuery($id: Int!) {
    passenger(where: { id: { _eq: $id } }) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;
