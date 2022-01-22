import { gql } from '@apollo/client';

export const GET_BLOCKS = gql`
  query Blocks($date: DateTime!) {
    blocks(date: $date) {
      hash
      height
      time
    }
  }
`;

export const GET_BLOCK = gql`
  query Block($hash: String!) {
    block(hash: $hash) {
      hash
      height
      time
      size
      block_index
      prev_block
      tx {
        hash
        tx_index
        size
        time
        fee
      }
    }
  }
`;
