import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GaanaService {
  topPicks;
  detailArray;
  songName;

  songChange: Subject<string> = new Subject<string>();
  songDetail: Subject<string> = new Subject<string>();
  
  constructor(
    private http: HttpClient
  ) { }

  change(value){
    this.songName = value;
    this.songChange.next(this.songName);
  }

  setDetail(value){
    this.detailArray = value;
    this.songDetail.next(this.detailArray);
  }
  
  getTopPicks(): Observable<any>{
    return this.http.get<any>(environment.topPicks);
  }

  getTopTrending(): Observable<any>{
    return this.http.get<any>(environment.topTrending);
  }

  getTopCharts(): Observable<any> {
    return this.http.get<any>(environment.topCharts);
  }
}
