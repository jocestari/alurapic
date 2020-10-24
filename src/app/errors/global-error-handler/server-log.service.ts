import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';
import { environment } from '../../../environments/environment'

const logUrl = environment.serverLogUrl;


@Injectable({ providedIn: 'root'})
export class ServerLogService {

    constructor(
        private http: HttpClient
    ) { }

    log(serverLog: ServerLog){
       return this.http.post(`${logUrl}/infra/log`, serverLog);
    }

}