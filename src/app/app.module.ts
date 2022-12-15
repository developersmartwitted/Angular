import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlxInputsModule } from '../../projects/plx-inputs/src/lib/plx-inputs.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonsAndToastsComponent } from './components/buttons-and-toasts/buttons-and-toasts.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { IconsComponent } from './components/icons/icons.component';
import { InputExamplesComponent } from './components/input-examples/input-examples.component';
import { PrimeInputsComponent } from './components/prime-inputs/prime-inputs.component';
import { TopTabsComponent } from './components/top-tabs/top-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    PlxInputsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // * Forms module and Reactive forms module don't get inherited by submodules. So we need to include it in consumers of plx-angular
    // FormsModule,
    // ReactiveFormsModule,
    // NgxDropzoneModule,
  ],
  declarations: [
    AppComponent,
    InputExamplesComponent,
    ButtonsAndToastsComponent,
    AccordionComponent,
    IconsComponent,
    TopTabsComponent,
    DynamicFormComponent,
    PrimeInputsComponent,
    OrdersComponent,
    OrderStatusComponent,
    CreateAccountComponent,
    AddressFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
