import { Controller, Get, Param } from '@nestjs/common';
import { ComarcasService } from './comarcas.service';
import { Comarca } from './comarca.entity';

@Controller('comarcas')
export class ComarcasController {
  constructor(private comarcasService: ComarcasService) {}

  @Get()
  findAll(): Promise<Comarca[]> {
    return this.comarcasService.findAll();
  }
}
