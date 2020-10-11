import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertmarksComponent } from './insertmarks.component';

describe('InsertmarksComponent', () => {
  let component: InsertmarksComponent;
  let fixture: ComponentFixture<InsertmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
