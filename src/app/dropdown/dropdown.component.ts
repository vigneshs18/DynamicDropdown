import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  bikes = ['TVS', 'Bajaj', 'Hero'];
  cars = ['Tata', 'Mahindra', 'Maruti'];
  trucks = ['Ashok Layland', 'Bharat Benz'];

  selected: string;
  selectedArray: string[];

  constructor() { }

  ngOnInit() {

    if(this.selected === 'bikes') {
      this.selectedArray = [...this.bikes];
    }
    if(this.selected === 'cars') {
      this.selectedArray = [...this.cars];
    }
    if(this.selected === 'trucks') {
      this.selectedArray = [...this.trucks];
    }
  }

}
