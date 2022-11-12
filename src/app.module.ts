import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './DB/DBConection';
import { ClienteModule } from './api/cliente/cliente.module';
import { ConsumoModule } from './api/consumo/consumo.module';
import { PagoModule } from './Api/pago/pagoa.module';

@Module({
  imports: [Connection, ClienteModule, ConsumoModule, PagoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
