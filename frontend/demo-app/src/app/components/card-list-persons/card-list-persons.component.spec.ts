import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { CardListPersonsComponent } from './card-list-persons.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { title } from 'process';
import { doesNotReject } from 'assert';
//import { resourceLimits } from 'worker_threads';

describe('Testing CardListPersonsComponent', () => {
  const titleH1 = 'Esta é a lista de Pessoas';
  let component = new CardListPersonsComponent();
  let fixture;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListPersonsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CardListPersonsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should create the page with correct title', async () => {
    // fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement;
    const h1ShownInComponent = compiled.querySelector('.title');
    const messageInH1 = h1ShownInComponent.innerHTML;
    expect(messageInH1).toBe(titleH1);
  });

  it('Should correct defafult Values', async () => {
    const loadingDefault = true;
    let loadingDefaultInComponent = component.loading;
    expect(loadingDefaultInComponent).toBe(loadingDefault);

    const personsLoadedBeforeAll = component.persons;
    expect(personsLoadedBeforeAll).toEqual([]);
    await component.getAllPersons();
  });
  /**
   *   setTimeout(() => {
      const personLoadedAfterGetMethod = component.persons;
      const result = personLoadedAfterGetMethod.length;
      expect(result).toBeGreaterThan(0);
      loadingDefaultInComponent = component.loading;
      console.log(loadingDefaultInComponent);
      //expect(loadingDefaultInComponent).toBe(false/)
    }, 1500);
   */

  it('should show values After Request is Done.', done => {
    component.getAllPersons()
    setTimeout(() => {
      const personLoadedAfterGetMethod = component.persons;
      const result = personLoadedAfterGetMethod.length;
      expect(result).toBeGreaterThan(0);
      const loadingDefaultInComponent = component.loading;
      expect(loadingDefaultInComponent).toBe(false);
      done();
    },1400)
  });
});
