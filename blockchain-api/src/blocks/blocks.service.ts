import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { DetailedBlock } from './entities/detailed-block.entity';
import { SimpleBlock } from './entities/simple-block.entity';

@Injectable()
export class BlocksService {
  constructor(private httpService: HttpService) {}

  findAllByDate(date: Date): Observable<SimpleBlock[]> {
    const dateInMS = date.getTime();

    return this.httpService
      .get(`blocks/${dateInMS}?format=json`)
      .pipe(map((res) => res.data));
  }

  findOne(hash: string): Observable<DetailedBlock> {
    return this.httpService
      .get(`rawblock/${hash}`)
      .pipe(map((res) => res.data));
  }
}
