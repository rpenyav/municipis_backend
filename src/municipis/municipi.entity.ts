import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Comarca } from '../comarques/comarca.entity';
import { Vegueria } from 'src/vegueries/vegueria.entity';
import { Provincia } from 'src/provincies/provincia.entity';
import { Enllac } from 'src/enllacos/enllac.entity';
import { Imatge } from 'src/imatges/imatge.entity';
import { TextMunicipi } from 'src/textos/textmunicipi.entity';
import { LlocInteres } from 'src/llocsinteres/llocinteres.entity';

@Entity('municipis_municipis')
export class Municipi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idcomarca: number;

  @Column()
  idprovincia: number;

  @Column()
  idvegueria: number;

  @Column()
  ordenacioalfa: string;

  @Column()
  nomcompletens: string;

  @Column()
  adresa: string;

  @Column()
  codipostal: string;

  @Column()
  telefon: string;

  @Column()
  fax: string;

  @Column()
  nom: string;

  @Column()
  identificador: string;

  @Column()
  cif: string;

  @Column()
  cmun: string;

  @Column()
  digitcontrol: string;

  @Column()
  comparador: string;

  @Column()
  latitud: string;

  @Column()
  longitud: string;

  @Column()
  altitud: string;

  @Column()
  habitants: number;

  @Column()
  homes: number;

  @Column()
  dones: number;

  @Column()
  posicio_mapa: string;

  @Column()
  escut: string;

  @Column()
  fotografia_loc: string;

  @Column()
  emd: string;

  @Column()
  identificador_emd: string;

  @Column()
  email: string;

  @Column()
  m_youtube: string;

  @Column()
  m_facebook: string;

  @Column()
  m_twitter: string;

  @Column()
  m_gplus: string;

  @Column()
  m_instagram: string;

  @Column()
  fotoplano: string;

  @Column()
  deenei: string;

  @ManyToOne(() => Comarca, (comarca) => comarca.municipis)
  @JoinColumn({ name: 'idcomarca' })
  comarca: Comarca;

  @ManyToOne(() => Vegueria, (vegueria) => vegueria.municipis)
  @JoinColumn({ name: 'idvegueria' })
  vegueria: Vegueria;

  @ManyToOne(() => Provincia, (provincia) => provincia.municipis)
  @JoinColumn({ name: 'idprovincia' })
  provincia: Provincia;

  @OneToMany(() => Enllac, (enllac) => enllac.municipi)
  enllac: Enllac[];

  @OneToMany(() => Imatge, (imatge) => imatge.municipi)
  imatges: Imatge[];

  @OneToMany(() => TextMunicipi, (textMunicipi) => textMunicipi.municipi)
  texts: TextMunicipi[];

  @OneToMany(() => LlocInteres, (llocInteres) => llocInteres.municipi)
  llocsinteres: LlocInteres[];
}
