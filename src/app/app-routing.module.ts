import { CompleteComponent } from './components/complete/complete.component';
import { ActiveComponent } from './components/active/active.component';
import { AllComponent } from './components/all/all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AllComponent,
  },
  {
    path: 'active',
    component: ActiveComponent,
  },
  {
    path: 'complete',
    component: CompleteComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
