import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  completed: boolean;

  @Prop({ required: true })
  time_created: string;

  @Prop()
  time_completed: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
