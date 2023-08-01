import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_llocsinteres_municipis')
export class LlocInteres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificador: string;

  @Column()
  titol: string;

  @Column({ type: 'text' })
  text: string;

  @Column()
  fotografia1: string;

  @Column()
  fotografia2: string;

  @Column()
  fotografia3: string;

  @ManyToOne(() => Municipi, (municipi) => municipi.llocsinteres)
  @JoinColumn({ name: 'identificador', referencedColumnName: 'identificador' })
  municipi: Municipi;
}
