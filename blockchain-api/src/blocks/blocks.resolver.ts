import { Resolver, Query, Args } from '@nestjs/graphql';

import { BlocksService } from './blocks.service';
import { FindDayBlocksArgs } from './dto/find-day-blocks.args';
import { FindBlockArgs } from './dto/find-block.args';
import { DetailedBlock } from './entities/detailed-block.entity';
import { SimpleBlock } from './entities/simple-block.entity';

@Resolver()
export class BlocksResolver {
  constructor(private readonly blockService: BlocksService) {}

  @Query(() => [SimpleBlock], { name: 'blocks' })
  findAllByDate(@Args() findDayBlocksArgs: FindDayBlocksArgs) {
    return this.blockService.findAllByDate(findDayBlocksArgs.date);
  }

  @Query(() => DetailedBlock, { name: 'block' })
  findOne(@Args() findBlockArgs: FindBlockArgs) {
    return this.blockService.findOne(findBlockArgs.hash);
  }
}
