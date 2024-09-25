import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCompComponent } from './pages/auth-comp/auth-comp.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrainingPageComponent } from './pages/training-page/training-page.component';
import { MealsPageComponent } from './pages/meals-page/meals-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AuthGuardService } from './services/auth gaurd/auth-guard.service';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';

const routes: Routes = [
  
  {path: 'login', component:AuthCompComponent},
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomePageComponent,canActivate: [AuthGuardService]},
  { path: 'training', component: TrainingPageComponent, canActivate: [AuthGuardService]},
  { path: 'meals', component: MealsPageComponent,canActivate: [AuthGuardService]},
  { path: 'contact', component: ContactPageComponent,canActivate: [AuthGuardService]},

  {path: 'admin', component: AdminDashComponent ,canActivate: [AuthGuardService]},
  // { path: '**', component: HomePageComponent}
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
