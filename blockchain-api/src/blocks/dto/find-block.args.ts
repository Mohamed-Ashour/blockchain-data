import { ArgsType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@ArgsType()
export class FindBlockArgs {
  @Field()
  @Length(64, 64)
  hash: string;
}
