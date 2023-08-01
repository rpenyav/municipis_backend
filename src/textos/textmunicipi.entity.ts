import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_text_municipis')
export class TextMunicipi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificador: string;

  @Column()
  titol: string;

  @Column()
  text: string;

  @Column()
  fotografia1: string;

  @Column()
  fotografia2: string;

  @Column()
  fotografia3: string;

  @ManyToOne(() => Municipi, (municipi) => municipi.texts)
  @JoinColumn({ name: 'identificador', referencedColumnName: 'identificador' })
  municipi: Municipi;
}
