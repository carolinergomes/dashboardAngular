import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagem3Component } from './imagem3.component';

describe('Imagem3Component', () => {
  let component: Imagem3Component;
  let fixture: ComponentFixture<Imagem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imagem3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
