import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HireDeveloperComponent } from './hire-developer.component';

describe('HireDeveloperComponent', () => {
  let component: HireDeveloperComponent;
  let fixture: ComponentFixture<HireDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDeveloperComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with developerId, projectId, and paymentRate controls', () => {
    expect(component.hireForm.contains('developerId')).toBeTruthy();
    expect(component.hireForm.contains('projectId')).toBeTruthy();
    expect(component.hireForm.contains('paymentRate')).toBeTruthy();
  });

  it('should mark developerId as invalid if empty', () => {
    const developerIdControl = component.hireForm.get('developerId');
    developerIdControl?.setValue('');
    expect(developerIdControl?.valid).toBeFalsy();
  });

  it('should mark projectId as invalid if empty', () => {
    const projectIdControl = component.hireForm.get('projectId');
    projectIdControl?.setValue('');
    expect(projectIdControl?.valid).toBeFalsy();
  });

  it('should mark paymentRate as invalid if empty', () => {
    const paymentRateControl = component.hireForm.get('paymentRate');
    paymentRateControl?.setValue('');
    expect(paymentRateControl?.valid).toBeFalsy();
  });

  it('should submit the form if all fields are valid', () => {
    component.hireForm.get('developerId')?.setValue('1');
    component.hireForm.get('projectId')?.setValue('101');
    component.hireForm.get('paymentRate')?.setValue('50');
    
    spyOn(component, 'onSubmit');

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });
});

