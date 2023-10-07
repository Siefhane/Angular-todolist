import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @Input() initialItems:any;
  @Output() delete =new EventEmitter();
  @Output() save =new EventEmitter();

  deleteTask(id:number){
    this.delete.emit(id)
}
}
