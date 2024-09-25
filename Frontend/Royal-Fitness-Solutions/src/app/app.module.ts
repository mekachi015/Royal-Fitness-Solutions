import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AuthCompComponent } from './pages/auth-comp/auth-comp.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MealsPageComponent } from './pages/meals-page/meals-page.component';
import { TrainingPageComponent } from './pages/training-page/training-page.component';
import { UserQueryPageComponent } from './pages/user-query-page/user-query-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageProfileComponent } from './components/home-page-profile/home-page-profile.component';
import { MealAndWorkoutComponent } from './components/meal-and-workout/meal-and-workout.component';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthCompComponent,
    UserProfileComponent,
    MealsPageComponent,
    TrainingPageComponent,
    UserQueryPageComponent,
    ContactPageComponent,
    NavBarComponent,
    HomePageComponent,
    HomePageProfileComponent,
    MealAndWorkoutComponent,
    BmiCalculatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
