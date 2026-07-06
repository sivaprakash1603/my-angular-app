import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Weathercomponent } from './weathercomponent';

describe('Weathercomponent', () => {
  let component: Weathercomponent;
  let fixture: ComponentFixture<Weathercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weathercomponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Weathercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
