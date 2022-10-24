import { Component,EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();
  //com o output ele chama o metodo externo para passar um informação

  public addItemTaskList: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    console.log(this.addItemTaskList);
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emmitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList="";
    }
    // nesse metodo acima ele adiciona um item a lista qnd aperto o enter e nao deixa eu8 adicionar somente um
    //espaço na lista com o trimm, q remove todos os espaços na frente a atras.
  }

}
