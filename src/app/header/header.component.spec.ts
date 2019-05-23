import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let homeButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule
      ],
      declarations: [
        HeaderComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    homeButton = fixture.nativeElement.querySelector('#menu-button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(homeButton.textContent).toEqual('Menu')
  });
});
