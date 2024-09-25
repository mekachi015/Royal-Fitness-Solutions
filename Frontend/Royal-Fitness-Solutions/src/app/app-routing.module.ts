import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCompComponent } from './pages/auth-comp/auth-comp.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  
  {path: 'login', component:AuthCompComponent},
  { path: 'profile', component: UserProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
