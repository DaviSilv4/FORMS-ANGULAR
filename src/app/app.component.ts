import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicFormFieldModel } from './model/dynamicform.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  title!: DynamicFormFieldModel

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      dynamicFild: []
    })

    this.title = {
      label: 'Minha Label',
      type: 'SELECIONE'
    }
  }
}
