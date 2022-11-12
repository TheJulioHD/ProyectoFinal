import { PagoEntity } from './../../Entity/Pago.Entity';
import { PagoService } from './../../service/pago/pago.service';
import { ConsumoService } from './../../service/consumo/consumo.service';
import { ConsumoController } from './consumo.controller';
import { ConsumoEntity } from './../../Entity/Consumo.Entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ConsumoEntity, PagoEntity])],
    controllers: [ConsumoController],
    providers: [ ConsumoService, PagoService],
    exports:[TypeOrmModule]
})
export class ConsumoModule {}
