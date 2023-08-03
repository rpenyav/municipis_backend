import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comarca } from './comarca.entity';

@Injectable()
export class ComarcasService {
  constructor(
    @InjectRepository(Comarca)
    private comarcasRepository: Repository<Comarca>,
  ) {}

  async findAll(): Promise<Comarca[]> {
    return await this.comarcasRepository.find();
  }
}
