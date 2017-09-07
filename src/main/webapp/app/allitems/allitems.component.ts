import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

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

    constructor(
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        console.log('all items')
    }
}
