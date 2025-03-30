import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestToolComponent } from './harvest-tool.component';

describe('HarvestToolComponent', () => {
  let component: HarvestToolComponent;
  let fixture: ComponentFixture<HarvestToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarvestToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarvestToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
