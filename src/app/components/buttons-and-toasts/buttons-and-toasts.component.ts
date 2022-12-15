import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../projects/plx-inputs/src/lib/services/toast.service';

@Component({
  selector: 'plx-input-buttons-and-toasts',
  templateUrl: './buttons-and-toasts.component.html',
  styleUrls: ['./buttons-and-toasts.component.scss'],
})
export class ButtonsAndToastsComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}
  public toastSuccess() {
    this.toastService.success('This is a success toast');
  }

  public toastError() {
    this.toastService.error('This is an error toast');
  }

  public toastInfo() {
    this.toastService.info('This is an info toast');
  }

  public toastWarning() {
    this.toastService.warning('This is a warning toast');
  }
}
