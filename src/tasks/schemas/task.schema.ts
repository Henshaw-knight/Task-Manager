import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    @Prop( {required: true} )
    title: string;

    @Prop()
    description: string;

    @Prop()
    allocatedHours: number;

    @Prop( {default: 'pending'} )
    status: string; // 'pending', 'in-progress', 'completed'
}

export const TaskSchema = SchemaFactory.createForClass(Task);