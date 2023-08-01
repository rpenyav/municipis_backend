import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipi } from './municipi.entity';

@Injectable()
export class MunicipisService {
  constructor(
    @InjectRepository(Municipi)
    private municipisRepository: Repository<Municipi>,
  ) {}

  async findAll(): Promise<Municipi[]> {
    return await this.municipisRepository.find({
      relations: [
        'comarca',
        'vegueria',
        'provincia',
        'enllac',
        'imatges',
        'texts',
        'llocsinteres',
      ],
    });
  }

  async findOne(identificador: string): Promise<Municipi> {
    return await this.municipisRepository.findOne({
      where: { identificador },
      relations: [
        'comarca',
        'vegueria',
        'provincia',
        'enllac',
        'imatges',
        'texts',
        'llocsinteres',
      ],
    });
  }
}
