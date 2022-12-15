import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonsAndToastsComponent } from './components/buttons-and-toasts/buttons-and-toasts.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { IconsComponent } from './components/icons/icons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PrimeInputsComponent } from './components/prime-inputs/prime-inputs.component';
import { TopTabsComponent } from './components/top-tabs/top-tabs.component';

const routes: Routes = [
  { path: 'prime-inputs', component: PrimeInputsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'top-tab', component: TopTabsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'buttons', component: ButtonsAndToastsComponent },
  { path: 'dynamic-forms', component: DynamicFormComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
