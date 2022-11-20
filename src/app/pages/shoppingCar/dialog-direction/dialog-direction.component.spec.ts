import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDirectionComponent } from './dialog-direction.component';

describe('DialogDirectionComponent', () => {
  let component: DialogDirectionComponent;
  let fixture: ComponentFixture<DialogDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
