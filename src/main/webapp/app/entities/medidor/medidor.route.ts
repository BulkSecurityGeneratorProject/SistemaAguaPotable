import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { MedidorComponent } from './medidor.component';
import { MedidorDetailComponent } from './medidor-detail.component';
import { MedidorPopupComponent } from './medidor-dialog.component';
import { MedidorDeletePopupComponent } from './medidor-delete-dialog.component';

export const medidorRoute: Routes = [
    {
        path: 'medidor',
        component: MedidorComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Medidors'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'medidor/:id',
        component: MedidorDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Medidors'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const medidorPopupRoute: Routes = [
    {
        path: 'medidor-new',
        component: MedidorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Medidors'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'medidor/:id/edit',
        component: MedidorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Medidors'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'medidor/:id/delete',
        component: MedidorDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Medidors'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
