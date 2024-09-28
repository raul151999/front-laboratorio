import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCustomerVistaDComponent } from './profile-customer-vista-d.component';

describe('ProfileCustomerVistaDComponent', () => {
  let component: ProfileCustomerVistaDComponent;
  let fixture: ComponentFixture<ProfileCustomerVistaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCustomerVistaDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCustomerVistaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
