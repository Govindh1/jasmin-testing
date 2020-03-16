import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderChangeComponent } from './gender-change.component';

describe('GenderChangeComponent', () => {
  let component: GenderChangeComponent;
  let fixture: ComponentFixture<GenderChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
