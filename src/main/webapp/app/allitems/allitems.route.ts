import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { AllItemsComponent } from './';

export const ALLITEMS_ROUTE: Route = {
    path: 'all-items',
    component: AllItemsComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
