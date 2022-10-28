import { Component, DoCheck, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [
    {task: "Minha Nova Task", checked:true},
    {task: "Minha Task 1", checked:false},
  ]
  //criação de uma interface, ideal para comunicação entre metodos.
  constructor() { }

  //esse docheck diz q sempre q esse component tiver alguma reatividade ele vai "trigar" alguma coisa
  ngDoCheck() {
    this.taskList.sort()
    //localStorage só aceita string preciso transformar um array de objetos para string
    localStorage.setItem("list",JSON.stringify(this.taskList))
    //o sort ordena meu array
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

  public setEmitTaskList(event:string){
    console.log(event);
    this.taskList.push({task:event, checked:false})
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("ta vazio? correto mesmo?")
      if(confirm){
        this.deleteItens(index);
      }
    }
  }
}
