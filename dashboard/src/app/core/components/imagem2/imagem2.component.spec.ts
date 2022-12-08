import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagem2Component } from './imagem2.component';

describe('Imagem2Component', () => {
  let component: Imagem2Component;
  let fixture: ComponentFixture<Imagem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
