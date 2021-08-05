import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todos.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument> ){}
  
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto)
    return createdTodo.save()
  }

  findAll() {
    return this.todoModel.find();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    console.log({updateTodoDto, return: this.todoModel.findOneAndUpdate({id}, updateTodoDto, {
      new: true
    })})
     return this.todoModel.findByIdAndUpdate(id, updateTodoDto);
  }

  remove(id: string) {
    return this.todoModel.findByIdAndRemove(id);
  }
}
