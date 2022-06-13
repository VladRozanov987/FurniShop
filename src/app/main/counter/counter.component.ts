import { Component } from '@angular/core';

@Component({
  selector: 'section-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CouterComponent {

  conterItems = [
    {value: '7', label: 'Year Experience'},
    {value: '2', label: 'Opened in the country'},
    {value: '10k+', label: 'Furniture sold'},
    {value: '260+', label: 'Variant Furniture'},
  ]

}
