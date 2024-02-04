import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ArtistDocument = Artist & Document;

@Schema({ timestamps: true })
export class Artist {
  _id?: mongoose.ObjectId | string;

  @Prop({ required: true, unique: true, lowercase: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true })
  spotify_id: string;

  @Prop({ required: true, unique: true, lowercase: true })
  uri: string;

  @Prop({ type: mongoose.Schema.Types.Array })
  spotify_albums_ids: string[];
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
