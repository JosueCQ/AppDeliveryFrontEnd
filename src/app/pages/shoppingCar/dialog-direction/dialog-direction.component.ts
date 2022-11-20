import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Departamento {
  value: string;
  viewValue: string;
}

interface Provincia {
  value: string;
  viewValue: string;
}

interface Distrito {
  value: string;
  viewValue: string;
}

interface Tipo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-direction',
  templateUrl: './dialog-direction.component.html',
  styleUrls: ['./dialog-direction.component.css']
})
export class DialogDirectionComponent implements OnInit {

  envio: Number = 0;
  
  departmentsControl = new FormControl<Departamento | null>(null, Validators.required);
  departamentos: Departamento[] = [
    {value: 'Arequipa-0', viewValue: 'Arequipa'},
    {value: 'Cajamarca-1', viewValue: 'Cajamarca'},
    {value: 'Callao-2', viewValue: 'Callao'},
    {value: 'Cusco-3', viewValue: 'Cusco'},
    {value: 'Ica-3', viewValue: 'Ica'},
    {value: 'La Libertad-4', viewValue: 'La Libertad'},
    {value: 'Lima-5', viewValue: 'Lima'},
    {value: 'Piura-6', viewValue: 'Piura'},
    {value: 'Puno-7', viewValue: 'Puno'},
    {value: 'Tacna-8', viewValue: 'Tacna'},
  ];

  typeControl = new FormControl<Tipo | null>(null, Validators.required);
  tipos: Tipo[] = [
    {value: 'Casa-0', viewValue: 'Casa'},
    {value: 'Departamento-1', viewValue: 'Departamento'},
    {value: 'Oficina-2', viewValue: 'Oficina'},
  ];


  constructor(public dialogRef: MatDialogRef<DialogDirectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

  calculark(){
    
    this.data.envio = 100;
    //this.envio= 100;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
