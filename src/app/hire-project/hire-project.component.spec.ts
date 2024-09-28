import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireProjectComponent } from './hire-project.component';

describe('HireProjectComponent', () => {
  let component: HireProjectComponent;
  let fixture: ComponentFixture<HireProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
