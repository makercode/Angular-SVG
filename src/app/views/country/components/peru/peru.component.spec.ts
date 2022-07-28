import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruComponent } from './peru.component';

describe('PeruComponent', () => {
  let component: PeruComponent;
  let fixture: ComponentFixture<PeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
