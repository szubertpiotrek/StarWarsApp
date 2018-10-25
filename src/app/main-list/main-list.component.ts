import {Component, EventEmitter, HostListener, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {PlanetsService} from "../planets.service";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnChanges {

  public planets = [];
  @Input() searchInfo: boolean;
  @Input() limit: number;
  @Input() page: number;
  @Input() search: string;
  @Output() newPlanets: object;

  public limits: number = 0;
  public countPlanets: number;
  public maxPagesPlanets: number = 1;
  public countSearchPlanets: number;
  public maxPagesSearchPlanets: number = 1;

  constructor(private planetsService: PlanetsService) { }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.planets);
    if((this.planets.length===0 || (this.limits !== this.limit)) && this.search===undefined){
      console.log(this.planets);
      this.planets=[];
      console.log(this.limit, this.maxPagesPlanets);
      this.planetsService.getPlanets(this.limit,1,this.maxPagesPlanets)
        .subscribe(data =>
        {
          console.log(data);
          data.forEach((el) => {
            this.countPlanets = el.count;
            this.maxPagesPlanets=Math.ceil(this.countPlanets/10);
            el.results.forEach((el)=>{
              this.planets = [...this.planets,el]
            })
          })
        });
      this.limits = this.limit;

    }else if(this.search===undefined){
      if((this.limit*this.page > this.planets.length) && (this.countPlanets>=this.planets.length)){
        console.log(this.countPlanets, this.planets.length);
        this.planetsService.getPlanets(this.limit,this.page,this.maxPagesPlanets)
          .subscribe(data =>
          {
            console.log(data);
            data.forEach((el) => {

              el.results.forEach((el)=>{
                this.planets = [...this.planets,el]
              })
            })
          });

      }

    }else if ( (this.limits !== this.limit || this.search!==undefined) && this.searchInfo===true) {
      console.log(this.searchInfo);
      this.planets = [];
      this.planetsService.searchPlanets(this.limit, 1, this.search, this.maxPagesSearchPlanets)
        .subscribe(data => {
          console.log(data);
          data.forEach((el) => {
            this.countSearchPlanets = el.count;
            console.log(Math.ceil(this.countSearchPlanets/10));
            this.maxPagesSearchPlanets=Math.ceil(this.countSearchPlanets/10);
            el.results.forEach((el) => {
              this.planets = [...this.planets, el]
            })
          })
        });
      this.searchInfo=false;
      this.limits = this.limit;

    }else if(this.search!==undefined){
      console.log(this.search);
      console.log(this.limit, this.page, this.search);
      if (this.limit * this.page > this.planets.length && (this.countSearchPlanets>=this.planets.length)) {
        this.planetsService.searchPlanets(this.limit, this.page, this.search, this.maxPagesSearchPlanets)
          .subscribe(data => {
            data.forEach((el) => {

              el.results.forEach((el) => {
                this.planets = [...this.planets, el]
              })
            })
          });
      }
    }
  }

}
