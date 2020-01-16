import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoreCardComponent } from './contatore-card.component';

describe('ContatoreCardComponent', () => {
  let component: ContatoreCardComponent;
  let fixture: ComponentFixture<ContatoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
