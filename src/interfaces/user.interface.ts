import { Document } from 'mongoose';

export interface User extends Document {
  readonly rut: string;
  readonly rutChilen: string;
  readonly name: string;
  readonly lastName: string;
  readonly phone: number;
  readonly gender: string;
  readonly address: string;
  readonly numberAddress: string;
}
