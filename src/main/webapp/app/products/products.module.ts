import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestprojectSharedModule } from '../shared';

import { PRODUCTS_ROUTE, ProductsComponent } from './';

import { ProductsService } from './';
import { HttpService } from './http.service'

@NgModule({
    imports: [
        TestprojectSharedModule,
        RouterModule.forRoot([ PRODUCTS_ROUTE ], { useHash: true })
    ],
    declarations: [
        ProductsComponent,
    ],
    entryComponents: [
    ],
    providers: [ProductsService,HttpService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestprojectProductModule {}
