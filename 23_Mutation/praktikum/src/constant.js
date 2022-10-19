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

export const ADD_PASSENGER = gql`
  mutation MyMutation($nama: String!, $umur: Int!, $jenisKelamin: String!) {
    insert_passenger(
      objects: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }
    ) {
      returning {
        id
        nama
        umur
        jenisKelamin
      }
    }
  }
`;
export const UPDATE_PASSENGER = gql`
  mutation MyMutation(
    $id: Int!
    $jenisKelamin: String!
    $nama: String!
    $umur: Int!
  ) {
    update_passenger_by_pk(
      _set: { jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur }
      pk_columns: { id: $id }
    ) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;
export const DELETE_PASSENGER = gql`
  mutation MyMutation($id: Int!) {
    delete_passenger_by_pk(id: $id) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;
