import { Column, ObjectID, ObjectIdColumn, Entity } from 'typeorm';

@Entity()
export class RutType {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  label: string;

  @Column()
  active: boolean;
}
