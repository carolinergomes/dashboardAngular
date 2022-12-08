import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagem4Component } from './imagem4.component';

describe('Imagem4Component', () => {
  let component: Imagem4Component;
  let fixture: ComponentFixture<Imagem4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagem4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
