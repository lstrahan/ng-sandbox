import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ags-prime-ng-table',
  templateUrl: './prime-ng-table.component.html',
  styleUrls: ['./prime-ng-table.component.scss']
})
export class PrimeNgTableComponent implements OnInit {

  scrollableCols = [
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];

  frozenCols = [
    { field: 'vin', header: 'Vin' }
  ];

  cars = [
    { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 1000000 },
    { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 1000000 + 1 },
    { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 1000000 + 2 },
    { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 1000000 + 3 },
    { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 1000000 + 4 },
    { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 1000000 + 5 },
    { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 1000000 + 6 },
    { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 1000000 + 7 },
    { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 1000000 + 8 },
    { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': 1000000 + 9 },
    { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 1000000 + 10 },
    { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 1000000 + 11 },
    { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 1000000 + 12 },
    { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 1000000 + 13 },
    { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 1000000 + 14 },
    { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 1000000 + 15 },
    { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 1000000 + 16 },
    { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 1000000 + 17 },
    { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 1000000 + 18 },
    { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': 1000000 + 19 },
    { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 1000000 + 20 },
    { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 1000000 + 21 },
    { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 1000000 + 22 },
    { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 1000000 + 23 },
    { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 1000000 + 24 },
    { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 1000000 + 25 },
    { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 1000000 + 26 },
    { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 1000000 + 27 },
    { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 1000000 + 28 },
    { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': 1000000 + 29 },
    { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 1000000 + 30 },
    { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 1000000 + 31 },
    { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 1000000 + 32 },
    { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 1000000 + 33 },
    { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 1000000 + 34 },
    { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 1000000 + 35 },
    { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 1000000 + 36 },
    { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 1000000 + 37 },
    { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 1000000 + 38 },
    { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': 1000000 + 39 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
