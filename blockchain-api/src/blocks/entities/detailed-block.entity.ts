import { Field, Int, ObjectType } from '@nestjs/graphql';

import { SimpleBlock } from './simple-block.entity';

@ObjectType()
class Transaction {
  @Field()
  hash: string;

  @Field()
  tx_index: number;

  @Field(() => Int)
  size: number;

  @Field(() => Int)
  time: number;

  @Field(() => Int)
  fee: number;
}

@ObjectType()
export class DetailedBlock extends SimpleBlock {
  @Field(() => Int)
  size: number;

  @Field(() => Int)
  block_index: number;

  @Field()
  prev_block: string;

  @Field(() => [Transaction])
  tx: Transaction[];
}
