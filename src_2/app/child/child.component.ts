import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() public myEvent = new EventEmitter();

  public sendEvent(){
    this.myEvent.emit("Hello From Child");
  }

  @Input() public messageFromParent : any

}
