import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NgForm, NgModel, NgSelectOption} from "@angular/forms";

@Component({
  selector: 'app-main-show-elements',
  templateUrl: './main-show-elements.component.html',
  styleUrls: ['./main-show-elements.component.scss']
})
export class MainShowElementsComponent implements OnChanges {

  @Output() limit: EventEmitter<number> = new EventEmitter();
  @Output() newPage: EventEmitter<number> = new EventEmitter();
  @Input() newLimit: number;
  public option: number = 5;

  @ViewChild('selectModel') private selectModel: NgModel;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.newLimit===5){
      this.selectModel.reset(5);
    }
  }

  @HostListener('change', ['$event.target'])
  onChange(select) {
    this.limit.emit(select.value);
    this.newPage.emit(1);
  }

}
