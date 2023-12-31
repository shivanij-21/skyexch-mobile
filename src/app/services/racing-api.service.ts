import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class RacingApiService {

  private baseUrl: string;
  private raceUrl: string;


  constructor(private httpClient: HttpClient, private main: MainService) {
    this.main.apis2$.subscribe((res) => {
      if (res) {
        this.baseUrl = res.ip;
        this.raceUrl = res.racingApi;
      }
    })
  }

  listHorseRaces() {
    return this.httpClient.get(`${this.baseUrl}/listHorseRaces`);
  }

  listGreyhoundRaces() {
    return this.httpClient.get(`${this.baseUrl}/listGreyhoundRaces`);
  }

  listMeetings(day, eventTypeId) {
    return this.httpClient.get(`${this.raceUrl}/listMeetings/${day}/${eventTypeId}`);
  }
  // listMeetingsTomorrow(eventTypeId) {
  //   return this.httpClient.get(`${this.raceUrl}/listMeetings/tomorrow/${eventTypeId}`);
  // }


  marketDescription(marketId: string) {
    return this.httpClient.get(`${this.raceUrl}/marketDescription/${marketId}`);
  }



}
