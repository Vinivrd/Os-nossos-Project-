import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public addTask(nome: string, desc: string, date: string): void {
    const formattedDate = this.formatDate(date);
    const task: Task = { nome, desc, date: new Date(formattedDate), done: false };
    this.tasks.push(task);
    console.log(this.tasks);
  }

  public delTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  public updateTask(index: number, nome: string, desc: string, date: string): void {
    const formattedDate = this.formatDate(date);
    const task: Task = this.tasks[index];
    task.nome = nome;
    task.desc = desc;
    task.date = new Date(formattedDate);
    this.tasks.splice(index, 1, task);
  }

  private formatDate(date: string): string {
    // Transform date from YYYY-MM-DD to MM/DD/YYYY
    return date.replace(/-/g, '/');
  }
}

interface Task {
  nome: string;
  desc: string;
  date: Date;
  done?: boolean;
}
