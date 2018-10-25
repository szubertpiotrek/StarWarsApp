import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-left-button',
  templateUrl: './main-left-button.component.html',
  styleUrls: ['./main-left-button.component.scss']
})
export class MainLeftButtonComponent implements OnInit {

  constructor() { }

  @Output() newPage: EventEmitter<number> = new EventEmitter();
  @Input() page: number;

  ngOnInit() {

  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    if(this.page>1){
      this.page--;
      this.newPage.emit(this.page);
      console.log(this.page);
    }
  }

}
