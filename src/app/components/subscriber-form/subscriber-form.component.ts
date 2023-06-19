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
      this.formSubscriber.controls['Name'].setValue(this.editData.Name);
      this.formSubscriber.controls['Email'].setValue(this.editData.Email);
      this.formSubscriber.controls['CountryCode'].setValue(
        this.editData.CountryCode
      );
      this.formSubscriber.controls['PhoneNumber'].setValue(
        this.editData.PhoneNumber
      );
      this.formSubscriber.controls['JobTitle'].setValue(this.editData.JobTitle);
      this.formSubscriber.controls['Area'].setValue(this.editData.Area);
    }
  }
  initForm() {
    this.formSubscriber = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?"
          ),
        ],
      ],
      CountryCode: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
      PhoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[0-9]*'),
          Validators.maxLength(10),
        ],
      ],
      JobTitle: [''],
      Area: [''],
    });
  }

  addSubscriber() {
    let data = this.formSubscriber.value
    data.Topics = [];
    if (!this.editData) {
      if (this.formSubscriber.valid) {
        this._httpService
          .createSubscriptor(data)
          .subscribe({
            next: (res) => {
              Swal.fire('Successfully created');
              this.formSubscriber.reset();
              this.dialogRef.close();
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            },
            error: (error) => {
              console.error(error);
              
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
    let data = this.formSubscriber.value
    data.Topics = [];
    if (this.formSubscriber.valid) {
      this._httpService
        .updateSubscriptor(data, this.editData.Id)
        .subscribe({
          next: (res) => {
            Swal.fire({
              title:'Successfully edited',
              timer: 3000
            }).then(() => {
              window.location.reload();
            });
            this.formSubscriber.reset();
            this.dialogRef.close('update');
          },
          error: () => {
            Swal.fire('Error, the subscriber was not edited. Please try again');
          },
        });
    }
  }
}
