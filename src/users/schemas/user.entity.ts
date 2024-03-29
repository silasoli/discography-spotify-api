import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import Role from '../../roles/enums/role.enum';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id?: mongoose.ObjectId | string;

  @Prop({ required: true, unique: true, lowercase: true })
  username: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ type: mongoose.Schema.Types.Array })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
