import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_imatges')
export class Imatge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificador: string;

  @Column()
  title: string;

  @Column()
  fotografia: string;

  @ManyToOne(() => Municipi, (municipi) => municipi.imatges)
  @JoinColumn({ name: 'identificador', referencedColumnName: 'identificador' })
  municipi: Municipi;
}
