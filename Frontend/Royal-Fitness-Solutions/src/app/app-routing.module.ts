import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCompComponent } from './pages/authentication page/auth-comp/auth-comp.component';

const routes: Routes = [
  
  {path: 'login', component:AuthCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
