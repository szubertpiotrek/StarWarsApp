import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-right-button',
  templateUrl: './main-right-button.component.html',
  styleUrls: ['./main-right-button.component.scss']
})
export class MainRightButtonComponent implements OnInit {

  constructor() { }

  @Output() newPage: EventEmitter<number> = new EventEmitter();
  @Output() searchInfo: EventEmitter<boolean> = new EventEmitter();
  @Input() page: number;

  ngOnInit() {

  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    this.page++;
    this.newPage.emit(this.page);
    this.searchInfo.emit(false);
    console.log(this.page);
  }

}
