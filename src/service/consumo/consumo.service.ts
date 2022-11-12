import { PagoService } from './../pago/pago.service';
import { ConsumoModel } from './../../models/Consumo.model';
import { ConsumoEntity } from './../../Entity/Consumo.Entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConsumoService {
    constructor(@InjectRepository(ConsumoEntity)
                 private consumoRepository: Repository<ConsumoEntity>,
                 private pagoservice:PagoService){}

    async create(consumo: ConsumoModel){
        const date= new Date();
        let total=0;
        total= consumo.consumo*20;
        const newconsumo = await this.consumoRepository.save({
            fecha: date,
            consumo:consumo.consumo,
            idCliente:consumo.idCliente,
        }).then(
            (res) => this.pagoservice.create_pago(res.id , total).then((res)=> console.log(res)).catch((error) => console.log(error))
        )
        .catch((error) => console.log(error))
    //registro del pago
    
    }
    
    getall(){
        return this.consumoRepository.find({
            relations:['idCliente','pago.idConsumo']
        })
    }
}
