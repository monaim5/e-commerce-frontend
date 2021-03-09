import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  language = {value: 'en', name: 'English'};
  currency = {value: 'usd', sign: '$', name: 'USD - U.S Dollar'};
  country = {value: 'mad', name: 'Maroc'};

  languages = [
    {value: 'ar', name: 'Arabic'},
    {value: 'en', name: 'English'},
    {value: 'fr', name: 'French'},
  ];
  currencies = [
    {value: 'usd', sign: '$', name: 'USD - U.S Dollar'},
    {value: 'mad', sign: 'MAD', name: 'Moroccan Dirham'},
    {value: 'euro', sign: '€', name: 'Euro'},
  ];
  countries = [
    {value: 'maroc', name: 'Maroc'},
    {value: 'tunis', name: 'Tunis'},
    {value: 'france', name: 'France'},
  ];

  constructor() { }
  ngOnInit(): void {
  }

  selectLanguage(event: any): void {
    this.language = this.languages.find((lang) => lang.value === event.target.value);
  }

  selectCountry(event: any): void {
    this.country = this.countries.find((cou) => cou.value === event.target.value);
  }

  selectCurrency(event: any): void {
    this.currency = this.currencies.find((cur) => cur.value === event.target.value);
  }
}
