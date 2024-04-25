import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'p',
    component: TabsPage,
    children: [
      {
        path: 'gastos',
        loadChildren: () =>
          import('../pages/tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'metricas',
        loadChildren: () =>
          import('../pages/tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: '',
        redirectTo: '/p/gastos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/p/gastos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
