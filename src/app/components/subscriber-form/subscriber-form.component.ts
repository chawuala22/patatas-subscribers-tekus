import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.scss'],
})
export class SubscriberFormComponent {
  formSubscriber!: FormGroup;
  actionBtn: string = 'Enviar';

  constructor(
    private formBuilder: FormBuilder
  ) {}

  // ngOnInit(): void {
  //   this.formSubscriber = this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //     estadio: ['', Validators.required],
  //     sitioWeb: ['', Validators.required],
  //     nacionalidad: ['', Validators.required],
  //     fundacion: ['', Validators.required],
  //     entrenador: ['', Validators.required],
  //     capacidad: ['', Validators.required],
  //     valor: ['', Validators.required],
  //   });
  //   console.log(this.editData);

  //   if (this.editData) {
  //     this.actionBtn = 'Actualizar';
  //     this.formSubscriber.controls['nombre'].setValue(this.editData.nombre);
  //     this.formSubscriber.controls['estadio'].setValue(this.editData.estadio);
  //     this.formSubscriber.controls['sitioWeb'].setValue(this.editData.sitioWeb);
  //     this.formSubscriber.controls['fundacion'].setValue(this.editData.fundacion);
  //     this.formSubscriber.controls['entrenador'].setValue(this.editData.entrenador);
  //     this.formSubscriber.controls['capacidad'].setValue(this.editData.capacidad);
  //     this.formSubscriber.controls['valor'].setValue(this.editData.valor);
  //   }
  // }
  // add() {
  //   if (!this.editData) {
  //     if (this.formSubscriber.valid) {
  //       this.api.postTeam(this.formSubscriber.value).subscribe({
  //         next: (res) => {
  //           Swal.fire('Agregado con exito');
  //           this.formSubscriber.reset();
  //           this.dialogRef.close();
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 2000);
  //         },
  //         error: () => {
  //           alert('Error, no se agregó');
  //         },
  //       });
  //     }
  //   } else {
  //     this.actualizar();
  //   }
  // }
  // actualizar() {
  //   this.api.updateTeam(this.formSubscriber.value, this.editData.id).subscribe({
  //     next: (res) => {
  //       Swal.fire('Editado con exito');
  //       this.formSubscriber.reset();
  //       this.dialogRef.close('update');
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 2000);
  //     },
  //     error: () => {
  //       alert('Error, no se agregó');
  //     },
  //   });
  // }

}
