import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_comarques')
export class Comarca {
  @PrimaryGeneratedColumn()
  idcomarca: number;

  @Column()
  nom: string;

  @Column()
  idprovincia: number;

  @Column()
  idvegueria: number;

  @OneToMany(() => Municipi, (municipi) => municipi.comarca)
  municipis: Municipi[];
}
