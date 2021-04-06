import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/helpers/auth.guard';
import { ManagementComponent } from './_components/management/management.component';
import { TeachComponent } from './_components/teach/teach.component';

const routes: Routes = [
  {
    path: 'teach',
    component: TeachComponent,
    //is disabled while in development
    //canActivate: [AuthGuard],
  },
  {
    path: ':id/management',
    component: ManagementComponent,
    //is disabled while in development
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
