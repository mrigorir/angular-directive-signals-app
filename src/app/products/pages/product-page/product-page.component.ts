import { group } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  private fb = inject(FormBuilder); // otra forma de usar el FormBuilder sin depender del constructor, pero es lo mismo
  color: string = 'green';

  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16 | 0).toString(16));
  }
}
