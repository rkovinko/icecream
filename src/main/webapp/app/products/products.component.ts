import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { ProductsService } from './products.service';
import { Account } from '../shared';

@Component({
    selector: 'jhi-all-items',
    templateUrl: './products.component.html',
    styleUrls: [
        'products.scss'
    ]
})

export class ProductsComponent implements OnInit {
    account: Account;
    items: any[];
    constructor(
        private eventManager: JhiEventManager,
        private itemsService: ProductsService
    ) {
        itemsService.getItems().subscribe(data => {
            console.log(data);
        });

    }

    ngOnInit() {
        console.log('all items')
    }
}
