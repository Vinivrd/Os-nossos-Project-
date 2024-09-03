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

  public addTask(nome:string,desc:string,date:string){
    //data chega desse modelo: 1923-21-13  
    date = date.replace("-","/");
    let task: Task = {nome:nome, desc:desc, date: new Date(date),done:false}
    this.tasks.push(task);
    console.log(this.tasks);
  }

  public delTask(index:number){
    this.tasks.splice(index, 1);
  }

  public updateTask(index:number, nome:string,desc:string,date:string){
    let task:Task = this.tasks[index];
    task.nome = nome;
    task.desc = desc;
    date = date.replace("-","/");
    task.date = new Date(date);
    this.tasks.splice(index, 1,task);
  }

}

interface Task {
  nome: string;
  desc:string;
  date: Date;
  done?: boolean;
}