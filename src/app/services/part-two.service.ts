import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class PartTwoService extends DataService {

  constructor(http: Http) {
    //super('http://localhost:8000/api/product', http);
    super('https://api.github.com/users/zubinkadva/followers', http);
   }

}

