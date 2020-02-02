import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightService } from './flight.service';


describe('FlightService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [FlightService]
      }));

       it('should be created', () => {
        const service: FlightService = TestBed.get(FlightService);
        expect(service).toBeTruthy();
       });

       it('should have getFlightResponse function', () => {
        const service: FlightService = TestBed.get(FlightService);
        expect(service.getFlightResponse).toBeTruthy();
      });
      describe('FlightService', () => {
        let service: FlightService;
        let httpMock: HttpTestingController;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [FlightService]
            });
            service = TestBed.get(FlightService);
            httpMock = TestBed.get(HttpTestingController);
        });
       
      it('be able to retrieve results from the API via GET', () => {
        const dummyResults: any[] = [{
          AirlineLogoAddress: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif",
          AirlineName: "China Southern Airlines",
          InboundFlightsDuration: "24:10",
          ItineraryId: "",
          OutboundFlightsDuration: "26:20",
          Stops: 2,
          TotalAmount: 2903.84
            }, {
              AirlineLogoAddress: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif",
              AirlineName: "Emirates Airline",
              InboundFlightsDuration: "42:55",
              ItineraryId: "",
              OutboundFlightsDuration: "25:40",
              Stops: 2,
              TotalAmount: 2954.14
        }];
        service.getFlightResponse((flights: any) => {
            expect(flights.length).toBe(2);
            expect(flights).toEqual(dummyResults);
        });
        const request = httpMock.expectOne({ method: 'GET', url: 'http://nmflightapi.azurewebsites.net/api/flight' });
        expect(request.request.params.get('foo')).toEqual('bar');       
        request.flush(dummyResults);
        httpMock.verify();
       });
      
    
      });
    });

