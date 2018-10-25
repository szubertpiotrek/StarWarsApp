import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title = 'StarWarsApp';
  public page: number = 1;
  public limit: number = 5;
  public search: string;
  public searchInfos: number;
  public planets: object;

  nextPages(nextUrl: number){
    console.log(nextUrl);
    this.page=nextUrl;
  }

  prevPages(prevUrl: number){
    this.page=prevUrl;
  }

  newLimits(limit: number){
    console.log(limit);
    this.limit=limit;
  }

  searching(search: string){
    console.log(search);
    this.search=search;
  }

  searchInfo(searchInfo: number){
    console.log(searchInfo);
    this.searchInfos=searchInfo;
  }

  getPlanets(planets: object){
    console.log(planets);
    this.planets= planets;
  }

}
