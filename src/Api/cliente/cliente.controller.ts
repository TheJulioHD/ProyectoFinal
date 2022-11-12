import { ClienteModel } from './../../models/Cliente.model';
import { ClienteServiceService } from './../../service/cliente-service/cliente-service.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteServiceService){}

    @Post()
    Create(@Body()params:ClienteModel){
        try {
            this.clienteService.create(params).then((res) =>console.log(res))
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Post("/create")
    Create2(@Body()params:ClienteModel){
        try {
            this.clienteService.create(params).then((res) =>console.log(res))
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Get()
    Getall(){
        try {
            return this.clienteService.getall()
        } catch (error) {
            console.log(error)
        }
    }
}
