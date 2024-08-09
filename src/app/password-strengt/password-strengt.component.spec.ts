import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengtComponent } from './password-strengt.component';

describe('PasswordStrengtComponent', () => {
  let component: PasswordStrengtComponent;
  let fixture: ComponentFixture<PasswordStrengtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
