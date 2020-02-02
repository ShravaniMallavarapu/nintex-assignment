import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA, Type } from '@angular/core';
import { GetListComponent } from './get-list.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { DateTimePipe } from '../../date-time.pipe'
import { FlightService } from  '../../flight.service'
import { RouterTestingModule } from '@angular/router/testing';
describe('GetListComponent as class', () => {
    let component: GetListComponent;
    let fixture: ComponentFixture<GetListComponent>;
   
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GetListComponent,
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                [ReactiveFormsModule],
                FormsModule,
                RouterTestingModule
            ],
            providers: [
                DateTimePipe,
                FlightService
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GetListComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        
        fixture.detectChanges();
    });
  
    
    it('should create GetList component', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', async() => {
        expect(component.flighDetailstForm.valid).toBeFalsy();
    });
   
    it('Departure code field validity', () => {
        let DepartureAirportCode = component.flighDetailstForm.controls['DepartureAirportCode'];
        expect(DepartureAirportCode.valid).toBeFalsy();

        DepartureAirportCode.setValue("");
        expect(DepartureAirportCode.hasError('required')).toBeTruthy();

        DepartureAirportCode.setValue("abc");
        expect(DepartureAirportCode.hasError('maxLength')).toBeTruthy();
    });
    it('Arrival code field validity', () => {
        let errors = {};
        let ArrivalAirportCode = component.flighDetailstForm.controls['ArrivalAirportCode'];
        errors = ArrivalAirportCode.errors || {};
        expect(errors['required']).toBeTruthy()
    });
    it('Return Date field validity', () => {
        let errors = {};
        let ReturnDate = component.flighDetailstForm.controls['ReturnDate'];
        errors = ReturnDate.errors || {};
        expect(errors['required']).toBeTruthy()
    });

    it('Departure Date field validity', () => {
        let errors = {};
        let DepartureDate = component.flighDetailstForm.controls['DepartureDate'];
        errors = DepartureDate.errors || {};
        expect(errors['required']).toBeTruthy()
    });
    
    afterEach(() => {
        fixture.destroy();
      });
});

