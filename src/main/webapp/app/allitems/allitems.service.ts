import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ItemsService {

    constructor(private http: Http) { }

    public getItems(): any[] {
        return [
            {
                title: 'samsung'
            },
            {
                title: 'iphone'
            }
        ]
    }

}
