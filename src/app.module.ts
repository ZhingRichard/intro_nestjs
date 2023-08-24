import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhabModule } from './phab/phab.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PhabModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
