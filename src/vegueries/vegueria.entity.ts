import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_vegueries')
export class Vegueria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  // relation to Municipi
  @OneToMany(() => Municipi, (municipi) => municipi.vegueria)
  municipis: Municipi[];
}
