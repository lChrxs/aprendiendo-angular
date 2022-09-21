import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPrimeroComponent } from './el-primero.component';

describe('ElPrimeroComponent', () => {
  let component: ElPrimeroComponent;
  let fixture: ComponentFixture<ElPrimeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElPrimeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElPrimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
