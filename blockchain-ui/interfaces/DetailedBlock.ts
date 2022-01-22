import { SimpleBlock } from './SimpleBlock';

interface Transaction {
  hash: string;
  tx_index: number;
  size: number;
  time: number;
  fee: number;
}

export interface DetailedBlock extends SimpleBlock {
  size: number;
  block_index: number;
  prev_block: string;
  tx: Transaction[];
}
