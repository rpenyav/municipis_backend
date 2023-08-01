import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Municipi } from '../municipis/municipi.entity';

@Entity('municipis_enllasos_municipis')
export class Enllac {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificador: string;

  @Column()
  titol: string;

  @Column()
  text: string;

  @Column()
  url: string;

  @ManyToOne(() => Municipi, (municipi) => municipi.enllac)
  @JoinColumn({ name: 'identificador', referencedColumnName: 'identificador' })
  municipi: Municipi;
}
