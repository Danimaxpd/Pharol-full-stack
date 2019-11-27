import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  rut: String,
  rutChilen: String,
  name: String,
  lastName: String,
  phone: Number,
  gender: String,
  address: String,
  numberAddress: String,
});
