import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileConfigurationService } from '../../../../projects/plx-inputs/src/lib/services/file-configuration.service';
import { ToastService } from '../../../../projects/plx-inputs/src/lib/services/toast.service';

@Component({
  selector: 'plx-input-input-examples',
  templateUrl: './input-examples.component.html',
  styleUrls: ['./input-examples.component.scss'],
})
export class InputExamplesComponent implements OnInit {
  @ViewChild('plxInputs') public plxInputs: NgForm;
  public textInput = 'test@email.com';
  public listInput = ['Uncle Paulie', 'Tony Soprano'];
  public checkboxInput = true;
  public checkboxInput2 = true;
  public toggleInput = true;
  public yesnoInput = 'true';
  public toggleReadonly = false;
  public toggleRequired = false;
  multiToggleValues: any = {
    yes: 'true',
    no: 'false',
    maybe: 'nope',
  };
  public phoneInput = '1234567890';
  public phoneExtInput = '1234567890123456';
  public selectInput = ['Oklahoma', 'New Jersey', 'California'];
  public selectInputValue = 'Oklahoma';
  public selectWithIdValue = 3;
  public passwordValue = 'password';
  public datepickerInput = '2019-04-19';
  public dateTimePickerInput = '2019-04-19T09:42:23';
  public startDate = '2019-10-19';
  public endDate = '2019-10-20';
  public timePickerInput = '2019-04-19T09:42:23.0682609+04:00';
  public currency = 3342.42;
  public files: File[] = [];
  public selectWithIdInput = [
    {
      idWeird: 1,
      nameWeird: 'Leslie',
    },
    {
      idWeird: 2,
      nameWeird: 'Stan',
    },
    {
      idWeird: 3,
      nameWeird: 'Robin',
    },
  ];
  public textAreaValue =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. lorum quia perferendis culpa fugiat.';
  public detectOnChange = 0;

  constructor(public fileConfigurationService: FileConfigurationService, private toastService: ToastService) {}

  ngOnInit(): void {}

  public countChanges = () => {
    this.detectOnChange++;
  };

  onFileSelect(event) {
    if (event.rejectedFiles.length) {
      this.toastService.warning(
        `File upload was unsuccessful, please upload a file with approved extensions ${this.fileConfigurationService.fileApprovedMimeTypes}`,
        'Warning!',
      );
    } else {
      this.files.push(...event.addedFiles);
      this.toastService.success('Your profile picture has been updated successfully', 'Success!');
    }
  }

  onFileRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  public checkCurrencyType = () => {
    // eslint-disable-next-line no-console
    console.log(this.currency);
  };
}
