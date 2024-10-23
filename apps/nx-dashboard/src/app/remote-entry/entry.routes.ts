import { Route } from '@angular/router';
import { ContainerComponent } from './_container/container.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ContainerComponent,
    children:[
      {path:'', redirectTo: 'chart', pathMatch: 'full'},
      {
        path:'chart',
        loadChildren: () => import('./modules/chart/chart.module').then(m => m.ChartModule)
      },
      {
        path:'table',
        loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule)
      },
    ]
   },
];
