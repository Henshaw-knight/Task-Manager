import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';
import { taskDTO } from './dto/task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    @ApiOperation({ summary: "Add a new Task"})
    @ApiResponse({
        status: 201,
        description: "Task created successfully",
        type: taskDTO
    })
    createTask(@Body() taskPayload: taskDTO) {
        return this.tasksService.create(taskPayload)
    }

    @Get()
    @ApiOperation({ summary: "Get all tasks"})
    getTasks() {
        return this.tasksService.findAllTask();
    }

    @Get(':id')
    @ApiOperation({ summary: "Get a single task by its id"})
    getATask(@Param('id') id:string) {
        return this.tasksService.findSingleTask(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: "Update (make changes to) a task"})
    updateATask(@Param('id') id:string, @Body() updatedPayload: Task) {
        return this.tasksService.updateTask(id, updatedPayload);
    }

    @Delete(':id')
    @ApiOperation({ summary: "Delete a task"})
    deleteATask(@Param('id') id:string) {
        return this.tasksService.removeTask(id);
    }
}
