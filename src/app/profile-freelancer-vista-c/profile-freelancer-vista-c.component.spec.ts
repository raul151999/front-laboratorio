import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFreelancerVistaCComponent } from './profile-freelancer-vista-c.component';

describe('ProfileFreelancerVistaCComponent', () => {
  let component: ProfileFreelancerVistaCComponent;
  let fixture: ComponentFixture<ProfileFreelancerVistaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFreelancerVistaCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFreelancerVistaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
