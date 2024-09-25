import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQueryPageComponent } from './user-query-page.component';

describe('UserQueryPageComponent', () => {
  let component: UserQueryPageComponent;
  let fixture: ComponentFixture<UserQueryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserQueryPageComponent]
    });
    fixture = TestBed.createComponent(UserQueryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
