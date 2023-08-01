import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipisController } from './municipis.controller';
import { MunicipisService } from './municipis.service';
import { Municipi } from './municipi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Municipi])],
  controllers: [MunicipisController],
  providers: [MunicipisService],
})
export class MunicipisModule {}
