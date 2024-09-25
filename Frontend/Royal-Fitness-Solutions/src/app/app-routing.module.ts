import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCompComponent } from './pages/auth-comp/auth-comp.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrainingPageComponent } from './pages/training-page/training-page.component';
import { MealsPageComponent } from './pages/meals-page/meals-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  
  {path: 'login', component:AuthCompComponent},
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'training', component: TrainingPageComponent},
  { path: 'meals', component: MealsPageComponent},
  { path: 'contact', component: ContactPageComponent},
  // { path: '**', component: HomePageComponent}
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
