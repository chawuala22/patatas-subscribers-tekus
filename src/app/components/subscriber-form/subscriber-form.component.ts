import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatatasSubscribersService } from 'src/app/services/patatas-subscribers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.scss'],
})
export class SubscriberFormComponent {
  formSubscriber!: FormGroup;
  actionBtn: string = 'Create';
  titleForm: string = 'Create new subscriber';

  constructor(
    private formBuilder: FormBuilder,
    private _httpService: PatatasSubscribersService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<SubscriberFormComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.editData) {
      this.actionBtn = 'Update';
      this.titleForm = 'Update subscriber';
      this.formSubscriber.controls['name'].setValue(this.editData.name);
      this.formSubscriber.controls['email'].setValue(this.editData.email);
      this.formSubscriber.controls['countryCode'].setValue(
        this.editData.countryCode
      );
      this.formSubscriber.controls['phoneNumber'].setValue(
        this.editData.phoneNumber
      );
      this.formSubscriber.controls['jobTitle'].setValue(this.editData.jobTitle);
      this.formSubscriber.controls['area'].setValue(this.editData.area);
    }
  }
  initForm() {
    this.formSubscriber = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?"
          ),
        ],
      ],
      countryCode: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[0-9]*'),
          Validators.maxLength(10),
        ],
      ],
      jobTitle: [''],
      area: [''],
    });
  }

  addSubscriber() {
    if (!this.editData) {
      if (this.formSubscriber.valid) {
        this._httpService
          .createSubscriptor(this.formSubscriber.value)
          .subscribe({
            next: (res) => {
              Swal.fire('Successfully created');
              this.formSubscriber.reset();
              this.dialogRef.close();
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            },
            error: () => {
              Swal.fire(
                'Error, the subscriber was not created. Please try again'
              );
            },
          });
      }
    } else {
      this.update();
    }
  }
  update() {
    if (this.formSubscriber.valid) {
      this._httpService
        .updateSubscriptor(this.formSubscriber.value, this.editData.id)
        .subscribe({
          next: (res) => {
            Swal.fire('Successfully edited');
            this.formSubscriber.reset();
            this.dialogRef.close('update');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          },
          error: () => {
            Swal.fire('Error, the subscriber was not edited. Please try again');
          },
        });
    }
  }
}
