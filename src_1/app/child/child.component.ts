import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() public myMessage = new EventEmitter();

  public sendMessage(value : any){
    this.myMessage.emit(value);
  }

}
