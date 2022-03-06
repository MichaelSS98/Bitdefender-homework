import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private httpClient: HttpClient) { }

  getInformationFromApi(url: string) {
      return this.httpClient.get(url);
  }
}