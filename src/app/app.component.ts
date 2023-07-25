import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'countrySelect';
  countries: string[] = [];


  constructor(){}
  ngOnInit(): void {
    const countries = localStorage.getItem('countries');
    if (countries) {
      this.countries = JSON.parse(countries);
    }
  }

  // this.countries : string[] = []
  country! : string
  onCountrySelection(event:any){
    console.log(event.value);
    this.country = event.value
    this.countries.push(this.country)
    localStorage.setItem('countries', JSON.stringify(this.countries)) 
  }

  DeleteCountry(i: number){
    console.log(i);
    this.countries.splice(i,1)
    console.log(this.countries);
    localStorage.setItem('countries', JSON.stringify(this.countries)) 
  }
  editCountry(i:number){
    console.log(i);
    Swal.fire({
      input: 'text',
      inputLabel: 'Enter New Country Name',
      inputPlaceholder: 'Country Name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Please Enter a Value!'
        }else{
          return ''
        }
      }
    }).then((result) => {
      if (result.value) {
        this.countries[i] = result.value
        localStorage.setItem('countries', JSON.stringify(this.countries)) 
        // Do something with the entered value
      }
    });
    
    
  }
}
