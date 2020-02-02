import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from  '@angular/forms'
import { FlightService } from  '../../flight.service'
import { Router } from  '@angular/router'
import { DateTimePipe } from '../../date-time.pipe'
@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {
  flightsResponse: any[]
  flighDetailstForm: FormGroup
  isSubmitted  =  false
  alphaNumeric = '/^[a-z0-9]+$/i'
  error:any= {isError:false,errorMessage:''}

  constructor(private DateTime: DateTimePipe, private FlightService: FlightService, private formBuilder: FormBuilder, private router: Router) { }
 
  ngOnInit() {
    this.flighDetailstForm  =  this.formBuilder.group({
      DepartureAirportCode: ['',[Validators.required, Validators.maxLength(3)]],
      ArrivalAirportCode: ['', [Validators.required, Validators.maxLength(3)]],
      DepartureDate: ['', Validators.required],
      ReturnDate: ['', Validators.required]
   })
  }

  get formControls() { 
      return this.flighDetailstForm.controls
  }
 
  onSubmitDetails(){
   this.isSubmitted = true
    if(this.flighDetailstForm.invalid){
      return
    }
    this.flighDetailstForm.value.DepartureDate = this.DateTime.transform(this.flighDetailstForm.value.DepartureDate)
    this.flighDetailstForm.value.ReturnDate = this.DateTime.transform(this.flighDetailstForm.value.ReturnDate)
    this.FlightService.getFlightResponse(this.flighDetailstForm.value).subscribe((response: any) => {
      this.flightsResponse = response
   })
  }
}
