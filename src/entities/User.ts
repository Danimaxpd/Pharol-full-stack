import { Column, ObjectID, ObjectIdColumn, Entity } from 'typeorm';
import { RutType } from './RutType';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  dni: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  phone: number;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  numberAddress: string;

  @Column(type => RutType)
  rutType: RutType;
}
