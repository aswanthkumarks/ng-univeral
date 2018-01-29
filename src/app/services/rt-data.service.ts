import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class RtDataService {
  private socket;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.api + '/data', {})
      .map((response: Object, error: Object) => {
        return response['data'];
      });
  }

  doConnect() {
    this.socket = io.connect(environment.socketUrl);
    this.socket.on('USER_CONNECTED', (data) => {
      console.log('Socket connected');
    });
    this.socket.on('NEW_LOG', (data) => {
      console.log('NEW_LOG', data);
    });
  }

}
