import { ConsumoModel } from './../../models/Consumo.model';
import { ConsumoService } from './../../service/consumo/consumo.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoservice: ConsumoService){}
    
    @Post()
    Create(@Body()params:ConsumoModel){
        try {
            this.consumoservice.create(params).then((res) =>console.log(res))
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Get()
    Getall(){
        return this.consumoservice.getall().catch((err) => console.log(err))
    }
}
