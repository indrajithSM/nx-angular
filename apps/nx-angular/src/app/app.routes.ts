import { Route } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { loadRemoteModule } from '@nx/angular/mf';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {path:'', component:HomeComponent},
      {
        path: 'dashboard',
        loadChildren: () =>
          loadRemoteModule('nx-dashboard', './Module').then((m) => m.RemoteModule),
      },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];