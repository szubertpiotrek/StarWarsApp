import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Planets} from "./planets";
import {forkJoin} from 'rxjs';


@Injectable()
export class PlanetsService {

  private planetsUrl = 'https://swapi.co/api/planets/';
  private maxPlanets: number =1;
  private maxSearchPlanets: number=1;
  private search: string;
  private limitPlanets: number;
  private limitSearchPlanets: number;
  private lastPage: number  = 0;
  private currentPage: number;
  private lastSearchPage: number;
  private currentSearchPage: number;
  private planetsListPage: number;

  constructor(private http: HttpClient) { }

  getPlanets(limit:number, page:number, maxPage:number): Observable<Planets[]>
  {

    let arr = [];
    if(this.limitPlanets!==limit || page===1){
      this.limitPlanets=limit;
      this.maxPlanets=1;
      this.lastPage=0;
    }

    this.currentPage = Math.round(limit/10)*page;
    for(let i=this.lastPage+1;i<=this.currentPage;i++){
      if(this.maxPlanets<=maxPage){
        console.log(i);
        this.maxPlanets++;
        console.log(this.maxPlanets, this.http.get<Planets>(this.planetsUrl + `?page=${i}`));
        arr=[...arr,this.http.get<Planets>(this.planetsUrl + `?page=${i}`)];
      }

    }
    this.lastPage=this.currentPage;
    return forkJoin(...arr);
  }

  searchPlanets(limit:number, page:number, search: string, maxPage:number): Observable<Planets[]>
  {

    let arr = [];
    if(this.limitSearchPlanets!==limit){
      this.limitSearchPlanets=limit;
      this.maxSearchPlanets=1;
    }

    if(this.search!==search){
      this.maxSearchPlanets=1;
      this.search=search;
      this.lastSearchPage=0;
    }
    this.currentSearchPage= Math.round(limit/10)*page;
    for(let i=this.lastSearchPage+1;i<=this.currentSearchPage;i++){
      console.log(i,maxPage);
      if(this.maxSearchPlanets<=maxPage){
        this.maxSearchPlanets++;
        arr=[...arr,this.http.get<Planets>(this.planetsUrl + `?page=${i}&search=${search}`)];
      }
    }
    this.lastSearchPage=this.currentSearchPage;
    return forkJoin(...arr);
  }

  getPlanetInfo(numberPlanet: number){
    return this.http.get<Planets>(this.planetsUrl + `${numberPlanet}`);
  }
}
