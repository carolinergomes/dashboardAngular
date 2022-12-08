import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagem5Component } from './imagem5.component';

describe('Imagem5Component', () => {
  let component: Imagem5Component;
  let fixture: ComponentFixture<Imagem5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagem5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
