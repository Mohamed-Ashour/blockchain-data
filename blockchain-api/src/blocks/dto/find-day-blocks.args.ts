import { ArgsType, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';

@ArgsType()
export class FindDayBlocksArgs {
  @Field()
  @IsDate()
  date: Date;
}
