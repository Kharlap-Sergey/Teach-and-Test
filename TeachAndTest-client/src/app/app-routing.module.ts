import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '@app/test/test.component';
import { AuthGuard } from '@shared/helpers/auth.guard';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '',
    component: TestComponent,
    canActivate: [AuthGuard],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
