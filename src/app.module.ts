import { Module } from '@nestjs/common';
import { Connection } from './DB/DBConection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagoModule } from './Api/pago/pagoa.module';
import { ClienteModule } from './Api/cliente/cliente.module';
import { ConsumoModule } from './Api/consumo/consumo.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env': '.env.local'
  }), Connection, ClienteModule, ConsumoModule, PagoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
