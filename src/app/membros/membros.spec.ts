import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Membros } from './membros';

describe('Membros', () => {
  let component: Membros;
  let fixture: ComponentFixture<Membros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Membros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Membros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
