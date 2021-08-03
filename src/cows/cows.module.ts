import { Module } from '@nestjs/common';
import { CowsService } from './cows.service';
import { CowsController } from './cows.controller';

@Module({
  controllers: [CowsController],
  providers: [CowsService]
})
export class CowsModule {}
