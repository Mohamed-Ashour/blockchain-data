import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { BlocksService } from './blocks.service';
import { BlocksResolver } from './blocks.resolver';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>('BLOCKCHAIN_API_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [BlocksService, BlocksResolver],
})
export class BlocksModule {}
