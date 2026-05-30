import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caregories } from './caregories';

describe('Caregories', () => {
  let component: Caregories;
  let fixture: ComponentFixture<Caregories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caregories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caregories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
