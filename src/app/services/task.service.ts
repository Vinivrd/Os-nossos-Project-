import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []

  constructor() { }

  public getTasks() : Task[] {
    return this.tasks;
  }

  public addTask(){

  }

  public delTask(){

  }

  public updateTask(){
    
  }

}

interface Task {
  nome: string;
  desc:string;
  date: Date;
  done?: boolean;
}