import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/helpers/auth.guard';
import { TeachComponent } from './_components/teach/teach.component';

const routes: Routes = [
  {
    path: 'teach',
    component: TeachComponent,
    //is disabled while in development
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
