import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProfileComponent } from './home-page-profile.component';

describe('HomePageProfileComponent', () => {
  let component: HomePageProfileComponent;
  let fixture: ComponentFixture<HomePageProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageProfileComponent]
    });
    fixture = TestBed.createComponent(HomePageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
