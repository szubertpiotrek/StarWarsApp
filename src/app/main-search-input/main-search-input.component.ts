import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-main-search-input',
  templateUrl: './main-search-input.component.html',
  styleUrls: ['./main-search-input.component.scss']
})
export class MainSearchInputComponent implements OnInit {

  public text: string;


  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() newPage: EventEmitter<number> = new EventEmitter();
  @Output() searchInfo: EventEmitter<boolean> = new EventEmitter();
  @Output() newLimit: EventEmitter<number> = new EventEmitter();

  @Input() page: number;

  @ViewChild('form') public form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(text) {
    if (this.form.valid) {
      this.search.emit(text);
      this.page=1;
      this.newPage.emit(this.page);
      this.searchInfo.emit(true);
      this.newLimit.emit(5);
      this.form.reset();
    }
  }

}
