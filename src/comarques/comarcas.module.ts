import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComarcasController } from './comarcas.controller';
import { ComarcasService } from './comarcas.service';
import { Comarca } from './comarca.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comarca])],
  controllers: [ComarcasController],
  providers: [ComarcasService],
})
export class ComarcasModule {}
