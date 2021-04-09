import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/helpers/auth.guard';
import { EditInformationComponent } from './_components/edit-information/edit-information.component';
import { InformationComponent } from './_components/information/information.component';
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
    children: [
      {
        path: 'edit/information',
        component: EditInformationComponent,
      },
      {
        path: 'information',
        component: InformationComponent,
      },
      {
        path: 'about',
        component: InformationComponent,
      },
      {
        path: '',
        redirectTo: 'about',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
