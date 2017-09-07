import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { ItemsService } from './allitems.service';
import { Account } from '../shared';

@Component({
    selector: 'jhi-all-items',
    templateUrl: './allitems.component.html',
    styleUrls: [
        'allitems.scss'
    ]
})

export class AllItemsComponent implements OnInit {
    account: Account;
    items: any[];
    constructor(
        private eventManager: JhiEventManager,
        private itemsService: ItemsService
    ) {
        this.items = itemsService.getItems();
        console.log(this.items);
    }

    ngOnInit() {
        console.log('all items')
    }
}
