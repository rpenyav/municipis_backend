import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_provincies')
export class Provincia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  // relation to Municipi
  @OneToMany(() => Municipi, (municipi) => municipi.provincia)
  municipis: Municipi[];
}
