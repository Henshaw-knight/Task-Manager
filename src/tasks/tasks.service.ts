import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel('Task') private taskModel: Model<Task>
    ) {}

    async create(data): Promise<Task> {
        const createdTask = new this.taskModel(data);
        return await createdTask.save();
    }

    async findAllTask(): Promise<Task[]> {
        return await this.taskModel.find().exec();
    }

    async findSingleTask(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id).exec();
        if (!task) {
            throw new HttpException(`No task with such id ${id} exists`, 404);
        }
        return task;    
    }

    async updateTask(id: string, updateData) {
        const updatedTask = await this.taskModel.findByIdAndUpdate(
            id, updateData, {new: true}
        ).exec();

        if (!updatedTask) {
            throw new HttpException(`Task with id ${id} not found`, 404);
        }

        return updatedTask;
    }

    async removeTask(id:string) {
        const taskToDelete = await this.taskModel.findByIdAndDelete(id).exec();
        if (!taskToDelete) {
            throw new HttpException(`Task with id ${id} not found`, 404);
        }
        return 'Deleted successfully';
    }
}
