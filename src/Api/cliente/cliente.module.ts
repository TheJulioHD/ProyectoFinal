import { ClienteEntity } from './../../Entity/Cliente.Entity';
import { ClienteServiceService } from './../../service/cliente-service/cliente-service.service';
import { ClienteController } from './cliente.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteEntity])],
    controllers: [ClienteController],
    providers: [ ClienteServiceService],
    exports:[TypeOrmModule]
})
export class ClienteModule {}
