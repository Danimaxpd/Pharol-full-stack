import { Column, Entity, OneToMany } from 'typeorm';
import { User } from './User';

@Entity('rut_type')
export class rutType {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @Column('text', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: false,
    name: 'label',
  })
  label: string;

  @Column('boolean', {
    nullable: false,
    name: 'active',
  })
  active: boolean;

  @OneToMany(() => User,(User: User) => User.rutTypes)
  User: User[];
}
