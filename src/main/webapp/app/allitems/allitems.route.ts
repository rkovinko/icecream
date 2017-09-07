import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { AllItemsComponent } from './';

export const ALLITEMS_ROUTE: Route = {
    path: 'all-items',
    component: AllItemsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'home.title'
    },
    canActivate: [UserRouteAccessService]
};
