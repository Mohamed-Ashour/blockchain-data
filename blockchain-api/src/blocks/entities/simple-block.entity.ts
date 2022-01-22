import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SimpleBlock {
  @Field()
  hash: string;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  time: number;
}
