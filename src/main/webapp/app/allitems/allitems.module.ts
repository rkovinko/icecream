import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestprojectSharedModule } from '../shared';

import { ALLITEMS_ROUTE, AllItemsComponent } from './';

import { ItemsService } from './';

@NgModule({
    imports: [
        TestprojectSharedModule,
        RouterModule.forRoot([ ALLITEMS_ROUTE ], { useHash: true })
    ],
    declarations: [
        AllItemsComponent,
    ],
    entryComponents: [
    ],
    providers: [ItemsService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestprojectAllItemsModule {}
