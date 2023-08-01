import { Controller, Get, Param } from '@nestjs/common';
import { MunicipisService } from './municipis.service';
import { Municipi } from './municipi.entity';

@Controller('municipis')
export class MunicipisController {
  constructor(private municipisService: MunicipisService) {}

  @Get()
  findAll(): Promise<Municipi[]> {
    return this.municipisService.findAll();
  }

  @Get(':identificador')
  findOne(@Param('identificador') identificador: string): Promise<Municipi> {
    return this.municipisService.findOne(identificador);
  }
}
