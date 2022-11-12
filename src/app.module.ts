import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './DB/DBConection';

@Module({
  imports: [Connection],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
