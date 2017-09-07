import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service'
import { environment } from '../../environments/environment'

@Injectable()
export class ProductsService {

    constructor(private httpService:HttpService) {

    }

    public getItems() {
        return this.httpService.get(environment.anyList);
    }

}