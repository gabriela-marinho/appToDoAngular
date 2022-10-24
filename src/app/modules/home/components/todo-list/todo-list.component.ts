import { Component, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "Minha Nova Task", checked:true},
    {task: "Minha Task 1", checked:false},
  ]
  //criação de uma interface, ideal para comunicação entre metodos.
  constructor() { }

  ngOnInit(): void {
  }

  public deleteItens(event:number){
    this.taskList.splice(event, 1);

  }

  public deleteAll(){
    const confirm = window.confirm("Certeza?")
    if(confirm){
      this.taskList = [];
    }

  }
}
