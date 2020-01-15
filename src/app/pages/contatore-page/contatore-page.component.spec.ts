import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatorePageComponent } from './contatore-page.component';

describe('ContatorePageComponent', () => {
  let component: ContatorePageComponent;
  let fixture: ComponentFixture<ContatorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
