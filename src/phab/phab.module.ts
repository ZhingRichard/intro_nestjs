import { Module } from '@nestjs/common';
import { PhabService } from './phab.service';
import { PhabController } from './phab.controller';


@Module({
  providers: [PhabService],
  controllers: [PhabController]
})
export class PhabModule {}
