import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FileConfigurationService } from '../../../../projects/plx-inputs/src/lib/services/file-configuration.service';

// import currentOwnerSearch from './orderForms/Current_Owner_Search_Addl_Info_v1.json';
// import * as Estoppels_Addl_Info_v1 from './orderForms/Estoppels_Addl_Info_v1.json';
// import * as Full_Title_Search_Addl_Info_v1 from './orderForms/Full_Title_Search_Addl_Info_v1.json';
// import * as Two_Owner_Search_Addl_Info_v1 from './orderForms/Two_Owner_Search_Addl_Info_v1.json';
// import * as Release_Tracking_Addl_Info_v1 from './orderForms/Release_Tracking_Addl_Info_v1.json';
// import * as Title_Curative_Addl_Info_v1 from './orderForms/Title_Curative_Addl_Info_v1.json';
// import * as Survey_Details_v1 from './orderForms/Survey_Details_v1.json';
// import * as Payoff_Letter_Addl_Information_v1 from './orderForms/Payoff_Letter_Addl_Information_v1.json';

@Component({
  selector: 'plx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  // public Current_Owner_Search_Addl_Info_v1: any = currentOwnerSearch;
  // public Estoppels_Addl_Info_v1: any = (Estoppels_Addl_Info_v1 as any).default;
  // public Full_Title_Search_Addl_Info_v1: any = (Full_Title_Search_Addl_Info_v1 as any).default;
  // public Two_Owner_Search_Addl_Info_v1: any = (Two_Owner_Search_Addl_Info_v1 as any).default;
  // public Release_Tracking_Addl_Info_v1: any = (Release_Tracking_Addl_Info_v1 as any).default;
  // public Title_Curative_Addl_Info_v1: any = (Title_Curative_Addl_Info_v1 as any).default;
  // public Payoff_Letter_Addl_Information_v1: any = (Payoff_Letter_Addl_Information_v1 as any).default;
  // public Survey_Details_v1: any = (Survey_Details_v1 as any).default;
  form: FormGroup = new FormGroup({});
  public options: FormlyFormOptions = {
    formState: {
      serviceIds: [3955],
    },
  };
  model: any = {
    titleCommitmentFileName: [
      {
        data: null,
        path: 'https://www.google.com',
        name: 'image.png',
      },
      { data: null, path: 'https://www.google.com', name: 'image2.png' },
    ],
  };

  fields: FormlyFieldConfig[] = [
    {
      type: 'Collection',
      key: '127',
      defaultValue: [],
      templateOptions: {
        label: 'HOA/COA Information',
        addText: 'Click the plus to add an HOA/COA.',
        required: false,
        placeholder: '',
        disabled: false,
        max: 2,
        min: 0,
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'Text',
            key: '24',
            defaultValue: null,
            templateOptions: {
              required: true,
              label: 'HOA Legal Name',
            },
            fieldArray: {},
          },
          {
            type: 'Phone',
            key: '45',
            defaultValue: null,
            templateOptions: {
              required: false,
              label: 'HOA Phone Number',
            },
            fieldArray: {},
          },
          {
            type: 'Phone',
            key: '46',
            defaultValue: null,
            templateOptions: {
              required: false,
              label: 'HOA Fax Number',
            },
            fieldArray: {},
          },
        ],
      },
      id: 'formly_8_Collection_127_3',
    },
    {
      type: 'Dropdown',
      key: 'surveyType',
      defaultValue: 'Boundary Survey',
      templateOptions: {
        label: 'Survey Type',
        required: true,
        disabled: true,
        options: [
          {
            label: 'Other',
            value: 'Other',
          },
          {
            label: 'Boundary Survey',
            value: 'Boundary Survey',
          },
          {
            label: 'ALTA Survey',
            value: 'ALTA Survey',
          },
        ],
      },
    },
    {
      type: 'Disclaimer',
      templateOptions: {
        label:
          "Please note: A signed and completed Borrower's Authorization allowing PropLogix to contact the lender on the borrower's behalf is required for us to process your Payoff Letter order.If you don't have one already, feel free to use <a href=\"https://api.proplogix.com/api/Files/AuthorizationForm?_gl=1*184si5n*_ga*OTEyNTY3ODQ3LjE2NDUwMzgxMjE.*_ga_RK4R3KZ9TB*MTY0NjA3NDM0MC41LjEuMTY0NjA3NDM2MC40MA..\" >this template</a > and have the borrower sign and fill it out before submitting your order",
      },
      expressionProperties: {
        'templateOptions.label': ' formState.serviceIds.includes(3955) && "Label displayed based on formState"',
      },
    },
    {
      templateOptions: {
        label: 'For ALTA-type surveys, Lender may require Table A.',
      },
      type: 'Disclaimer',
      hideExpression: "model.surveyType !== 'ALTA Survey'",
    },
    {
      key: 'otherSurveyType',
      type: 'Text',
      hideExpression: "model.surveyType !== 'Other'",
      templateOptions: {
        label: 'Other Survey Type',
        required: true,
        disabled: true,
      },
    },
    {
      defaultValue: 'Purchase and Sale',
      key: 'surveyPurpose',
      type: 'Dropdown',
      templateOptions: {
        label: 'Survey Purpose',
        options: [
          {
            label: 'None',
            value: 'None',
          },
          {
            label: 'Purchase And Sale',
            value: 'Purchase And Sale',
          },
          {
            label: 'Refinance',
            value: 'Refinance',
          },
          {
            label: 'New Construction',
            value: 'New Construction',
          },
        ],
        required: true,
      },
    },
    {
      key: 'requestsElevationCertificate',
      type: 'Dropdown',
      templateOptions: {
        label: 'Elevation Certificate',
        options: [
          {
            label: 'None',
            value: 'None',
          },
          {
            label: 'No',
            value: 'No',
          },
          {
            label: 'Yes',
            value: 'Yes',
          },
          {
            label: 'If In Special Flood Hazard Area',
            value: 'If In Special Flood Hazard Area',
          },
        ],
        required: true,
      },
    },
    {
      key: 'mortgageType',
      type: 'Dropdown',
      templateOptions: {
        required: false,
        label: 'Mortgage Type',
        options: [
          {
            label: 'Not Provided',
            value: 'null',
          },
          {
            label: 'Conventional',
            value: 'Conventional',
          },
          {
            label: 'Unknown or Other',
            value: 'Unknown or Other',
          },
          {
            label: 'Federal Housing Administration',
            value: 'Federal Housing Administration',
          },
          {
            label: 'Veterans Affairs',
            value: 'Veterans Affairs',
          },
          {
            label: 'No Mortgage',
            value: 'No Mortgage',
          },
        ],
        tooltip:
          'Additional information must be shown on the survey with some mortgage types (for example, well/septic locations with FHA mortgages). If the mortgage type is not provided, your surveyor may not include these requirements.',
      },
    },
    {
      key: 'titleCommitmentReview',
      type: 'CustomRadio',
      defaultValue: 'false',
      templateOptions: {
        label: 'Title Commitment Review',
        required: true,
        disabled: false,
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
    },
    {
      key: 'requestHardCopies',
      type: 'CustomRadio',
      defaultValue: false,
      templateOptions: {
        required: true,
        label: 'Request Survey Hard Copies',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
    },
    {
      key: 'surveyHardCopyRequests',
      type: 'Collection',
      hideExpression: 'field.parent.model.requestHardCopies == true',
      templateOptions: {
        required: true,
        label: 'Hard Copies',
        addText: 'Add Hard Copy Request',
        max: 3,
        min: 1,
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'Text',
            key: 'addresseeName',
            defaultValue: '',
            templateOptions: {
              label: 'Addressee',
              required: true,
            },
          },
          {
            type: 'Number',
            key: 'numberOfCopies',
            defaultValue: '',
            templateOptions: {
              required: true,
              label: 'Copies',
            },
          },
          {
            type: 'AddressTypeahead',
            key: 'mailingAddress',
            defaultValue: '',
            templateOptions: {
              required: true,
              label: 'Address',
            },
          },
        ],
      },
    },
    {
      key: 'surveyCertifications',
      type: 'Collection',
      templateOptions: {
        label: 'Certifications',
        required: true,
        addText: 'Add Certification',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'Text',
            key: 'collectionName',
            templateOptions: {
              label: 'Name',
              required: true,
            },
          },
          {
            key: 'party',
            defaultValue: 'None',
            type: 'Dropdown',
            templateOptions: {
              label: 'Party',
              required: true,
              options: [
                {
                  label: 'None',
                  value: 'None',
                },
                {
                  label: 'Buyer',
                  value: 'Buyer',
                },
                {
                  label: 'Lender',
                  value: 'Lender',
                },
                {
                  label: 'Closing Or Escrow Agent',
                  value: 'Closing Or Escrow Agent',
                },
                {
                  label: 'Underwriter',
                  value: 'Underwriter',
                },
                {
                  label: 'Other',
                  value: 'Other',
                },
              ],
            },
          },
        ],
      },
    },
    {
      key: 'agentName',
      type: 'Text',
      templateOptions: {
        required: false,
        label: 'Property Access Contact Name',
      },
    },
    {
      key: 'agentPhone',
      type: 'Phone',
      templateOptions: {
        required: false,
        label: 'Property Access Contact Phone',
      },
    },
    {
      key: 'agentEmail',
      type: 'Email',
      templateOptions: {
        required: false,
        label: 'Property Access Contact Email',
      },
    },
    {
      key: 'accessInformation',
      type: 'Textbox',
      templateOptions: {
        rows: 4,
        disabled: true,
        label: 'Survey Notes and Access Information',
        tooltip: 'Please leave only comments specific to surveys, i.e.: gate codes, information about pets, etc',
      },
    },
    {
      key: 'isNextFieldRequired',
      type: 'CustomRadio',
      defaultValue: false,
      templateOptions: {
        required: true,
        label: 'Is Next Field Required?',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
    },
    {
      type: 'Upload',
      key: 'tableAFile',
      expressionProperties: {
        'templateOptions.required': 'model["isNextFieldRequired"]',
      },
      templateOptions: {
        disabled: true,
        remoteId: 'tableAFile',
        label: 'Table A Form',
        acceptedFormats: this.fileConfigurationService.fileApprovedMimeTypes,
        maxFileSize: 256000000,
      },
    },
    {
      type: 'Text',
      key: '120',
      templateOptions: {
        label: 'Last 4 SSN',
        pattern: '^[0-9]{4}$',
        minLength: 4,
        maxLength: 4,
        required: true,
        customErrorMessage: 'Last 4 SSN should only include 4 digits.',
      },
    },
  ];

  constructor(public fileConfigurationService: FileConfigurationService) {}

  ngOnInit(): void {}
}
