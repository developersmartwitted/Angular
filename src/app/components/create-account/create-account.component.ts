import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'plx-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit, OnDestroy {
  @ViewChild('customerInfo', { static: true }) customerInfo: NgForm;
  @ViewChild('businessInfo', { static: true }) businessInfo: NgForm;
  public wizardPage = 1;
  public state = '';
  public termsAgreement = false;
  public checkboxForSameAddress = true;
  public customer = {
    billingAddress: {},
    branch: '',
    contactPhoneNumber: '',
    emailAddress: '',
    faxNumber: null,
    fein: '',
    firstName: '',
    lastName: '',
    leadSourceDetails: null,
    leadSourceId: null,
    name: '',
    phoneNumber: '',
    shippingAddress: {},
  };
  public privacyPolicyAcknowledged = false;
  public termsOfServiceAcknowledged = false;
  public recaptcha: any;
  public leadSources: any;
  private testSiteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Uses a fake key for the captcha to allow automated tests to pass through dev and local environments
  public siteKey = '6Lcd95gUAAAAAKQZ_K6lP06ZWWVM5mj3dygEL5s7';
  public disableButtonWhileSubmitting = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getLeadSources();
  }

  ngOnDestroy() {}

  public submitAccountCreateForm = async () => {};

  public resetCaptcha = async () => {
    this.recaptcha = '';
  };

  public setCaptchaValue = async () => {
    this.recaptcha = true;
  };

  public scrollToTopOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  public changeTermsAgreement(event) {
    this.termsOfServiceAcknowledged = event;
    this.privacyPolicyAcknowledged = event;
  }

  public setBillingEqualToShipping(address: {}) {
    if (this.checkboxForSameAddress) {
      this.customer.billingAddress = address;
    }
  }

  public billingAddressHandler(event) {
    if (event === true) {
      this.customer.billingAddress = this.customer.shippingAddress;
    } else {
      this.customer.billingAddress = {};
    }
  }

  private getLeadSources = async () => {};
}
