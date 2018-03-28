import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ServicioComponent } from './servicio.component';
import { ServicioDetailComponent } from './servicio-detail.component';
import { ServicioPopupComponent } from './servicio-dialog.component';
import { ServicioDeletePopupComponent } from './servicio-delete-dialog.component';

export const servicioRoute: Routes = [
    {
        path: 'servicio',
        component: ServicioComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servicios'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'servicio/:id',
        component: ServicioDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servicios'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const servicioPopupRoute: Routes = [
    {
        path: 'servicio-new',
        component: ServicioPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servicios'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'servicio/:id/edit',
        component: ServicioPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servicios'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'servicio/:id/delete',
        component: ServicioDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servicios'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
