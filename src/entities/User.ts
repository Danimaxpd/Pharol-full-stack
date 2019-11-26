import { Column, Entity } from 'typeorm';
import { RutType } from './RutType';

@Entity()
export class User {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @Column('string', {
    nullable: false,
    primary: true,
    name: 'dni',
  })
  dni: string;

  @Column('text', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: false,
    name: 'last_name',
  })
  lastName: string;

  @Column('number', {
    nullable: false,
    name: 'phone',
  })
  phone: number;

  @Column('text', {
    nullable: true,
    name: 'gender',
  })
  gender: string;

  @Column('text', {
    nullable: true,
    name: 'address',
  })
  address: string;

  @Column('text', {
    nullable: true,
    name: 'number_address',
  })
  numberAddress: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column(type => RutType)
  rutType: RutType;
}
