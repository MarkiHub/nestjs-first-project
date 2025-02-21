import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);