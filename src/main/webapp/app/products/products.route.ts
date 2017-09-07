import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { ProductsComponent } from './';

export const PRODUCTS_ROUTE: Route = {
    path: 'all-items',
    component: ProductsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'home.title'
    },
    canActivate: [UserRouteAccessService]
};
