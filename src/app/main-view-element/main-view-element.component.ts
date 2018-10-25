import { Component, OnInit } from '@angular/core';
import {PlanetsService} from "../planets.service";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-main-view-element',
  templateUrl: './main-view-element.component.html',
  styleUrls: ['./main-view-element.component.scss']
})
export class MainViewElementComponent implements OnInit {

  public planet: any = {
    name:"",
    gravity:"",
    terrain:"",
    diameter:"",
    climate:"",
    rotation_period:""
  };
  public id: number;

  constructor(private planetsService: PlanetsService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.number;
    });
    this.planetsService.getPlanetInfo(this.id)
      .subscribe(data => {
        this.planet=data;
        console.log(data);
      })
  }


}
