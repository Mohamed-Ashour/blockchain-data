import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginCacheControl } from 'apollo-server-core';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: 'schema.gql',
        plugins: [
          ApolloServerPluginCacheControl({
            defaultMaxAge: configService.get<number>('CACHE_MAX_AGE'),
          }),
          responseCachePlugin(),
        ],
      }),
      inject: [ConfigService],
    }),

    BlocksModule,
  ],
})
export class AppModule {}
