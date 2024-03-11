import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropperWrapperComponent } from './dropper-wrapper.component';

describe('DropperWrapperComponent', () => {
  let component: DropperWrapperComponent;
  let fixture: ComponentFixture<DropperWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropperWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropperWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
