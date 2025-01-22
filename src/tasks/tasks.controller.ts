import { Controller, Delete, Get, Post, Put, Body, Param} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import { Task } from './interfaces/task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    
    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(task);
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(id);
        console.log(task);
        return "Updating a task";
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting task: ${id}`;
    }

}
