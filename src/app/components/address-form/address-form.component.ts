import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
// import { Address, County, State } from '@api/src/models';
// import { LookupsService } from '@api/src/services';
// import { IsAddressCompletePipe } from '@core/pipes/is-address-complete.pipe';
// import { ToastService } from 'plx-angular';
// import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'mos-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AddressFormComponent implements OnInit, AfterViewInit, OnChanges {
  public states: [];
  public statesForDropDown: string[];
  public counties: [];
  public subscriptions: Subscription[] = [];
  public countiesInSelectedState: [];
  public googleAddressHandler = new GoogleAddress();
  public options = {
    types: ['address'],
    componentRestrictions: { country: 'US' },
  };
  public searchTerm = '';
  public isFocused = false;
  public isAddressComplete = false;
  public singleLineAddress = true;
  public canShowReadOnly = false;
  @Input() address = {
    line1: '',
    line2: null,
    city: '',
    stateId: 9,
    countyId: null,
    state: {},
    postalCode: '',
  };
  // * The compact display attribute makes the state and county dropdowns stay in one row
  @Input() compactDisplay = false;
  @Input() displayCounty = true;
  @Input() displayAddressSearch = false;
  @Input() isCountyRequired = false;
  @Input() autoFocusSearch = false;
  @Input() readonly = false;
  @Input() customGoogleSearchLabel = null;

  // * This is some serious syntactic sugar. This output updates the
  // * address values when they're changed on this form, even though its a child component.
  @Output() addressChange = new EventEmitter();

  // * This randomId is used to make a unique ID for the address search.
  // * The randomId allows us to focus on the input even when there are
  // * multiple address components present in the DOM.
  public randomId = Math.round(Math.random() * 1000);

  constructor(
    private elementRef: ElementRef, // private toastService: ToastService, // private lookupsService: LookupsService, // private isAddressCompletePipe: IsAddressCompletePipe, // public errorService: InputErrorService,
  ) {}

  ngOnInit() {
    this.getStates();
    if (this.address.stateId > -1) {
      this.getCounties(this.address.stateId);
    }
    this.canShowReadOnly = !!(this.readonly && this.address.line1 && this.address.city);
  }

  ngOnChanges() {
    this.canShowReadOnly = !!(this.readonly && this.address.line1 && this.address.city);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // turn off any input field
      document.querySelectorAll('input').forEach((element) => {
        element.setAttribute('autocomplete', 'off');
      });
      document.querySelectorAll('textarea').forEach((element) => element.setAttribute('autocomplete', 'off'));

      // this code disable address fields
      document.querySelector('#address-form-google-search').setAttribute('autocomplete', 'nope');
      if (/Edg/.test(navigator.userAgent)) {
        this.setAddressFields('additional-name');
      } else {
        this.setAddressFields('nope');
      }

      // other fields may still save the information by looking at name, here we randomize the name
      const random = Math.random();
      document.querySelectorAll('input').forEach((element) => {
        if (element.id !== 'address-form-google-search') {
          element.setAttribute('name', element.name + '_' + random);
        }
      });

      if (this.autoFocusSearch) {
        this.elementRef.nativeElement.querySelector('#address-form-google-search').focus();
      }
    }, 500);
  }

  public handleSearchChange(event) {
    if (event === '') {
      // * google search has been emptied, clear the address now
      this.address = {
        line1: '',
        line2: null,
        city: '',
        stateId: null,
        countyId: null,
        state: {},
        postalCode: '',
      };
    }
  }

  setAddressFields(value) {
    const addressFields = ['#line1', '#line2', '#city', '#postalCode', '#legalDescriptionInput', '#county', '#parcel'];
    addressFields.forEach((id) => {
      document.querySelector(id)?.setAttribute('autocomplete', value);
    });
  }

  public getStates() {
    return ['Florida', 'Texas'];
  }

  public setState = async (stateId: number = 1) => {
    this.address.stateId = stateId;
    await this.getCounties(stateId);
    this.addressChange.emit(this.address);
  };

  public setCounty(countyId: number) {
    this.address.countyId = 1;
  }

  public getStateName(stateId: number): string {
    return 'Florida';
  }

  public getCounties = async (stateId) => {
    if (stateId === null || stateId === undefined) {
      return;
    }

    this.counties = null;
    this.address.countyId = null;
  };

  public toggleSingleLine(value) {
    this.singleLineAddress = value;
    setTimeout(() => {
      const googleSearchInput = document.querySelector('#address-form-google-search');
      if (googleSearchInput) {
        googleSearchInput.setAttribute('autocomplete', 'nope');
      }
    }, 500);
  }

  public handleAddressChange = async ($event) => {};
}

class GoogleAddress {
  constructor() {}
  public getLine1(googleAddress) {
    const line1Number = googleAddress.find((x) => x.types.includes('street_number'))?.long_name || '';
    const line1Street = googleAddress.find((x) => x.types.includes('route'))?.long_name || '';
    return line1Number + ' ' + line1Street;
  }
  public getCity(googleAddress) {}
  public getStateId(googleAddress, states: []) {}
  public getCountyId(googleAddress, counties: []) {}
  public getPostalCode(googleAddress) {}
}
