import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent {
  @Input() flightResult: any[]
  constructor() { }

 
}
