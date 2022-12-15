import { Component, OnInit } from '@angular/core';
import { InputErrorService } from '../../../../projects/plx-inputs/src/lib/services/validation-error-manager.service';

@Component({
  selector: 'plx-input-prime-inputs',
  templateUrl: './prime-inputs.component.html',
  styleUrls: ['./prime-inputs.component.scss'],
})
export class PrimeInputsComponent implements OnInit {
  public toggleReadonly = false;
  public toggleRequired = true;
  countries: any[];
  cities: any[] = [
    { name: 'New York', id: 1 },
    { name: 'Rome', id: 2 },
    { name: 'London', id: 3 },
    { name: 'Istanbul', id: 4 },
    { name: 'Paris', id: 5 },
  ];
  citiesStringList: any[] = ['New York', 'Rome', 'London', 'Istanbul', 'Paris'];
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  value8: any;
  value9: any;
  value10: any;
  value11: any;
  value12: any;
  value13: any;
  value14: any;
  value15: any;
  value16: any;
  valueIconRight: any;

  constructor(public errorService: InputErrorService) {}

  ngOnInit(): void {}
}
