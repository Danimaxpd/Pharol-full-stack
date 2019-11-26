import { Column, Entity } from 'typeorm';

@Entity()
export class RutType {
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
}
